var searchIndex = {};
searchIndex['syncbox'] = {"items":[[0,"","syncbox","A collection of utilities for writing concurrent code."],[0,"util","",""],[1,"LinkedQueue","syncbox::util","A queue in which values are contained by a linked list."],[0,"async","","# Futures & Streams"],[1,"Future","syncbox::util::async",""],[1,"Complete","",""],[1,"Stream","",""],[1,"StreamIter","",""],[1,"Produce","",""],[2,"AsyncError","",""],[12,"ExecutionError","","",0],[12,"CancellationError","","",0],[3,"join","",""],[10,"pair","","",1],[10,"of","","Returns an immediately ready future containing the supplied value.",1],[10,"error","","Returns a future that will immediately fail with the supplied error.",1],[10,"canceled","","",1],[10,"lazy","","",1],[10,"receive","","",1],[10,"await","","",1],[10,"map","","",1],[10,"as_stream","","",1],[10,"receive","","",1],[10,"drop","","",1],[10,"complete","","",2],[10,"fail","","",2],[10,"receive","","",2],[10,"await","","",2],[10,"from_core","","",2],[10,"drop","","",2],[10,"fmt","","",2],[10,"pair","","",3],[10,"receive","","",3],[10,"await","","",3],[10,"iter","","",3],[10,"each","","",3],[10,"filter","","",3],[10,"map","","",3],[10,"reduce","","",3],[10,"take","","",3],[10,"take_while","","",3],[10,"receive","","",3],[10,"fmt","","",3],[10,"drop","","",3],[10,"send","","",4],[10,"done","","",4],[10,"fail","","",4],[10,"receive","","",4],[10,"from_core","","",4],[10,"fmt","","",4],[10,"drop","","",4],[10,"next","","",5],[10,"drop","","",5],[4,"AsyncResult","",""],[6,"ToJoin","",""],[9,"join","","",6],[6,"Async","",""],[9,"receive","","",7],[10,"handle","","",7],[10,"and","","If the future completes successfully, returns the complection of\n`next`.",7],[10,"and_then","","Also handles the Future::map case",7],[10,"or","","",7],[10,"or_else","","",7],[10,"catch","","",7],[10,"receive","","",8],[10,"wrap","","",0],[10,"canceled","","",0],[10,"is_cancellation","","",0],[10,"is_execution_error","","",0],[10,"unwrap","","",0],[10,"take","","",0],[10,"fmt","","",0],[10,"new","syncbox::util","",9],[10,"with_capacity","","",9],[10,"len","","",9],[10,"offer","","",9],[10,"put","","",9],[10,"poll","","",9],[10,"take","","Takes from the queue, blocking until there is an element available.",9],[10,"poll","","",9],[10,"take","","",9],[10,"clone","","",9],[6,"Consume","",""],[9,"poll","","",10],[9,"take","","",10],[0,"atomic","","Atomic types"],[10,"new","core::atomic","Creates a new `AtomicBool`.",11],[10,"load","","Loads a value from the bool.",11],[10,"store","","Stores a value into the bool.",11],[10,"swap","","Stores a value into the bool, returning the old value.",11],[10,"compare_and_swap","","Stores a value into the bool if the current value is the same as the expected value.",11],[10,"fetch_and","","Logical \"and\" with a boolean value.",11],[10,"fetch_nand","","Logical \"nand\" with a boolean value.",11],[10,"fetch_or","","Logical \"or\" with a boolean value.",11],[10,"fetch_xor","","Logical \"xor\" with a boolean value.",11],[10,"fmt","core::num","",12],[10,"eq","","",12],[10,"ne","","",12],[10,"ne","","",12],[10,"fmt","core::intrinsics","",13],[10,"assert_receiver_is_total_eq","","",13],[10,"eq","","",13],[10,"ne","","",13],[10,"ne","","",13],[10,"clone","","",13],[10,"clone_from","","",13],[10,"of","","Returns the `TypeId` of the type this generic function has been instantiated with",13],[10,"hash","","",13],[10,"fmt","core::nonzero","",14],[10,"partial_cmp","","",14],[10,"lt","","",14],[10,"le","","",14],[10,"gt","","",14],[10,"ge","","",14],[10,"lt","","",14],[10,"le","","",14],[10,"gt","","",14],[10,"ge","","",14],[10,"cmp","","",14],[10,"eq","","",14],[10,"ne","","",14],[10,"ne","","",14],[10,"assert_receiver_is_total_eq","","",14],[10,"clone","","",14],[10,"clone_from","","",14],[10,"new","","Create an instance of NonZero with the provided value.\nYou must indeed ensure that the value is actually \"non-zero\".",14],[10,"deref","","",14],[10,"null","core::ptr","Returns a null Unique.",15],[10,"offset","","Return an (unsafe) pointer into the memory owned by `self`.",15],[10,"cmp","core::marker","",16],[10,"partial_cmp","","",16],[10,"lt","","",16],[10,"le","","",16],[10,"gt","","",16],[10,"ge","","",16],[10,"lt","","",16],[10,"le","","",16],[10,"gt","","",16],[10,"ge","","",16],[10,"assert_receiver_is_total_eq","","",16],[10,"eq","","",16],[10,"ne","","",16],[10,"ne","","",16],[10,"clone","","",16],[10,"clone_from","","",16],[10,"cmp","","",17],[10,"partial_cmp","","",17],[10,"lt","","",17],[10,"le","","",17],[10,"gt","","",17],[10,"ge","","",17],[10,"lt","","",17],[10,"le","","",17],[10,"gt","","",17],[10,"ge","","",17],[10,"assert_receiver_is_total_eq","","",17],[10,"eq","","",17],[10,"ne","","",17],[10,"ne","","",17],[10,"clone","","",17],[10,"clone_from","","",17],[10,"cmp","","",18],[10,"partial_cmp","","",18],[10,"lt","","",18],[10,"le","","",18],[10,"gt","","",18],[10,"ge","","",18],[10,"lt","","",18],[10,"le","","",18],[10,"gt","","",18],[10,"ge","","",18],[10,"assert_receiver_is_total_eq","","",18],[10,"eq","","",18],[10,"ne","","",18],[10,"ne","","",18],[10,"clone","","",18],[10,"clone_from","","",18],[10,"cmp","","",19],[10,"partial_cmp","","",19],[10,"lt","","",19],[10,"le","","",19],[10,"gt","","",19],[10,"ge","","",19],[10,"lt","","",19],[10,"le","","",19],[10,"gt","","",19],[10,"ge","","",19],[10,"assert_receiver_is_total_eq","","",19],[10,"eq","","",19],[10,"ne","","",19],[10,"ne","","",19],[10,"clone","","",19],[10,"clone_from","","",19],[10,"cmp","","",20],[10,"partial_cmp","","",20],[10,"lt","","",20],[10,"le","","",20],[10,"gt","","",20],[10,"ge","","",20],[10,"lt","","",20],[10,"le","","",20],[10,"gt","","",20],[10,"ge","","",20],[10,"assert_receiver_is_total_eq","","",20],[10,"eq","","",20],[10,"ne","","",20],[10,"ne","","",20],[10,"clone","","",20],[10,"clone_from","","",20],[10,"cmp","","",21],[10,"partial_cmp","","",21],[10,"lt","","",21],[10,"le","","",21],[10,"gt","","",21],[10,"ge","","",21],[10,"lt","","",21],[10,"le","","",21],[10,"gt","","",21],[10,"ge","","",21],[10,"assert_receiver_is_total_eq","","",21],[10,"eq","","",21],[10,"ne","","",21],[10,"ne","","",21],[10,"clone","","",21],[10,"clone_from","","",21],[10,"cmp","","",22],[10,"partial_cmp","","",22],[10,"lt","","",22],[10,"le","","",22],[10,"gt","","",22],[10,"ge","","",22],[10,"lt","","",22],[10,"le","","",22],[10,"gt","","",22],[10,"ge","","",22],[10,"assert_receiver_is_total_eq","","",22],[10,"eq","","",22],[10,"ne","","",22],[10,"ne","","",22],[10,"clone","","",22],[10,"clone_from","","",22],[10,"cmp","","",23],[10,"partial_cmp","","",23],[10,"lt","","",23],[10,"le","","",23],[10,"gt","","",23],[10,"ge","","",23],[10,"lt","","",23],[10,"le","","",23],[10,"gt","","",23],[10,"ge","","",23],[10,"assert_receiver_is_total_eq","","",23],[10,"eq","","",23],[10,"ne","","",23],[10,"ne","","",23],[10,"clone","","",23],[10,"clone_from","","",23],[10,"cmp","","",24],[10,"partial_cmp","","",24],[10,"lt","","",24],[10,"le","","",24],[10,"gt","","",24],[10,"ge","","",24],[10,"lt","","",24],[10,"le","","",24],[10,"gt","","",24],[10,"ge","","",24],[10,"assert_receiver_is_total_eq","","",24],[10,"eq","","",24],[10,"ne","","",24],[10,"ne","","",24],[10,"clone","","",24],[10,"clone_from","","",24],[10,"cmp","","",25],[10,"partial_cmp","","",25],[10,"lt","","",25],[10,"le","","",25],[10,"gt","","",25],[10,"ge","","",25],[10,"lt","","",25],[10,"le","","",25],[10,"gt","","",25],[10,"ge","","",25],[10,"assert_receiver_is_total_eq","","",25],[10,"eq","","",25],[10,"ne","","",25],[10,"ne","","",25],[10,"clone","","",25],[10,"clone_from","","",25],[10,"assert_receiver_is_total_eq","core::ops","",26],[10,"eq","","",26],[10,"ne","","",26],[10,"ne","","",26],[10,"fmt","","",26],[10,"assert_receiver_is_total_eq","","",27],[10,"eq","","",27],[10,"ne","","",27],[10,"ne","","",27],[10,"next","","",27],[10,"size_hint","","",27],[10,"size_hint","","",27],[10,"next_back","","",27],[10,"len","","",27],[10,"fmt","","",27],[10,"assert_receiver_is_total_eq","","",28],[10,"eq","","",28],[10,"ne","","",28],[10,"ne","","",28],[10,"next","","",28],[10,"size_hint","","",28],[10,"fmt","","",28],[10,"assert_receiver_is_total_eq","","",29],[10,"eq","","",29],[10,"ne","","",29],[10,"ne","","",29],[10,"fmt","","",29],[10,"fmt","core::cmp","",30],[10,"eq","","",30],[10,"ne","","",30],[10,"ne","","",30],[10,"clone","","",30],[10,"clone_from","","",30],[10,"reverse","","Reverse the `Ordering`, so that `Less` becomes `Greater` and\nvice versa.",30],[10,"assert_receiver_is_total_eq","","",30],[10,"cmp","","",30],[10,"partial_cmp","","",30],[10,"lt","","",30],[10,"le","","",30],[10,"gt","","",30],[10,"ge","","",30],[10,"is","syncbox::util","Returns true if the boxed type is the same as `T`",31],[10,"downcast_ref","","Returns some reference to the boxed value if it is of type `T`, or\n`None` if it isn't.",31],[10,"downcast_mut","","Returns some mutable reference to the boxed value if it is of type `T`, or\n`None` if it isn't.",31],[10,"new","core::atomic","Creates a new `AtomicIsize`.",32],[10,"load","","Loads a value from the isize.",32],[10,"store","","Stores a value into the isize.",32],[10,"swap","","Stores a value into the isize, returning the old value.",32],[10,"compare_and_swap","","Stores a value into the isize if the current value is the same as the expected value.",32],[10,"fetch_add","","Add an isize to the current value, returning the previous value.",32],[10,"fetch_sub","","Subtract an isize from the current value, returning the previous value.",32],[10,"fetch_and","","Bitwise and with the current isize, returning the previous value.",32],[10,"fetch_or","","Bitwise or with the current isize, returning the previous value.",32],[10,"fetch_xor","","Bitwise xor with the current isize, returning the previous value.",32],[10,"new","","Creates a new `AtomicUsize`.",33],[10,"load","","Loads a value from the usize.",33],[10,"store","","Stores a value into the usize.",33],[10,"swap","","Stores a value into the usize, returning the old value.",33],[10,"compare_and_swap","","Stores a value into the usize if the current value is the same as the expected value.",33],[10,"fetch_add","","Add to the current usize, returning the previous value.",33],[10,"fetch_sub","","Subtract from the current usize, returning the previous value.",33],[10,"fetch_and","","Bitwise and with the current usize, returning the previous value.",33],[10,"fetch_or","","Bitwise or with the current usize, returning the previous value.",33],[10,"fetch_xor","","Bitwise xor with the current usize, returning the previous value.",33],[10,"new","","Creates a new `AtomicPtr`.",34],[10,"load","","Loads a value from the pointer.",34],[10,"store","","Stores a value into the pointer.",34],[10,"swap","","Stores a value into the pointer, returning the old value.",34],[10,"compare_and_swap","","Stores a value into the pointer if the current value is the same as the expected value.",34],[10,"new","","",35],[10,"load","","",35],[10,"store","","",35],[10,"swap","","",35],[10,"compare_and_swap","","",35],[10,"fetch_add","","",35],[10,"fetch_sub","","",35],[10,"fetch_and","","",35],[10,"fetch_or","","",35],[10,"fetch_xor","","",35],[10,"new","","",36],[10,"load","","",36],[10,"store","","",36],[10,"swap","","",36],[10,"compare_and_swap","","",36],[10,"fetch_add","","",36],[10,"fetch_sub","","",36],[10,"fetch_and","","",36],[10,"fetch_or","","",36],[10,"fetch_xor","","",36],[10,"into_cow","core::borrow","",37],[10,"fmt","","",37],[10,"clone","","",37],[10,"clone_from","","",37],[10,"to_mut","","Acquire a mutable reference to the owned form of the data.",37],[10,"into_owned","","Extract the owned data.",37],[10,"is_borrowed","","Returns true if this `Cow` wraps a borrowed value",37],[10,"is_owned","","Returns true if this `Cow` wraps an owned value",37],[10,"deref","","",37],[10,"assert_receiver_is_total_eq","","",37],[10,"cmp","","",37],[10,"eq","","",37],[10,"ne","","",37],[10,"partial_cmp","","",37],[10,"lt","","",37],[10,"le","","",37],[10,"gt","","",37],[10,"ge","","",37],[10,"fmt","","",37],[10,"new","core::cell","Creates a new `Cell` containing the given value.",38],[10,"get","","Returns a copy of the contained value.",38],[10,"set","","Sets the contained value.",38],[10,"as_unsafe_cell","","Get a reference to the underlying `UnsafeCell`.",38],[10,"clone","","",38],[10,"clone_from","","",38],[10,"default","","",38],[10,"eq","","",38],[10,"ne","","",38],[10,"new","","Create a new `RefCell` containing `value`",39],[10,"into_inner","","Consumes the `RefCell`, returning the wrapped value.",39],[10,"try_borrow","","Attempts to immutably borrow the wrapped value.",39],[10,"borrow","","Immutably borrows the wrapped value.",39],[10,"try_borrow_mut","","Mutably borrows the wrapped value.",39],[10,"borrow_mut","","Mutably borrows the wrapped value.",39],[10,"as_unsafe_cell","","Get a reference to the underlying `UnsafeCell`.",39],[10,"clone","","",39],[10,"clone_from","","",39],[10,"default","","",39],[10,"eq","","",39],[10,"ne","","",39],[10,"drop","","",40],[10,"clone","","",40],[10,"clone_from","","",40],[10,"deref","","",41],[10,"drop","","",42],[10,"deref","","",43],[10,"deref_mut","","",43],[10,"new","","Construct a new instance of `UnsafeCell` which will wrap the specified\nvalue.",44],[10,"get","","Gets a mutable pointer to the wrapped value.",44],[10,"into_inner","","Unwraps the value",44],[10,"clone","core::char","",45],[10,"clone_from","","",45],[10,"clone","","",46],[10,"clone_from","","",46],[10,"next","","",45],[10,"size_hint","","",45],[10,"clone","","",47],[10,"clone_from","","",47],[10,"clone","","",48],[10,"clone_from","","",48],[10,"next","","",47],[10,"size_hint","","",47],[10,"drop","core::finally","",49],[10,"len","core::iter","",50],[10,"len","","",51],[10,"len","","",52],[10,"len","","",53],[10,"len","","",54],[10,"clone","","",52],[10,"clone_from","","",52],[10,"next","","",52],[10,"size_hint","","",52],[10,"size_hint","","",52],[10,"next_back","","",52],[10,"indexable","","",52],[10,"idx","","",52],[10,"next","","",55],[10,"size_hint","","",55],[10,"size_hint","","",55],[10,"next_back","","",55],[10,"fmt","","",56],[10,"eq","","",56],[10,"ne","","",56],[10,"ne","","",56],[10,"clone","","",56],[10,"clone_from","","",56],[10,"into_option","","`into_option` creates an `Option` of type `(T,T)`. The returned `Option` has variant\n`None` if and only if the `MinMaxResult` has variant `NoElements`. Otherwise variant\n`Some(x,y)` is returned where `x <= y`. If `MinMaxResult` has variant `OneElement(x)`,\nperforming this operation will make one clone of `x`.",56],[10,"clone","","",57],[10,"clone_from","","",57],[10,"next","","",57],[10,"size_hint","","",57],[10,"size_hint","","",57],[10,"next_back","","",57],[10,"len","","",57],[10,"clone","","",58],[10,"clone_from","","",58],[10,"next","","",58],[10,"size_hint","","",58],[10,"size_hint","","",58],[10,"indexable","","",58],[10,"idx","","",58],[10,"clone","","",59],[10,"clone_from","","",59],[10,"next","","",59],[10,"size_hint","","",59],[10,"size_hint","","",59],[10,"next_back","","",59],[10,"indexable","","",59],[10,"idx","","",59],[10,"clone","","",54],[10,"clone_from","","",54],[10,"next","","",54],[10,"size_hint","","",54],[10,"size_hint","","",54],[10,"next_back","","",54],[10,"indexable","","",54],[10,"idx","","",54],[10,"clone","","",53],[10,"clone_from","","",53],[10,"next","","",53],[10,"size_hint","","",53],[10,"size_hint","","",53],[10,"next_back","","",53],[10,"indexable","","",53],[10,"idx","","",53],[10,"clone","","",60],[10,"clone_from","","",60],[10,"next","","",60],[10,"size_hint","","",60],[10,"size_hint","","",60],[10,"next_back","","",60],[10,"clone","","",61],[10,"clone_from","","",61],[10,"next","","",61],[10,"size_hint","","",61],[10,"size_hint","","",61],[10,"next_back","","",61],[10,"clone","","",50],[10,"clone_from","","",50],[10,"next","","",50],[10,"size_hint","","",50],[10,"size_hint","","",50],[10,"next_back","","",50],[10,"indexable","","",50],[10,"idx","","",50],[10,"next","","",62],[10,"size_hint","","",62],[10,"size_hint","","",62],[10,"peek","","Return a reference to the next element of the iterator with out advancing it,\nor None if the iterator is exhausted.",62],[10,"is_empty","","Check whether peekable iterator is empty or not.",62],[10,"clone","","",63],[10,"clone_from","","",63],[10,"next","","",63],[10,"size_hint","","",63],[10,"size_hint","","",63],[10,"clone","","",64],[10,"clone_from","","",64],[10,"next","","",64],[10,"size_hint","","",64],[10,"size_hint","","",64],[10,"clone","","",65],[10,"clone_from","","",65],[10,"next","","",65],[10,"size_hint","","",65],[10,"size_hint","","",65],[10,"indexable","","",65],[10,"idx","","",65],[10,"clone","","",66],[10,"clone_from","","",66],[10,"next","","",66],[10,"size_hint","","",66],[10,"size_hint","","",66],[10,"indexable","","",66],[10,"idx","","",66],[10,"clone","","",67],[10,"clone_from","","",67],[10,"next","","",67],[10,"size_hint","","",67],[10,"size_hint","","",67],[10,"clone","","",68],[10,"clone_from","","",68],[10,"next","","",68],[10,"size_hint","","",68],[10,"size_hint","","",68],[10,"next_back","","",68],[10,"clone","","",69],[10,"clone_from","","",69],[10,"next","","",69],[10,"size_hint","","",69],[10,"size_hint","","",69],[10,"next_back","","",69],[10,"indexable","","",69],[10,"idx","","",69],[10,"reset_fuse","","Resets the fuse such that the next call to .next() or .next_back() will\ncall the underlying iterator again even if it previously returned None.",69],[10,"clone","","",51],[10,"clone_from","","",51],[10,"next","","",51],[10,"size_hint","","",51],[10,"size_hint","","",51],[10,"next_back","","",51],[10,"indexable","","",51],[10,"idx","","",51],[10,"clone","","",70],[10,"clone_from","","",70],[10,"new","","Creates a new iterator with the specified closure as the \"iterator\nfunction\" and an initial state to eventually pass to the closure",70],[10,"next","","",70],[10,"size_hint","","",70],[10,"size_hint","","",70],[10,"clone","","",71],[10,"clone_from","","",71],[10,"next","","",71],[10,"size_hint","","",71],[10,"size_hint","","",71],[10,"clone","","",72],[10,"clone_from","","",72],[10,"next","","",72],[10,"size_hint","","",72],[10,"size_hint","","",72],[10,"next_back","","",72],[10,"clone","","",73],[10,"clone_from","","",73],[10,"next","","",73],[10,"size_hint","","",73],[10,"size_hint","","",73],[10,"next_back","","",73],[10,"clone","","",74],[10,"clone_from","","",74],[10,"next","","",74],[10,"size_hint","","",74],[10,"clone","","",75],[10,"clone_from","","",75],[10,"next","","",75],[10,"size_hint","","",75],[10,"clone","","",76],[10,"clone_from","","",76],[10,"next","","",76],[10,"size_hint","","",76],[10,"size_hint","","",76],[10,"next_back","","",76],[10,"indexable","","",76],[10,"idx","","",76],[10,"hash","core::option","",77],[10,"fmt","","",77],[10,"cmp","","",77],[10,"assert_receiver_is_total_eq","","",77],[10,"partial_cmp","","",77],[10,"lt","","",77],[10,"le","","",77],[10,"gt","","",77],[10,"ge","","",77],[10,"lt","","",77],[10,"le","","",77],[10,"gt","","",77],[10,"ge","","",77],[10,"eq","","",77],[10,"ne","","",77],[10,"ne","","",77],[10,"clone","","",77],[10,"clone_from","","",77],[10,"is_some","","Returns `true` if the option is a `Some` value",77],[10,"is_none","","Returns `true` if the option is a `None` value",77],[10,"as_ref","","Convert from `Option<T>` to `Option<&T>`",77],[10,"as_mut","","Convert from `Option<T>` to `Option<&mut T>`",77],[10,"as_mut_slice","","Convert from `Option<T>` to `&mut [T]` (without copying)",77],[10,"expect","","Unwraps an option, yielding the content of a `Some`",77],[10,"unwrap","","Returns the inner `T` of a `Some(T)`.",77],[10,"unwrap_or","","Returns the contained value or a default.",77],[10,"unwrap_or_else","","Returns the contained value or computes it from a closure.",77],[10,"map","","Maps an `Option<T>` to `Option<U>` by applying a function to a contained value",77],[10,"map_or","","Applies a function to the contained value or returns a default.",77],[10,"map_or_else","","Applies a function to the contained value or computes a default.",77],[10,"ok_or","","Transforms the `Option<T>` into a `Result<T, E>`, mapping `Some(v)` to\n`Ok(v)` and `None` to `Err(err)`.",77],[10,"ok_or_else","","Transforms the `Option<T>` into a `Result<T, E>`, mapping `Some(v)` to\n`Ok(v)` and `None` to `Err(err())`.",77],[10,"iter","","Returns an iterator over the possibly contained value.",77],[10,"iter_mut","","Returns a mutable iterator over the possibly contained value.",77],[10,"into_iter","","Returns a consuming iterator over the possibly contained value.",77],[10,"and","","Returns `None` if the option is `None`, otherwise returns `optb`.",77],[10,"and_then","","Returns `None` if the option is `None`, otherwise calls `f` with the\nwrapped value and returns the result.",77],[10,"or","","Returns the option if it contains a value, otherwise returns `optb`.",77],[10,"or_else","","Returns the option if it contains a value, otherwise calls `f` and\nreturns the result.",77],[10,"take","","Takes the value out of the option, leaving a `None` in its place.",77],[10,"cloned","","Maps an Option<D> to an Option<T> by dereffing and cloning the contents of the Option.\nUseful for converting an Option<&T> to an Option<T>.",77],[10,"unwrap_or_default","","Returns the contained value or a default",77],[10,"as_slice","","Convert from `Option<T>` to `&[T]` (without copying)",77],[10,"default","","",77],[10,"clone","","",78],[10,"clone_from","","",78],[10,"next","","",78],[10,"size_hint","","",78],[10,"size_hint","","",78],[10,"next_back","","",78],[10,"len","","",78],[10,"next","","",79],[10,"size_hint","","",79],[10,"size_hint","","",79],[10,"next_back","","",79],[10,"len","","",79],[10,"clone","","",79],[10,"clone_from","","",79],[10,"next","","",80],[10,"size_hint","","",80],[10,"size_hint","","",80],[10,"next_back","","",80],[10,"len","","",80],[10,"next","","",81],[10,"size_hint","","",81],[10,"size_hint","","",81],[10,"next_back","","",81],[10,"len","","",81],[10,"from_iter","","Takes each element in the `Iterator`: if it is `None`, no further\nelements are taken, and the `None` is returned. Should no `None` occur, a\ncontainer with the values of each `Option` is returned.",77],[10,"hash","core::result","",82],[10,"fmt","","",82],[10,"cmp","","",82],[10,"assert_receiver_is_total_eq","","",82],[10,"partial_cmp","","",82],[10,"lt","","",82],[10,"le","","",82],[10,"gt","","",82],[10,"ge","","",82],[10,"lt","","",82],[10,"le","","",82],[10,"gt","","",82],[10,"ge","","",82],[10,"eq","","",82],[10,"ne","","",82],[10,"ne","","",82],[10,"clone","","",82],[10,"clone_from","","",82],[10,"is_ok","","Returns true if the result is `Ok`",82],[10,"is_err","","Returns true if the result is `Err`",82],[10,"ok","","Convert from `Result<T, E>` to `Option<T>`",82],[10,"err","","Convert from `Result<T, E>` to `Option<E>`",82],[10,"as_ref","","Convert from `Result<T, E>` to `Result<&T, &E>`",82],[10,"as_mut","","Convert from `Result<T, E>` to `Result<&mut T, &mut E>`",82],[10,"as_mut_slice","","Convert from `Result<T, E>` to `&mut [T]` (without copying)",82],[10,"map","","Maps a `Result<T, E>` to `Result<U, E>` by applying a function to an\ncontained `Ok` value, leaving an `Err` value untouched.",82],[10,"map_err","","Maps a `Result<T, E>` to `Result<T, F>` by applying a function to an\ncontained `Err` value, leaving an `Ok` value untouched.",82],[10,"iter","","Returns an iterator over the possibly contained value.",82],[10,"iter_mut","","Returns a mutable iterator over the possibly contained value.",82],[10,"into_iter","","Returns a consuming iterator over the possibly contained value.",82],[10,"and","","Returns `res` if the result is `Ok`, otherwise returns the `Err` value of `self`.",82],[10,"and_then","","Calls `op` if the result is `Ok`, otherwise returns the `Err` value of `self`.",82],[10,"or","","Returns `res` if the result is `Err`, otherwise returns the `Ok` value of `self`.",82],[10,"or_else","","Calls `op` if the result is `Err`, otherwise returns the `Ok` value of `self`.",82],[10,"unwrap_or","","Unwraps a result, yielding the content of an `Ok`.\nElse it returns `optb`.",82],[10,"unwrap_or_else","","Unwraps a result, yielding the content of an `Ok`.\nIf the value is an `Err` then it calls `op` with its value.",82],[10,"unwrap","","Unwraps a result, yielding the content of an `Ok`.",82],[10,"unwrap_err","","Unwraps a result, yielding the content of an `Err`.",82],[10,"as_slice","","Convert from `Result<T, E>` to `&[T]` (without copying)",82],[10,"next","","",83],[10,"size_hint","","",83],[10,"size_hint","","",83],[10,"next_back","","",83],[10,"len","","",83],[10,"clone","","",83],[10,"clone_from","","",83],[10,"next","","",84],[10,"size_hint","","",84],[10,"size_hint","","",84],[10,"next_back","","",84],[10,"len","","",84],[10,"next","","",85],[10,"size_hint","","",85],[10,"size_hint","","",85],[10,"next_back","","",85],[10,"len","","",85],[10,"from_iter","","Takes each element in the `Iterator`: if it is an `Err`, no further\nelements are taken, and the `Err` is returned. Should no `Err` occur, a\ncontainer with the values of each `Result` is returned.",82],[10,"fmt","core::simd","",86],[10,"fmt","","",87],[10,"fmt","","",88],[10,"fmt","","",89],[10,"fmt","","",90],[10,"fmt","","",91],[10,"fmt","","",92],[10,"fmt","","",93],[10,"fmt","","",94],[10,"fmt","","",95],[10,"index","core::slice","",96],[10,"index","","",96],[10,"index","","",96],[10,"index","","",96],[10,"as_slice","","View the underlying data as a subslice of the original data.",96],[10,"next","","",96],[10,"size_hint","","",96],[10,"size_hint","","",96],[10,"next_back","","",96],[10,"len","","",96],[10,"clone","","",96],[10,"clone_from","","",96],[10,"indexable","","",96],[10,"idx","","",96],[10,"index","","",97],[10,"index","","",97],[10,"index","","",97],[10,"index","","",97],[10,"index_mut","","",97],[10,"index_mut","","",97],[10,"index_mut","","",97],[10,"index_mut","","",97],[10,"into_slice","","View the underlying data as a subslice of the original data.",97],[10,"next","","",97],[10,"size_hint","","",97],[10,"size_hint","","",97],[10,"next_back","","",97],[10,"len","","",97],[10,"clone","","",98],[10,"clone_from","","",98],[10,"next","","",98],[10,"size_hint","","",98],[10,"size_hint","","",98],[10,"next_back","","",98],[10,"finish","","",98],[10,"finish","","",99],[10,"next","","",99],[10,"size_hint","","",99],[10,"size_hint","","",99],[10,"next_back","","",99],[10,"next","","",100],[10,"size_hint","","",100],[10,"size_hint","","",100],[10,"next","","",101],[10,"size_hint","","",101],[10,"size_hint","","",101],[10,"next","","",102],[10,"size_hint","","",102],[10,"size_hint","","",102],[10,"next","","",103],[10,"size_hint","","",103],[10,"size_hint","","",103],[10,"next","","",104],[10,"size_hint","","",104],[10,"size_hint","","",104],[10,"clone","","",105],[10,"clone_from","","",105],[10,"next","","",105],[10,"size_hint","","",105],[10,"size_hint","","",105],[10,"clone","","",106],[10,"clone_from","","",106],[10,"next","","",106],[10,"size_hint","","",106],[10,"size_hint","","",106],[10,"next_back","","",106],[10,"indexable","","",106],[10,"idx","","",106],[10,"next","","",107],[10,"size_hint","","",107],[10,"size_hint","","",107],[10,"next_back","","",107],[10,"fmt","core::str","",108],[10,"clone","","",108],[10,"clone_from","","",108],[10,"eq","","",108],[10,"ne","","",108],[10,"ne","","",108],[10,"assert_receiver_is_total_eq","","",108],[10,"clone","","",109],[10,"clone_from","","",109],[10,"next","","",109],[10,"size_hint","","",109],[10,"size_hint","","",109],[10,"next_back","","",109],[10,"clone","","",110],[10,"clone_from","","",110],[10,"next","","",110],[10,"size_hint","","",110],[10,"size_hint","","",110],[10,"next_back","","",110],[10,"clone","","",111],[10,"clone_from","","",111],[10,"next","","",111],[10,"size_hint","","",111],[10,"size_hint","","",111],[10,"next_back","","",111],[10,"len","","",111],[10,"len","","",111],[10,"clone","","",112],[10,"clone_from","","",112],[10,"call","","",112],[10,"clone","","",113],[10,"clone_from","","",113],[10,"clone","","",114],[10,"clone_from","","",114],[10,"next","","",113],[10,"size_hint","","",113],[10,"next_back","","",113],[10,"next","","",114],[10,"size_hint","","",114],[10,"clone","","",115],[10,"clone_from","","",115],[10,"clone","","",116],[10,"clone_from","","",116],[10,"clone","","",117],[10,"clone_from","","",117],[10,"clone","","",118],[10,"clone_from","","",118],[10,"clone","","",119],[10,"clone_from","","",119],[10,"next","","",118],[10,"size_hint","","",118],[10,"next","","",119],[10,"size_hint","","",119],[10,"clone","","",120],[10,"clone_from","","",120],[10,"next","","",120],[10,"size_hint","","",120],[10,"size_hint","","",120],[10,"next_back","","",120],[10,"clone","","",121],[10,"clone_from","","",121],[10,"next","","",121],[10,"size_hint","","",121],[10,"size_hint","","",121],[10,"next_back","","",121],[10,"clone","","",122],[10,"clone_from","","",122],[10,"next","","",122],[10,"size_hint","","",122],[10,"size_hint","","",122],[10,"clone","","",123],[10,"clone_from","","",123],[10,"next","","",123],[10,"size_hint","","",123],[10,"size_hint","","",123],[10,"next","","",124],[10,"size_hint","","",124],[10,"size_hint","","",124],[10,"next_back","","",124],[10,"next","","",125],[10,"size_hint","","",125],[10,"size_hint","","",125],[10,"next_back","","",125],[10,"new","core::hash::sip","Creates a new `SipHasher` with the two initial keys set to 0.",126],[10,"new_with_keys","","Creates a `SipHasher` that is keyed off the provided keys.",126],[10,"result","","Returns the computed hash.",126],[10,"write","","",126],[10,"reset","","",126],[10,"finish","","",126],[10,"clone","","",126],[10,"clone_from","","",126],[10,"default","","",126],[10,"hash","core::intrinsics","",13],[10,"hash","core::borrow","",37],[10,"eq","core::fmt::num","",127],[10,"ne","","",127],[10,"ne","","",127],[10,"clone","","",127],[10,"clone_from","","",127],[10,"eq","","",128],[10,"ne","","",128],[10,"ne","","",128],[10,"clone","","",128],[10,"clone_from","","",128],[10,"eq","","",129],[10,"ne","","",129],[10,"ne","","",129],[10,"clone","","",129],[10,"clone_from","","",129],[10,"eq","","",130],[10,"ne","","",130],[10,"ne","","",130],[10,"clone","","",130],[10,"clone_from","","",130],[10,"eq","","",131],[10,"ne","","",131],[10,"ne","","",131],[10,"clone","","",131],[10,"clone_from","","",131],[10,"eq","","",132],[10,"ne","","",132],[10,"ne","","",132],[10,"clone","","",132],[10,"clone_from","","",132],[10,"fmt","","",133],[10,"fmt","","",133],[10,"fmt","","",133],[10,"fmt","","",133],[10,"fmt","","",133],[10,"fmt","","",133],[10,"fmt","","",133],[10,"fmt","","",133],[10,"fmt","","",133],[10,"fmt","","",133],[10,"fmt","","",133],[10,"fmt","","",133],[10,"fmt","","",133],[10,"fmt","","",133],[10,"fmt","","",133],[10,"fmt","","",133],[10,"fmt","","",133],[10,"fmt","","",133],[10,"fmt","","",133],[10,"fmt","","",133],[10,"eq","core::fmt::rt","",134],[10,"ne","","",134],[10,"ne","","",134],[10,"fmt","core::fmt","",135],[10,"fmt","","",135],[10,"pad_integral","","Performs the correct padding for an integer which has already been\nemitted into a byte-array. The byte-array should *not* contain the sign\nfor the integer, that will be added by this method.",136],[10,"pad","","This function takes a string slice and emits it to the internal buffer\nafter applying the relevant formatting flags specified. The flags\nrecognized for generic strings are:",136],[10,"write_str","","Writes some data to the underlying buffer contained within this\nformatter.",136],[10,"write_fmt","","Writes some formatted information into this instance",136],[10,"flags","","Flags for formatting (packed version of rt::Flag)",136],[10,"fill","","Character used as 'fill' whenever there is alignment",136],[10,"align","","Flag indicating what form of alignment was requested",136],[10,"width","","Optionally specified integer width that the output should be",136],[10,"precision","","Optionally specified precision for numeric types",136],[10,"fmt","","",137],[10,"fmt","core::cell","",38],[10,"fmt","","",39],[10,"fmt","","",41],[10,"fmt","","",43],[10,"fmt","core::str","",108],[1,"AtomicBool","syncbox::util::atomic","A boolean type which can be safely shared between threads."],[1,"AtomicIsize","","A signed integer type which can be safely shared between threads."],[1,"AtomicUsize","","An unsigned integer type which can be safely shared between threads."],[1,"AtomicPtr","","A raw pointer type which can be safely shared between threads."],[2,"Ordering","","Atomic memory orderings"],[12,"Relaxed","","No ordering constraints, only atomic operations.",138],[12,"Release","","When coupled with a store, all previous writes become visible\nto another thread that performs a load with `Acquire` ordering\non the same value.",138],[12,"Acquire","","When coupled with a load, all subsequent loads will see data\nwritten before a store with `Release` ordering on the same value\nin another thread.",138],[12,"AcqRel","","When coupled with a load, uses `Acquire` ordering, and with a store\n`Release` ordering.",138],[12,"SeqCst","","Like `AcqRel` with the additional guarantee that all threads see all\nsequentially consistent operations in the same order.",138],[18,"ATOMIC_BOOL_INIT","","An `AtomicBool` initialized to `false`."],[18,"ATOMIC_ISIZE_INIT","","An `AtomicIsize` initialized to `0`."],[18,"ATOMIC_USIZE_INIT","","An `AtomicUsize` initialized to `0`."],[3,"fence","","An atomic fence."],[1,"AtomicInt","",""],[1,"AtomicUint","",""],[18,"ATOMIC_INT_INIT","",""],[18,"ATOMIC_UINT_INIT","",""]],"paths":[[2,"AsyncError"],[1,"Future"],[1,"Complete"],[1,"Stream"],[1,"Produce"],[1,"StreamIter"],[6,"ToJoin"],[6,"Async"],[4,"AsyncResult"],[1,"LinkedQueue"],[6,"Consume"],[1,"AtomicBool"],[2,"FpCategory"],[1,"TypeId"],[1,"NonZero"],[1,"Unique"],[1,"CovariantType"],[1,"ContravariantType"],[1,"InvariantType"],[1,"CovariantLifetime"],[1,"ContravariantLifetime"],[1,"InvariantLifetime"],[1,"NoSend"],[1,"NoCopy"],[1,"NoSync"],[1,"Managed"],[1,"FullRange"],[1,"Range"],[1,"RangeFrom"],[1,"RangeTo"],[2,"Ordering"],[6,"Any"],[1,"AtomicIsize"],[1,"AtomicUsize"],[1,"AtomicPtr"],[1,"AtomicInt"],[1,"AtomicUint"],[2,"Cow"],[1,"Cell"],[1,"RefCell"],[1,"BorrowRef"],[1,"Ref"],[1,"BorrowRefMut"],[1,"RefMut"],[1,"UnsafeCell"],[1,"EscapeUnicode"],[2,"EscapeUnicodeState"],[1,"EscapeDefault"],[2,"EscapeDefaultState"],[1,"Finallyalizer"],[1,"Enumerate"],[1,"Inspect"],[1,"Rev"],[1,"Map"],[1,"Zip"],[1,"ByRef"],[2,"MinMaxResult"],[1,"Cloned"],[1,"Cycle"],[1,"Chain"],[1,"Filter"],[1,"FilterMap"],[1,"Peekable"],[1,"SkipWhile"],[1,"TakeWhile"],[1,"Skip"],[1,"Take"],[1,"Scan"],[1,"FlatMap"],[1,"Fuse"],[1,"Unfold"],[1,"Counter"],[1,"Range"],[1,"RangeInclusive"],[1,"RangeStep"],[1,"RangeStepInclusive"],[1,"Repeat"],[2,"Option"],[1,"Item"],[1,"Iter"],[1,"IterMut"],[1,"IntoIter"],[2,"Result"],[1,"Iter"],[1,"IterMut"],[1,"IntoIter"],[1,"i8x16"],[1,"i16x8"],[1,"i32x4"],[1,"i64x2"],[1,"u8x16"],[1,"u16x8"],[1,"u32x4"],[1,"u64x2"],[1,"f32x4"],[1,"f64x2"],[1,"Iter"],[1,"IterMut"],[1,"Split"],[1,"SplitMut"],[1,"GenericSplitN"],[1,"SplitN"],[1,"RSplitN"],[1,"SplitNMut"],[1,"RSplitNMut"],[1,"Windows"],[1,"Chunks"],[1,"ChunksMut"],[2,"Utf8Error"],[1,"Chars"],[1,"CharIndices"],[1,"Bytes"],[1,"BytesDeref"],[1,"CharSplits"],[1,"CharSplitsN"],[1,"NaiveSearcher"],[1,"TwoWaySearcher"],[2,"Searcher"],[1,"MatchIndices"],[1,"SplitStr"],[1,"Split"],[1,"SplitTerminator"],[1,"SplitN"],[1,"RSplitN"],[1,"Lines"],[1,"LinesAny"],[1,"SipHasher"],[1,"Binary"],[1,"Octal"],[1,"Decimal"],[1,"LowerHex"],[1,"UpperHex"],[1,"Radix"],[1,"RadixFmt"],[2,"Alignment"],[1,"Arguments"],[1,"Formatter"],[1,"Error"],[2,"Ordering"]]};
initSearch(searchIndex);
