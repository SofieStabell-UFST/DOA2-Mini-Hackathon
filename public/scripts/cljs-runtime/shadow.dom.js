goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33919 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_33919(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33920 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_33920(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32740 = coll;
var G__32741 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32740,G__32741) : shadow.dom.lazy_native_coll_seq.call(null,G__32740,G__32741));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4212__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32848 = arguments.length;
switch (G__32848) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32882 = arguments.length;
switch (G__32882) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32909 = arguments.length;
switch (G__32909) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32938 = arguments.length;
switch (G__32938) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32966 = arguments.length;
switch (G__32966) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32993 = arguments.length;
switch (G__32993) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33032){if((e33032 instanceof Object)){
var e = e33032;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33032;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33054 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33055 = null;
var count__33056 = (0);
var i__33057 = (0);
while(true){
if((i__33057 < count__33056)){
var el = chunk__33055.cljs$core$IIndexed$_nth$arity$2(null,i__33057);
var handler_33935__$1 = ((function (seq__33054,chunk__33055,count__33056,i__33057,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33054,chunk__33055,count__33056,i__33057,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33935__$1);


var G__33936 = seq__33054;
var G__33937 = chunk__33055;
var G__33938 = count__33056;
var G__33939 = (i__33057 + (1));
seq__33054 = G__33936;
chunk__33055 = G__33937;
count__33056 = G__33938;
i__33057 = G__33939;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33054);
if(temp__5753__auto__){
var seq__33054__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33054__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33054__$1);
var G__33940 = cljs.core.chunk_rest(seq__33054__$1);
var G__33941 = c__4638__auto__;
var G__33942 = cljs.core.count(c__4638__auto__);
var G__33943 = (0);
seq__33054 = G__33940;
chunk__33055 = G__33941;
count__33056 = G__33942;
i__33057 = G__33943;
continue;
} else {
var el = cljs.core.first(seq__33054__$1);
var handler_33944__$1 = ((function (seq__33054,chunk__33055,count__33056,i__33057,el,seq__33054__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33054,chunk__33055,count__33056,i__33057,el,seq__33054__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33944__$1);


var G__33945 = cljs.core.next(seq__33054__$1);
var G__33946 = null;
var G__33947 = (0);
var G__33948 = (0);
seq__33054 = G__33945;
chunk__33055 = G__33946;
count__33056 = G__33947;
i__33057 = G__33948;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33092 = arguments.length;
switch (G__33092) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33120 = cljs.core.seq(events);
var chunk__33121 = null;
var count__33122 = (0);
var i__33123 = (0);
while(true){
if((i__33123 < count__33122)){
var vec__33149 = chunk__33121.cljs$core$IIndexed$_nth$arity$2(null,i__33123);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33149,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33149,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33950 = seq__33120;
var G__33951 = chunk__33121;
var G__33952 = count__33122;
var G__33953 = (i__33123 + (1));
seq__33120 = G__33950;
chunk__33121 = G__33951;
count__33122 = G__33952;
i__33123 = G__33953;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33120);
if(temp__5753__auto__){
var seq__33120__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33120__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33120__$1);
var G__33954 = cljs.core.chunk_rest(seq__33120__$1);
var G__33955 = c__4638__auto__;
var G__33956 = cljs.core.count(c__4638__auto__);
var G__33957 = (0);
seq__33120 = G__33954;
chunk__33121 = G__33955;
count__33122 = G__33956;
i__33123 = G__33957;
continue;
} else {
var vec__33157 = cljs.core.first(seq__33120__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33157,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33157,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33958 = cljs.core.next(seq__33120__$1);
var G__33959 = null;
var G__33960 = (0);
var G__33961 = (0);
seq__33120 = G__33958;
chunk__33121 = G__33959;
count__33122 = G__33960;
i__33123 = G__33961;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33170 = cljs.core.seq(styles);
var chunk__33171 = null;
var count__33172 = (0);
var i__33173 = (0);
while(true){
if((i__33173 < count__33172)){
var vec__33199 = chunk__33171.cljs$core$IIndexed$_nth$arity$2(null,i__33173);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33199,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33199,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33962 = seq__33170;
var G__33963 = chunk__33171;
var G__33964 = count__33172;
var G__33965 = (i__33173 + (1));
seq__33170 = G__33962;
chunk__33171 = G__33963;
count__33172 = G__33964;
i__33173 = G__33965;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33170);
if(temp__5753__auto__){
var seq__33170__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33170__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33170__$1);
var G__33970 = cljs.core.chunk_rest(seq__33170__$1);
var G__33971 = c__4638__auto__;
var G__33972 = cljs.core.count(c__4638__auto__);
var G__33973 = (0);
seq__33170 = G__33970;
chunk__33171 = G__33971;
count__33172 = G__33972;
i__33173 = G__33973;
continue;
} else {
var vec__33209 = cljs.core.first(seq__33170__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33209,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33209,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33975 = cljs.core.next(seq__33170__$1);
var G__33976 = null;
var G__33977 = (0);
var G__33978 = (0);
seq__33170 = G__33975;
chunk__33171 = G__33976;
count__33172 = G__33977;
i__33173 = G__33978;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33220_33979 = key;
var G__33220_33980__$1 = (((G__33220_33979 instanceof cljs.core.Keyword))?G__33220_33979.fqn:null);
switch (G__33220_33980__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33982 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_33982,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_33982,"aria-");
}
})())){
el.setAttribute(ks_33982,value);
} else {
(el[ks_33982] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33275){
var map__33276 = p__33275;
var map__33276__$1 = cljs.core.__destructure_map(map__33276);
var props = map__33276__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33276__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33277 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33277,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33277,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33277,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33288 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33288,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33288;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33293 = arguments.length;
switch (G__33293) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33312){
var vec__33313 = p__33312;
var seq__33314 = cljs.core.seq(vec__33313);
var first__33315 = cljs.core.first(seq__33314);
var seq__33314__$1 = cljs.core.next(seq__33314);
var nn = first__33315;
var first__33315__$1 = cljs.core.first(seq__33314__$1);
var seq__33314__$2 = cljs.core.next(seq__33314__$1);
var np = first__33315__$1;
var nc = seq__33314__$2;
var node = vec__33313;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33316 = nn;
var G__33317 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33316,G__33317) : create_fn.call(null,G__33316,G__33317));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33319 = nn;
var G__33320 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33319,G__33320) : create_fn.call(null,G__33319,G__33320));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33321 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33321,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33321,(1),null);
var seq__33324_34010 = cljs.core.seq(node_children);
var chunk__33325_34011 = null;
var count__33326_34012 = (0);
var i__33327_34013 = (0);
while(true){
if((i__33327_34013 < count__33326_34012)){
var child_struct_34014 = chunk__33325_34011.cljs$core$IIndexed$_nth$arity$2(null,i__33327_34013);
var children_34015 = shadow.dom.dom_node(child_struct_34014);
if(cljs.core.seq_QMARK_(children_34015)){
var seq__33401_34016 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34015));
var chunk__33403_34017 = null;
var count__33404_34018 = (0);
var i__33405_34019 = (0);
while(true){
if((i__33405_34019 < count__33404_34018)){
var child_34020 = chunk__33403_34017.cljs$core$IIndexed$_nth$arity$2(null,i__33405_34019);
if(cljs.core.truth_(child_34020)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34020);


var G__34021 = seq__33401_34016;
var G__34022 = chunk__33403_34017;
var G__34023 = count__33404_34018;
var G__34024 = (i__33405_34019 + (1));
seq__33401_34016 = G__34021;
chunk__33403_34017 = G__34022;
count__33404_34018 = G__34023;
i__33405_34019 = G__34024;
continue;
} else {
var G__34025 = seq__33401_34016;
var G__34026 = chunk__33403_34017;
var G__34027 = count__33404_34018;
var G__34028 = (i__33405_34019 + (1));
seq__33401_34016 = G__34025;
chunk__33403_34017 = G__34026;
count__33404_34018 = G__34027;
i__33405_34019 = G__34028;
continue;
}
} else {
var temp__5753__auto___34029 = cljs.core.seq(seq__33401_34016);
if(temp__5753__auto___34029){
var seq__33401_34030__$1 = temp__5753__auto___34029;
if(cljs.core.chunked_seq_QMARK_(seq__33401_34030__$1)){
var c__4638__auto___34031 = cljs.core.chunk_first(seq__33401_34030__$1);
var G__34035 = cljs.core.chunk_rest(seq__33401_34030__$1);
var G__34036 = c__4638__auto___34031;
var G__34037 = cljs.core.count(c__4638__auto___34031);
var G__34038 = (0);
seq__33401_34016 = G__34035;
chunk__33403_34017 = G__34036;
count__33404_34018 = G__34037;
i__33405_34019 = G__34038;
continue;
} else {
var child_34039 = cljs.core.first(seq__33401_34030__$1);
if(cljs.core.truth_(child_34039)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34039);


var G__34040 = cljs.core.next(seq__33401_34030__$1);
var G__34041 = null;
var G__34042 = (0);
var G__34043 = (0);
seq__33401_34016 = G__34040;
chunk__33403_34017 = G__34041;
count__33404_34018 = G__34042;
i__33405_34019 = G__34043;
continue;
} else {
var G__34047 = cljs.core.next(seq__33401_34030__$1);
var G__34048 = null;
var G__34049 = (0);
var G__34050 = (0);
seq__33401_34016 = G__34047;
chunk__33403_34017 = G__34048;
count__33404_34018 = G__34049;
i__33405_34019 = G__34050;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34015);
}


var G__34052 = seq__33324_34010;
var G__34053 = chunk__33325_34011;
var G__34054 = count__33326_34012;
var G__34055 = (i__33327_34013 + (1));
seq__33324_34010 = G__34052;
chunk__33325_34011 = G__34053;
count__33326_34012 = G__34054;
i__33327_34013 = G__34055;
continue;
} else {
var temp__5753__auto___34059 = cljs.core.seq(seq__33324_34010);
if(temp__5753__auto___34059){
var seq__33324_34060__$1 = temp__5753__auto___34059;
if(cljs.core.chunked_seq_QMARK_(seq__33324_34060__$1)){
var c__4638__auto___34061 = cljs.core.chunk_first(seq__33324_34060__$1);
var G__34062 = cljs.core.chunk_rest(seq__33324_34060__$1);
var G__34063 = c__4638__auto___34061;
var G__34064 = cljs.core.count(c__4638__auto___34061);
var G__34065 = (0);
seq__33324_34010 = G__34062;
chunk__33325_34011 = G__34063;
count__33326_34012 = G__34064;
i__33327_34013 = G__34065;
continue;
} else {
var child_struct_34066 = cljs.core.first(seq__33324_34060__$1);
var children_34067 = shadow.dom.dom_node(child_struct_34066);
if(cljs.core.seq_QMARK_(children_34067)){
var seq__33414_34068 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34067));
var chunk__33416_34071 = null;
var count__33417_34073 = (0);
var i__33418_34074 = (0);
while(true){
if((i__33418_34074 < count__33417_34073)){
var child_34075 = chunk__33416_34071.cljs$core$IIndexed$_nth$arity$2(null,i__33418_34074);
if(cljs.core.truth_(child_34075)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34075);


var G__34077 = seq__33414_34068;
var G__34078 = chunk__33416_34071;
var G__34079 = count__33417_34073;
var G__34080 = (i__33418_34074 + (1));
seq__33414_34068 = G__34077;
chunk__33416_34071 = G__34078;
count__33417_34073 = G__34079;
i__33418_34074 = G__34080;
continue;
} else {
var G__34085 = seq__33414_34068;
var G__34086 = chunk__33416_34071;
var G__34087 = count__33417_34073;
var G__34088 = (i__33418_34074 + (1));
seq__33414_34068 = G__34085;
chunk__33416_34071 = G__34086;
count__33417_34073 = G__34087;
i__33418_34074 = G__34088;
continue;
}
} else {
var temp__5753__auto___34089__$1 = cljs.core.seq(seq__33414_34068);
if(temp__5753__auto___34089__$1){
var seq__33414_34090__$1 = temp__5753__auto___34089__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33414_34090__$1)){
var c__4638__auto___34091 = cljs.core.chunk_first(seq__33414_34090__$1);
var G__34092 = cljs.core.chunk_rest(seq__33414_34090__$1);
var G__34093 = c__4638__auto___34091;
var G__34094 = cljs.core.count(c__4638__auto___34091);
var G__34095 = (0);
seq__33414_34068 = G__34092;
chunk__33416_34071 = G__34093;
count__33417_34073 = G__34094;
i__33418_34074 = G__34095;
continue;
} else {
var child_34096 = cljs.core.first(seq__33414_34090__$1);
if(cljs.core.truth_(child_34096)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34096);


var G__34097 = cljs.core.next(seq__33414_34090__$1);
var G__34098 = null;
var G__34099 = (0);
var G__34100 = (0);
seq__33414_34068 = G__34097;
chunk__33416_34071 = G__34098;
count__33417_34073 = G__34099;
i__33418_34074 = G__34100;
continue;
} else {
var G__34101 = cljs.core.next(seq__33414_34090__$1);
var G__34102 = null;
var G__34103 = (0);
var G__34104 = (0);
seq__33414_34068 = G__34101;
chunk__33416_34071 = G__34102;
count__33417_34073 = G__34103;
i__33418_34074 = G__34104;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34067);
}


var G__34105 = cljs.core.next(seq__33324_34060__$1);
var G__34106 = null;
var G__34107 = (0);
var G__34108 = (0);
seq__33324_34010 = G__34105;
chunk__33325_34011 = G__34106;
count__33326_34012 = G__34107;
i__33327_34013 = G__34108;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33454 = cljs.core.seq(node);
var chunk__33455 = null;
var count__33456 = (0);
var i__33457 = (0);
while(true){
if((i__33457 < count__33456)){
var n = chunk__33455.cljs$core$IIndexed$_nth$arity$2(null,i__33457);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34113 = seq__33454;
var G__34114 = chunk__33455;
var G__34115 = count__33456;
var G__34116 = (i__33457 + (1));
seq__33454 = G__34113;
chunk__33455 = G__34114;
count__33456 = G__34115;
i__33457 = G__34116;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33454);
if(temp__5753__auto__){
var seq__33454__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33454__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33454__$1);
var G__34118 = cljs.core.chunk_rest(seq__33454__$1);
var G__34119 = c__4638__auto__;
var G__34120 = cljs.core.count(c__4638__auto__);
var G__34121 = (0);
seq__33454 = G__34118;
chunk__33455 = G__34119;
count__33456 = G__34120;
i__33457 = G__34121;
continue;
} else {
var n = cljs.core.first(seq__33454__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34122 = cljs.core.next(seq__33454__$1);
var G__34123 = null;
var G__34124 = (0);
var G__34125 = (0);
seq__33454 = G__34122;
chunk__33455 = G__34123;
count__33456 = G__34124;
i__33457 = G__34125;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33479 = arguments.length;
switch (G__33479) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33489 = arguments.length;
switch (G__33489) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33512 = arguments.length;
switch (G__33512) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4212__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4824__auto__ = [];
var len__4818__auto___34134 = arguments.length;
var i__4819__auto___34135 = (0);
while(true){
if((i__4819__auto___34135 < len__4818__auto___34134)){
args__4824__auto__.push((arguments[i__4819__auto___34135]));

var G__34136 = (i__4819__auto___34135 + (1));
i__4819__auto___34135 = G__34136;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33534_34137 = cljs.core.seq(nodes);
var chunk__33535_34138 = null;
var count__33536_34139 = (0);
var i__33537_34140 = (0);
while(true){
if((i__33537_34140 < count__33536_34139)){
var node_34141 = chunk__33535_34138.cljs$core$IIndexed$_nth$arity$2(null,i__33537_34140);
fragment.appendChild(shadow.dom._to_dom(node_34141));


var G__34142 = seq__33534_34137;
var G__34143 = chunk__33535_34138;
var G__34144 = count__33536_34139;
var G__34145 = (i__33537_34140 + (1));
seq__33534_34137 = G__34142;
chunk__33535_34138 = G__34143;
count__33536_34139 = G__34144;
i__33537_34140 = G__34145;
continue;
} else {
var temp__5753__auto___34146 = cljs.core.seq(seq__33534_34137);
if(temp__5753__auto___34146){
var seq__33534_34147__$1 = temp__5753__auto___34146;
if(cljs.core.chunked_seq_QMARK_(seq__33534_34147__$1)){
var c__4638__auto___34148 = cljs.core.chunk_first(seq__33534_34147__$1);
var G__34149 = cljs.core.chunk_rest(seq__33534_34147__$1);
var G__34150 = c__4638__auto___34148;
var G__34151 = cljs.core.count(c__4638__auto___34148);
var G__34152 = (0);
seq__33534_34137 = G__34149;
chunk__33535_34138 = G__34150;
count__33536_34139 = G__34151;
i__33537_34140 = G__34152;
continue;
} else {
var node_34153 = cljs.core.first(seq__33534_34147__$1);
fragment.appendChild(shadow.dom._to_dom(node_34153));


var G__34154 = cljs.core.next(seq__33534_34147__$1);
var G__34155 = null;
var G__34156 = (0);
var G__34157 = (0);
seq__33534_34137 = G__34154;
chunk__33535_34138 = G__34155;
count__33536_34139 = G__34156;
i__33537_34140 = G__34157;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33530){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33530));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33566_34158 = cljs.core.seq(scripts);
var chunk__33567_34159 = null;
var count__33568_34160 = (0);
var i__33569_34161 = (0);
while(true){
if((i__33569_34161 < count__33568_34160)){
var vec__33586_34162 = chunk__33567_34159.cljs$core$IIndexed$_nth$arity$2(null,i__33569_34161);
var script_tag_34163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33586_34162,(0),null);
var script_body_34164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33586_34162,(1),null);
eval(script_body_34164);


var G__34165 = seq__33566_34158;
var G__34166 = chunk__33567_34159;
var G__34167 = count__33568_34160;
var G__34168 = (i__33569_34161 + (1));
seq__33566_34158 = G__34165;
chunk__33567_34159 = G__34166;
count__33568_34160 = G__34167;
i__33569_34161 = G__34168;
continue;
} else {
var temp__5753__auto___34169 = cljs.core.seq(seq__33566_34158);
if(temp__5753__auto___34169){
var seq__33566_34170__$1 = temp__5753__auto___34169;
if(cljs.core.chunked_seq_QMARK_(seq__33566_34170__$1)){
var c__4638__auto___34171 = cljs.core.chunk_first(seq__33566_34170__$1);
var G__34172 = cljs.core.chunk_rest(seq__33566_34170__$1);
var G__34173 = c__4638__auto___34171;
var G__34174 = cljs.core.count(c__4638__auto___34171);
var G__34175 = (0);
seq__33566_34158 = G__34172;
chunk__33567_34159 = G__34173;
count__33568_34160 = G__34174;
i__33569_34161 = G__34175;
continue;
} else {
var vec__33589_34179 = cljs.core.first(seq__33566_34170__$1);
var script_tag_34180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33589_34179,(0),null);
var script_body_34181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33589_34179,(1),null);
eval(script_body_34181);


var G__34182 = cljs.core.next(seq__33566_34170__$1);
var G__34183 = null;
var G__34184 = (0);
var G__34185 = (0);
seq__33566_34158 = G__34182;
chunk__33567_34159 = G__34183;
count__33568_34160 = G__34184;
i__33569_34161 = G__34185;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33600){
var vec__33602 = p__33600;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33602,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33602,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33621 = arguments.length;
switch (G__33621) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33639 = cljs.core.seq(style_keys);
var chunk__33640 = null;
var count__33641 = (0);
var i__33642 = (0);
while(true){
if((i__33642 < count__33641)){
var it = chunk__33640.cljs$core$IIndexed$_nth$arity$2(null,i__33642);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34191 = seq__33639;
var G__34192 = chunk__33640;
var G__34193 = count__33641;
var G__34194 = (i__33642 + (1));
seq__33639 = G__34191;
chunk__33640 = G__34192;
count__33641 = G__34193;
i__33642 = G__34194;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33639);
if(temp__5753__auto__){
var seq__33639__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33639__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33639__$1);
var G__34197 = cljs.core.chunk_rest(seq__33639__$1);
var G__34198 = c__4638__auto__;
var G__34199 = cljs.core.count(c__4638__auto__);
var G__34200 = (0);
seq__33639 = G__34197;
chunk__33640 = G__34198;
count__33641 = G__34199;
i__33642 = G__34200;
continue;
} else {
var it = cljs.core.first(seq__33639__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34201 = cljs.core.next(seq__33639__$1);
var G__34202 = null;
var G__34203 = (0);
var G__34204 = (0);
seq__33639 = G__34201;
chunk__33640 = G__34202;
count__33641 = G__34203;
i__33642 = G__34204;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k33653,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__33664 = k33653;
var G__33664__$1 = (((G__33664 instanceof cljs.core.Keyword))?G__33664.fqn:null);
switch (G__33664__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33653,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__33669){
var vec__33670 = p__33669;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33670,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33670,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33652){
var self__ = this;
var G__33652__$1 = this;
return (new cljs.core.RecordIter((0),G__33652__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33654,other33655){
var self__ = this;
var this33654__$1 = this;
return (((!((other33655 == null)))) && ((((this33654__$1.constructor === other33655.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33654__$1.x,other33655.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33654__$1.y,other33655.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33654__$1.__extmap,other33655.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k33653){
var self__ = this;
var this__4468__auto____$1 = this;
var G__33687 = k33653;
var G__33687__$1 = (((G__33687 instanceof cljs.core.Keyword))?G__33687.fqn:null);
switch (G__33687__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33653);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__33652){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__33693 = cljs.core.keyword_identical_QMARK_;
var expr__33694 = k__4470__auto__;
if(cljs.core.truth_((pred__33693.cljs$core$IFn$_invoke$arity$2 ? pred__33693.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33694) : pred__33693.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33694)))){
return (new shadow.dom.Coordinate(G__33652,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33693.cljs$core$IFn$_invoke$arity$2 ? pred__33693.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33694) : pred__33693.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33694)))){
return (new shadow.dom.Coordinate(self__.x,G__33652,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__33652),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__33652){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33652,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33656){
var extmap__4501__auto__ = (function (){var G__33707 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33656,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33656)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33707);
} else {
return G__33707;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33656),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33656),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k33715,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__33726 = k33715;
var G__33726__$1 = (((G__33726 instanceof cljs.core.Keyword))?G__33726.fqn:null);
switch (G__33726__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33715,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__33729){
var vec__33731 = p__33729;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33731,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33731,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Size{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33714){
var self__ = this;
var G__33714__$1 = this;
return (new cljs.core.RecordIter((0),G__33714__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33716,other33717){
var self__ = this;
var this33716__$1 = this;
return (((!((other33717 == null)))) && ((((this33716__$1.constructor === other33717.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33716__$1.w,other33717.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33716__$1.h,other33717.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33716__$1.__extmap,other33717.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k33715){
var self__ = this;
var this__4468__auto____$1 = this;
var G__33757 = k33715;
var G__33757__$1 = (((G__33757 instanceof cljs.core.Keyword))?G__33757.fqn:null);
switch (G__33757__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33715);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__33714){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__33758 = cljs.core.keyword_identical_QMARK_;
var expr__33759 = k__4470__auto__;
if(cljs.core.truth_((pred__33758.cljs$core$IFn$_invoke$arity$2 ? pred__33758.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33759) : pred__33758.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33759)))){
return (new shadow.dom.Size(G__33714,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33758.cljs$core$IFn$_invoke$arity$2 ? pred__33758.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33759) : pred__33758.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33759)))){
return (new shadow.dom.Size(self__.w,G__33714,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__33714),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__33714){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33714,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33719){
var extmap__4501__auto__ = (function (){var G__33765 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33719,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33719)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33765);
} else {
return G__33765;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33719),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33719),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4692__auto__ = opts;
var l__4693__auto__ = a__4692__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4693__auto__)){
var G__34238 = (i + (1));
var G__34239 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34238;
ret = G__34239;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33776){
var vec__33780 = p__33776;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33780,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33780,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33784 = arguments.length;
switch (G__33784) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34250 = ps;
var G__34251 = (i + (1));
el__$1 = G__34250;
i = G__34251;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33785 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33785,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33785,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33785,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33788_34256 = cljs.core.seq(props);
var chunk__33789_34257 = null;
var count__33790_34258 = (0);
var i__33791_34259 = (0);
while(true){
if((i__33791_34259 < count__33790_34258)){
var vec__33799_34261 = chunk__33789_34257.cljs$core$IIndexed$_nth$arity$2(null,i__33791_34259);
var k_34262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33799_34261,(0),null);
var v_34263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33799_34261,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_34262);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34262),v_34263);


var G__34264 = seq__33788_34256;
var G__34265 = chunk__33789_34257;
var G__34266 = count__33790_34258;
var G__34267 = (i__33791_34259 + (1));
seq__33788_34256 = G__34264;
chunk__33789_34257 = G__34265;
count__33790_34258 = G__34266;
i__33791_34259 = G__34267;
continue;
} else {
var temp__5753__auto___34268 = cljs.core.seq(seq__33788_34256);
if(temp__5753__auto___34268){
var seq__33788_34269__$1 = temp__5753__auto___34268;
if(cljs.core.chunked_seq_QMARK_(seq__33788_34269__$1)){
var c__4638__auto___34270 = cljs.core.chunk_first(seq__33788_34269__$1);
var G__34271 = cljs.core.chunk_rest(seq__33788_34269__$1);
var G__34272 = c__4638__auto___34270;
var G__34273 = cljs.core.count(c__4638__auto___34270);
var G__34274 = (0);
seq__33788_34256 = G__34271;
chunk__33789_34257 = G__34272;
count__33790_34258 = G__34273;
i__33791_34259 = G__34274;
continue;
} else {
var vec__33802_34275 = cljs.core.first(seq__33788_34269__$1);
var k_34276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33802_34275,(0),null);
var v_34277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33802_34275,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_34276);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34276),v_34277);


var G__34278 = cljs.core.next(seq__33788_34269__$1);
var G__34279 = null;
var G__34280 = (0);
var G__34281 = (0);
seq__33788_34256 = G__34278;
chunk__33789_34257 = G__34279;
count__33790_34258 = G__34280;
i__33791_34259 = G__34281;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33809 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33809,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33809,(1),null);
var seq__33813_34282 = cljs.core.seq(node_children);
var chunk__33815_34283 = null;
var count__33816_34284 = (0);
var i__33817_34285 = (0);
while(true){
if((i__33817_34285 < count__33816_34284)){
var child_struct_34286 = chunk__33815_34283.cljs$core$IIndexed$_nth$arity$2(null,i__33817_34285);
if((!((child_struct_34286 == null)))){
if(typeof child_struct_34286 === 'string'){
var text_34287 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34287),child_struct_34286].join(''));
} else {
var children_34292 = shadow.dom.svg_node(child_struct_34286);
if(cljs.core.seq_QMARK_(children_34292)){
var seq__33854_34293 = cljs.core.seq(children_34292);
var chunk__33856_34294 = null;
var count__33857_34295 = (0);
var i__33858_34296 = (0);
while(true){
if((i__33858_34296 < count__33857_34295)){
var child_34297 = chunk__33856_34294.cljs$core$IIndexed$_nth$arity$2(null,i__33858_34296);
if(cljs.core.truth_(child_34297)){
node.appendChild(child_34297);


var G__34301 = seq__33854_34293;
var G__34302 = chunk__33856_34294;
var G__34303 = count__33857_34295;
var G__34304 = (i__33858_34296 + (1));
seq__33854_34293 = G__34301;
chunk__33856_34294 = G__34302;
count__33857_34295 = G__34303;
i__33858_34296 = G__34304;
continue;
} else {
var G__34305 = seq__33854_34293;
var G__34306 = chunk__33856_34294;
var G__34307 = count__33857_34295;
var G__34308 = (i__33858_34296 + (1));
seq__33854_34293 = G__34305;
chunk__33856_34294 = G__34306;
count__33857_34295 = G__34307;
i__33858_34296 = G__34308;
continue;
}
} else {
var temp__5753__auto___34309 = cljs.core.seq(seq__33854_34293);
if(temp__5753__auto___34309){
var seq__33854_34310__$1 = temp__5753__auto___34309;
if(cljs.core.chunked_seq_QMARK_(seq__33854_34310__$1)){
var c__4638__auto___34311 = cljs.core.chunk_first(seq__33854_34310__$1);
var G__34312 = cljs.core.chunk_rest(seq__33854_34310__$1);
var G__34313 = c__4638__auto___34311;
var G__34314 = cljs.core.count(c__4638__auto___34311);
var G__34315 = (0);
seq__33854_34293 = G__34312;
chunk__33856_34294 = G__34313;
count__33857_34295 = G__34314;
i__33858_34296 = G__34315;
continue;
} else {
var child_34316 = cljs.core.first(seq__33854_34310__$1);
if(cljs.core.truth_(child_34316)){
node.appendChild(child_34316);


var G__34317 = cljs.core.next(seq__33854_34310__$1);
var G__34318 = null;
var G__34319 = (0);
var G__34320 = (0);
seq__33854_34293 = G__34317;
chunk__33856_34294 = G__34318;
count__33857_34295 = G__34319;
i__33858_34296 = G__34320;
continue;
} else {
var G__34321 = cljs.core.next(seq__33854_34310__$1);
var G__34322 = null;
var G__34323 = (0);
var G__34324 = (0);
seq__33854_34293 = G__34321;
chunk__33856_34294 = G__34322;
count__33857_34295 = G__34323;
i__33858_34296 = G__34324;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34292);
}
}


var G__34325 = seq__33813_34282;
var G__34326 = chunk__33815_34283;
var G__34327 = count__33816_34284;
var G__34328 = (i__33817_34285 + (1));
seq__33813_34282 = G__34325;
chunk__33815_34283 = G__34326;
count__33816_34284 = G__34327;
i__33817_34285 = G__34328;
continue;
} else {
var G__34329 = seq__33813_34282;
var G__34330 = chunk__33815_34283;
var G__34331 = count__33816_34284;
var G__34332 = (i__33817_34285 + (1));
seq__33813_34282 = G__34329;
chunk__33815_34283 = G__34330;
count__33816_34284 = G__34331;
i__33817_34285 = G__34332;
continue;
}
} else {
var temp__5753__auto___34333 = cljs.core.seq(seq__33813_34282);
if(temp__5753__auto___34333){
var seq__33813_34334__$1 = temp__5753__auto___34333;
if(cljs.core.chunked_seq_QMARK_(seq__33813_34334__$1)){
var c__4638__auto___34335 = cljs.core.chunk_first(seq__33813_34334__$1);
var G__34336 = cljs.core.chunk_rest(seq__33813_34334__$1);
var G__34337 = c__4638__auto___34335;
var G__34338 = cljs.core.count(c__4638__auto___34335);
var G__34339 = (0);
seq__33813_34282 = G__34336;
chunk__33815_34283 = G__34337;
count__33816_34284 = G__34338;
i__33817_34285 = G__34339;
continue;
} else {
var child_struct_34340 = cljs.core.first(seq__33813_34334__$1);
if((!((child_struct_34340 == null)))){
if(typeof child_struct_34340 === 'string'){
var text_34341 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34341),child_struct_34340].join(''));
} else {
var children_34342 = shadow.dom.svg_node(child_struct_34340);
if(cljs.core.seq_QMARK_(children_34342)){
var seq__33883_34343 = cljs.core.seq(children_34342);
var chunk__33885_34344 = null;
var count__33886_34345 = (0);
var i__33887_34346 = (0);
while(true){
if((i__33887_34346 < count__33886_34345)){
var child_34347 = chunk__33885_34344.cljs$core$IIndexed$_nth$arity$2(null,i__33887_34346);
if(cljs.core.truth_(child_34347)){
node.appendChild(child_34347);


var G__34348 = seq__33883_34343;
var G__34349 = chunk__33885_34344;
var G__34350 = count__33886_34345;
var G__34351 = (i__33887_34346 + (1));
seq__33883_34343 = G__34348;
chunk__33885_34344 = G__34349;
count__33886_34345 = G__34350;
i__33887_34346 = G__34351;
continue;
} else {
var G__34352 = seq__33883_34343;
var G__34353 = chunk__33885_34344;
var G__34354 = count__33886_34345;
var G__34355 = (i__33887_34346 + (1));
seq__33883_34343 = G__34352;
chunk__33885_34344 = G__34353;
count__33886_34345 = G__34354;
i__33887_34346 = G__34355;
continue;
}
} else {
var temp__5753__auto___34356__$1 = cljs.core.seq(seq__33883_34343);
if(temp__5753__auto___34356__$1){
var seq__33883_34360__$1 = temp__5753__auto___34356__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33883_34360__$1)){
var c__4638__auto___34361 = cljs.core.chunk_first(seq__33883_34360__$1);
var G__34362 = cljs.core.chunk_rest(seq__33883_34360__$1);
var G__34363 = c__4638__auto___34361;
var G__34364 = cljs.core.count(c__4638__auto___34361);
var G__34365 = (0);
seq__33883_34343 = G__34362;
chunk__33885_34344 = G__34363;
count__33886_34345 = G__34364;
i__33887_34346 = G__34365;
continue;
} else {
var child_34366 = cljs.core.first(seq__33883_34360__$1);
if(cljs.core.truth_(child_34366)){
node.appendChild(child_34366);


var G__34367 = cljs.core.next(seq__33883_34360__$1);
var G__34368 = null;
var G__34369 = (0);
var G__34370 = (0);
seq__33883_34343 = G__34367;
chunk__33885_34344 = G__34368;
count__33886_34345 = G__34369;
i__33887_34346 = G__34370;
continue;
} else {
var G__34371 = cljs.core.next(seq__33883_34360__$1);
var G__34372 = null;
var G__34373 = (0);
var G__34374 = (0);
seq__33883_34343 = G__34371;
chunk__33885_34344 = G__34372;
count__33886_34345 = G__34373;
i__33887_34346 = G__34374;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34342);
}
}


var G__34375 = cljs.core.next(seq__33813_34334__$1);
var G__34376 = null;
var G__34377 = (0);
var G__34378 = (0);
seq__33813_34282 = G__34375;
chunk__33815_34283 = G__34376;
count__33816_34284 = G__34377;
i__33817_34285 = G__34378;
continue;
} else {
var G__34381 = cljs.core.next(seq__33813_34334__$1);
var G__34382 = null;
var G__34383 = (0);
var G__34384 = (0);
seq__33813_34282 = G__34381;
chunk__33815_34283 = G__34382;
count__33816_34284 = G__34383;
i__33817_34285 = G__34384;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___34385 = arguments.length;
var i__4819__auto___34386 = (0);
while(true){
if((i__4819__auto___34386 < len__4818__auto___34385)){
args__4824__auto__.push((arguments[i__4819__auto___34386]));

var G__34387 = (i__4819__auto___34386 + (1));
i__4819__auto___34386 = G__34387;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33892){
var G__33893 = cljs.core.first(seq33892);
var seq33892__$1 = cljs.core.next(seq33892);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33893,seq33892__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33895 = arguments.length;
switch (G__33895) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4210__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4210__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4210__auto__;
}
})())){
var c__29590__auto___34394 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29591__auto__ = (function (){var switch__29311__auto__ = (function (state_33900){
var state_val_33901 = (state_33900[(1)]);
if((state_val_33901 === (1))){
var state_33900__$1 = state_33900;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33900__$1,(2),once_or_cleanup);
} else {
if((state_val_33901 === (2))){
var inst_33897 = (state_33900[(2)]);
var inst_33898 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33900__$1 = (function (){var statearr_33902 = state_33900;
(statearr_33902[(7)] = inst_33897);

return statearr_33902;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33900__$1,inst_33898);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29313__auto__ = null;
var shadow$dom$state_machine__29313__auto____0 = (function (){
var statearr_33903 = [null,null,null,null,null,null,null,null];
(statearr_33903[(0)] = shadow$dom$state_machine__29313__auto__);

(statearr_33903[(1)] = (1));

return statearr_33903;
});
var shadow$dom$state_machine__29313__auto____1 = (function (state_33900){
while(true){
var ret_value__29314__auto__ = (function (){try{while(true){
var result__29315__auto__ = switch__29311__auto__(state_33900);
if(cljs.core.keyword_identical_QMARK_(result__29315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29315__auto__;
}
break;
}
}catch (e33906){var ex__29316__auto__ = e33906;
var statearr_33910_34398 = state_33900;
(statearr_33910_34398[(2)] = ex__29316__auto__);


if(cljs.core.seq((state_33900[(4)]))){
var statearr_33914_34399 = state_33900;
(statearr_33914_34399[(1)] = cljs.core.first((state_33900[(4)])));

} else {
throw ex__29316__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34400 = state_33900;
state_33900 = G__34400;
continue;
} else {
return ret_value__29314__auto__;
}
break;
}
});
shadow$dom$state_machine__29313__auto__ = function(state_33900){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29313__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29313__auto____1.call(this,state_33900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29313__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29313__auto____0;
shadow$dom$state_machine__29313__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29313__auto____1;
return shadow$dom$state_machine__29313__auto__;
})()
})();
var state__29592__auto__ = (function (){var statearr_33918 = f__29591__auto__();
(statearr_33918[(6)] = c__29590__auto___34394);

return statearr_33918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29592__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
