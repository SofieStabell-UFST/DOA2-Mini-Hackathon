goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__35739__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35739 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35740__i = 0, G__35740__a = new Array(arguments.length -  0);
while (G__35740__i < G__35740__a.length) {G__35740__a[G__35740__i] = arguments[G__35740__i + 0]; ++G__35740__i;}
  args = new cljs.core.IndexedSeq(G__35740__a,0,null);
} 
return G__35739__delegate.call(this,args);};
G__35739.cljs$lang$maxFixedArity = 0;
G__35739.cljs$lang$applyTo = (function (arglist__35741){
var args = cljs.core.seq(arglist__35741);
return G__35739__delegate(args);
});
G__35739.cljs$core$IFn$_invoke$arity$variadic = G__35739__delegate;
return G__35739;
})()
);

(o.error = (function() { 
var G__35742__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35742 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35743__i = 0, G__35743__a = new Array(arguments.length -  0);
while (G__35743__i < G__35743__a.length) {G__35743__a[G__35743__i] = arguments[G__35743__i + 0]; ++G__35743__i;}
  args = new cljs.core.IndexedSeq(G__35743__a,0,null);
} 
return G__35742__delegate.call(this,args);};
G__35742.cljs$lang$maxFixedArity = 0;
G__35742.cljs$lang$applyTo = (function (arglist__35744){
var args = cljs.core.seq(arglist__35744);
return G__35742__delegate(args);
});
G__35742.cljs$core$IFn$_invoke$arity$variadic = G__35742__delegate;
return G__35742;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
