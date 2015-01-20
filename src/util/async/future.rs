use super::{Async, Stream, AsyncResult, AsyncError};
use super::stream;
use super::core::{Core, OptionCore, FromCore};
use std::fmt;

/* TODO:
 * - Add AsyncVal trait that impls all the various monadic fns
 */

#[unsafe_no_drop_flag]
pub struct Future<T: Send, E: Send> {
    core: OptionCore<T, E, Complete<T, E>>,
}

impl<T: Send, E: Send> Future<T, E> {
    pub fn pair() -> (Future<T, E>, Complete<T, E>) {
        let core = Core::new();
        let future = Future { core: OptionCore::new(core.clone()) };

        (future, Complete { core: OptionCore::new(core) })
    }

    /// Returns a future that will immediately succeed with the supplied value.
    ///
    /// ```
    /// use syncbox::util::async::*;
    ///
    /// Future::<i32, ()>::of(1).and_then(|val| {
    ///     assert!(val == 1);
    ///     Ok(val + 1)
    /// });
    /// ```
    pub fn of(val: T) -> Future<T, E> {
        Future { core: OptionCore::new(Core::with_value(Ok(val))) }
    }

    /// Returns a future that will immediately fail with the supplied error.
    ///
    /// ```
    /// use syncbox::util::async::*;
    /// use syncbox::util::async::AsyncError::*;
    ///
    /// Future::error("hi").or_else(|err| {
    ///     match err {
    ///         ExecutionError(e) => assert!(e == "hi"),
    ///         CancellationError => unreachable!()
    ///     }
    ///
    ///     Ok(())
    /// });
    /// ```
    pub fn error(err: E) -> Future<T, E> {
        let core = Core::with_value(Err(AsyncError::wrap(err)));
        Future { core: OptionCore::new(core) }
    }

    /// Returns a future that will immediately be cancelled
    ///
    /// ```
    /// use syncbox::util::async::*;
    /// use syncbox::util::async::AsyncError::*;
    ///
    /// Future::<&'static str, ()>::canceled().or_else(|err| {
    ///     match err {
    ///         ExecutionError(e) => unreachable!(),
    ///         CancellationError => assert!(true)
    ///     }
    ///
    ///     Ok("handled")
    /// });
    /// ```
    pub fn canceled() -> Future<T, E> {
        let core = Core::with_value(Err(AsyncError::canceled()));
        Future { core: OptionCore::new(core) }
    }

    /// Returns a future that won't kick off its async action until
    /// a consumer registers interest.
    ///
    /// ```
    /// use syncbox::util::async::*;
    ///
    /// let post = Future::lazy(|| {
    ///     // Imagine a call to an HTTP lib, like so:
    ///     // http::get("/posts/1")
    ///     Ok("HTTP response")
    /// });
    ///
    /// // the HTTP request has not happened yet
    ///
    /// // later...
    ///
    /// post.and_then(|p| {
    ///     println!("{:?}", p);
    /// });
    /// // the HTTP request has now happened
    /// ```
    pub fn lazy<F, R>(f: F) -> Future<T, E>
        where F: FnOnce() -> R + Send,
              R: Async<T, E> {

        let (future, complete) = Future::pair();

        // Complete the future with the provided function once consumer
        // interest has been registered.
        complete.receive(move |:c: AsyncResult<Complete<T, E>, ()>| {
            if let Ok(c) = c {
                f().receive(move |res| {
                    match res {
                        Ok(v) => c.complete(v),
                        Err(_) => unimplemented!(),
                    }
                });
            }
        });

        future
    }

    pub fn receive<F: FnOnce(AsyncResult<T, E>) + Send>(mut self, f: F) {
        self.core.take().consumer_receive(f);
    }

    pub fn await(mut self) -> AsyncResult<T, E> {
        self.core.take().consumer_await()
    }

    /*
     *
     * ===== Computation Builders =====
     *
     */

    pub fn map<F: FnOnce(T) -> U + Send, U: Send>(self, _f: F) -> Future<U, E> {
        unimplemented!();
    }
}

impl<T: Send, E: Send> Future<Option<(T, Stream<T, E>)>, E> {
    /// An adapter that converts any future into a one-value stream
    pub fn as_stream(mut self) -> Stream<T, E> {
        stream::from_core(self.core.take())
    }
}

impl<T: Send, E: Send> Async<T, E> for Future<T, E> {
    fn receive<F: FnOnce(AsyncResult<T, E>) + Send>(self, f: F) {
        Future::receive(self, f);
    }
}

#[unsafe_destructor]
impl<T: Send, E: Send> Drop for Future<T, E> {
    fn drop(&mut self) {
        if self.core.is_some() {
            self.core.take().cancel();
        }
    }
}

/// An object that is used to fulfill or reject an associated Future.
///
/// ```
/// use syncbox::util::async::*;
/// use syncbox::util::async::AsyncError::*;
///
/// let (future, completer) = Future::<u32, &'static str>::pair();
///
/// future.and_then(|v| {
///     assert!(v == 1);
///     Ok(v + v)
/// });
///
/// completer.complete(1);
///
/// let (future, completer) = Future::<u32, &'static str>::pair();
/// completer.fail("failed");
///
/// future.or_else(|err| {
///     match err {
///         CancellationError => unreachable!(),
///         ExecutionError(err) => assert!(err == "failed")
///     }
///
///     Ok(123)
/// });
/// ```
#[unsafe_no_drop_flag]
pub struct Complete<T: Send, E: Send> {
    core: OptionCore<T, E, Complete<T, E>>,
}

impl<T: Send, E: Send> Complete<T, E> {
    /// Fulfill the associated promise with a value
    pub fn complete(mut self, val: T) {
        self.core.take().complete(Ok(val), true);
    }

    /// Reject the associated promise with an error. The error
    /// will be wrapped in an `ExecutionError`.
    pub fn fail(mut self, err: E) {
        self.core.take().complete(Err(AsyncError::wrap(err)), true);
    }

    pub fn receive<F: FnOnce(AsyncResult<Complete<T, E>, ()>) + Send>(mut self, f: F) {
        self.core.take().producer_receive(f);
    }

    pub fn await(mut self) -> AsyncResult<Complete<T, E>, ()> {
        self.core.take().producer_await()
    }
}

impl<T: Send, E: Send> FromCore<T, E> for Complete<T, E> {
    fn from_core(core: Core<T, E, Complete<T, E>>) -> Complete<T, E> {
        Complete { core: OptionCore::new(core) }
    }
}

#[unsafe_destructor]
impl<T: Send, E: Send> Drop for Complete<T, E> {
    fn drop(&mut self) {
        if self.core.is_some() {
            self.core.take().complete(Err(AsyncError::canceled()), true);
        }
    }
}

impl<T: Send, E: Send> fmt::Show for Complete<T, E> {
    fn fmt(&self, fmt: &mut fmt::Formatter) -> fmt::Result {
        write!(fmt, "Complete {{ ... }}")
    }
}