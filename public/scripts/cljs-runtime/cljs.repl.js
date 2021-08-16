goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34650){
var map__34651 = p__34650;
var map__34651__$1 = cljs.core.__destructure_map(map__34651);
var m = map__34651__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34651__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34651__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4212__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34656_35000 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34657_35001 = null;
var count__34658_35002 = (0);
var i__34659_35003 = (0);
while(true){
if((i__34659_35003 < count__34658_35002)){
var f_35004 = chunk__34657_35001.cljs$core$IIndexed$_nth$arity$2(null,i__34659_35003);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35004], 0));


var G__35005 = seq__34656_35000;
var G__35006 = chunk__34657_35001;
var G__35007 = count__34658_35002;
var G__35008 = (i__34659_35003 + (1));
seq__34656_35000 = G__35005;
chunk__34657_35001 = G__35006;
count__34658_35002 = G__35007;
i__34659_35003 = G__35008;
continue;
} else {
var temp__5753__auto___35009 = cljs.core.seq(seq__34656_35000);
if(temp__5753__auto___35009){
var seq__34656_35011__$1 = temp__5753__auto___35009;
if(cljs.core.chunked_seq_QMARK_(seq__34656_35011__$1)){
var c__4638__auto___35012 = cljs.core.chunk_first(seq__34656_35011__$1);
var G__35014 = cljs.core.chunk_rest(seq__34656_35011__$1);
var G__35015 = c__4638__auto___35012;
var G__35016 = cljs.core.count(c__4638__auto___35012);
var G__35017 = (0);
seq__34656_35000 = G__35014;
chunk__34657_35001 = G__35015;
count__34658_35002 = G__35016;
i__34659_35003 = G__35017;
continue;
} else {
var f_35018 = cljs.core.first(seq__34656_35011__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35018], 0));


var G__35019 = cljs.core.next(seq__34656_35011__$1);
var G__35020 = null;
var G__35021 = (0);
var G__35022 = (0);
seq__34656_35000 = G__35019;
chunk__34657_35001 = G__35020;
count__34658_35002 = G__35021;
i__34659_35003 = G__35022;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35023 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35023], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35023)))?cljs.core.second(arglists_35023):arglists_35023)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34671_35028 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34672_35029 = null;
var count__34673_35030 = (0);
var i__34674_35031 = (0);
while(true){
if((i__34674_35031 < count__34673_35030)){
var vec__34711_35033 = chunk__34672_35029.cljs$core$IIndexed$_nth$arity$2(null,i__34674_35031);
var name_35034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34711_35033,(0),null);
var map__34714_35035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34711_35033,(1),null);
var map__34714_35036__$1 = cljs.core.__destructure_map(map__34714_35035);
var doc_35037 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34714_35036__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35038 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34714_35036__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35034], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35038], 0));

if(cljs.core.truth_(doc_35037)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35037], 0));
} else {
}


var G__35039 = seq__34671_35028;
var G__35040 = chunk__34672_35029;
var G__35041 = count__34673_35030;
var G__35042 = (i__34674_35031 + (1));
seq__34671_35028 = G__35039;
chunk__34672_35029 = G__35040;
count__34673_35030 = G__35041;
i__34674_35031 = G__35042;
continue;
} else {
var temp__5753__auto___35046 = cljs.core.seq(seq__34671_35028);
if(temp__5753__auto___35046){
var seq__34671_35047__$1 = temp__5753__auto___35046;
if(cljs.core.chunked_seq_QMARK_(seq__34671_35047__$1)){
var c__4638__auto___35051 = cljs.core.chunk_first(seq__34671_35047__$1);
var G__35054 = cljs.core.chunk_rest(seq__34671_35047__$1);
var G__35055 = c__4638__auto___35051;
var G__35056 = cljs.core.count(c__4638__auto___35051);
var G__35057 = (0);
seq__34671_35028 = G__35054;
chunk__34672_35029 = G__35055;
count__34673_35030 = G__35056;
i__34674_35031 = G__35057;
continue;
} else {
var vec__34724_35058 = cljs.core.first(seq__34671_35047__$1);
var name_35059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34724_35058,(0),null);
var map__34727_35060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34724_35058,(1),null);
var map__34727_35061__$1 = cljs.core.__destructure_map(map__34727_35060);
var doc_35062 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34727_35061__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35063 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34727_35061__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35059], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35063], 0));

if(cljs.core.truth_(doc_35062)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35062], 0));
} else {
}


var G__35065 = cljs.core.next(seq__34671_35047__$1);
var G__35066 = null;
var G__35067 = (0);
var G__35068 = (0);
seq__34671_35028 = G__35065;
chunk__34672_35029 = G__35066;
count__34673_35030 = G__35067;
i__34674_35031 = G__35068;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__34728 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34729 = null;
var count__34730 = (0);
var i__34731 = (0);
while(true){
if((i__34731 < count__34730)){
var role = chunk__34729.cljs$core$IIndexed$_nth$arity$2(null,i__34731);
var temp__5753__auto___35072__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35072__$1)){
var spec_35073 = temp__5753__auto___35072__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35073)], 0));
} else {
}


var G__35075 = seq__34728;
var G__35076 = chunk__34729;
var G__35077 = count__34730;
var G__35078 = (i__34731 + (1));
seq__34728 = G__35075;
chunk__34729 = G__35076;
count__34730 = G__35077;
i__34731 = G__35078;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__34728);
if(temp__5753__auto____$1){
var seq__34728__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34728__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__34728__$1);
var G__35079 = cljs.core.chunk_rest(seq__34728__$1);
var G__35080 = c__4638__auto__;
var G__35081 = cljs.core.count(c__4638__auto__);
var G__35082 = (0);
seq__34728 = G__35079;
chunk__34729 = G__35080;
count__34730 = G__35081;
i__34731 = G__35082;
continue;
} else {
var role = cljs.core.first(seq__34728__$1);
var temp__5753__auto___35083__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35083__$2)){
var spec_35085 = temp__5753__auto___35083__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35085)], 0));
} else {
}


var G__35086 = cljs.core.next(seq__34728__$1);
var G__35087 = null;
var G__35088 = (0);
var G__35089 = (0);
seq__34728 = G__35086;
chunk__34729 = G__35087;
count__34730 = G__35088;
i__34731 = G__35089;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35099 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35100 = cljs.core.ex_cause(t);
via = G__35099;
t = G__35100;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__34845 = datafied_throwable;
var map__34845__$1 = cljs.core.__destructure_map(map__34845);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34845__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34845__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34845__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34846 = cljs.core.last(via);
var map__34846__$1 = cljs.core.__destructure_map(map__34846);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34846__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34846__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34846__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34847 = data;
var map__34847__$1 = cljs.core.__destructure_map(map__34847);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34847__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34847__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34847__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34848 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__34848__$1 = cljs.core.__destructure_map(map__34848);
var top_data = map__34848__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34848__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__34851 = phase;
var G__34851__$1 = (((G__34851 instanceof cljs.core.Keyword))?G__34851.fqn:null);
switch (G__34851__$1) {
case "read-source":
var map__34852 = data;
var map__34852__$1 = cljs.core.__destructure_map(map__34852);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34852__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34852__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34854 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__34854__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34854,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34854);
var G__34854__$2 = (cljs.core.truth_((function (){var fexpr__34855 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34855.cljs$core$IFn$_invoke$arity$1 ? fexpr__34855.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34855.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34854__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34854__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34854__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34854__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34856 = top_data;
var G__34856__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34856,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34856);
var G__34856__$2 = (cljs.core.truth_((function (){var fexpr__34860 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34860.cljs$core$IFn$_invoke$arity$1 ? fexpr__34860.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34860.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34856__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34856__$1);
var G__34856__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34856__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34856__$2);
var G__34856__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34856__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34856__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34856__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34856__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34862 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34862,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34862,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34862,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34862,(3),null);
var G__34873 = top_data;
var G__34873__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34873,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34873);
var G__34873__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34873__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34873__$1);
var G__34873__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34873__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34873__$2);
var G__34873__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34873__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34873__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34873__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34873__$4;
}

break;
case "execution":
var vec__34889 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34889,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34889,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34889,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34889,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34841_SHARP_){
var or__4212__auto__ = (p1__34841_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__34907 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34907.cljs$core$IFn$_invoke$arity$1 ? fexpr__34907.cljs$core$IFn$_invoke$arity$1(p1__34841_SHARP_) : fexpr__34907.call(null,p1__34841_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__34912 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34912__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34912,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34912);
var G__34912__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34912__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34912__$1);
var G__34912__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34912__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34912__$2);
var G__34912__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34912__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34912__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34912__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34912__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34851__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34932){
var map__34933 = p__34932;
var map__34933__$1 = cljs.core.__destructure_map(map__34933);
var triage_data = map__34933__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34933__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34933__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34933__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34933__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34933__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34933__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34933__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34933__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = source;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = line;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4212__auto__ = class$;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__34940 = phase;
var G__34940__$1 = (((G__34940 instanceof cljs.core.Keyword))?G__34940.fqn:null);
switch (G__34940__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__34941 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__34942 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34943 = loc;
var G__34944 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34945_35168 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34946_35169 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34947_35170 = true;
var _STAR_print_fn_STAR__temp_val__34948_35171 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34947_35170);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34948_35171);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34927_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34927_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34946_35169);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34945_35168);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34941,G__34942,G__34943,G__34944) : format.call(null,G__34941,G__34942,G__34943,G__34944));

break;
case "macroexpansion":
var G__34954 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__34955 = cause_type;
var G__34956 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34957 = loc;
var G__34958 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34954,G__34955,G__34956,G__34957,G__34958) : format.call(null,G__34954,G__34955,G__34956,G__34957,G__34958));

break;
case "compile-syntax-check":
var G__34963 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__34964 = cause_type;
var G__34965 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34966 = loc;
var G__34967 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34963,G__34964,G__34965,G__34966,G__34967) : format.call(null,G__34963,G__34964,G__34965,G__34966,G__34967));

break;
case "compilation":
var G__34969 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__34970 = cause_type;
var G__34971 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34972 = loc;
var G__34973 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34969,G__34970,G__34971,G__34972,G__34973) : format.call(null,G__34969,G__34970,G__34971,G__34972,G__34973));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__34975 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__34976 = symbol;
var G__34977 = loc;
var G__34978 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34983_35176 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34984_35177 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34985_35178 = true;
var _STAR_print_fn_STAR__temp_val__34986_35179 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34985_35178);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34986_35179);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34931_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34931_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34984_35177);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34983_35176);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34975,G__34976,G__34977,G__34978) : format.call(null,G__34975,G__34976,G__34977,G__34978));
} else {
var G__34988 = "Execution error%s at %s(%s).\n%s\n";
var G__34989 = cause_type;
var G__34990 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34991 = loc;
var G__34992 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34988,G__34989,G__34990,G__34991,G__34992) : format.call(null,G__34988,G__34989,G__34990,G__34991,G__34992));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34940__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
