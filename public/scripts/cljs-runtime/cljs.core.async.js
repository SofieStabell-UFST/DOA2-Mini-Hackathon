goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29701 = arguments.length;
switch (G__29701) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29702 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29702 = (function (f,blockable,meta29703){
this.f = f;
this.blockable = blockable;
this.meta29703 = meta29703;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29704,meta29703__$1){
var self__ = this;
var _29704__$1 = this;
return (new cljs.core.async.t_cljs$core$async29702(self__.f,self__.blockable,meta29703__$1));
}));

(cljs.core.async.t_cljs$core$async29702.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29704){
var self__ = this;
var _29704__$1 = this;
return self__.meta29703;
}));

(cljs.core.async.t_cljs$core$async29702.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29702.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29702.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29702.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29702.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29703","meta29703",1373601453,null)], null);
}));

(cljs.core.async.t_cljs$core$async29702.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29702.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29702");

(cljs.core.async.t_cljs$core$async29702.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async29702");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29702.
 */
cljs.core.async.__GT_t_cljs$core$async29702 = (function cljs$core$async$__GT_t_cljs$core$async29702(f__$1,blockable__$1,meta29703){
return (new cljs.core.async.t_cljs$core$async29702(f__$1,blockable__$1,meta29703));
});

}

return (new cljs.core.async.t_cljs$core$async29702(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__29727 = arguments.length;
switch (G__29727) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29759 = arguments.length;
switch (G__29759) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__29764 = arguments.length;
switch (G__29764) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32690 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32690) : fn1.call(null,val_32690));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32690) : fn1.call(null,val_32690));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__29772 = arguments.length;
switch (G__29772) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4695__auto___32705 = n;
var x_32706 = (0);
while(true){
if((x_32706 < n__4695__auto___32705)){
(a[x_32706] = x_32706);

var G__32708 = (x_32706 + (1));
x_32706 = G__32708;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29785 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29785 = (function (flag,meta29786){
this.flag = flag;
this.meta29786 = meta29786;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29787,meta29786__$1){
var self__ = this;
var _29787__$1 = this;
return (new cljs.core.async.t_cljs$core$async29785(self__.flag,meta29786__$1));
}));

(cljs.core.async.t_cljs$core$async29785.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29787){
var self__ = this;
var _29787__$1 = this;
return self__.meta29786;
}));

(cljs.core.async.t_cljs$core$async29785.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29785.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29785.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29785.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29785.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29786","meta29786",-130348152,null)], null);
}));

(cljs.core.async.t_cljs$core$async29785.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29785.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29785");

(cljs.core.async.t_cljs$core$async29785.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async29785");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29785.
 */
cljs.core.async.__GT_t_cljs$core$async29785 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29785(flag__$1,meta29786){
return (new cljs.core.async.t_cljs$core$async29785(flag__$1,meta29786));
});

}

return (new cljs.core.async.t_cljs$core$async29785(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29804 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29804 = (function (flag,cb,meta29805){
this.flag = flag;
this.cb = cb;
this.meta29805 = meta29805;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29806,meta29805__$1){
var self__ = this;
var _29806__$1 = this;
return (new cljs.core.async.t_cljs$core$async29804(self__.flag,self__.cb,meta29805__$1));
}));

(cljs.core.async.t_cljs$core$async29804.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29806){
var self__ = this;
var _29806__$1 = this;
return self__.meta29805;
}));

(cljs.core.async.t_cljs$core$async29804.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29804.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29804.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29804.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29804.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29805","meta29805",1116717228,null)], null);
}));

(cljs.core.async.t_cljs$core$async29804.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29804.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29804");

(cljs.core.async.t_cljs$core$async29804.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async29804");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29804.
 */
cljs.core.async.__GT_t_cljs$core$async29804 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29804(flag__$1,cb__$1,meta29805){
return (new cljs.core.async.t_cljs$core$async29804(flag__$1,cb__$1,meta29805));
});

}

return (new cljs.core.async.t_cljs$core$async29804(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29820_SHARP_){
var G__29829 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29820_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29829) : fret.call(null,G__29829));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29821_SHARP_){
var G__29831 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29821_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29831) : fret.call(null,G__29831));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4212__auto__ = wport;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32739 = (i + (1));
i = G__32739;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4212__auto__ = ret;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4210__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4210__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___32745 = arguments.length;
var i__4819__auto___32746 = (0);
while(true){
if((i__4819__auto___32746 < len__4818__auto___32745)){
args__4824__auto__.push((arguments[i__4819__auto___32746]));

var G__32748 = (i__4819__auto___32746 + (1));
i__4819__auto___32746 = G__32748;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29847){
var map__29848 = p__29847;
var map__29848__$1 = cljs.core.__destructure_map(map__29848);
var opts = map__29848__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29842){
var G__29843 = cljs.core.first(seq29842);
var seq29842__$1 = cljs.core.next(seq29842);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29843,seq29842__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__29862 = arguments.length;
switch (G__29862) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29590__auto___32760 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29591__auto__ = (function (){var switch__29311__auto__ = (function (state_29913){
var state_val_29914 = (state_29913[(1)]);
if((state_val_29914 === (7))){
var inst_29907 = (state_29913[(2)]);
var state_29913__$1 = state_29913;
var statearr_29926_32763 = state_29913__$1;
(statearr_29926_32763[(2)] = inst_29907);

(statearr_29926_32763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (1))){
var state_29913__$1 = state_29913;
var statearr_29928_32769 = state_29913__$1;
(statearr_29928_32769[(2)] = null);

(statearr_29928_32769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (4))){
var inst_29875 = (state_29913[(7)]);
var inst_29875__$1 = (state_29913[(2)]);
var inst_29881 = (inst_29875__$1 == null);
var state_29913__$1 = (function (){var statearr_29935 = state_29913;
(statearr_29935[(7)] = inst_29875__$1);

return statearr_29935;
})();
if(cljs.core.truth_(inst_29881)){
var statearr_29941_32774 = state_29913__$1;
(statearr_29941_32774[(1)] = (5));

} else {
var statearr_29945_32775 = state_29913__$1;
(statearr_29945_32775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (13))){
var state_29913__$1 = state_29913;
var statearr_29953_32780 = state_29913__$1;
(statearr_29953_32780[(2)] = null);

(statearr_29953_32780[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (6))){
var inst_29875 = (state_29913[(7)]);
var state_29913__$1 = state_29913;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29913__$1,(11),to,inst_29875);
} else {
if((state_val_29914 === (3))){
var inst_29909 = (state_29913[(2)]);
var state_29913__$1 = state_29913;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29913__$1,inst_29909);
} else {
if((state_val_29914 === (12))){
var state_29913__$1 = state_29913;
var statearr_29967_32784 = state_29913__$1;
(statearr_29967_32784[(2)] = null);

(statearr_29967_32784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (2))){
var state_29913__$1 = state_29913;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29913__$1,(4),from);
} else {
if((state_val_29914 === (11))){
var inst_29898 = (state_29913[(2)]);
var state_29913__$1 = state_29913;
if(cljs.core.truth_(inst_29898)){
var statearr_29973_32787 = state_29913__$1;
(statearr_29973_32787[(1)] = (12));

} else {
var statearr_29974_32788 = state_29913__$1;
(statearr_29974_32788[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (9))){
var state_29913__$1 = state_29913;
var statearr_29975_32789 = state_29913__$1;
(statearr_29975_32789[(2)] = null);

(statearr_29975_32789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (5))){
var state_29913__$1 = state_29913;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29978_32791 = state_29913__$1;
(statearr_29978_32791[(1)] = (8));

} else {
var statearr_29979_32792 = state_29913__$1;
(statearr_29979_32792[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (14))){
var inst_29905 = (state_29913[(2)]);
var state_29913__$1 = state_29913;
var statearr_29980_32797 = state_29913__$1;
(statearr_29980_32797[(2)] = inst_29905);

(statearr_29980_32797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (10))){
var inst_29895 = (state_29913[(2)]);
var state_29913__$1 = state_29913;
var statearr_29981_32800 = state_29913__$1;
(statearr_29981_32800[(2)] = inst_29895);

(statearr_29981_32800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (8))){
var inst_29892 = cljs.core.async.close_BANG_(to);
var state_29913__$1 = state_29913;
var statearr_29982_32804 = state_29913__$1;
(statearr_29982_32804[(2)] = inst_29892);

(statearr_29982_32804[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29313__auto__ = null;
var cljs$core$async$state_machine__29313__auto____0 = (function (){
var statearr_29989 = [null,null,null,null,null,null,null,null];
(statearr_29989[(0)] = cljs$core$async$state_machine__29313__auto__);

(statearr_29989[(1)] = (1));

return statearr_29989;
});
var cljs$core$async$state_machine__29313__auto____1 = (function (state_29913){
while(true){
var ret_value__29314__auto__ = (function (){try{while(true){
var result__29315__auto__ = switch__29311__auto__(state_29913);
if(cljs.core.keyword_identical_QMARK_(result__29315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29315__auto__;
}
break;
}
}catch (e29990){var ex__29316__auto__ = e29990;
var statearr_29991_32809 = state_29913;
(statearr_29991_32809[(2)] = ex__29316__auto__);


if(cljs.core.seq((state_29913[(4)]))){
var statearr_29992_32811 = state_29913;
(statearr_29992_32811[(1)] = cljs.core.first((state_29913[(4)])));

} else {
throw ex__29316__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32813 = state_29913;
state_29913 = G__32813;
continue;
} else {
return ret_value__29314__auto__;
}
break;
}
});
cljs$core$async$state_machine__29313__auto__ = function(state_29913){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29313__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29313__auto____1.call(this,state_29913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29313__auto____0;
cljs$core$async$state_machine__29313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29313__auto____1;
return cljs$core$async$state_machine__29313__auto__;
})()
})();
var state__29592__auto__ = (function (){var statearr_30003 = f__29591__auto__();
(statearr_30003[(6)] = c__29590__auto___32760);

return statearr_30003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29592__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__30011){
var vec__30012 = p__30011;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30012,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30012,(1),null);
var job = vec__30012;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29590__auto___32821 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29591__auto__ = (function (){var switch__29311__auto__ = (function (state_30023){
var state_val_30024 = (state_30023[(1)]);
if((state_val_30024 === (1))){
var state_30023__$1 = state_30023;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30023__$1,(2),res,v);
} else {
if((state_val_30024 === (2))){
var inst_30020 = (state_30023[(2)]);
var inst_30021 = cljs.core.async.close_BANG_(res);
var state_30023__$1 = (function (){var statearr_30025 = state_30023;
(statearr_30025[(7)] = inst_30020);

return statearr_30025;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30023__$1,inst_30021);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29313__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29313__auto____0 = (function (){
var statearr_30026 = [null,null,null,null,null,null,null,null];
(statearr_30026[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29313__auto__);

(statearr_30026[(1)] = (1));

return statearr_30026;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29313__auto____1 = (function (state_30023){
while(true){
var ret_value__29314__auto__ = (function (){try{while(true){
var result__29315__auto__ = switch__29311__auto__(state_30023);
if(cljs.core.keyword_identical_QMARK_(result__29315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29315__auto__;
}
break;
}
}catch (e30027){var ex__29316__auto__ = e30027;
var statearr_30028_32830 = state_30023;
(statearr_30028_32830[(2)] = ex__29316__auto__);


if(cljs.core.seq((state_30023[(4)]))){
var statearr_30029_32834 = state_30023;
(statearr_30029_32834[(1)] = cljs.core.first((state_30023[(4)])));

} else {
throw ex__29316__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32835 = state_30023;
state_30023 = G__32835;
continue;
} else {
return ret_value__29314__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29313__auto__ = function(state_30023){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29313__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29313__auto____1.call(this,state_30023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29313__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29313__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29313__auto__;
})()
})();
var state__29592__auto__ = (function (){var statearr_30034 = f__29591__auto__();
(statearr_30034[(6)] = c__29590__auto___32821);

return statearr_30034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29592__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30037){
var vec__30038 = p__30037;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30038,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30038,(1),null);
var job = vec__30038;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4695__auto___32842 = n;
var __32843 = (0);
while(true){
if((__32843 < n__4695__auto___32842)){
var G__30050_32844 = type;
var G__30050_32845__$1 = (((G__30050_32844 instanceof cljs.core.Keyword))?G__30050_32844.fqn:null);
switch (G__30050_32845__$1) {
case "compute":
var c__29590__auto___32847 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32843,c__29590__auto___32847,G__30050_32844,G__30050_32845__$1,n__4695__auto___32842,jobs,results,process,async){
return (function (){
var f__29591__auto__ = (function (){var switch__29311__auto__ = ((function (__32843,c__29590__auto___32847,G__30050_32844,G__30050_32845__$1,n__4695__auto___32842,jobs,results,process,async){
return (function (state_30073){
var state_val_30074 = (state_30073[(1)]);
if((state_val_30074 === (1))){
var state_30073__$1 = state_30073;
var statearr_30075_32853 = state_30073__$1;
(statearr_30075_32853[(2)] = null);

(statearr_30075_32853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30074 === (2))){
var state_30073__$1 = state_30073;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30073__$1,(4),jobs);
} else {
if((state_val_30074 === (3))){
var inst_30069 = (state_30073[(2)]);
var state_30073__$1 = state_30073;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30073__$1,inst_30069);
} else {
if((state_val_30074 === (4))){
var inst_30059 = (state_30073[(2)]);
var inst_30062 = process(inst_30059);
var state_30073__$1 = state_30073;
if(cljs.core.truth_(inst_30062)){
var statearr_30076_32855 = state_30073__$1;
(statearr_30076_32855[(1)] = (5));

} else {
var statearr_30077_32856 = state_30073__$1;
(statearr_30077_32856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30074 === (5))){
var state_30073__$1 = state_30073;
var statearr_30082_32861 = state_30073__$1;
(statearr_30082_32861[(2)] = null);

(statearr_30082_32861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30074 === (6))){
var state_30073__$1 = state_30073;
var statearr_30088_32863 = state_30073__$1;
(statearr_30088_32863[(2)] = null);

(statearr_30088_32863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30074 === (7))){
var inst_30067 = (state_30073[(2)]);
var state_30073__$1 = state_30073;
var statearr_30089_32864 = state_30073__$1;
(statearr_30089_32864[(2)] = inst_30067);

(statearr_30089_32864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32843,c__29590__auto___32847,G__30050_32844,G__30050_32845__$1,n__4695__auto___32842,jobs,results,process,async))
;
return ((function (__32843,switch__29311__auto__,c__29590__auto___32847,G__30050_32844,G__30050_32845__$1,n__4695__auto___32842,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29313__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29313__auto____0 = (function (){
var statearr_30090 = [null,null,null,null,null,null,null];
(statearr_30090[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29313__auto__);

(statearr_30090[(1)] = (1));

return statearr_30090;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29313__auto____1 = (function (state_30073){
while(true){
var ret_value__29314__auto__ = (function (){try{while(true){
var result__29315__auto__ = switch__29311__auto__(state_30073);
if(cljs.core.keyword_identical_QMARK_(result__29315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29315__auto__;
}
break;
}
}catch (e30097){var ex__29316__auto__ = e30097;
var statearr_30098_32873 = state_30073;
(statearr_30098_32873[(2)] = ex__29316__auto__);


if(cljs.core.seq((state_30073[(4)]))){
var statearr_30099_32874 = state_30073;
(statearr_30099_32874[(1)] = cljs.core.first((state_30073[(4)])));

} else {
throw ex__29316__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32875 = state_30073;
state_30073 = G__32875;
continue;
} else {
return ret_value__29314__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29313__auto__ = function(state_30073){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29313__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29313__auto____1.call(this,state_30073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29313__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29313__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29313__auto__;
})()
;})(__32843,switch__29311__auto__,c__29590__auto___32847,G__30050_32844,G__30050_32845__$1,n__4695__auto___32842,jobs,results,process,async))
})();
var state__29592__auto__ = (function (){var statearr_30104 = f__29591__auto__();
(statearr_30104[(6)] = c__29590__auto___32847);

return statearr_30104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29592__auto__);
});})(__32843,c__29590__auto___32847,G__30050_32844,G__30050_32845__$1,n__4695__auto___32842,jobs,results,process,async))
);


break;
case "async":
var c__29590__auto___32881 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32843,c__29590__auto___32881,G__30050_32844,G__30050_32845__$1,n__4695__auto___32842,jobs,results,process,async){
return (function (){
var f__29591__auto__ = (function (){var switch__29311__auto__ = ((function (__32843,c__29590__auto___32881,G__30050_32844,G__30050_32845__$1,n__4695__auto___32842,jobs,results,process,async){
return (function (state_30119){
var state_val_30120 = (state_30119[(1)]);
if((state_val_30120 === (1))){
var state_30119__$1 = state_30119;
var statearr_30121_32884 = state_30119__$1;
(statearr_30121_32884[(2)] = null);

(statearr_30121_32884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (2))){
var state_30119__$1 = state_30119;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30119__$1,(4),jobs);
} else {
if((state_val_30120 === (3))){
var inst_30117 = (state_30119[(2)]);
var state_30119__$1 = state_30119;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30119__$1,inst_30117);
} else {
if((state_val_30120 === (4))){
var inst_30109 = (state_30119[(2)]);
var inst_30110 = async(inst_30109);
var state_30119__$1 = state_30119;
if(cljs.core.truth_(inst_30110)){
var statearr_30126_32887 = state_30119__$1;
(statearr_30126_32887[(1)] = (5));

} else {
var statearr_30131_32891 = state_30119__$1;
(statearr_30131_32891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (5))){
var state_30119__$1 = state_30119;
var statearr_30132_32892 = state_30119__$1;
(statearr_30132_32892[(2)] = null);

(statearr_30132_32892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (6))){
var state_30119__$1 = state_30119;
var statearr_30138_32894 = state_30119__$1;
(statearr_30138_32894[(2)] = null);

(statearr_30138_32894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (7))){
var inst_30115 = (state_30119[(2)]);
var state_30119__$1 = state_30119;
var statearr_30140_32895 = state_30119__$1;
(statearr_30140_32895[(2)] = inst_30115);

(statearr_30140_32895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32843,c__29590__auto___32881,G__30050_32844,G__30050_32845__$1,n__4695__auto___32842,jobs,results,process,async))
;
return ((function (__32843,switch__29311__auto__,c__29590__auto___32881,G__30050_32844,G__30050_32845__$1,n__4695__auto___32842,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29313__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29313__auto____0 = (function (){
var statearr_30142 = [null,null,null,null,null,null,null];
(statearr_30142[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29313__auto__);

(statearr_30142[(1)] = (1));

return statearr_30142;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29313__auto____1 = (function (state_30119){
while(true){
var ret_value__29314__auto__ = (function (){try{while(true){
var result__29315__auto__ = switch__29311__auto__(state_30119);
if(cljs.core.keyword_identical_QMARK_(result__29315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29315__auto__;
}
break;
}
}catch (e30150){var ex__29316__auto__ = e30150;
var statearr_30151_32897 = state_30119;
(statearr_30151_32897[(2)] = ex__29316__auto__);


if(cljs.core.seq((state_30119[(4)]))){
var statearr_30152_32898 = state_30119;
(statearr_30152_32898[(1)] = cljs.core.first((state_30119[(4)])));

} else {
throw ex__29316__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32899 = state_30119;
state_30119 = G__32899;
continue;
} else {
return ret_value__29314__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29313__auto__ = function(state_30119){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29313__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29313__auto____1.call(this,state_30119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29313__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29313__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29313__auto__;
})()
;})(__32843,switch__29311__auto__,c__29590__auto___32881,G__30050_32844,G__30050_32845__$1,n__4695__auto___32842,jobs,results,process,async))
})();
var state__29592__auto__ = (function (){var statearr_30158 = f__29591__auto__();
(statearr_30158[(6)] = c__29590__auto___32881);

return statearr_30158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29592__auto__);
});})(__32843,c__29590__auto___32881,G__30050_32844,G__30050_32845__$1,n__4695__auto___32842,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30050_32845__$1)].join('')));

}

var G__32906 = (__32843 + (1));
__32843 = G__32906;
continue;
} else {
}
break;
}

var c__29590__auto___32907 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29591__auto__ = (function (){var switch__29311__auto__ = (function (state_30194){
var state_val_30195 = (state_30194[(1)]);
if((state_val_30195 === (7))){
var inst_30187 = (state_30194[(2)]);
var state_30194__$1 = state_30194;
var statearr_30200_32912 = state_30194__$1;
(statearr_30200_32912[(2)] = inst_30187);

(statearr_30200_32912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (1))){
var state_30194__$1 = state_30194;
var statearr_30201_32914 = state_30194__$1;
(statearr_30201_32914[(2)] = null);

(statearr_30201_32914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (4))){
var inst_30167 = (state_30194[(7)]);
var inst_30167__$1 = (state_30194[(2)]);
var inst_30173 = (inst_30167__$1 == null);
var state_30194__$1 = (function (){var statearr_30203 = state_30194;
(statearr_30203[(7)] = inst_30167__$1);

return statearr_30203;
})();
if(cljs.core.truth_(inst_30173)){
var statearr_30204_32920 = state_30194__$1;
(statearr_30204_32920[(1)] = (5));

} else {
var statearr_30205_32921 = state_30194__$1;
(statearr_30205_32921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (6))){
var inst_30167 = (state_30194[(7)]);
var inst_30177 = (state_30194[(8)]);
var inst_30177__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30178 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30179 = [inst_30167,inst_30177__$1];
var inst_30180 = (new cljs.core.PersistentVector(null,2,(5),inst_30178,inst_30179,null));
var state_30194__$1 = (function (){var statearr_30212 = state_30194;
(statearr_30212[(8)] = inst_30177__$1);

return statearr_30212;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30194__$1,(8),jobs,inst_30180);
} else {
if((state_val_30195 === (3))){
var inst_30189 = (state_30194[(2)]);
var state_30194__$1 = state_30194;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30194__$1,inst_30189);
} else {
if((state_val_30195 === (2))){
var state_30194__$1 = state_30194;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30194__$1,(4),from);
} else {
if((state_val_30195 === (9))){
var inst_30184 = (state_30194[(2)]);
var state_30194__$1 = (function (){var statearr_30215 = state_30194;
(statearr_30215[(9)] = inst_30184);

return statearr_30215;
})();
var statearr_30216_32927 = state_30194__$1;
(statearr_30216_32927[(2)] = null);

(statearr_30216_32927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (5))){
var inst_30175 = cljs.core.async.close_BANG_(jobs);
var state_30194__$1 = state_30194;
var statearr_30225_32930 = state_30194__$1;
(statearr_30225_32930[(2)] = inst_30175);

(statearr_30225_32930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (8))){
var inst_30177 = (state_30194[(8)]);
var inst_30182 = (state_30194[(2)]);
var state_30194__$1 = (function (){var statearr_30226 = state_30194;
(statearr_30226[(10)] = inst_30182);

return statearr_30226;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30194__$1,(9),results,inst_30177);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29313__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29313__auto____0 = (function (){
var statearr_30227 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30227[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29313__auto__);

(statearr_30227[(1)] = (1));

return statearr_30227;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29313__auto____1 = (function (state_30194){
while(true){
var ret_value__29314__auto__ = (function (){try{while(true){
var result__29315__auto__ = switch__29311__auto__(state_30194);
if(cljs.core.keyword_identical_QMARK_(result__29315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29315__auto__;
}
break;
}
}catch (e30228){var ex__29316__auto__ = e30228;
var statearr_30229_32932 = state_30194;
(statearr_30229_32932[(2)] = ex__29316__auto__);


if(cljs.core.seq((state_30194[(4)]))){
var statearr_30230_32933 = state_30194;
(statearr_30230_32933[(1)] = cljs.core.first((state_30194[(4)])));

} else {
throw ex__29316__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32935 = state_30194;
state_30194 = G__32935;
continue;
} else {
return ret_value__29314__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29313__auto__ = function(state_30194){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29313__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29313__auto____1.call(this,state_30194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29313__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29313__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29313__auto__;
})()
})();
var state__29592__auto__ = (function (){var statearr_30232 = f__29591__auto__();
(statearr_30232[(6)] = c__29590__auto___32907);

return statearr_30232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29592__auto__);
}));


var c__29590__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29591__auto__ = (function (){var switch__29311__auto__ = (function (state_30278){
var state_val_30279 = (state_30278[(1)]);
if((state_val_30279 === (7))){
var inst_30274 = (state_30278[(2)]);
var state_30278__$1 = state_30278;
var statearr_30280_32941 = state_30278__$1;
(statearr_30280_32941[(2)] = inst_30274);

(statearr_30280_32941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (20))){
var state_30278__$1 = state_30278;
var statearr_30281_32942 = state_30278__$1;
(statearr_30281_32942[(2)] = null);

(statearr_30281_32942[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (1))){
var state_30278__$1 = state_30278;
var statearr_30282_32943 = state_30278__$1;
(statearr_30282_32943[(2)] = null);

(statearr_30282_32943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (4))){
var inst_30239 = (state_30278[(7)]);
var inst_30239__$1 = (state_30278[(2)]);
var inst_30240 = (inst_30239__$1 == null);
var state_30278__$1 = (function (){var statearr_30285 = state_30278;
(statearr_30285[(7)] = inst_30239__$1);

return statearr_30285;
})();
if(cljs.core.truth_(inst_30240)){
var statearr_30286_32946 = state_30278__$1;
(statearr_30286_32946[(1)] = (5));

} else {
var statearr_30287_32947 = state_30278__$1;
(statearr_30287_32947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (15))){
var inst_30254 = (state_30278[(8)]);
var state_30278__$1 = state_30278;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30278__$1,(18),to,inst_30254);
} else {
if((state_val_30279 === (21))){
var inst_30269 = (state_30278[(2)]);
var state_30278__$1 = state_30278;
var statearr_30290_32949 = state_30278__$1;
(statearr_30290_32949[(2)] = inst_30269);

(statearr_30290_32949[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (13))){
var inst_30271 = (state_30278[(2)]);
var state_30278__$1 = (function (){var statearr_30291 = state_30278;
(statearr_30291[(9)] = inst_30271);

return statearr_30291;
})();
var statearr_30292_32952 = state_30278__$1;
(statearr_30292_32952[(2)] = null);

(statearr_30292_32952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (6))){
var inst_30239 = (state_30278[(7)]);
var state_30278__$1 = state_30278;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30278__$1,(11),inst_30239);
} else {
if((state_val_30279 === (17))){
var inst_30263 = (state_30278[(2)]);
var state_30278__$1 = state_30278;
if(cljs.core.truth_(inst_30263)){
var statearr_30296_32954 = state_30278__$1;
(statearr_30296_32954[(1)] = (19));

} else {
var statearr_30298_32955 = state_30278__$1;
(statearr_30298_32955[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (3))){
var inst_30276 = (state_30278[(2)]);
var state_30278__$1 = state_30278;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30278__$1,inst_30276);
} else {
if((state_val_30279 === (12))){
var inst_30251 = (state_30278[(10)]);
var state_30278__$1 = state_30278;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30278__$1,(14),inst_30251);
} else {
if((state_val_30279 === (2))){
var state_30278__$1 = state_30278;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30278__$1,(4),results);
} else {
if((state_val_30279 === (19))){
var state_30278__$1 = state_30278;
var statearr_30312_32957 = state_30278__$1;
(statearr_30312_32957[(2)] = null);

(statearr_30312_32957[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (11))){
var inst_30251 = (state_30278[(2)]);
var state_30278__$1 = (function (){var statearr_30313 = state_30278;
(statearr_30313[(10)] = inst_30251);

return statearr_30313;
})();
var statearr_30314_32958 = state_30278__$1;
(statearr_30314_32958[(2)] = null);

(statearr_30314_32958[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (9))){
var state_30278__$1 = state_30278;
var statearr_30319_32962 = state_30278__$1;
(statearr_30319_32962[(2)] = null);

(statearr_30319_32962[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (5))){
var state_30278__$1 = state_30278;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30320_32964 = state_30278__$1;
(statearr_30320_32964[(1)] = (8));

} else {
var statearr_30321_32965 = state_30278__$1;
(statearr_30321_32965[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (14))){
var inst_30256 = (state_30278[(11)]);
var inst_30254 = (state_30278[(8)]);
var inst_30254__$1 = (state_30278[(2)]);
var inst_30255 = (inst_30254__$1 == null);
var inst_30256__$1 = cljs.core.not(inst_30255);
var state_30278__$1 = (function (){var statearr_30325 = state_30278;
(statearr_30325[(11)] = inst_30256__$1);

(statearr_30325[(8)] = inst_30254__$1);

return statearr_30325;
})();
if(inst_30256__$1){
var statearr_30329_32968 = state_30278__$1;
(statearr_30329_32968[(1)] = (15));

} else {
var statearr_30330_32969 = state_30278__$1;
(statearr_30330_32969[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (16))){
var inst_30256 = (state_30278[(11)]);
var state_30278__$1 = state_30278;
var statearr_30335_32970 = state_30278__$1;
(statearr_30335_32970[(2)] = inst_30256);

(statearr_30335_32970[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (10))){
var inst_30246 = (state_30278[(2)]);
var state_30278__$1 = state_30278;
var statearr_30336_32973 = state_30278__$1;
(statearr_30336_32973[(2)] = inst_30246);

(statearr_30336_32973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (18))){
var inst_30260 = (state_30278[(2)]);
var state_30278__$1 = state_30278;
var statearr_30340_32975 = state_30278__$1;
(statearr_30340_32975[(2)] = inst_30260);

(statearr_30340_32975[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (8))){
var inst_30243 = cljs.core.async.close_BANG_(to);
var state_30278__$1 = state_30278;
var statearr_30344_32976 = state_30278__$1;
(statearr_30344_32976[(2)] = inst_30243);

(statearr_30344_32976[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29313__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29313__auto____0 = (function (){
var statearr_30349 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30349[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29313__auto__);

(statearr_30349[(1)] = (1));

return statearr_30349;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29313__auto____1 = (function (state_30278){
while(true){
var ret_value__29314__auto__ = (function (){try{while(true){
var result__29315__auto__ = switch__29311__auto__(state_30278);
if(cljs.core.keyword_identical_QMARK_(result__29315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29315__auto__;
}
break;
}
}catch (e30354){var ex__29316__auto__ = e30354;
var statearr_30355_32978 = state_30278;
(statearr_30355_32978[(2)] = ex__29316__auto__);


if(cljs.core.seq((state_30278[(4)]))){
var statearr_30358_32979 = state_30278;
(statearr_30358_32979[(1)] = cljs.core.first((state_30278[(4)])));

} else {
throw ex__29316__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32980 = state_30278;
state_30278 = G__32980;
continue;
} else {
return ret_value__29314__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29313__auto__ = function(state_30278){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29313__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29313__auto____1.call(this,state_30278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29313__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29313__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29313__auto__;
})()
})();
var state__29592__auto__ = (function (){var statearr_30362 = f__29591__auto__();
(statearr_30362[(6)] = c__29590__auto__);

return statearr_30362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29592__auto__);
}));

return c__29590__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30367 = arguments.length;
switch (G__30367) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30382 = arguments.length;
switch (G__30382) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30400 = arguments.length;
switch (G__30400) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29590__auto___32995 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29591__auto__ = (function (){var switch__29311__auto__ = (function (state_30428){
var state_val_30429 = (state_30428[(1)]);
if((state_val_30429 === (7))){
var inst_30424 = (state_30428[(2)]);
var state_30428__$1 = state_30428;
var statearr_30442_32997 = state_30428__$1;
(statearr_30442_32997[(2)] = inst_30424);

(statearr_30442_32997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (1))){
var state_30428__$1 = state_30428;
var statearr_30450_32998 = state_30428__$1;
(statearr_30450_32998[(2)] = null);

(statearr_30450_32998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (4))){
var inst_30405 = (state_30428[(7)]);
var inst_30405__$1 = (state_30428[(2)]);
var inst_30406 = (inst_30405__$1 == null);
var state_30428__$1 = (function (){var statearr_30456 = state_30428;
(statearr_30456[(7)] = inst_30405__$1);

return statearr_30456;
})();
if(cljs.core.truth_(inst_30406)){
var statearr_30457_33000 = state_30428__$1;
(statearr_30457_33000[(1)] = (5));

} else {
var statearr_30458_33002 = state_30428__$1;
(statearr_30458_33002[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (13))){
var state_30428__$1 = state_30428;
var statearr_30459_33004 = state_30428__$1;
(statearr_30459_33004[(2)] = null);

(statearr_30459_33004[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (6))){
var inst_30405 = (state_30428[(7)]);
var inst_30411 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30405) : p.call(null,inst_30405));
var state_30428__$1 = state_30428;
if(cljs.core.truth_(inst_30411)){
var statearr_30460_33009 = state_30428__$1;
(statearr_30460_33009[(1)] = (9));

} else {
var statearr_30465_33010 = state_30428__$1;
(statearr_30465_33010[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (3))){
var inst_30426 = (state_30428[(2)]);
var state_30428__$1 = state_30428;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30428__$1,inst_30426);
} else {
if((state_val_30429 === (12))){
var state_30428__$1 = state_30428;
var statearr_30478_33011 = state_30428__$1;
(statearr_30478_33011[(2)] = null);

(statearr_30478_33011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (2))){
var state_30428__$1 = state_30428;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30428__$1,(4),ch);
} else {
if((state_val_30429 === (11))){
var inst_30405 = (state_30428[(7)]);
var inst_30415 = (state_30428[(2)]);
var state_30428__$1 = state_30428;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30428__$1,(8),inst_30415,inst_30405);
} else {
if((state_val_30429 === (9))){
var state_30428__$1 = state_30428;
var statearr_30485_33021 = state_30428__$1;
(statearr_30485_33021[(2)] = tc);

(statearr_30485_33021[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (5))){
var inst_30408 = cljs.core.async.close_BANG_(tc);
var inst_30409 = cljs.core.async.close_BANG_(fc);
var state_30428__$1 = (function (){var statearr_30496 = state_30428;
(statearr_30496[(8)] = inst_30408);

return statearr_30496;
})();
var statearr_30501_33024 = state_30428__$1;
(statearr_30501_33024[(2)] = inst_30409);

(statearr_30501_33024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (14))){
var inst_30422 = (state_30428[(2)]);
var state_30428__$1 = state_30428;
var statearr_30513_33026 = state_30428__$1;
(statearr_30513_33026[(2)] = inst_30422);

(statearr_30513_33026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (10))){
var state_30428__$1 = state_30428;
var statearr_30517_33028 = state_30428__$1;
(statearr_30517_33028[(2)] = fc);

(statearr_30517_33028[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (8))){
var inst_30417 = (state_30428[(2)]);
var state_30428__$1 = state_30428;
if(cljs.core.truth_(inst_30417)){
var statearr_30520_33029 = state_30428__$1;
(statearr_30520_33029[(1)] = (12));

} else {
var statearr_30521_33031 = state_30428__$1;
(statearr_30521_33031[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29313__auto__ = null;
var cljs$core$async$state_machine__29313__auto____0 = (function (){
var statearr_30522 = [null,null,null,null,null,null,null,null,null];
(statearr_30522[(0)] = cljs$core$async$state_machine__29313__auto__);

(statearr_30522[(1)] = (1));

return statearr_30522;
});
var cljs$core$async$state_machine__29313__auto____1 = (function (state_30428){
while(true){
var ret_value__29314__auto__ = (function (){try{while(true){
var result__29315__auto__ = switch__29311__auto__(state_30428);
if(cljs.core.keyword_identical_QMARK_(result__29315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29315__auto__;
}
break;
}
}catch (e30523){var ex__29316__auto__ = e30523;
var statearr_30524_33034 = state_30428;
(statearr_30524_33034[(2)] = ex__29316__auto__);


if(cljs.core.seq((state_30428[(4)]))){
var statearr_30526_33035 = state_30428;
(statearr_30526_33035[(1)] = cljs.core.first((state_30428[(4)])));

} else {
throw ex__29316__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33036 = state_30428;
state_30428 = G__33036;
continue;
} else {
return ret_value__29314__auto__;
}
break;
}
});
cljs$core$async$state_machine__29313__auto__ = function(state_30428){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29313__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29313__auto____1.call(this,state_30428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29313__auto____0;
cljs$core$async$state_machine__29313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29313__auto____1;
return cljs$core$async$state_machine__29313__auto__;
})()
})();
var state__29592__auto__ = (function (){var statearr_30538 = f__29591__auto__();
(statearr_30538[(6)] = c__29590__auto___32995);

return statearr_30538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29592__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29590__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29591__auto__ = (function (){var switch__29311__auto__ = (function (state_30567){
var state_val_30568 = (state_30567[(1)]);
if((state_val_30568 === (7))){
var inst_30560 = (state_30567[(2)]);
var state_30567__$1 = state_30567;
var statearr_30578_33040 = state_30567__$1;
(statearr_30578_33040[(2)] = inst_30560);

(statearr_30578_33040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (1))){
var inst_30543 = init;
var inst_30544 = inst_30543;
var state_30567__$1 = (function (){var statearr_30583 = state_30567;
(statearr_30583[(7)] = inst_30544);

return statearr_30583;
})();
var statearr_30584_33042 = state_30567__$1;
(statearr_30584_33042[(2)] = null);

(statearr_30584_33042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (4))){
var inst_30547 = (state_30567[(8)]);
var inst_30547__$1 = (state_30567[(2)]);
var inst_30548 = (inst_30547__$1 == null);
var state_30567__$1 = (function (){var statearr_30589 = state_30567;
(statearr_30589[(8)] = inst_30547__$1);

return statearr_30589;
})();
if(cljs.core.truth_(inst_30548)){
var statearr_30591_33043 = state_30567__$1;
(statearr_30591_33043[(1)] = (5));

} else {
var statearr_30592_33044 = state_30567__$1;
(statearr_30592_33044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (6))){
var inst_30551 = (state_30567[(9)]);
var inst_30547 = (state_30567[(8)]);
var inst_30544 = (state_30567[(7)]);
var inst_30551__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30544,inst_30547) : f.call(null,inst_30544,inst_30547));
var inst_30552 = cljs.core.reduced_QMARK_(inst_30551__$1);
var state_30567__$1 = (function (){var statearr_30595 = state_30567;
(statearr_30595[(9)] = inst_30551__$1);

return statearr_30595;
})();
if(inst_30552){
var statearr_30596_33048 = state_30567__$1;
(statearr_30596_33048[(1)] = (8));

} else {
var statearr_30597_33049 = state_30567__$1;
(statearr_30597_33049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (3))){
var inst_30562 = (state_30567[(2)]);
var state_30567__$1 = state_30567;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30567__$1,inst_30562);
} else {
if((state_val_30568 === (2))){
var state_30567__$1 = state_30567;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30567__$1,(4),ch);
} else {
if((state_val_30568 === (9))){
var inst_30551 = (state_30567[(9)]);
var inst_30544 = inst_30551;
var state_30567__$1 = (function (){var statearr_30603 = state_30567;
(statearr_30603[(7)] = inst_30544);

return statearr_30603;
})();
var statearr_30604_33050 = state_30567__$1;
(statearr_30604_33050[(2)] = null);

(statearr_30604_33050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (5))){
var inst_30544 = (state_30567[(7)]);
var state_30567__$1 = state_30567;
var statearr_30606_33052 = state_30567__$1;
(statearr_30606_33052[(2)] = inst_30544);

(statearr_30606_33052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (10))){
var inst_30558 = (state_30567[(2)]);
var state_30567__$1 = state_30567;
var statearr_30607_33053 = state_30567__$1;
(statearr_30607_33053[(2)] = inst_30558);

(statearr_30607_33053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (8))){
var inst_30551 = (state_30567[(9)]);
var inst_30554 = cljs.core.deref(inst_30551);
var state_30567__$1 = state_30567;
var statearr_30609_33058 = state_30567__$1;
(statearr_30609_33058[(2)] = inst_30554);

(statearr_30609_33058[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29313__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29313__auto____0 = (function (){
var statearr_30610 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30610[(0)] = cljs$core$async$reduce_$_state_machine__29313__auto__);

(statearr_30610[(1)] = (1));

return statearr_30610;
});
var cljs$core$async$reduce_$_state_machine__29313__auto____1 = (function (state_30567){
while(true){
var ret_value__29314__auto__ = (function (){try{while(true){
var result__29315__auto__ = switch__29311__auto__(state_30567);
if(cljs.core.keyword_identical_QMARK_(result__29315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29315__auto__;
}
break;
}
}catch (e30620){var ex__29316__auto__ = e30620;
var statearr_30621_33062 = state_30567;
(statearr_30621_33062[(2)] = ex__29316__auto__);


if(cljs.core.seq((state_30567[(4)]))){
var statearr_30628_33063 = state_30567;
(statearr_30628_33063[(1)] = cljs.core.first((state_30567[(4)])));

} else {
throw ex__29316__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33064 = state_30567;
state_30567 = G__33064;
continue;
} else {
return ret_value__29314__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29313__auto__ = function(state_30567){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29313__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29313__auto____1.call(this,state_30567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29313__auto____0;
cljs$core$async$reduce_$_state_machine__29313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29313__auto____1;
return cljs$core$async$reduce_$_state_machine__29313__auto__;
})()
})();
var state__29592__auto__ = (function (){var statearr_30636 = f__29591__auto__();
(statearr_30636[(6)] = c__29590__auto__);

return statearr_30636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29592__auto__);
}));

return c__29590__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29590__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29591__auto__ = (function (){var switch__29311__auto__ = (function (state_30648){
var state_val_30649 = (state_30648[(1)]);
if((state_val_30649 === (1))){
var inst_30643 = cljs.core.async.reduce(f__$1,init,ch);
var state_30648__$1 = state_30648;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30648__$1,(2),inst_30643);
} else {
if((state_val_30649 === (2))){
var inst_30645 = (state_30648[(2)]);
var inst_30646 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30645) : f__$1.call(null,inst_30645));
var state_30648__$1 = state_30648;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30648__$1,inst_30646);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29313__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29313__auto____0 = (function (){
var statearr_30652 = [null,null,null,null,null,null,null];
(statearr_30652[(0)] = cljs$core$async$transduce_$_state_machine__29313__auto__);

(statearr_30652[(1)] = (1));

return statearr_30652;
});
var cljs$core$async$transduce_$_state_machine__29313__auto____1 = (function (state_30648){
while(true){
var ret_value__29314__auto__ = (function (){try{while(true){
var result__29315__auto__ = switch__29311__auto__(state_30648);
if(cljs.core.keyword_identical_QMARK_(result__29315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29315__auto__;
}
break;
}
}catch (e30654){var ex__29316__auto__ = e30654;
var statearr_30657_33070 = state_30648;
(statearr_30657_33070[(2)] = ex__29316__auto__);


if(cljs.core.seq((state_30648[(4)]))){
var statearr_30659_33071 = state_30648;
(statearr_30659_33071[(1)] = cljs.core.first((state_30648[(4)])));

} else {
throw ex__29316__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33075 = state_30648;
state_30648 = G__33075;
continue;
} else {
return ret_value__29314__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29313__auto__ = function(state_30648){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29313__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29313__auto____1.call(this,state_30648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29313__auto____0;
cljs$core$async$transduce_$_state_machine__29313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29313__auto____1;
return cljs$core$async$transduce_$_state_machine__29313__auto__;
})()
})();
var state__29592__auto__ = (function (){var statearr_30660 = f__29591__auto__();
(statearr_30660[(6)] = c__29590__auto__);

return statearr_30660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29592__auto__);
}));

return c__29590__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__30672 = arguments.length;
switch (G__30672) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29590__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29591__auto__ = (function (){var switch__29311__auto__ = (function (state_30709){
var state_val_30711 = (state_30709[(1)]);
if((state_val_30711 === (7))){
var inst_30691 = (state_30709[(2)]);
var state_30709__$1 = state_30709;
var statearr_30719_33081 = state_30709__$1;
(statearr_30719_33081[(2)] = inst_30691);

(statearr_30719_33081[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30711 === (1))){
var inst_30682 = cljs.core.seq(coll);
var inst_30683 = inst_30682;
var state_30709__$1 = (function (){var statearr_30722 = state_30709;
(statearr_30722[(7)] = inst_30683);

return statearr_30722;
})();
var statearr_30723_33082 = state_30709__$1;
(statearr_30723_33082[(2)] = null);

(statearr_30723_33082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30711 === (4))){
var inst_30683 = (state_30709[(7)]);
var inst_30689 = cljs.core.first(inst_30683);
var state_30709__$1 = state_30709;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30709__$1,(7),ch,inst_30689);
} else {
if((state_val_30711 === (13))){
var inst_30703 = (state_30709[(2)]);
var state_30709__$1 = state_30709;
var statearr_30731_33084 = state_30709__$1;
(statearr_30731_33084[(2)] = inst_30703);

(statearr_30731_33084[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30711 === (6))){
var inst_30694 = (state_30709[(2)]);
var state_30709__$1 = state_30709;
if(cljs.core.truth_(inst_30694)){
var statearr_30732_33086 = state_30709__$1;
(statearr_30732_33086[(1)] = (8));

} else {
var statearr_30734_33088 = state_30709__$1;
(statearr_30734_33088[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30711 === (3))){
var inst_30707 = (state_30709[(2)]);
var state_30709__$1 = state_30709;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30709__$1,inst_30707);
} else {
if((state_val_30711 === (12))){
var state_30709__$1 = state_30709;
var statearr_30736_33091 = state_30709__$1;
(statearr_30736_33091[(2)] = null);

(statearr_30736_33091[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30711 === (2))){
var inst_30683 = (state_30709[(7)]);
var state_30709__$1 = state_30709;
if(cljs.core.truth_(inst_30683)){
var statearr_30738_33093 = state_30709__$1;
(statearr_30738_33093[(1)] = (4));

} else {
var statearr_30740_33095 = state_30709__$1;
(statearr_30740_33095[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30711 === (11))){
var inst_30700 = cljs.core.async.close_BANG_(ch);
var state_30709__$1 = state_30709;
var statearr_30741_33096 = state_30709__$1;
(statearr_30741_33096[(2)] = inst_30700);

(statearr_30741_33096[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30711 === (9))){
var state_30709__$1 = state_30709;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30744_33099 = state_30709__$1;
(statearr_30744_33099[(1)] = (11));

} else {
var statearr_30745_33100 = state_30709__$1;
(statearr_30745_33100[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30711 === (5))){
var inst_30683 = (state_30709[(7)]);
var state_30709__$1 = state_30709;
var statearr_30746_33102 = state_30709__$1;
(statearr_30746_33102[(2)] = inst_30683);

(statearr_30746_33102[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30711 === (10))){
var inst_30705 = (state_30709[(2)]);
var state_30709__$1 = state_30709;
var statearr_30747_33103 = state_30709__$1;
(statearr_30747_33103[(2)] = inst_30705);

(statearr_30747_33103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30711 === (8))){
var inst_30683 = (state_30709[(7)]);
var inst_30696 = cljs.core.next(inst_30683);
var inst_30683__$1 = inst_30696;
var state_30709__$1 = (function (){var statearr_30750 = state_30709;
(statearr_30750[(7)] = inst_30683__$1);

return statearr_30750;
})();
var statearr_30751_33105 = state_30709__$1;
(statearr_30751_33105[(2)] = null);

(statearr_30751_33105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29313__auto__ = null;
var cljs$core$async$state_machine__29313__auto____0 = (function (){
var statearr_30756 = [null,null,null,null,null,null,null,null];
(statearr_30756[(0)] = cljs$core$async$state_machine__29313__auto__);

(statearr_30756[(1)] = (1));

return statearr_30756;
});
var cljs$core$async$state_machine__29313__auto____1 = (function (state_30709){
while(true){
var ret_value__29314__auto__ = (function (){try{while(true){
var result__29315__auto__ = switch__29311__auto__(state_30709);
if(cljs.core.keyword_identical_QMARK_(result__29315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29315__auto__;
}
break;
}
}catch (e30758){var ex__29316__auto__ = e30758;
var statearr_30759_33109 = state_30709;
(statearr_30759_33109[(2)] = ex__29316__auto__);


if(cljs.core.seq((state_30709[(4)]))){
var statearr_30760_33110 = state_30709;
(statearr_30760_33110[(1)] = cljs.core.first((state_30709[(4)])));

} else {
throw ex__29316__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33111 = state_30709;
state_30709 = G__33111;
continue;
} else {
return ret_value__29314__auto__;
}
break;
}
});
cljs$core$async$state_machine__29313__auto__ = function(state_30709){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29313__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29313__auto____1.call(this,state_30709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29313__auto____0;
cljs$core$async$state_machine__29313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29313__auto____1;
return cljs$core$async$state_machine__29313__auto__;
})()
})();
var state__29592__auto__ = (function (){var statearr_30761 = f__29591__auto__();
(statearr_30761[(6)] = c__29590__auto__);

return statearr_30761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29592__auto__);
}));

return c__29590__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30775 = arguments.length;
switch (G__30775) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_33119 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_33119(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33128 = (function (m,ch,close_QMARK_){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4510__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4508__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_33128(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33135 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_33135(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33142 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_33142(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30808 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30808 = (function (ch,cs,meta30809){
this.ch = ch;
this.cs = cs;
this.meta30809 = meta30809;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30810,meta30809__$1){
var self__ = this;
var _30810__$1 = this;
return (new cljs.core.async.t_cljs$core$async30808(self__.ch,self__.cs,meta30809__$1));
}));

(cljs.core.async.t_cljs$core$async30808.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30810){
var self__ = this;
var _30810__$1 = this;
return self__.meta30809;
}));

(cljs.core.async.t_cljs$core$async30808.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30808.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30808.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30808.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30808.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30808.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30808.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30809","meta30809",1884724072,null)], null);
}));

(cljs.core.async.t_cljs$core$async30808.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30808.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30808");

(cljs.core.async.t_cljs$core$async30808.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async30808");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30808.
 */
cljs.core.async.__GT_t_cljs$core$async30808 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30808(ch__$1,cs__$1,meta30809){
return (new cljs.core.async.t_cljs$core$async30808(ch__$1,cs__$1,meta30809));
});

}

return (new cljs.core.async.t_cljs$core$async30808(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29590__auto___33156 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29591__auto__ = (function (){var switch__29311__auto__ = (function (state_30985){
var state_val_30986 = (state_30985[(1)]);
if((state_val_30986 === (7))){
var inst_30981 = (state_30985[(2)]);
var state_30985__$1 = state_30985;
var statearr_30999_33163 = state_30985__$1;
(statearr_30999_33163[(2)] = inst_30981);

(statearr_30999_33163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (20))){
var inst_30869 = (state_30985[(7)]);
var inst_30881 = cljs.core.first(inst_30869);
var inst_30882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30881,(0),null);
var inst_30883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30881,(1),null);
var state_30985__$1 = (function (){var statearr_31006 = state_30985;
(statearr_31006[(8)] = inst_30882);

return statearr_31006;
})();
if(cljs.core.truth_(inst_30883)){
var statearr_31010_33165 = state_30985__$1;
(statearr_31010_33165[(1)] = (22));

} else {
var statearr_31011_33166 = state_30985__$1;
(statearr_31011_33166[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (27))){
var inst_30915 = (state_30985[(9)]);
var inst_30834 = (state_30985[(10)]);
var inst_30926 = (state_30985[(11)]);
var inst_30917 = (state_30985[(12)]);
var inst_30926__$1 = cljs.core._nth(inst_30915,inst_30917);
var inst_30927 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30926__$1,inst_30834,done);
var state_30985__$1 = (function (){var statearr_31016 = state_30985;
(statearr_31016[(11)] = inst_30926__$1);

return statearr_31016;
})();
if(cljs.core.truth_(inst_30927)){
var statearr_31017_33167 = state_30985__$1;
(statearr_31017_33167[(1)] = (30));

} else {
var statearr_31018_33168 = state_30985__$1;
(statearr_31018_33168[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (1))){
var state_30985__$1 = state_30985;
var statearr_31019_33169 = state_30985__$1;
(statearr_31019_33169[(2)] = null);

(statearr_31019_33169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (24))){
var inst_30869 = (state_30985[(7)]);
var inst_30890 = (state_30985[(2)]);
var inst_30891 = cljs.core.next(inst_30869);
var inst_30843 = inst_30891;
var inst_30844 = null;
var inst_30845 = (0);
var inst_30846 = (0);
var state_30985__$1 = (function (){var statearr_31025 = state_30985;
(statearr_31025[(13)] = inst_30846);

(statearr_31025[(14)] = inst_30890);

(statearr_31025[(15)] = inst_30844);

(statearr_31025[(16)] = inst_30843);

(statearr_31025[(17)] = inst_30845);

return statearr_31025;
})();
var statearr_31026_33174 = state_30985__$1;
(statearr_31026_33174[(2)] = null);

(statearr_31026_33174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (39))){
var state_30985__$1 = state_30985;
var statearr_31030_33178 = state_30985__$1;
(statearr_31030_33178[(2)] = null);

(statearr_31030_33178[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (4))){
var inst_30834 = (state_30985[(10)]);
var inst_30834__$1 = (state_30985[(2)]);
var inst_30835 = (inst_30834__$1 == null);
var state_30985__$1 = (function (){var statearr_31031 = state_30985;
(statearr_31031[(10)] = inst_30834__$1);

return statearr_31031;
})();
if(cljs.core.truth_(inst_30835)){
var statearr_31033_33182 = state_30985__$1;
(statearr_31033_33182[(1)] = (5));

} else {
var statearr_31034_33183 = state_30985__$1;
(statearr_31034_33183[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (15))){
var inst_30846 = (state_30985[(13)]);
var inst_30844 = (state_30985[(15)]);
var inst_30843 = (state_30985[(16)]);
var inst_30845 = (state_30985[(17)]);
var inst_30865 = (state_30985[(2)]);
var inst_30866 = (inst_30846 + (1));
var tmp31027 = inst_30844;
var tmp31028 = inst_30843;
var tmp31029 = inst_30845;
var inst_30843__$1 = tmp31028;
var inst_30844__$1 = tmp31027;
var inst_30845__$1 = tmp31029;
var inst_30846__$1 = inst_30866;
var state_30985__$1 = (function (){var statearr_31042 = state_30985;
(statearr_31042[(13)] = inst_30846__$1);

(statearr_31042[(15)] = inst_30844__$1);

(statearr_31042[(16)] = inst_30843__$1);

(statearr_31042[(18)] = inst_30865);

(statearr_31042[(17)] = inst_30845__$1);

return statearr_31042;
})();
var statearr_31043_33185 = state_30985__$1;
(statearr_31043_33185[(2)] = null);

(statearr_31043_33185[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (21))){
var inst_30894 = (state_30985[(2)]);
var state_30985__$1 = state_30985;
var statearr_31048_33186 = state_30985__$1;
(statearr_31048_33186[(2)] = inst_30894);

(statearr_31048_33186[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (31))){
var inst_30926 = (state_30985[(11)]);
var inst_30930 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30926);
var state_30985__$1 = state_30985;
var statearr_31051_33190 = state_30985__$1;
(statearr_31051_33190[(2)] = inst_30930);

(statearr_31051_33190[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (32))){
var inst_30915 = (state_30985[(9)]);
var inst_30914 = (state_30985[(19)]);
var inst_30917 = (state_30985[(12)]);
var inst_30916 = (state_30985[(20)]);
var inst_30932 = (state_30985[(2)]);
var inst_30934 = (inst_30917 + (1));
var tmp31044 = inst_30915;
var tmp31045 = inst_30914;
var tmp31046 = inst_30916;
var inst_30914__$1 = tmp31045;
var inst_30915__$1 = tmp31044;
var inst_30916__$1 = tmp31046;
var inst_30917__$1 = inst_30934;
var state_30985__$1 = (function (){var statearr_31053 = state_30985;
(statearr_31053[(9)] = inst_30915__$1);

(statearr_31053[(19)] = inst_30914__$1);

(statearr_31053[(12)] = inst_30917__$1);

(statearr_31053[(20)] = inst_30916__$1);

(statearr_31053[(21)] = inst_30932);

return statearr_31053;
})();
var statearr_31054_33195 = state_30985__$1;
(statearr_31054_33195[(2)] = null);

(statearr_31054_33195[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (40))){
var inst_30952 = (state_30985[(22)]);
var inst_30956 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30952);
var state_30985__$1 = state_30985;
var statearr_31055_33196 = state_30985__$1;
(statearr_31055_33196[(2)] = inst_30956);

(statearr_31055_33196[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (33))){
var inst_30939 = (state_30985[(23)]);
var inst_30942 = cljs.core.chunked_seq_QMARK_(inst_30939);
var state_30985__$1 = state_30985;
if(inst_30942){
var statearr_31056_33197 = state_30985__$1;
(statearr_31056_33197[(1)] = (36));

} else {
var statearr_31058_33198 = state_30985__$1;
(statearr_31058_33198[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (13))){
var inst_30859 = (state_30985[(24)]);
var inst_30862 = cljs.core.async.close_BANG_(inst_30859);
var state_30985__$1 = state_30985;
var statearr_31059_33202 = state_30985__$1;
(statearr_31059_33202[(2)] = inst_30862);

(statearr_31059_33202[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (22))){
var inst_30882 = (state_30985[(8)]);
var inst_30887 = cljs.core.async.close_BANG_(inst_30882);
var state_30985__$1 = state_30985;
var statearr_31060_33203 = state_30985__$1;
(statearr_31060_33203[(2)] = inst_30887);

(statearr_31060_33203[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (36))){
var inst_30939 = (state_30985[(23)]);
var inst_30945 = cljs.core.chunk_first(inst_30939);
var inst_30947 = cljs.core.chunk_rest(inst_30939);
var inst_30949 = cljs.core.count(inst_30945);
var inst_30914 = inst_30947;
var inst_30915 = inst_30945;
var inst_30916 = inst_30949;
var inst_30917 = (0);
var state_30985__$1 = (function (){var statearr_31061 = state_30985;
(statearr_31061[(9)] = inst_30915);

(statearr_31061[(19)] = inst_30914);

(statearr_31061[(12)] = inst_30917);

(statearr_31061[(20)] = inst_30916);

return statearr_31061;
})();
var statearr_31063_33208 = state_30985__$1;
(statearr_31063_33208[(2)] = null);

(statearr_31063_33208[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (41))){
var inst_30939 = (state_30985[(23)]);
var inst_30959 = (state_30985[(2)]);
var inst_30960 = cljs.core.next(inst_30939);
var inst_30914 = inst_30960;
var inst_30915 = null;
var inst_30916 = (0);
var inst_30917 = (0);
var state_30985__$1 = (function (){var statearr_31064 = state_30985;
(statearr_31064[(9)] = inst_30915);

(statearr_31064[(19)] = inst_30914);

(statearr_31064[(12)] = inst_30917);

(statearr_31064[(20)] = inst_30916);

(statearr_31064[(25)] = inst_30959);

return statearr_31064;
})();
var statearr_31065_33212 = state_30985__$1;
(statearr_31065_33212[(2)] = null);

(statearr_31065_33212[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (43))){
var state_30985__$1 = state_30985;
var statearr_31067_33213 = state_30985__$1;
(statearr_31067_33213[(2)] = null);

(statearr_31067_33213[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (29))){
var inst_30968 = (state_30985[(2)]);
var state_30985__$1 = state_30985;
var statearr_31069_33214 = state_30985__$1;
(statearr_31069_33214[(2)] = inst_30968);

(statearr_31069_33214[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (44))){
var inst_30978 = (state_30985[(2)]);
var state_30985__$1 = (function (){var statearr_31070 = state_30985;
(statearr_31070[(26)] = inst_30978);

return statearr_31070;
})();
var statearr_31071_33215 = state_30985__$1;
(statearr_31071_33215[(2)] = null);

(statearr_31071_33215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (6))){
var inst_30904 = (state_30985[(27)]);
var inst_30903 = cljs.core.deref(cs);
var inst_30904__$1 = cljs.core.keys(inst_30903);
var inst_30905 = cljs.core.count(inst_30904__$1);
var inst_30908 = cljs.core.reset_BANG_(dctr,inst_30905);
var inst_30913 = cljs.core.seq(inst_30904__$1);
var inst_30914 = inst_30913;
var inst_30915 = null;
var inst_30916 = (0);
var inst_30917 = (0);
var state_30985__$1 = (function (){var statearr_31073 = state_30985;
(statearr_31073[(9)] = inst_30915);

(statearr_31073[(19)] = inst_30914);

(statearr_31073[(28)] = inst_30908);

(statearr_31073[(27)] = inst_30904__$1);

(statearr_31073[(12)] = inst_30917);

(statearr_31073[(20)] = inst_30916);

return statearr_31073;
})();
var statearr_31075_33217 = state_30985__$1;
(statearr_31075_33217[(2)] = null);

(statearr_31075_33217[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (28))){
var inst_30914 = (state_30985[(19)]);
var inst_30939 = (state_30985[(23)]);
var inst_30939__$1 = cljs.core.seq(inst_30914);
var state_30985__$1 = (function (){var statearr_31077 = state_30985;
(statearr_31077[(23)] = inst_30939__$1);

return statearr_31077;
})();
if(inst_30939__$1){
var statearr_31078_33218 = state_30985__$1;
(statearr_31078_33218[(1)] = (33));

} else {
var statearr_31079_33219 = state_30985__$1;
(statearr_31079_33219[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (25))){
var inst_30917 = (state_30985[(12)]);
var inst_30916 = (state_30985[(20)]);
var inst_30922 = (inst_30917 < inst_30916);
var inst_30923 = inst_30922;
var state_30985__$1 = state_30985;
if(cljs.core.truth_(inst_30923)){
var statearr_31082_33221 = state_30985__$1;
(statearr_31082_33221[(1)] = (27));

} else {
var statearr_31083_33222 = state_30985__$1;
(statearr_31083_33222[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (34))){
var state_30985__$1 = state_30985;
var statearr_31084_33223 = state_30985__$1;
(statearr_31084_33223[(2)] = null);

(statearr_31084_33223[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (17))){
var state_30985__$1 = state_30985;
var statearr_31086_33224 = state_30985__$1;
(statearr_31086_33224[(2)] = null);

(statearr_31086_33224[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (3))){
var inst_30983 = (state_30985[(2)]);
var state_30985__$1 = state_30985;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30985__$1,inst_30983);
} else {
if((state_val_30986 === (12))){
var inst_30899 = (state_30985[(2)]);
var state_30985__$1 = state_30985;
var statearr_31087_33225 = state_30985__$1;
(statearr_31087_33225[(2)] = inst_30899);

(statearr_31087_33225[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (2))){
var state_30985__$1 = state_30985;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30985__$1,(4),ch);
} else {
if((state_val_30986 === (23))){
var state_30985__$1 = state_30985;
var statearr_31091_33226 = state_30985__$1;
(statearr_31091_33226[(2)] = null);

(statearr_31091_33226[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (35))){
var inst_30966 = (state_30985[(2)]);
var state_30985__$1 = state_30985;
var statearr_31093_33231 = state_30985__$1;
(statearr_31093_33231[(2)] = inst_30966);

(statearr_31093_33231[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (19))){
var inst_30869 = (state_30985[(7)]);
var inst_30873 = cljs.core.chunk_first(inst_30869);
var inst_30874 = cljs.core.chunk_rest(inst_30869);
var inst_30875 = cljs.core.count(inst_30873);
var inst_30843 = inst_30874;
var inst_30844 = inst_30873;
var inst_30845 = inst_30875;
var inst_30846 = (0);
var state_30985__$1 = (function (){var statearr_31096 = state_30985;
(statearr_31096[(13)] = inst_30846);

(statearr_31096[(15)] = inst_30844);

(statearr_31096[(16)] = inst_30843);

(statearr_31096[(17)] = inst_30845);

return statearr_31096;
})();
var statearr_31098_33235 = state_30985__$1;
(statearr_31098_33235[(2)] = null);

(statearr_31098_33235[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (11))){
var inst_30843 = (state_30985[(16)]);
var inst_30869 = (state_30985[(7)]);
var inst_30869__$1 = cljs.core.seq(inst_30843);
var state_30985__$1 = (function (){var statearr_31100 = state_30985;
(statearr_31100[(7)] = inst_30869__$1);

return statearr_31100;
})();
if(inst_30869__$1){
var statearr_31101_33237 = state_30985__$1;
(statearr_31101_33237[(1)] = (16));

} else {
var statearr_31102_33238 = state_30985__$1;
(statearr_31102_33238[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (9))){
var inst_30901 = (state_30985[(2)]);
var state_30985__$1 = state_30985;
var statearr_31105_33239 = state_30985__$1;
(statearr_31105_33239[(2)] = inst_30901);

(statearr_31105_33239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (5))){
var inst_30841 = cljs.core.deref(cs);
var inst_30842 = cljs.core.seq(inst_30841);
var inst_30843 = inst_30842;
var inst_30844 = null;
var inst_30845 = (0);
var inst_30846 = (0);
var state_30985__$1 = (function (){var statearr_31107 = state_30985;
(statearr_31107[(13)] = inst_30846);

(statearr_31107[(15)] = inst_30844);

(statearr_31107[(16)] = inst_30843);

(statearr_31107[(17)] = inst_30845);

return statearr_31107;
})();
var statearr_31108_33240 = state_30985__$1;
(statearr_31108_33240[(2)] = null);

(statearr_31108_33240[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (14))){
var state_30985__$1 = state_30985;
var statearr_31110_33241 = state_30985__$1;
(statearr_31110_33241[(2)] = null);

(statearr_31110_33241[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (45))){
var inst_30975 = (state_30985[(2)]);
var state_30985__$1 = state_30985;
var statearr_31112_33242 = state_30985__$1;
(statearr_31112_33242[(2)] = inst_30975);

(statearr_31112_33242[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (26))){
var inst_30904 = (state_30985[(27)]);
var inst_30970 = (state_30985[(2)]);
var inst_30972 = cljs.core.seq(inst_30904);
var state_30985__$1 = (function (){var statearr_31113 = state_30985;
(statearr_31113[(29)] = inst_30970);

return statearr_31113;
})();
if(inst_30972){
var statearr_31114_33246 = state_30985__$1;
(statearr_31114_33246[(1)] = (42));

} else {
var statearr_31115_33247 = state_30985__$1;
(statearr_31115_33247[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (16))){
var inst_30869 = (state_30985[(7)]);
var inst_30871 = cljs.core.chunked_seq_QMARK_(inst_30869);
var state_30985__$1 = state_30985;
if(inst_30871){
var statearr_31117_33249 = state_30985__$1;
(statearr_31117_33249[(1)] = (19));

} else {
var statearr_31119_33250 = state_30985__$1;
(statearr_31119_33250[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (38))){
var inst_30963 = (state_30985[(2)]);
var state_30985__$1 = state_30985;
var statearr_31120_33251 = state_30985__$1;
(statearr_31120_33251[(2)] = inst_30963);

(statearr_31120_33251[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (30))){
var state_30985__$1 = state_30985;
var statearr_31122_33252 = state_30985__$1;
(statearr_31122_33252[(2)] = null);

(statearr_31122_33252[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (10))){
var inst_30846 = (state_30985[(13)]);
var inst_30844 = (state_30985[(15)]);
var inst_30858 = cljs.core._nth(inst_30844,inst_30846);
var inst_30859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30858,(0),null);
var inst_30860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30858,(1),null);
var state_30985__$1 = (function (){var statearr_31125 = state_30985;
(statearr_31125[(24)] = inst_30859);

return statearr_31125;
})();
if(cljs.core.truth_(inst_30860)){
var statearr_31126_33257 = state_30985__$1;
(statearr_31126_33257[(1)] = (13));

} else {
var statearr_31127_33258 = state_30985__$1;
(statearr_31127_33258[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (18))){
var inst_30897 = (state_30985[(2)]);
var state_30985__$1 = state_30985;
var statearr_31128_33259 = state_30985__$1;
(statearr_31128_33259[(2)] = inst_30897);

(statearr_31128_33259[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (42))){
var state_30985__$1 = state_30985;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30985__$1,(45),dchan);
} else {
if((state_val_30986 === (37))){
var inst_30834 = (state_30985[(10)]);
var inst_30952 = (state_30985[(22)]);
var inst_30939 = (state_30985[(23)]);
var inst_30952__$1 = cljs.core.first(inst_30939);
var inst_30953 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30952__$1,inst_30834,done);
var state_30985__$1 = (function (){var statearr_31129 = state_30985;
(statearr_31129[(22)] = inst_30952__$1);

return statearr_31129;
})();
if(cljs.core.truth_(inst_30953)){
var statearr_31130_33260 = state_30985__$1;
(statearr_31130_33260[(1)] = (39));

} else {
var statearr_31131_33261 = state_30985__$1;
(statearr_31131_33261[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (8))){
var inst_30846 = (state_30985[(13)]);
var inst_30845 = (state_30985[(17)]);
var inst_30849 = (inst_30846 < inst_30845);
var inst_30850 = inst_30849;
var state_30985__$1 = state_30985;
if(cljs.core.truth_(inst_30850)){
var statearr_31133_33262 = state_30985__$1;
(statearr_31133_33262[(1)] = (10));

} else {
var statearr_31134_33263 = state_30985__$1;
(statearr_31134_33263[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__29313__auto__ = null;
var cljs$core$async$mult_$_state_machine__29313__auto____0 = (function (){
var statearr_31135 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31135[(0)] = cljs$core$async$mult_$_state_machine__29313__auto__);

(statearr_31135[(1)] = (1));

return statearr_31135;
});
var cljs$core$async$mult_$_state_machine__29313__auto____1 = (function (state_30985){
while(true){
var ret_value__29314__auto__ = (function (){try{while(true){
var result__29315__auto__ = switch__29311__auto__(state_30985);
if(cljs.core.keyword_identical_QMARK_(result__29315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29315__auto__;
}
break;
}
}catch (e31138){var ex__29316__auto__ = e31138;
var statearr_31140_33268 = state_30985;
(statearr_31140_33268[(2)] = ex__29316__auto__);


if(cljs.core.seq((state_30985[(4)]))){
var statearr_31142_33269 = state_30985;
(statearr_31142_33269[(1)] = cljs.core.first((state_30985[(4)])));

} else {
throw ex__29316__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33270 = state_30985;
state_30985 = G__33270;
continue;
} else {
return ret_value__29314__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29313__auto__ = function(state_30985){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29313__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29313__auto____1.call(this,state_30985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29313__auto____0;
cljs$core$async$mult_$_state_machine__29313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29313__auto____1;
return cljs$core$async$mult_$_state_machine__29313__auto__;
})()
})();
var state__29592__auto__ = (function (){var statearr_31145 = f__29591__auto__();
(statearr_31145[(6)] = c__29590__auto___33156);

return statearr_31145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29592__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31154 = arguments.length;
switch (G__31154) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_33273 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_33273(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33274 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_33274(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33284 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33284(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33289 = (function (m,state_map){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4510__auto__.call(null,m,state_map));
} else {
var m__4508__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4508__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_33289(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33291 = (function (m,mode){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4510__auto__.call(null,m,mode));
} else {
var m__4508__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4508__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33291(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___33294 = arguments.length;
var i__4819__auto___33295 = (0);
while(true){
if((i__4819__auto___33295 < len__4818__auto___33294)){
args__4824__auto__.push((arguments[i__4819__auto___33295]));

var G__33299 = (i__4819__auto___33295 + (1));
i__4819__auto___33295 = G__33299;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31235){
var map__31237 = p__31235;
var map__31237__$1 = cljs.core.__destructure_map(map__31237);
var opts = map__31237__$1;
var statearr_31239_33301 = state;
(statearr_31239_33301[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31242_33302 = state;
(statearr_31242_33302[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_31243_33303 = state;
(statearr_31243_33303[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31229){
var G__31230 = cljs.core.first(seq31229);
var seq31229__$1 = cljs.core.next(seq31229);
var G__31232 = cljs.core.first(seq31229__$1);
var seq31229__$2 = cljs.core.next(seq31229__$1);
var G__31233 = cljs.core.first(seq31229__$2);
var seq31229__$3 = cljs.core.next(seq31229__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31230,G__31232,G__31233,seq31229__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31274 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31274 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31275){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31275 = meta31275;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31276,meta31275__$1){
var self__ = this;
var _31276__$1 = this;
return (new cljs.core.async.t_cljs$core$async31274(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31275__$1));
}));

(cljs.core.async.t_cljs$core$async31274.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31276){
var self__ = this;
var _31276__$1 = this;
return self__.meta31275;
}));

(cljs.core.async.t_cljs$core$async31274.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31274.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31274.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31274.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31274.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31274.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31274.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31274.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31274.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31275","meta31275",-353248295,null)], null);
}));

(cljs.core.async.t_cljs$core$async31274.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31274.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31274");

(cljs.core.async.t_cljs$core$async31274.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async31274");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31274.
 */
cljs.core.async.__GT_t_cljs$core$async31274 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31274(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31275){
return (new cljs.core.async.t_cljs$core$async31274(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31275));
});

}

return (new cljs.core.async.t_cljs$core$async31274(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29590__auto___33332 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29591__auto__ = (function (){var switch__29311__auto__ = (function (state_31385){
var state_val_31386 = (state_31385[(1)]);
if((state_val_31386 === (7))){
var inst_31343 = (state_31385[(2)]);
var state_31385__$1 = state_31385;
if(cljs.core.truth_(inst_31343)){
var statearr_31391_33342 = state_31385__$1;
(statearr_31391_33342[(1)] = (8));

} else {
var statearr_31392_33343 = state_31385__$1;
(statearr_31392_33343[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (20))){
var inst_31336 = (state_31385[(7)]);
var state_31385__$1 = state_31385;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31385__$1,(23),out,inst_31336);
} else {
if((state_val_31386 === (1))){
var inst_31319 = calc_state();
var inst_31320 = cljs.core.__destructure_map(inst_31319);
var inst_31321 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31320,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31322 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31320,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31323 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31320,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31324 = inst_31319;
var state_31385__$1 = (function (){var statearr_31394 = state_31385;
(statearr_31394[(8)] = inst_31322);

(statearr_31394[(9)] = inst_31323);

(statearr_31394[(10)] = inst_31321);

(statearr_31394[(11)] = inst_31324);

return statearr_31394;
})();
var statearr_31395_33345 = state_31385__$1;
(statearr_31395_33345[(2)] = null);

(statearr_31395_33345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (24))){
var inst_31327 = (state_31385[(12)]);
var inst_31324 = inst_31327;
var state_31385__$1 = (function (){var statearr_31396 = state_31385;
(statearr_31396[(11)] = inst_31324);

return statearr_31396;
})();
var statearr_31397_33346 = state_31385__$1;
(statearr_31397_33346[(2)] = null);

(statearr_31397_33346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (4))){
var inst_31338 = (state_31385[(13)]);
var inst_31336 = (state_31385[(7)]);
var inst_31335 = (state_31385[(2)]);
var inst_31336__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31335,(0),null);
var inst_31337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31335,(1),null);
var inst_31338__$1 = (inst_31336__$1 == null);
var state_31385__$1 = (function (){var statearr_31398 = state_31385;
(statearr_31398[(13)] = inst_31338__$1);

(statearr_31398[(14)] = inst_31337);

(statearr_31398[(7)] = inst_31336__$1);

return statearr_31398;
})();
if(cljs.core.truth_(inst_31338__$1)){
var statearr_31399_33347 = state_31385__$1;
(statearr_31399_33347[(1)] = (5));

} else {
var statearr_31400_33351 = state_31385__$1;
(statearr_31400_33351[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (15))){
var inst_31328 = (state_31385[(15)]);
var inst_31358 = (state_31385[(16)]);
var inst_31358__$1 = cljs.core.empty_QMARK_(inst_31328);
var state_31385__$1 = (function (){var statearr_31401 = state_31385;
(statearr_31401[(16)] = inst_31358__$1);

return statearr_31401;
})();
if(inst_31358__$1){
var statearr_31402_33353 = state_31385__$1;
(statearr_31402_33353[(1)] = (17));

} else {
var statearr_31403_33354 = state_31385__$1;
(statearr_31403_33354[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (21))){
var inst_31327 = (state_31385[(12)]);
var inst_31324 = inst_31327;
var state_31385__$1 = (function (){var statearr_31404 = state_31385;
(statearr_31404[(11)] = inst_31324);

return statearr_31404;
})();
var statearr_31405_33355 = state_31385__$1;
(statearr_31405_33355[(2)] = null);

(statearr_31405_33355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (13))){
var inst_31350 = (state_31385[(2)]);
var inst_31351 = calc_state();
var inst_31324 = inst_31351;
var state_31385__$1 = (function (){var statearr_31406 = state_31385;
(statearr_31406[(17)] = inst_31350);

(statearr_31406[(11)] = inst_31324);

return statearr_31406;
})();
var statearr_31407_33356 = state_31385__$1;
(statearr_31407_33356[(2)] = null);

(statearr_31407_33356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (22))){
var inst_31379 = (state_31385[(2)]);
var state_31385__$1 = state_31385;
var statearr_31408_33357 = state_31385__$1;
(statearr_31408_33357[(2)] = inst_31379);

(statearr_31408_33357[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (6))){
var inst_31337 = (state_31385[(14)]);
var inst_31341 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31337,change);
var state_31385__$1 = state_31385;
var statearr_31409_33361 = state_31385__$1;
(statearr_31409_33361[(2)] = inst_31341);

(statearr_31409_33361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (25))){
var state_31385__$1 = state_31385;
var statearr_31410_33362 = state_31385__$1;
(statearr_31410_33362[(2)] = null);

(statearr_31410_33362[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (17))){
var inst_31337 = (state_31385[(14)]);
var inst_31329 = (state_31385[(18)]);
var inst_31361 = (inst_31329.cljs$core$IFn$_invoke$arity$1 ? inst_31329.cljs$core$IFn$_invoke$arity$1(inst_31337) : inst_31329.call(null,inst_31337));
var inst_31362 = cljs.core.not(inst_31361);
var state_31385__$1 = state_31385;
var statearr_31414_33364 = state_31385__$1;
(statearr_31414_33364[(2)] = inst_31362);

(statearr_31414_33364[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (3))){
var inst_31383 = (state_31385[(2)]);
var state_31385__$1 = state_31385;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31385__$1,inst_31383);
} else {
if((state_val_31386 === (12))){
var state_31385__$1 = state_31385;
var statearr_31415_33365 = state_31385__$1;
(statearr_31415_33365[(2)] = null);

(statearr_31415_33365[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (2))){
var inst_31324 = (state_31385[(11)]);
var inst_31327 = (state_31385[(12)]);
var inst_31327__$1 = cljs.core.__destructure_map(inst_31324);
var inst_31328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31327__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31329 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31327__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31327__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31385__$1 = (function (){var statearr_31416 = state_31385;
(statearr_31416[(15)] = inst_31328);

(statearr_31416[(12)] = inst_31327__$1);

(statearr_31416[(18)] = inst_31329);

return statearr_31416;
})();
return cljs.core.async.ioc_alts_BANG_(state_31385__$1,(4),inst_31330);
} else {
if((state_val_31386 === (23))){
var inst_31370 = (state_31385[(2)]);
var state_31385__$1 = state_31385;
if(cljs.core.truth_(inst_31370)){
var statearr_31417_33366 = state_31385__$1;
(statearr_31417_33366[(1)] = (24));

} else {
var statearr_31418_33367 = state_31385__$1;
(statearr_31418_33367[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (19))){
var inst_31365 = (state_31385[(2)]);
var state_31385__$1 = state_31385;
var statearr_31428_33371 = state_31385__$1;
(statearr_31428_33371[(2)] = inst_31365);

(statearr_31428_33371[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (11))){
var inst_31337 = (state_31385[(14)]);
var inst_31347 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31337);
var state_31385__$1 = state_31385;
var statearr_31432_33372 = state_31385__$1;
(statearr_31432_33372[(2)] = inst_31347);

(statearr_31432_33372[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (9))){
var inst_31328 = (state_31385[(15)]);
var inst_31354 = (state_31385[(19)]);
var inst_31337 = (state_31385[(14)]);
var inst_31354__$1 = (inst_31328.cljs$core$IFn$_invoke$arity$1 ? inst_31328.cljs$core$IFn$_invoke$arity$1(inst_31337) : inst_31328.call(null,inst_31337));
var state_31385__$1 = (function (){var statearr_31434 = state_31385;
(statearr_31434[(19)] = inst_31354__$1);

return statearr_31434;
})();
if(cljs.core.truth_(inst_31354__$1)){
var statearr_31436_33380 = state_31385__$1;
(statearr_31436_33380[(1)] = (14));

} else {
var statearr_31438_33381 = state_31385__$1;
(statearr_31438_33381[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (5))){
var inst_31338 = (state_31385[(13)]);
var state_31385__$1 = state_31385;
var statearr_31440_33382 = state_31385__$1;
(statearr_31440_33382[(2)] = inst_31338);

(statearr_31440_33382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (14))){
var inst_31354 = (state_31385[(19)]);
var state_31385__$1 = state_31385;
var statearr_31441_33383 = state_31385__$1;
(statearr_31441_33383[(2)] = inst_31354);

(statearr_31441_33383[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (26))){
var inst_31375 = (state_31385[(2)]);
var state_31385__$1 = state_31385;
var statearr_31444_33384 = state_31385__$1;
(statearr_31444_33384[(2)] = inst_31375);

(statearr_31444_33384[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (16))){
var inst_31367 = (state_31385[(2)]);
var state_31385__$1 = state_31385;
if(cljs.core.truth_(inst_31367)){
var statearr_31447_33385 = state_31385__$1;
(statearr_31447_33385[(1)] = (20));

} else {
var statearr_31448_33386 = state_31385__$1;
(statearr_31448_33386[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (10))){
var inst_31381 = (state_31385[(2)]);
var state_31385__$1 = state_31385;
var statearr_31450_33387 = state_31385__$1;
(statearr_31450_33387[(2)] = inst_31381);

(statearr_31450_33387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (18))){
var inst_31358 = (state_31385[(16)]);
var state_31385__$1 = state_31385;
var statearr_31453_33388 = state_31385__$1;
(statearr_31453_33388[(2)] = inst_31358);

(statearr_31453_33388[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (8))){
var inst_31336 = (state_31385[(7)]);
var inst_31345 = (inst_31336 == null);
var state_31385__$1 = state_31385;
if(cljs.core.truth_(inst_31345)){
var statearr_31457_33389 = state_31385__$1;
(statearr_31457_33389[(1)] = (11));

} else {
var statearr_31458_33390 = state_31385__$1;
(statearr_31458_33390[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__29313__auto__ = null;
var cljs$core$async$mix_$_state_machine__29313__auto____0 = (function (){
var statearr_31461 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31461[(0)] = cljs$core$async$mix_$_state_machine__29313__auto__);

(statearr_31461[(1)] = (1));

return statearr_31461;
});
var cljs$core$async$mix_$_state_machine__29313__auto____1 = (function (state_31385){
while(true){
var ret_value__29314__auto__ = (function (){try{while(true){
var result__29315__auto__ = switch__29311__auto__(state_31385);
if(cljs.core.keyword_identical_QMARK_(result__29315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29315__auto__;
}
break;
}
}catch (e31464){var ex__29316__auto__ = e31464;
var statearr_31466_33391 = state_31385;
(statearr_31466_33391[(2)] = ex__29316__auto__);


if(cljs.core.seq((state_31385[(4)]))){
var statearr_31469_33392 = state_31385;
(statearr_31469_33392[(1)] = cljs.core.first((state_31385[(4)])));

} else {
throw ex__29316__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33393 = state_31385;
state_31385 = G__33393;
continue;
} else {
return ret_value__29314__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29313__auto__ = function(state_31385){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29313__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29313__auto____1.call(this,state_31385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29313__auto____0;
cljs$core$async$mix_$_state_machine__29313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29313__auto____1;
return cljs$core$async$mix_$_state_machine__29313__auto__;
})()
})();
var state__29592__auto__ = (function (){var statearr_31478 = f__29591__auto__();
(statearr_31478[(6)] = c__29590__auto___33332);

return statearr_31478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29592__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_33398 = (function (p,v,ch,close_QMARK_){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4510__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4508__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_33398(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33399 = (function (p,v,ch){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4510__auto__.call(null,p,v,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4508__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_33399(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33407 = (function() {
var G__33408 = null;
var G__33408__1 = (function (p){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4510__auto__.call(null,p));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4508__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__33408__2 = (function (p,v){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4510__auto__.call(null,p,v));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4508__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__33408 = function(p,v){
switch(arguments.length){
case 1:
return G__33408__1.call(this,p);
case 2:
return G__33408__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33408.cljs$core$IFn$_invoke$arity$1 = G__33408__1;
G__33408.cljs$core$IFn$_invoke$arity$2 = G__33408__2;
return G__33408;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31551 = arguments.length;
switch (G__31551) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33407(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33407(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31563 = arguments.length;
switch (G__31563) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31560_SHARP_){
if(cljs.core.truth_((p1__31560_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31560_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31560_SHARP_.call(null,topic)))){
return p1__31560_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31560_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31579 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31579 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31580){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31580 = meta31580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31581,meta31580__$1){
var self__ = this;
var _31581__$1 = this;
return (new cljs.core.async.t_cljs$core$async31579(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31580__$1));
}));

(cljs.core.async.t_cljs$core$async31579.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31581){
var self__ = this;
var _31581__$1 = this;
return self__.meta31580;
}));

(cljs.core.async.t_cljs$core$async31579.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31579.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31579.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31579.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31579.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31579.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31579.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31579.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31580","meta31580",1634363732,null)], null);
}));

(cljs.core.async.t_cljs$core$async31579.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31579.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31579");

(cljs.core.async.t_cljs$core$async31579.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async31579");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31579.
 */
cljs.core.async.__GT_t_cljs$core$async31579 = (function cljs$core$async$__GT_t_cljs$core$async31579(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31580){
return (new cljs.core.async.t_cljs$core$async31579(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31580));
});

}

return (new cljs.core.async.t_cljs$core$async31579(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29590__auto___33413 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29591__auto__ = (function (){var switch__29311__auto__ = (function (state_31679){
var state_val_31680 = (state_31679[(1)]);
if((state_val_31680 === (7))){
var inst_31674 = (state_31679[(2)]);
var state_31679__$1 = state_31679;
var statearr_31682_33420 = state_31679__$1;
(statearr_31682_33420[(2)] = inst_31674);

(statearr_31682_33420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (20))){
var state_31679__$1 = state_31679;
var statearr_31683_33421 = state_31679__$1;
(statearr_31683_33421[(2)] = null);

(statearr_31683_33421[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (1))){
var state_31679__$1 = state_31679;
var statearr_31690_33422 = state_31679__$1;
(statearr_31690_33422[(2)] = null);

(statearr_31690_33422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (24))){
var inst_31655 = (state_31679[(7)]);
var inst_31666 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31655);
var state_31679__$1 = state_31679;
var statearr_31692_33423 = state_31679__$1;
(statearr_31692_33423[(2)] = inst_31666);

(statearr_31692_33423[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (4))){
var inst_31598 = (state_31679[(8)]);
var inst_31598__$1 = (state_31679[(2)]);
var inst_31599 = (inst_31598__$1 == null);
var state_31679__$1 = (function (){var statearr_31698 = state_31679;
(statearr_31698[(8)] = inst_31598__$1);

return statearr_31698;
})();
if(cljs.core.truth_(inst_31599)){
var statearr_31699_33424 = state_31679__$1;
(statearr_31699_33424[(1)] = (5));

} else {
var statearr_31700_33425 = state_31679__$1;
(statearr_31700_33425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (15))){
var inst_31648 = (state_31679[(2)]);
var state_31679__$1 = state_31679;
var statearr_31701_33426 = state_31679__$1;
(statearr_31701_33426[(2)] = inst_31648);

(statearr_31701_33426[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (21))){
var inst_31671 = (state_31679[(2)]);
var state_31679__$1 = (function (){var statearr_31702 = state_31679;
(statearr_31702[(9)] = inst_31671);

return statearr_31702;
})();
var statearr_31704_33427 = state_31679__$1;
(statearr_31704_33427[(2)] = null);

(statearr_31704_33427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (13))){
var inst_31623 = (state_31679[(10)]);
var inst_31625 = cljs.core.chunked_seq_QMARK_(inst_31623);
var state_31679__$1 = state_31679;
if(inst_31625){
var statearr_31705_33428 = state_31679__$1;
(statearr_31705_33428[(1)] = (16));

} else {
var statearr_31707_33429 = state_31679__$1;
(statearr_31707_33429[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (22))){
var inst_31663 = (state_31679[(2)]);
var state_31679__$1 = state_31679;
if(cljs.core.truth_(inst_31663)){
var statearr_31711_33430 = state_31679__$1;
(statearr_31711_33430[(1)] = (23));

} else {
var statearr_31713_33431 = state_31679__$1;
(statearr_31713_33431[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (6))){
var inst_31658 = (state_31679[(11)]);
var inst_31598 = (state_31679[(8)]);
var inst_31655 = (state_31679[(7)]);
var inst_31655__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31598) : topic_fn.call(null,inst_31598));
var inst_31657 = cljs.core.deref(mults);
var inst_31658__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31657,inst_31655__$1);
var state_31679__$1 = (function (){var statearr_31720 = state_31679;
(statearr_31720[(11)] = inst_31658__$1);

(statearr_31720[(7)] = inst_31655__$1);

return statearr_31720;
})();
if(cljs.core.truth_(inst_31658__$1)){
var statearr_31721_33432 = state_31679__$1;
(statearr_31721_33432[(1)] = (19));

} else {
var statearr_31722_33433 = state_31679__$1;
(statearr_31722_33433[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (25))){
var inst_31668 = (state_31679[(2)]);
var state_31679__$1 = state_31679;
var statearr_31723_33434 = state_31679__$1;
(statearr_31723_33434[(2)] = inst_31668);

(statearr_31723_33434[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (17))){
var inst_31623 = (state_31679[(10)]);
var inst_31636 = cljs.core.first(inst_31623);
var inst_31637 = cljs.core.async.muxch_STAR_(inst_31636);
var inst_31638 = cljs.core.async.close_BANG_(inst_31637);
var inst_31639 = cljs.core.next(inst_31623);
var inst_31608 = inst_31639;
var inst_31609 = null;
var inst_31610 = (0);
var inst_31611 = (0);
var state_31679__$1 = (function (){var statearr_31725 = state_31679;
(statearr_31725[(12)] = inst_31610);

(statearr_31725[(13)] = inst_31638);

(statearr_31725[(14)] = inst_31611);

(statearr_31725[(15)] = inst_31609);

(statearr_31725[(16)] = inst_31608);

return statearr_31725;
})();
var statearr_31727_33435 = state_31679__$1;
(statearr_31727_33435[(2)] = null);

(statearr_31727_33435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (3))){
var inst_31677 = (state_31679[(2)]);
var state_31679__$1 = state_31679;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31679__$1,inst_31677);
} else {
if((state_val_31680 === (12))){
var inst_31650 = (state_31679[(2)]);
var state_31679__$1 = state_31679;
var statearr_31729_33436 = state_31679__$1;
(statearr_31729_33436[(2)] = inst_31650);

(statearr_31729_33436[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (2))){
var state_31679__$1 = state_31679;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31679__$1,(4),ch);
} else {
if((state_val_31680 === (23))){
var state_31679__$1 = state_31679;
var statearr_31730_33437 = state_31679__$1;
(statearr_31730_33437[(2)] = null);

(statearr_31730_33437[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (19))){
var inst_31658 = (state_31679[(11)]);
var inst_31598 = (state_31679[(8)]);
var inst_31661 = cljs.core.async.muxch_STAR_(inst_31658);
var state_31679__$1 = state_31679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31679__$1,(22),inst_31661,inst_31598);
} else {
if((state_val_31680 === (11))){
var inst_31623 = (state_31679[(10)]);
var inst_31608 = (state_31679[(16)]);
var inst_31623__$1 = cljs.core.seq(inst_31608);
var state_31679__$1 = (function (){var statearr_31731 = state_31679;
(statearr_31731[(10)] = inst_31623__$1);

return statearr_31731;
})();
if(inst_31623__$1){
var statearr_31732_33438 = state_31679__$1;
(statearr_31732_33438[(1)] = (13));

} else {
var statearr_31733_33439 = state_31679__$1;
(statearr_31733_33439[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (9))){
var inst_31652 = (state_31679[(2)]);
var state_31679__$1 = state_31679;
var statearr_31734_33440 = state_31679__$1;
(statearr_31734_33440[(2)] = inst_31652);

(statearr_31734_33440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (5))){
var inst_31605 = cljs.core.deref(mults);
var inst_31606 = cljs.core.vals(inst_31605);
var inst_31607 = cljs.core.seq(inst_31606);
var inst_31608 = inst_31607;
var inst_31609 = null;
var inst_31610 = (0);
var inst_31611 = (0);
var state_31679__$1 = (function (){var statearr_31736 = state_31679;
(statearr_31736[(12)] = inst_31610);

(statearr_31736[(14)] = inst_31611);

(statearr_31736[(15)] = inst_31609);

(statearr_31736[(16)] = inst_31608);

return statearr_31736;
})();
var statearr_31737_33441 = state_31679__$1;
(statearr_31737_33441[(2)] = null);

(statearr_31737_33441[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (14))){
var state_31679__$1 = state_31679;
var statearr_31745_33442 = state_31679__$1;
(statearr_31745_33442[(2)] = null);

(statearr_31745_33442[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (16))){
var inst_31623 = (state_31679[(10)]);
var inst_31628 = cljs.core.chunk_first(inst_31623);
var inst_31629 = cljs.core.chunk_rest(inst_31623);
var inst_31630 = cljs.core.count(inst_31628);
var inst_31608 = inst_31629;
var inst_31609 = inst_31628;
var inst_31610 = inst_31630;
var inst_31611 = (0);
var state_31679__$1 = (function (){var statearr_31749 = state_31679;
(statearr_31749[(12)] = inst_31610);

(statearr_31749[(14)] = inst_31611);

(statearr_31749[(15)] = inst_31609);

(statearr_31749[(16)] = inst_31608);

return statearr_31749;
})();
var statearr_31752_33443 = state_31679__$1;
(statearr_31752_33443[(2)] = null);

(statearr_31752_33443[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (10))){
var inst_31610 = (state_31679[(12)]);
var inst_31611 = (state_31679[(14)]);
var inst_31609 = (state_31679[(15)]);
var inst_31608 = (state_31679[(16)]);
var inst_31617 = cljs.core._nth(inst_31609,inst_31611);
var inst_31618 = cljs.core.async.muxch_STAR_(inst_31617);
var inst_31619 = cljs.core.async.close_BANG_(inst_31618);
var inst_31620 = (inst_31611 + (1));
var tmp31742 = inst_31610;
var tmp31743 = inst_31609;
var tmp31744 = inst_31608;
var inst_31608__$1 = tmp31744;
var inst_31609__$1 = tmp31743;
var inst_31610__$1 = tmp31742;
var inst_31611__$1 = inst_31620;
var state_31679__$1 = (function (){var statearr_31757 = state_31679;
(statearr_31757[(12)] = inst_31610__$1);

(statearr_31757[(17)] = inst_31619);

(statearr_31757[(14)] = inst_31611__$1);

(statearr_31757[(15)] = inst_31609__$1);

(statearr_31757[(16)] = inst_31608__$1);

return statearr_31757;
})();
var statearr_31758_33444 = state_31679__$1;
(statearr_31758_33444[(2)] = null);

(statearr_31758_33444[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (18))){
var inst_31644 = (state_31679[(2)]);
var state_31679__$1 = state_31679;
var statearr_31759_33445 = state_31679__$1;
(statearr_31759_33445[(2)] = inst_31644);

(statearr_31759_33445[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (8))){
var inst_31610 = (state_31679[(12)]);
var inst_31611 = (state_31679[(14)]);
var inst_31613 = (inst_31611 < inst_31610);
var inst_31614 = inst_31613;
var state_31679__$1 = state_31679;
if(cljs.core.truth_(inst_31614)){
var statearr_31768_33446 = state_31679__$1;
(statearr_31768_33446[(1)] = (10));

} else {
var statearr_31769_33447 = state_31679__$1;
(statearr_31769_33447[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29313__auto__ = null;
var cljs$core$async$state_machine__29313__auto____0 = (function (){
var statearr_31775 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31775[(0)] = cljs$core$async$state_machine__29313__auto__);

(statearr_31775[(1)] = (1));

return statearr_31775;
});
var cljs$core$async$state_machine__29313__auto____1 = (function (state_31679){
while(true){
var ret_value__29314__auto__ = (function (){try{while(true){
var result__29315__auto__ = switch__29311__auto__(state_31679);
if(cljs.core.keyword_identical_QMARK_(result__29315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29315__auto__;
}
break;
}
}catch (e31784){var ex__29316__auto__ = e31784;
var statearr_31787_33448 = state_31679;
(statearr_31787_33448[(2)] = ex__29316__auto__);


if(cljs.core.seq((state_31679[(4)]))){
var statearr_31788_33449 = state_31679;
(statearr_31788_33449[(1)] = cljs.core.first((state_31679[(4)])));

} else {
throw ex__29316__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33450 = state_31679;
state_31679 = G__33450;
continue;
} else {
return ret_value__29314__auto__;
}
break;
}
});
cljs$core$async$state_machine__29313__auto__ = function(state_31679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29313__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29313__auto____1.call(this,state_31679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29313__auto____0;
cljs$core$async$state_machine__29313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29313__auto____1;
return cljs$core$async$state_machine__29313__auto__;
})()
})();
var state__29592__auto__ = (function (){var statearr_31793 = f__29591__auto__();
(statearr_31793[(6)] = c__29590__auto___33413);

return statearr_31793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29592__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31799 = arguments.length;
switch (G__31799) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31811 = arguments.length;
switch (G__31811) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31815 = arguments.length;
switch (G__31815) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__29590__auto___33459 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29591__auto__ = (function (){var switch__29311__auto__ = (function (state_31862){
var state_val_31863 = (state_31862[(1)]);
if((state_val_31863 === (7))){
var state_31862__$1 = state_31862;
var statearr_31877_33461 = state_31862__$1;
(statearr_31877_33461[(2)] = null);

(statearr_31877_33461[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31863 === (1))){
var state_31862__$1 = state_31862;
var statearr_31878_33462 = state_31862__$1;
(statearr_31878_33462[(2)] = null);

(statearr_31878_33462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31863 === (4))){
var inst_31822 = (state_31862[(7)]);
var inst_31821 = (state_31862[(8)]);
var inst_31824 = (inst_31822 < inst_31821);
var state_31862__$1 = state_31862;
if(cljs.core.truth_(inst_31824)){
var statearr_31887_33464 = state_31862__$1;
(statearr_31887_33464[(1)] = (6));

} else {
var statearr_31888_33465 = state_31862__$1;
(statearr_31888_33465[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31863 === (15))){
var inst_31847 = (state_31862[(9)]);
var inst_31852 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31847);
var state_31862__$1 = state_31862;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31862__$1,(17),out,inst_31852);
} else {
if((state_val_31863 === (13))){
var inst_31847 = (state_31862[(9)]);
var inst_31847__$1 = (state_31862[(2)]);
var inst_31848 = cljs.core.some(cljs.core.nil_QMARK_,inst_31847__$1);
var state_31862__$1 = (function (){var statearr_31890 = state_31862;
(statearr_31890[(9)] = inst_31847__$1);

return statearr_31890;
})();
if(cljs.core.truth_(inst_31848)){
var statearr_31891_33466 = state_31862__$1;
(statearr_31891_33466[(1)] = (14));

} else {
var statearr_31892_33467 = state_31862__$1;
(statearr_31892_33467[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31863 === (6))){
var state_31862__$1 = state_31862;
var statearr_31893_33468 = state_31862__$1;
(statearr_31893_33468[(2)] = null);

(statearr_31893_33468[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31863 === (17))){
var inst_31854 = (state_31862[(2)]);
var state_31862__$1 = (function (){var statearr_31895 = state_31862;
(statearr_31895[(10)] = inst_31854);

return statearr_31895;
})();
var statearr_31896_33469 = state_31862__$1;
(statearr_31896_33469[(2)] = null);

(statearr_31896_33469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31863 === (3))){
var inst_31859 = (state_31862[(2)]);
var state_31862__$1 = state_31862;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31862__$1,inst_31859);
} else {
if((state_val_31863 === (12))){
var _ = (function (){var statearr_31897 = state_31862;
(statearr_31897[(4)] = cljs.core.rest((state_31862[(4)])));

return statearr_31897;
})();
var state_31862__$1 = state_31862;
var ex31894 = (state_31862__$1[(2)]);
var statearr_31898_33470 = state_31862__$1;
(statearr_31898_33470[(5)] = ex31894);


if((ex31894 instanceof Object)){
var statearr_31899_33471 = state_31862__$1;
(statearr_31899_33471[(1)] = (11));

(statearr_31899_33471[(5)] = null);

} else {
throw ex31894;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31863 === (2))){
var inst_31820 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31821 = cnt;
var inst_31822 = (0);
var state_31862__$1 = (function (){var statearr_31903 = state_31862;
(statearr_31903[(7)] = inst_31822);

(statearr_31903[(11)] = inst_31820);

(statearr_31903[(8)] = inst_31821);

return statearr_31903;
})();
var statearr_31904_33472 = state_31862__$1;
(statearr_31904_33472[(2)] = null);

(statearr_31904_33472[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31863 === (11))){
var inst_31826 = (state_31862[(2)]);
var inst_31827 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31862__$1 = (function (){var statearr_31910 = state_31862;
(statearr_31910[(12)] = inst_31826);

return statearr_31910;
})();
var statearr_31912_33473 = state_31862__$1;
(statearr_31912_33473[(2)] = inst_31827);

(statearr_31912_33473[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31863 === (9))){
var inst_31822 = (state_31862[(7)]);
var _ = (function (){var statearr_31913 = state_31862;
(statearr_31913[(4)] = cljs.core.cons((12),(state_31862[(4)])));

return statearr_31913;
})();
var inst_31833 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31822) : chs__$1.call(null,inst_31822));
var inst_31834 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31822) : done.call(null,inst_31822));
var inst_31835 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31833,inst_31834);
var ___$1 = (function (){var statearr_31914 = state_31862;
(statearr_31914[(4)] = cljs.core.rest((state_31862[(4)])));

return statearr_31914;
})();
var state_31862__$1 = state_31862;
var statearr_31915_33474 = state_31862__$1;
(statearr_31915_33474[(2)] = inst_31835);

(statearr_31915_33474[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31863 === (5))){
var inst_31845 = (state_31862[(2)]);
var state_31862__$1 = (function (){var statearr_31921 = state_31862;
(statearr_31921[(13)] = inst_31845);

return statearr_31921;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31862__$1,(13),dchan);
} else {
if((state_val_31863 === (14))){
var inst_31850 = cljs.core.async.close_BANG_(out);
var state_31862__$1 = state_31862;
var statearr_31946_33476 = state_31862__$1;
(statearr_31946_33476[(2)] = inst_31850);

(statearr_31946_33476[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31863 === (16))){
var inst_31857 = (state_31862[(2)]);
var state_31862__$1 = state_31862;
var statearr_31947_33478 = state_31862__$1;
(statearr_31947_33478[(2)] = inst_31857);

(statearr_31947_33478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31863 === (10))){
var inst_31822 = (state_31862[(7)]);
var inst_31838 = (state_31862[(2)]);
var inst_31839 = (inst_31822 + (1));
var inst_31822__$1 = inst_31839;
var state_31862__$1 = (function (){var statearr_31948 = state_31862;
(statearr_31948[(7)] = inst_31822__$1);

(statearr_31948[(14)] = inst_31838);

return statearr_31948;
})();
var statearr_31949_33481 = state_31862__$1;
(statearr_31949_33481[(2)] = null);

(statearr_31949_33481[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31863 === (8))){
var inst_31843 = (state_31862[(2)]);
var state_31862__$1 = state_31862;
var statearr_31950_33482 = state_31862__$1;
(statearr_31950_33482[(2)] = inst_31843);

(statearr_31950_33482[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29313__auto__ = null;
var cljs$core$async$state_machine__29313__auto____0 = (function (){
var statearr_31952 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31952[(0)] = cljs$core$async$state_machine__29313__auto__);

(statearr_31952[(1)] = (1));

return statearr_31952;
});
var cljs$core$async$state_machine__29313__auto____1 = (function (state_31862){
while(true){
var ret_value__29314__auto__ = (function (){try{while(true){
var result__29315__auto__ = switch__29311__auto__(state_31862);
if(cljs.core.keyword_identical_QMARK_(result__29315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29315__auto__;
}
break;
}
}catch (e31958){var ex__29316__auto__ = e31958;
var statearr_31959_33483 = state_31862;
(statearr_31959_33483[(2)] = ex__29316__auto__);


if(cljs.core.seq((state_31862[(4)]))){
var statearr_31960_33484 = state_31862;
(statearr_31960_33484[(1)] = cljs.core.first((state_31862[(4)])));

} else {
throw ex__29316__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33485 = state_31862;
state_31862 = G__33485;
continue;
} else {
return ret_value__29314__auto__;
}
break;
}
});
cljs$core$async$state_machine__29313__auto__ = function(state_31862){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29313__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29313__auto____1.call(this,state_31862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29313__auto____0;
cljs$core$async$state_machine__29313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29313__auto____1;
return cljs$core$async$state_machine__29313__auto__;
})()
})();
var state__29592__auto__ = (function (){var statearr_31961 = f__29591__auto__();
(statearr_31961[(6)] = c__29590__auto___33459);

return statearr_31961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29592__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31966 = arguments.length;
switch (G__31966) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29590__auto___33487 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29591__auto__ = (function (){var switch__29311__auto__ = (function (state_31999){
var state_val_32000 = (state_31999[(1)]);
if((state_val_32000 === (7))){
var inst_31977 = (state_31999[(7)]);
var inst_31978 = (state_31999[(8)]);
var inst_31977__$1 = (state_31999[(2)]);
var inst_31978__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31977__$1,(0),null);
var inst_31979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31977__$1,(1),null);
var inst_31980 = (inst_31978__$1 == null);
var state_31999__$1 = (function (){var statearr_32001 = state_31999;
(statearr_32001[(7)] = inst_31977__$1);

(statearr_32001[(9)] = inst_31979);

(statearr_32001[(8)] = inst_31978__$1);

return statearr_32001;
})();
if(cljs.core.truth_(inst_31980)){
var statearr_32002_33490 = state_31999__$1;
(statearr_32002_33490[(1)] = (8));

} else {
var statearr_32003_33491 = state_31999__$1;
(statearr_32003_33491[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32000 === (1))){
var inst_31967 = cljs.core.vec(chs);
var inst_31968 = inst_31967;
var state_31999__$1 = (function (){var statearr_32005 = state_31999;
(statearr_32005[(10)] = inst_31968);

return statearr_32005;
})();
var statearr_32006_33492 = state_31999__$1;
(statearr_32006_33492[(2)] = null);

(statearr_32006_33492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32000 === (4))){
var inst_31968 = (state_31999[(10)]);
var state_31999__$1 = state_31999;
return cljs.core.async.ioc_alts_BANG_(state_31999__$1,(7),inst_31968);
} else {
if((state_val_32000 === (6))){
var inst_31995 = (state_31999[(2)]);
var state_31999__$1 = state_31999;
var statearr_32007_33494 = state_31999__$1;
(statearr_32007_33494[(2)] = inst_31995);

(statearr_32007_33494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32000 === (3))){
var inst_31997 = (state_31999[(2)]);
var state_31999__$1 = state_31999;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31999__$1,inst_31997);
} else {
if((state_val_32000 === (2))){
var inst_31968 = (state_31999[(10)]);
var inst_31970 = cljs.core.count(inst_31968);
var inst_31971 = (inst_31970 > (0));
var state_31999__$1 = state_31999;
if(cljs.core.truth_(inst_31971)){
var statearr_32009_33496 = state_31999__$1;
(statearr_32009_33496[(1)] = (4));

} else {
var statearr_32010_33497 = state_31999__$1;
(statearr_32010_33497[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32000 === (11))){
var inst_31968 = (state_31999[(10)]);
var inst_31988 = (state_31999[(2)]);
var tmp32008 = inst_31968;
var inst_31968__$1 = tmp32008;
var state_31999__$1 = (function (){var statearr_32011 = state_31999;
(statearr_32011[(11)] = inst_31988);

(statearr_32011[(10)] = inst_31968__$1);

return statearr_32011;
})();
var statearr_32012_33498 = state_31999__$1;
(statearr_32012_33498[(2)] = null);

(statearr_32012_33498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32000 === (9))){
var inst_31978 = (state_31999[(8)]);
var state_31999__$1 = state_31999;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31999__$1,(11),out,inst_31978);
} else {
if((state_val_32000 === (5))){
var inst_31993 = cljs.core.async.close_BANG_(out);
var state_31999__$1 = state_31999;
var statearr_32014_33499 = state_31999__$1;
(statearr_32014_33499[(2)] = inst_31993);

(statearr_32014_33499[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32000 === (10))){
var inst_31991 = (state_31999[(2)]);
var state_31999__$1 = state_31999;
var statearr_32018_33500 = state_31999__$1;
(statearr_32018_33500[(2)] = inst_31991);

(statearr_32018_33500[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32000 === (8))){
var inst_31977 = (state_31999[(7)]);
var inst_31979 = (state_31999[(9)]);
var inst_31968 = (state_31999[(10)]);
var inst_31978 = (state_31999[(8)]);
var inst_31983 = (function (){var cs = inst_31968;
var vec__31973 = inst_31977;
var v = inst_31978;
var c = inst_31979;
return (function (p1__31963_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31963_SHARP_);
});
})();
var inst_31984 = cljs.core.filterv(inst_31983,inst_31968);
var inst_31968__$1 = inst_31984;
var state_31999__$1 = (function (){var statearr_32019 = state_31999;
(statearr_32019[(10)] = inst_31968__$1);

return statearr_32019;
})();
var statearr_32020_33501 = state_31999__$1;
(statearr_32020_33501[(2)] = null);

(statearr_32020_33501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29313__auto__ = null;
var cljs$core$async$state_machine__29313__auto____0 = (function (){
var statearr_32022 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32022[(0)] = cljs$core$async$state_machine__29313__auto__);

(statearr_32022[(1)] = (1));

return statearr_32022;
});
var cljs$core$async$state_machine__29313__auto____1 = (function (state_31999){
while(true){
var ret_value__29314__auto__ = (function (){try{while(true){
var result__29315__auto__ = switch__29311__auto__(state_31999);
if(cljs.core.keyword_identical_QMARK_(result__29315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29315__auto__;
}
break;
}
}catch (e32023){var ex__29316__auto__ = e32023;
var statearr_32024_33502 = state_31999;
(statearr_32024_33502[(2)] = ex__29316__auto__);


if(cljs.core.seq((state_31999[(4)]))){
var statearr_32027_33503 = state_31999;
(statearr_32027_33503[(1)] = cljs.core.first((state_31999[(4)])));

} else {
throw ex__29316__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33504 = state_31999;
state_31999 = G__33504;
continue;
} else {
return ret_value__29314__auto__;
}
break;
}
});
cljs$core$async$state_machine__29313__auto__ = function(state_31999){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29313__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29313__auto____1.call(this,state_31999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29313__auto____0;
cljs$core$async$state_machine__29313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29313__auto____1;
return cljs$core$async$state_machine__29313__auto__;
})()
})();
var state__29592__auto__ = (function (){var statearr_32028 = f__29591__auto__();
(statearr_32028[(6)] = c__29590__auto___33487);

return statearr_32028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29592__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32034 = arguments.length;
switch (G__32034) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29590__auto___33506 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29591__auto__ = (function (){var switch__29311__auto__ = (function (state_32060){
var state_val_32061 = (state_32060[(1)]);
if((state_val_32061 === (7))){
var inst_32040 = (state_32060[(7)]);
var inst_32040__$1 = (state_32060[(2)]);
var inst_32043 = (inst_32040__$1 == null);
var inst_32044 = cljs.core.not(inst_32043);
var state_32060__$1 = (function (){var statearr_32063 = state_32060;
(statearr_32063[(7)] = inst_32040__$1);

return statearr_32063;
})();
if(inst_32044){
var statearr_32064_33507 = state_32060__$1;
(statearr_32064_33507[(1)] = (8));

} else {
var statearr_32065_33508 = state_32060__$1;
(statearr_32065_33508[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (1))){
var inst_32035 = (0);
var state_32060__$1 = (function (){var statearr_32066 = state_32060;
(statearr_32066[(8)] = inst_32035);

return statearr_32066;
})();
var statearr_32067_33509 = state_32060__$1;
(statearr_32067_33509[(2)] = null);

(statearr_32067_33509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (4))){
var state_32060__$1 = state_32060;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32060__$1,(7),ch);
} else {
if((state_val_32061 === (6))){
var inst_32055 = (state_32060[(2)]);
var state_32060__$1 = state_32060;
var statearr_32071_33511 = state_32060__$1;
(statearr_32071_33511[(2)] = inst_32055);

(statearr_32071_33511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (3))){
var inst_32057 = (state_32060[(2)]);
var inst_32058 = cljs.core.async.close_BANG_(out);
var state_32060__$1 = (function (){var statearr_32073 = state_32060;
(statearr_32073[(9)] = inst_32057);

return statearr_32073;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32060__$1,inst_32058);
} else {
if((state_val_32061 === (2))){
var inst_32035 = (state_32060[(8)]);
var inst_32037 = (inst_32035 < n);
var state_32060__$1 = state_32060;
if(cljs.core.truth_(inst_32037)){
var statearr_32074_33513 = state_32060__$1;
(statearr_32074_33513[(1)] = (4));

} else {
var statearr_32075_33514 = state_32060__$1;
(statearr_32075_33514[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (11))){
var inst_32035 = (state_32060[(8)]);
var inst_32047 = (state_32060[(2)]);
var inst_32048 = (inst_32035 + (1));
var inst_32035__$1 = inst_32048;
var state_32060__$1 = (function (){var statearr_32076 = state_32060;
(statearr_32076[(8)] = inst_32035__$1);

(statearr_32076[(10)] = inst_32047);

return statearr_32076;
})();
var statearr_32077_33515 = state_32060__$1;
(statearr_32077_33515[(2)] = null);

(statearr_32077_33515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (9))){
var state_32060__$1 = state_32060;
var statearr_32078_33516 = state_32060__$1;
(statearr_32078_33516[(2)] = null);

(statearr_32078_33516[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (5))){
var state_32060__$1 = state_32060;
var statearr_32079_33517 = state_32060__$1;
(statearr_32079_33517[(2)] = null);

(statearr_32079_33517[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (10))){
var inst_32052 = (state_32060[(2)]);
var state_32060__$1 = state_32060;
var statearr_32080_33518 = state_32060__$1;
(statearr_32080_33518[(2)] = inst_32052);

(statearr_32080_33518[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (8))){
var inst_32040 = (state_32060[(7)]);
var state_32060__$1 = state_32060;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32060__$1,(11),out,inst_32040);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29313__auto__ = null;
var cljs$core$async$state_machine__29313__auto____0 = (function (){
var statearr_32082 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32082[(0)] = cljs$core$async$state_machine__29313__auto__);

(statearr_32082[(1)] = (1));

return statearr_32082;
});
var cljs$core$async$state_machine__29313__auto____1 = (function (state_32060){
while(true){
var ret_value__29314__auto__ = (function (){try{while(true){
var result__29315__auto__ = switch__29311__auto__(state_32060);
if(cljs.core.keyword_identical_QMARK_(result__29315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29315__auto__;
}
break;
}
}catch (e32083){var ex__29316__auto__ = e32083;
var statearr_32084_33519 = state_32060;
(statearr_32084_33519[(2)] = ex__29316__auto__);


if(cljs.core.seq((state_32060[(4)]))){
var statearr_32085_33521 = state_32060;
(statearr_32085_33521[(1)] = cljs.core.first((state_32060[(4)])));

} else {
throw ex__29316__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33522 = state_32060;
state_32060 = G__33522;
continue;
} else {
return ret_value__29314__auto__;
}
break;
}
});
cljs$core$async$state_machine__29313__auto__ = function(state_32060){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29313__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29313__auto____1.call(this,state_32060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29313__auto____0;
cljs$core$async$state_machine__29313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29313__auto____1;
return cljs$core$async$state_machine__29313__auto__;
})()
})();
var state__29592__auto__ = (function (){var statearr_32090 = f__29591__auto__();
(statearr_32090[(6)] = c__29590__auto___33506);

return statearr_32090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29592__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32092 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32092 = (function (f,ch,meta32094){
this.f = f;
this.ch = ch;
this.meta32094 = meta32094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32095,meta32094__$1){
var self__ = this;
var _32095__$1 = this;
return (new cljs.core.async.t_cljs$core$async32092(self__.f,self__.ch,meta32094__$1));
}));

(cljs.core.async.t_cljs$core$async32092.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32095){
var self__ = this;
var _32095__$1 = this;
return self__.meta32094;
}));

(cljs.core.async.t_cljs$core$async32092.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32092.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32092.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32092.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32092.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32100 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32100 = (function (f,ch,meta32094,_,fn1,meta32101){
this.f = f;
this.ch = ch;
this.meta32094 = meta32094;
this._ = _;
this.fn1 = fn1;
this.meta32101 = meta32101;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32102,meta32101__$1){
var self__ = this;
var _32102__$1 = this;
return (new cljs.core.async.t_cljs$core$async32100(self__.f,self__.ch,self__.meta32094,self__._,self__.fn1,meta32101__$1));
}));

(cljs.core.async.t_cljs$core$async32100.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32102){
var self__ = this;
var _32102__$1 = this;
return self__.meta32101;
}));

(cljs.core.async.t_cljs$core$async32100.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32100.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32100.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32100.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32091_SHARP_){
var G__32104 = (((p1__32091_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32091_SHARP_) : self__.f.call(null,p1__32091_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32104) : f1.call(null,G__32104));
});
}));

(cljs.core.async.t_cljs$core$async32100.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32094","meta32094",1373574989,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32092","cljs.core.async/t_cljs$core$async32092",232443947,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32101","meta32101",-1806764896,null)], null);
}));

(cljs.core.async.t_cljs$core$async32100.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32100.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32100");

(cljs.core.async.t_cljs$core$async32100.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32100");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32100.
 */
cljs.core.async.__GT_t_cljs$core$async32100 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32100(f__$1,ch__$1,meta32094__$1,___$2,fn1__$1,meta32101){
return (new cljs.core.async.t_cljs$core$async32100(f__$1,ch__$1,meta32094__$1,___$2,fn1__$1,meta32101));
});

}

return (new cljs.core.async.t_cljs$core$async32100(self__.f,self__.ch,self__.meta32094,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32106 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32106) : self__.f.call(null,G__32106));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32092.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32092.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32092.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32094","meta32094",1373574989,null)], null);
}));

(cljs.core.async.t_cljs$core$async32092.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32092.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32092");

(cljs.core.async.t_cljs$core$async32092.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32092");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32092.
 */
cljs.core.async.__GT_t_cljs$core$async32092 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32092(f__$1,ch__$1,meta32094){
return (new cljs.core.async.t_cljs$core$async32092(f__$1,ch__$1,meta32094));
});

}

return (new cljs.core.async.t_cljs$core$async32092(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32108 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32108 = (function (f,ch,meta32109){
this.f = f;
this.ch = ch;
this.meta32109 = meta32109;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32110,meta32109__$1){
var self__ = this;
var _32110__$1 = this;
return (new cljs.core.async.t_cljs$core$async32108(self__.f,self__.ch,meta32109__$1));
}));

(cljs.core.async.t_cljs$core$async32108.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32110){
var self__ = this;
var _32110__$1 = this;
return self__.meta32109;
}));

(cljs.core.async.t_cljs$core$async32108.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32108.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32108.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32108.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32108.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32108.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32108.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32109","meta32109",-2050790094,null)], null);
}));

(cljs.core.async.t_cljs$core$async32108.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32108.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32108");

(cljs.core.async.t_cljs$core$async32108.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32108");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32108.
 */
cljs.core.async.__GT_t_cljs$core$async32108 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32108(f__$1,ch__$1,meta32109){
return (new cljs.core.async.t_cljs$core$async32108(f__$1,ch__$1,meta32109));
});

}

return (new cljs.core.async.t_cljs$core$async32108(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32113 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32113 = (function (p,ch,meta32114){
this.p = p;
this.ch = ch;
this.meta32114 = meta32114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32115,meta32114__$1){
var self__ = this;
var _32115__$1 = this;
return (new cljs.core.async.t_cljs$core$async32113(self__.p,self__.ch,meta32114__$1));
}));

(cljs.core.async.t_cljs$core$async32113.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32115){
var self__ = this;
var _32115__$1 = this;
return self__.meta32114;
}));

(cljs.core.async.t_cljs$core$async32113.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32113.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32113.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32113.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32113.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32113.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32113.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32113.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32114","meta32114",-1501481273,null)], null);
}));

(cljs.core.async.t_cljs$core$async32113.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32113.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32113");

(cljs.core.async.t_cljs$core$async32113.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32113");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32113.
 */
cljs.core.async.__GT_t_cljs$core$async32113 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32113(p__$1,ch__$1,meta32114){
return (new cljs.core.async.t_cljs$core$async32113(p__$1,ch__$1,meta32114));
});

}

return (new cljs.core.async.t_cljs$core$async32113(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32123 = arguments.length;
switch (G__32123) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29590__auto___33539 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29591__auto__ = (function (){var switch__29311__auto__ = (function (state_32150){
var state_val_32151 = (state_32150[(1)]);
if((state_val_32151 === (7))){
var inst_32146 = (state_32150[(2)]);
var state_32150__$1 = state_32150;
var statearr_32158_33543 = state_32150__$1;
(statearr_32158_33543[(2)] = inst_32146);

(statearr_32158_33543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (1))){
var state_32150__$1 = state_32150;
var statearr_32159_33544 = state_32150__$1;
(statearr_32159_33544[(2)] = null);

(statearr_32159_33544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (4))){
var inst_32132 = (state_32150[(7)]);
var inst_32132__$1 = (state_32150[(2)]);
var inst_32133 = (inst_32132__$1 == null);
var state_32150__$1 = (function (){var statearr_32160 = state_32150;
(statearr_32160[(7)] = inst_32132__$1);

return statearr_32160;
})();
if(cljs.core.truth_(inst_32133)){
var statearr_32161_33545 = state_32150__$1;
(statearr_32161_33545[(1)] = (5));

} else {
var statearr_32162_33546 = state_32150__$1;
(statearr_32162_33546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (6))){
var inst_32132 = (state_32150[(7)]);
var inst_32137 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32132) : p.call(null,inst_32132));
var state_32150__$1 = state_32150;
if(cljs.core.truth_(inst_32137)){
var statearr_32163_33547 = state_32150__$1;
(statearr_32163_33547[(1)] = (8));

} else {
var statearr_32164_33548 = state_32150__$1;
(statearr_32164_33548[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (3))){
var inst_32148 = (state_32150[(2)]);
var state_32150__$1 = state_32150;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32150__$1,inst_32148);
} else {
if((state_val_32151 === (2))){
var state_32150__$1 = state_32150;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32150__$1,(4),ch);
} else {
if((state_val_32151 === (11))){
var inst_32140 = (state_32150[(2)]);
var state_32150__$1 = state_32150;
var statearr_32167_33549 = state_32150__$1;
(statearr_32167_33549[(2)] = inst_32140);

(statearr_32167_33549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (9))){
var state_32150__$1 = state_32150;
var statearr_32171_33550 = state_32150__$1;
(statearr_32171_33550[(2)] = null);

(statearr_32171_33550[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (5))){
var inst_32135 = cljs.core.async.close_BANG_(out);
var state_32150__$1 = state_32150;
var statearr_32173_33551 = state_32150__$1;
(statearr_32173_33551[(2)] = inst_32135);

(statearr_32173_33551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (10))){
var inst_32143 = (state_32150[(2)]);
var state_32150__$1 = (function (){var statearr_32175 = state_32150;
(statearr_32175[(8)] = inst_32143);

return statearr_32175;
})();
var statearr_32176_33552 = state_32150__$1;
(statearr_32176_33552[(2)] = null);

(statearr_32176_33552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32151 === (8))){
var inst_32132 = (state_32150[(7)]);
var state_32150__$1 = state_32150;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32150__$1,(11),out,inst_32132);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29313__auto__ = null;
var cljs$core$async$state_machine__29313__auto____0 = (function (){
var statearr_32179 = [null,null,null,null,null,null,null,null,null];
(statearr_32179[(0)] = cljs$core$async$state_machine__29313__auto__);

(statearr_32179[(1)] = (1));

return statearr_32179;
});
var cljs$core$async$state_machine__29313__auto____1 = (function (state_32150){
while(true){
var ret_value__29314__auto__ = (function (){try{while(true){
var result__29315__auto__ = switch__29311__auto__(state_32150);
if(cljs.core.keyword_identical_QMARK_(result__29315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29315__auto__;
}
break;
}
}catch (e32180){var ex__29316__auto__ = e32180;
var statearr_32181_33573 = state_32150;
(statearr_32181_33573[(2)] = ex__29316__auto__);


if(cljs.core.seq((state_32150[(4)]))){
var statearr_32182_33574 = state_32150;
(statearr_32182_33574[(1)] = cljs.core.first((state_32150[(4)])));

} else {
throw ex__29316__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33581 = state_32150;
state_32150 = G__33581;
continue;
} else {
return ret_value__29314__auto__;
}
break;
}
});
cljs$core$async$state_machine__29313__auto__ = function(state_32150){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29313__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29313__auto____1.call(this,state_32150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29313__auto____0;
cljs$core$async$state_machine__29313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29313__auto____1;
return cljs$core$async$state_machine__29313__auto__;
})()
})();
var state__29592__auto__ = (function (){var statearr_32188 = f__29591__auto__();
(statearr_32188[(6)] = c__29590__auto___33539);

return statearr_32188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29592__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32196 = arguments.length;
switch (G__32196) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29590__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29591__auto__ = (function (){var switch__29311__auto__ = (function (state_32267){
var state_val_32268 = (state_32267[(1)]);
if((state_val_32268 === (7))){
var inst_32261 = (state_32267[(2)]);
var state_32267__$1 = state_32267;
var statearr_32269_33592 = state_32267__$1;
(statearr_32269_33592[(2)] = inst_32261);

(statearr_32269_33592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (20))){
var inst_32229 = (state_32267[(7)]);
var inst_32242 = (state_32267[(2)]);
var inst_32243 = cljs.core.next(inst_32229);
var inst_32215 = inst_32243;
var inst_32216 = null;
var inst_32217 = (0);
var inst_32218 = (0);
var state_32267__$1 = (function (){var statearr_32270 = state_32267;
(statearr_32270[(8)] = inst_32216);

(statearr_32270[(9)] = inst_32217);

(statearr_32270[(10)] = inst_32218);

(statearr_32270[(11)] = inst_32215);

(statearr_32270[(12)] = inst_32242);

return statearr_32270;
})();
var statearr_32271_33601 = state_32267__$1;
(statearr_32271_33601[(2)] = null);

(statearr_32271_33601[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (1))){
var state_32267__$1 = state_32267;
var statearr_32272_33605 = state_32267__$1;
(statearr_32272_33605[(2)] = null);

(statearr_32272_33605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (4))){
var inst_32204 = (state_32267[(13)]);
var inst_32204__$1 = (state_32267[(2)]);
var inst_32205 = (inst_32204__$1 == null);
var state_32267__$1 = (function (){var statearr_32274 = state_32267;
(statearr_32274[(13)] = inst_32204__$1);

return statearr_32274;
})();
if(cljs.core.truth_(inst_32205)){
var statearr_32275_33609 = state_32267__$1;
(statearr_32275_33609[(1)] = (5));

} else {
var statearr_32277_33610 = state_32267__$1;
(statearr_32277_33610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (15))){
var state_32267__$1 = state_32267;
var statearr_32281_33611 = state_32267__$1;
(statearr_32281_33611[(2)] = null);

(statearr_32281_33611[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (21))){
var state_32267__$1 = state_32267;
var statearr_32282_33612 = state_32267__$1;
(statearr_32282_33612[(2)] = null);

(statearr_32282_33612[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (13))){
var inst_32216 = (state_32267[(8)]);
var inst_32217 = (state_32267[(9)]);
var inst_32218 = (state_32267[(10)]);
var inst_32215 = (state_32267[(11)]);
var inst_32225 = (state_32267[(2)]);
var inst_32226 = (inst_32218 + (1));
var tmp32278 = inst_32216;
var tmp32279 = inst_32217;
var tmp32280 = inst_32215;
var inst_32215__$1 = tmp32280;
var inst_32216__$1 = tmp32278;
var inst_32217__$1 = tmp32279;
var inst_32218__$1 = inst_32226;
var state_32267__$1 = (function (){var statearr_32285 = state_32267;
(statearr_32285[(8)] = inst_32216__$1);

(statearr_32285[(9)] = inst_32217__$1);

(statearr_32285[(10)] = inst_32218__$1);

(statearr_32285[(11)] = inst_32215__$1);

(statearr_32285[(14)] = inst_32225);

return statearr_32285;
})();
var statearr_32287_33616 = state_32267__$1;
(statearr_32287_33616[(2)] = null);

(statearr_32287_33616[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (22))){
var state_32267__$1 = state_32267;
var statearr_32288_33617 = state_32267__$1;
(statearr_32288_33617[(2)] = null);

(statearr_32288_33617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (6))){
var inst_32204 = (state_32267[(13)]);
var inst_32213 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32204) : f.call(null,inst_32204));
var inst_32214 = cljs.core.seq(inst_32213);
var inst_32215 = inst_32214;
var inst_32216 = null;
var inst_32217 = (0);
var inst_32218 = (0);
var state_32267__$1 = (function (){var statearr_32294 = state_32267;
(statearr_32294[(8)] = inst_32216);

(statearr_32294[(9)] = inst_32217);

(statearr_32294[(10)] = inst_32218);

(statearr_32294[(11)] = inst_32215);

return statearr_32294;
})();
var statearr_32295_33618 = state_32267__$1;
(statearr_32295_33618[(2)] = null);

(statearr_32295_33618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (17))){
var inst_32229 = (state_32267[(7)]);
var inst_32233 = cljs.core.chunk_first(inst_32229);
var inst_32236 = cljs.core.chunk_rest(inst_32229);
var inst_32237 = cljs.core.count(inst_32233);
var inst_32215 = inst_32236;
var inst_32216 = inst_32233;
var inst_32217 = inst_32237;
var inst_32218 = (0);
var state_32267__$1 = (function (){var statearr_32299 = state_32267;
(statearr_32299[(8)] = inst_32216);

(statearr_32299[(9)] = inst_32217);

(statearr_32299[(10)] = inst_32218);

(statearr_32299[(11)] = inst_32215);

return statearr_32299;
})();
var statearr_32300_33620 = state_32267__$1;
(statearr_32300_33620[(2)] = null);

(statearr_32300_33620[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (3))){
var inst_32264 = (state_32267[(2)]);
var state_32267__$1 = state_32267;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32267__$1,inst_32264);
} else {
if((state_val_32268 === (12))){
var inst_32251 = (state_32267[(2)]);
var state_32267__$1 = state_32267;
var statearr_32301_33622 = state_32267__$1;
(statearr_32301_33622[(2)] = inst_32251);

(statearr_32301_33622[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (2))){
var state_32267__$1 = state_32267;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32267__$1,(4),in$);
} else {
if((state_val_32268 === (23))){
var inst_32259 = (state_32267[(2)]);
var state_32267__$1 = state_32267;
var statearr_32303_33623 = state_32267__$1;
(statearr_32303_33623[(2)] = inst_32259);

(statearr_32303_33623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (19))){
var inst_32246 = (state_32267[(2)]);
var state_32267__$1 = state_32267;
var statearr_32304_33624 = state_32267__$1;
(statearr_32304_33624[(2)] = inst_32246);

(statearr_32304_33624[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (11))){
var inst_32229 = (state_32267[(7)]);
var inst_32215 = (state_32267[(11)]);
var inst_32229__$1 = cljs.core.seq(inst_32215);
var state_32267__$1 = (function (){var statearr_32305 = state_32267;
(statearr_32305[(7)] = inst_32229__$1);

return statearr_32305;
})();
if(inst_32229__$1){
var statearr_32306_33625 = state_32267__$1;
(statearr_32306_33625[(1)] = (14));

} else {
var statearr_32307_33626 = state_32267__$1;
(statearr_32307_33626[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (9))){
var inst_32253 = (state_32267[(2)]);
var inst_32254 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32267__$1 = (function (){var statearr_32308 = state_32267;
(statearr_32308[(15)] = inst_32253);

return statearr_32308;
})();
if(cljs.core.truth_(inst_32254)){
var statearr_32309_33627 = state_32267__$1;
(statearr_32309_33627[(1)] = (21));

} else {
var statearr_32310_33628 = state_32267__$1;
(statearr_32310_33628[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (5))){
var inst_32207 = cljs.core.async.close_BANG_(out);
var state_32267__$1 = state_32267;
var statearr_32311_33633 = state_32267__$1;
(statearr_32311_33633[(2)] = inst_32207);

(statearr_32311_33633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (14))){
var inst_32229 = (state_32267[(7)]);
var inst_32231 = cljs.core.chunked_seq_QMARK_(inst_32229);
var state_32267__$1 = state_32267;
if(inst_32231){
var statearr_32313_33634 = state_32267__$1;
(statearr_32313_33634[(1)] = (17));

} else {
var statearr_32314_33635 = state_32267__$1;
(statearr_32314_33635[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (16))){
var inst_32249 = (state_32267[(2)]);
var state_32267__$1 = state_32267;
var statearr_32315_33636 = state_32267__$1;
(statearr_32315_33636[(2)] = inst_32249);

(statearr_32315_33636[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (10))){
var inst_32216 = (state_32267[(8)]);
var inst_32218 = (state_32267[(10)]);
var inst_32223 = cljs.core._nth(inst_32216,inst_32218);
var state_32267__$1 = state_32267;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32267__$1,(13),out,inst_32223);
} else {
if((state_val_32268 === (18))){
var inst_32229 = (state_32267[(7)]);
var inst_32240 = cljs.core.first(inst_32229);
var state_32267__$1 = state_32267;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32267__$1,(20),out,inst_32240);
} else {
if((state_val_32268 === (8))){
var inst_32217 = (state_32267[(9)]);
var inst_32218 = (state_32267[(10)]);
var inst_32220 = (inst_32218 < inst_32217);
var inst_32221 = inst_32220;
var state_32267__$1 = state_32267;
if(cljs.core.truth_(inst_32221)){
var statearr_32316_33637 = state_32267__$1;
(statearr_32316_33637[(1)] = (10));

} else {
var statearr_32317_33638 = state_32267__$1;
(statearr_32317_33638[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29313__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29313__auto____0 = (function (){
var statearr_32319 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32319[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29313__auto__);

(statearr_32319[(1)] = (1));

return statearr_32319;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29313__auto____1 = (function (state_32267){
while(true){
var ret_value__29314__auto__ = (function (){try{while(true){
var result__29315__auto__ = switch__29311__auto__(state_32267);
if(cljs.core.keyword_identical_QMARK_(result__29315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29315__auto__;
}
break;
}
}catch (e32320){var ex__29316__auto__ = e32320;
var statearr_32321_33643 = state_32267;
(statearr_32321_33643[(2)] = ex__29316__auto__);


if(cljs.core.seq((state_32267[(4)]))){
var statearr_32322_33644 = state_32267;
(statearr_32322_33644[(1)] = cljs.core.first((state_32267[(4)])));

} else {
throw ex__29316__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33645 = state_32267;
state_32267 = G__33645;
continue;
} else {
return ret_value__29314__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29313__auto__ = function(state_32267){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29313__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29313__auto____1.call(this,state_32267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29313__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29313__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29313__auto__;
})()
})();
var state__29592__auto__ = (function (){var statearr_32323 = f__29591__auto__();
(statearr_32323[(6)] = c__29590__auto__);

return statearr_32323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29592__auto__);
}));

return c__29590__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32325 = arguments.length;
switch (G__32325) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32328 = arguments.length;
switch (G__32328) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32331 = arguments.length;
switch (G__32331) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29590__auto___33660 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29591__auto__ = (function (){var switch__29311__auto__ = (function (state_32356){
var state_val_32357 = (state_32356[(1)]);
if((state_val_32357 === (7))){
var inst_32351 = (state_32356[(2)]);
var state_32356__$1 = state_32356;
var statearr_32358_33661 = state_32356__$1;
(statearr_32358_33661[(2)] = inst_32351);

(statearr_32358_33661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (1))){
var inst_32333 = null;
var state_32356__$1 = (function (){var statearr_32359 = state_32356;
(statearr_32359[(7)] = inst_32333);

return statearr_32359;
})();
var statearr_32360_33663 = state_32356__$1;
(statearr_32360_33663[(2)] = null);

(statearr_32360_33663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (4))){
var inst_32336 = (state_32356[(8)]);
var inst_32336__$1 = (state_32356[(2)]);
var inst_32337 = (inst_32336__$1 == null);
var inst_32338 = cljs.core.not(inst_32337);
var state_32356__$1 = (function (){var statearr_32362 = state_32356;
(statearr_32362[(8)] = inst_32336__$1);

return statearr_32362;
})();
if(inst_32338){
var statearr_32363_33665 = state_32356__$1;
(statearr_32363_33665[(1)] = (5));

} else {
var statearr_32364_33666 = state_32356__$1;
(statearr_32364_33666[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (6))){
var state_32356__$1 = state_32356;
var statearr_32365_33668 = state_32356__$1;
(statearr_32365_33668[(2)] = null);

(statearr_32365_33668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (3))){
var inst_32353 = (state_32356[(2)]);
var inst_32354 = cljs.core.async.close_BANG_(out);
var state_32356__$1 = (function (){var statearr_32366 = state_32356;
(statearr_32366[(9)] = inst_32353);

return statearr_32366;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32356__$1,inst_32354);
} else {
if((state_val_32357 === (2))){
var state_32356__$1 = state_32356;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32356__$1,(4),ch);
} else {
if((state_val_32357 === (11))){
var inst_32336 = (state_32356[(8)]);
var inst_32345 = (state_32356[(2)]);
var inst_32333 = inst_32336;
var state_32356__$1 = (function (){var statearr_32367 = state_32356;
(statearr_32367[(10)] = inst_32345);

(statearr_32367[(7)] = inst_32333);

return statearr_32367;
})();
var statearr_32368_33673 = state_32356__$1;
(statearr_32368_33673[(2)] = null);

(statearr_32368_33673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (9))){
var inst_32336 = (state_32356[(8)]);
var state_32356__$1 = state_32356;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32356__$1,(11),out,inst_32336);
} else {
if((state_val_32357 === (5))){
var inst_32333 = (state_32356[(7)]);
var inst_32336 = (state_32356[(8)]);
var inst_32340 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32336,inst_32333);
var state_32356__$1 = state_32356;
if(inst_32340){
var statearr_32371_33674 = state_32356__$1;
(statearr_32371_33674[(1)] = (8));

} else {
var statearr_32372_33675 = state_32356__$1;
(statearr_32372_33675[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (10))){
var inst_32348 = (state_32356[(2)]);
var state_32356__$1 = state_32356;
var statearr_32373_33676 = state_32356__$1;
(statearr_32373_33676[(2)] = inst_32348);

(statearr_32373_33676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32357 === (8))){
var inst_32333 = (state_32356[(7)]);
var tmp32369 = inst_32333;
var inst_32333__$1 = tmp32369;
var state_32356__$1 = (function (){var statearr_32374 = state_32356;
(statearr_32374[(7)] = inst_32333__$1);

return statearr_32374;
})();
var statearr_32375_33677 = state_32356__$1;
(statearr_32375_33677[(2)] = null);

(statearr_32375_33677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29313__auto__ = null;
var cljs$core$async$state_machine__29313__auto____0 = (function (){
var statearr_32376 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32376[(0)] = cljs$core$async$state_machine__29313__auto__);

(statearr_32376[(1)] = (1));

return statearr_32376;
});
var cljs$core$async$state_machine__29313__auto____1 = (function (state_32356){
while(true){
var ret_value__29314__auto__ = (function (){try{while(true){
var result__29315__auto__ = switch__29311__auto__(state_32356);
if(cljs.core.keyword_identical_QMARK_(result__29315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29315__auto__;
}
break;
}
}catch (e32377){var ex__29316__auto__ = e32377;
var statearr_32378_33678 = state_32356;
(statearr_32378_33678[(2)] = ex__29316__auto__);


if(cljs.core.seq((state_32356[(4)]))){
var statearr_32379_33679 = state_32356;
(statearr_32379_33679[(1)] = cljs.core.first((state_32356[(4)])));

} else {
throw ex__29316__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33680 = state_32356;
state_32356 = G__33680;
continue;
} else {
return ret_value__29314__auto__;
}
break;
}
});
cljs$core$async$state_machine__29313__auto__ = function(state_32356){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29313__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29313__auto____1.call(this,state_32356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29313__auto____0;
cljs$core$async$state_machine__29313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29313__auto____1;
return cljs$core$async$state_machine__29313__auto__;
})()
})();
var state__29592__auto__ = (function (){var statearr_32381 = f__29591__auto__();
(statearr_32381[(6)] = c__29590__auto___33660);

return statearr_32381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29592__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32383 = arguments.length;
switch (G__32383) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29590__auto___33684 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29591__auto__ = (function (){var switch__29311__auto__ = (function (state_32423){
var state_val_32424 = (state_32423[(1)]);
if((state_val_32424 === (7))){
var inst_32419 = (state_32423[(2)]);
var state_32423__$1 = state_32423;
var statearr_32425_33685 = state_32423__$1;
(statearr_32425_33685[(2)] = inst_32419);

(statearr_32425_33685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (1))){
var inst_32385 = (new Array(n));
var inst_32386 = inst_32385;
var inst_32387 = (0);
var state_32423__$1 = (function (){var statearr_32427 = state_32423;
(statearr_32427[(7)] = inst_32386);

(statearr_32427[(8)] = inst_32387);

return statearr_32427;
})();
var statearr_32428_33686 = state_32423__$1;
(statearr_32428_33686[(2)] = null);

(statearr_32428_33686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (4))){
var inst_32390 = (state_32423[(9)]);
var inst_32390__$1 = (state_32423[(2)]);
var inst_32392 = (inst_32390__$1 == null);
var inst_32393 = cljs.core.not(inst_32392);
var state_32423__$1 = (function (){var statearr_32429 = state_32423;
(statearr_32429[(9)] = inst_32390__$1);

return statearr_32429;
})();
if(inst_32393){
var statearr_32430_33688 = state_32423__$1;
(statearr_32430_33688[(1)] = (5));

} else {
var statearr_32431_33689 = state_32423__$1;
(statearr_32431_33689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (15))){
var inst_32413 = (state_32423[(2)]);
var state_32423__$1 = state_32423;
var statearr_32432_33690 = state_32423__$1;
(statearr_32432_33690[(2)] = inst_32413);

(statearr_32432_33690[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (13))){
var state_32423__$1 = state_32423;
var statearr_32433_33692 = state_32423__$1;
(statearr_32433_33692[(2)] = null);

(statearr_32433_33692[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (6))){
var inst_32387 = (state_32423[(8)]);
var inst_32409 = (inst_32387 > (0));
var state_32423__$1 = state_32423;
if(cljs.core.truth_(inst_32409)){
var statearr_32434_33697 = state_32423__$1;
(statearr_32434_33697[(1)] = (12));

} else {
var statearr_32435_33698 = state_32423__$1;
(statearr_32435_33698[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (3))){
var inst_32421 = (state_32423[(2)]);
var state_32423__$1 = state_32423;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32423__$1,inst_32421);
} else {
if((state_val_32424 === (12))){
var inst_32386 = (state_32423[(7)]);
var inst_32411 = cljs.core.vec(inst_32386);
var state_32423__$1 = state_32423;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32423__$1,(15),out,inst_32411);
} else {
if((state_val_32424 === (2))){
var state_32423__$1 = state_32423;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32423__$1,(4),ch);
} else {
if((state_val_32424 === (11))){
var inst_32403 = (state_32423[(2)]);
var inst_32404 = (new Array(n));
var inst_32386 = inst_32404;
var inst_32387 = (0);
var state_32423__$1 = (function (){var statearr_32437 = state_32423;
(statearr_32437[(7)] = inst_32386);

(statearr_32437[(8)] = inst_32387);

(statearr_32437[(10)] = inst_32403);

return statearr_32437;
})();
var statearr_32438_33702 = state_32423__$1;
(statearr_32438_33702[(2)] = null);

(statearr_32438_33702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (9))){
var inst_32386 = (state_32423[(7)]);
var inst_32401 = cljs.core.vec(inst_32386);
var state_32423__$1 = state_32423;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32423__$1,(11),out,inst_32401);
} else {
if((state_val_32424 === (5))){
var inst_32386 = (state_32423[(7)]);
var inst_32387 = (state_32423[(8)]);
var inst_32390 = (state_32423[(9)]);
var inst_32396 = (state_32423[(11)]);
var inst_32395 = (inst_32386[inst_32387] = inst_32390);
var inst_32396__$1 = (inst_32387 + (1));
var inst_32397 = (inst_32396__$1 < n);
var state_32423__$1 = (function (){var statearr_32439 = state_32423;
(statearr_32439[(11)] = inst_32396__$1);

(statearr_32439[(12)] = inst_32395);

return statearr_32439;
})();
if(cljs.core.truth_(inst_32397)){
var statearr_32440_33703 = state_32423__$1;
(statearr_32440_33703[(1)] = (8));

} else {
var statearr_32441_33704 = state_32423__$1;
(statearr_32441_33704[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (14))){
var inst_32416 = (state_32423[(2)]);
var inst_32417 = cljs.core.async.close_BANG_(out);
var state_32423__$1 = (function (){var statearr_32444 = state_32423;
(statearr_32444[(13)] = inst_32416);

return statearr_32444;
})();
var statearr_32445_33705 = state_32423__$1;
(statearr_32445_33705[(2)] = inst_32417);

(statearr_32445_33705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (10))){
var inst_32407 = (state_32423[(2)]);
var state_32423__$1 = state_32423;
var statearr_32446_33706 = state_32423__$1;
(statearr_32446_33706[(2)] = inst_32407);

(statearr_32446_33706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (8))){
var inst_32386 = (state_32423[(7)]);
var inst_32396 = (state_32423[(11)]);
var tmp32443 = inst_32386;
var inst_32386__$1 = tmp32443;
var inst_32387 = inst_32396;
var state_32423__$1 = (function (){var statearr_32447 = state_32423;
(statearr_32447[(7)] = inst_32386__$1);

(statearr_32447[(8)] = inst_32387);

return statearr_32447;
})();
var statearr_32448_33708 = state_32423__$1;
(statearr_32448_33708[(2)] = null);

(statearr_32448_33708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29313__auto__ = null;
var cljs$core$async$state_machine__29313__auto____0 = (function (){
var statearr_32449 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32449[(0)] = cljs$core$async$state_machine__29313__auto__);

(statearr_32449[(1)] = (1));

return statearr_32449;
});
var cljs$core$async$state_machine__29313__auto____1 = (function (state_32423){
while(true){
var ret_value__29314__auto__ = (function (){try{while(true){
var result__29315__auto__ = switch__29311__auto__(state_32423);
if(cljs.core.keyword_identical_QMARK_(result__29315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29315__auto__;
}
break;
}
}catch (e32450){var ex__29316__auto__ = e32450;
var statearr_32451_33709 = state_32423;
(statearr_32451_33709[(2)] = ex__29316__auto__);


if(cljs.core.seq((state_32423[(4)]))){
var statearr_32452_33710 = state_32423;
(statearr_32452_33710[(1)] = cljs.core.first((state_32423[(4)])));

} else {
throw ex__29316__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33711 = state_32423;
state_32423 = G__33711;
continue;
} else {
return ret_value__29314__auto__;
}
break;
}
});
cljs$core$async$state_machine__29313__auto__ = function(state_32423){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29313__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29313__auto____1.call(this,state_32423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29313__auto____0;
cljs$core$async$state_machine__29313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29313__auto____1;
return cljs$core$async$state_machine__29313__auto__;
})()
})();
var state__29592__auto__ = (function (){var statearr_32454 = f__29591__auto__();
(statearr_32454[(6)] = c__29590__auto___33684);

return statearr_32454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29592__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32456 = arguments.length;
switch (G__32456) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29590__auto___33713 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29591__auto__ = (function (){var switch__29311__auto__ = (function (state_32506){
var state_val_32507 = (state_32506[(1)]);
if((state_val_32507 === (7))){
var inst_32500 = (state_32506[(2)]);
var state_32506__$1 = state_32506;
var statearr_32508_33718 = state_32506__$1;
(statearr_32508_33718[(2)] = inst_32500);

(statearr_32508_33718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32507 === (1))){
var inst_32458 = [];
var inst_32459 = inst_32458;
var inst_32460 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32506__$1 = (function (){var statearr_32509 = state_32506;
(statearr_32509[(7)] = inst_32460);

(statearr_32509[(8)] = inst_32459);

return statearr_32509;
})();
var statearr_32510_33720 = state_32506__$1;
(statearr_32510_33720[(2)] = null);

(statearr_32510_33720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32507 === (4))){
var inst_32463 = (state_32506[(9)]);
var inst_32463__$1 = (state_32506[(2)]);
var inst_32464 = (inst_32463__$1 == null);
var inst_32465 = cljs.core.not(inst_32464);
var state_32506__$1 = (function (){var statearr_32511 = state_32506;
(statearr_32511[(9)] = inst_32463__$1);

return statearr_32511;
})();
if(inst_32465){
var statearr_32512_33721 = state_32506__$1;
(statearr_32512_33721[(1)] = (5));

} else {
var statearr_32513_33722 = state_32506__$1;
(statearr_32513_33722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32507 === (15))){
var inst_32459 = (state_32506[(8)]);
var inst_32492 = cljs.core.vec(inst_32459);
var state_32506__$1 = state_32506;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32506__$1,(18),out,inst_32492);
} else {
if((state_val_32507 === (13))){
var inst_32485 = (state_32506[(2)]);
var state_32506__$1 = state_32506;
var statearr_32516_33723 = state_32506__$1;
(statearr_32516_33723[(2)] = inst_32485);

(statearr_32516_33723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32507 === (6))){
var inst_32459 = (state_32506[(8)]);
var inst_32489 = inst_32459.length;
var inst_32490 = (inst_32489 > (0));
var state_32506__$1 = state_32506;
if(cljs.core.truth_(inst_32490)){
var statearr_32517_33724 = state_32506__$1;
(statearr_32517_33724[(1)] = (15));

} else {
var statearr_32518_33725 = state_32506__$1;
(statearr_32518_33725[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32507 === (17))){
var inst_32497 = (state_32506[(2)]);
var inst_32498 = cljs.core.async.close_BANG_(out);
var state_32506__$1 = (function (){var statearr_32519 = state_32506;
(statearr_32519[(10)] = inst_32497);

return statearr_32519;
})();
var statearr_32521_33727 = state_32506__$1;
(statearr_32521_33727[(2)] = inst_32498);

(statearr_32521_33727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32507 === (3))){
var inst_32502 = (state_32506[(2)]);
var state_32506__$1 = state_32506;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32506__$1,inst_32502);
} else {
if((state_val_32507 === (12))){
var inst_32459 = (state_32506[(8)]);
var inst_32478 = cljs.core.vec(inst_32459);
var state_32506__$1 = state_32506;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32506__$1,(14),out,inst_32478);
} else {
if((state_val_32507 === (2))){
var state_32506__$1 = state_32506;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32506__$1,(4),ch);
} else {
if((state_val_32507 === (11))){
var inst_32459 = (state_32506[(8)]);
var inst_32467 = (state_32506[(11)]);
var inst_32463 = (state_32506[(9)]);
var inst_32475 = inst_32459.push(inst_32463);
var tmp32527 = inst_32459;
var inst_32459__$1 = tmp32527;
var inst_32460 = inst_32467;
var state_32506__$1 = (function (){var statearr_32530 = state_32506;
(statearr_32530[(7)] = inst_32460);

(statearr_32530[(8)] = inst_32459__$1);

(statearr_32530[(12)] = inst_32475);

return statearr_32530;
})();
var statearr_32531_33728 = state_32506__$1;
(statearr_32531_33728[(2)] = null);

(statearr_32531_33728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32507 === (9))){
var inst_32460 = (state_32506[(7)]);
var inst_32471 = cljs.core.keyword_identical_QMARK_(inst_32460,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_32506__$1 = state_32506;
var statearr_32538_33737 = state_32506__$1;
(statearr_32538_33737[(2)] = inst_32471);

(statearr_32538_33737[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32507 === (5))){
var inst_32460 = (state_32506[(7)]);
var inst_32468 = (state_32506[(13)]);
var inst_32467 = (state_32506[(11)]);
var inst_32463 = (state_32506[(9)]);
var inst_32467__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32463) : f.call(null,inst_32463));
var inst_32468__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32467__$1,inst_32460);
var state_32506__$1 = (function (){var statearr_32541 = state_32506;
(statearr_32541[(13)] = inst_32468__$1);

(statearr_32541[(11)] = inst_32467__$1);

return statearr_32541;
})();
if(inst_32468__$1){
var statearr_32542_33739 = state_32506__$1;
(statearr_32542_33739[(1)] = (8));

} else {
var statearr_32544_33740 = state_32506__$1;
(statearr_32544_33740[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32507 === (14))){
var inst_32467 = (state_32506[(11)]);
var inst_32463 = (state_32506[(9)]);
var inst_32480 = (state_32506[(2)]);
var inst_32481 = [];
var inst_32482 = inst_32481.push(inst_32463);
var inst_32459 = inst_32481;
var inst_32460 = inst_32467;
var state_32506__$1 = (function (){var statearr_32547 = state_32506;
(statearr_32547[(7)] = inst_32460);

(statearr_32547[(8)] = inst_32459);

(statearr_32547[(14)] = inst_32482);

(statearr_32547[(15)] = inst_32480);

return statearr_32547;
})();
var statearr_32548_33741 = state_32506__$1;
(statearr_32548_33741[(2)] = null);

(statearr_32548_33741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32507 === (16))){
var state_32506__$1 = state_32506;
var statearr_32549_33742 = state_32506__$1;
(statearr_32549_33742[(2)] = null);

(statearr_32549_33742[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32507 === (10))){
var inst_32473 = (state_32506[(2)]);
var state_32506__$1 = state_32506;
if(cljs.core.truth_(inst_32473)){
var statearr_32551_33744 = state_32506__$1;
(statearr_32551_33744[(1)] = (11));

} else {
var statearr_32553_33745 = state_32506__$1;
(statearr_32553_33745[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32507 === (18))){
var inst_32494 = (state_32506[(2)]);
var state_32506__$1 = state_32506;
var statearr_32554_33747 = state_32506__$1;
(statearr_32554_33747[(2)] = inst_32494);

(statearr_32554_33747[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32507 === (8))){
var inst_32468 = (state_32506[(13)]);
var state_32506__$1 = state_32506;
var statearr_32559_33748 = state_32506__$1;
(statearr_32559_33748[(2)] = inst_32468);

(statearr_32559_33748[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29313__auto__ = null;
var cljs$core$async$state_machine__29313__auto____0 = (function (){
var statearr_32566 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32566[(0)] = cljs$core$async$state_machine__29313__auto__);

(statearr_32566[(1)] = (1));

return statearr_32566;
});
var cljs$core$async$state_machine__29313__auto____1 = (function (state_32506){
while(true){
var ret_value__29314__auto__ = (function (){try{while(true){
var result__29315__auto__ = switch__29311__auto__(state_32506);
if(cljs.core.keyword_identical_QMARK_(result__29315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29315__auto__;
}
break;
}
}catch (e32567){var ex__29316__auto__ = e32567;
var statearr_32568_33749 = state_32506;
(statearr_32568_33749[(2)] = ex__29316__auto__);


if(cljs.core.seq((state_32506[(4)]))){
var statearr_32569_33750 = state_32506;
(statearr_32569_33750[(1)] = cljs.core.first((state_32506[(4)])));

} else {
throw ex__29316__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33751 = state_32506;
state_32506 = G__33751;
continue;
} else {
return ret_value__29314__auto__;
}
break;
}
});
cljs$core$async$state_machine__29313__auto__ = function(state_32506){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29313__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29313__auto____1.call(this,state_32506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29313__auto____0;
cljs$core$async$state_machine__29313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29313__auto____1;
return cljs$core$async$state_machine__29313__auto__;
})()
})();
var state__29592__auto__ = (function (){var statearr_32572 = f__29591__auto__();
(statearr_32572[(6)] = c__29590__auto___33713);

return statearr_32572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29592__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
