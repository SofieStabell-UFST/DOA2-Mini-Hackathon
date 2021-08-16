goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___36090 = arguments.length;
var i__4819__auto___36091 = (0);
while(true){
if((i__4819__auto___36091 < len__4818__auto___36090)){
args__4824__auto__.push((arguments[i__4819__auto___36091]));

var G__36092 = (i__4819__auto___36091 + (1));
i__4819__auto___36091 = G__36092;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35877){
var G__35878 = cljs.core.first(seq35877);
var seq35877__$1 = cljs.core.next(seq35877);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35878,seq35877__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35879 = cljs.core.seq(sources);
var chunk__35880 = null;
var count__35881 = (0);
var i__35882 = (0);
while(true){
if((i__35882 < count__35881)){
var map__35893 = chunk__35880.cljs$core$IIndexed$_nth$arity$2(null,i__35882);
var map__35893__$1 = cljs.core.__destructure_map(map__35893);
var src = map__35893__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35893__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35893__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35893__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35893__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35894){var e_36097 = e35894;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36097);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36097.message)].join('')));
}

var G__36098 = seq__35879;
var G__36099 = chunk__35880;
var G__36100 = count__35881;
var G__36101 = (i__35882 + (1));
seq__35879 = G__36098;
chunk__35880 = G__36099;
count__35881 = G__36100;
i__35882 = G__36101;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35879);
if(temp__5753__auto__){
var seq__35879__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35879__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35879__$1);
var G__36102 = cljs.core.chunk_rest(seq__35879__$1);
var G__36103 = c__4638__auto__;
var G__36104 = cljs.core.count(c__4638__auto__);
var G__36105 = (0);
seq__35879 = G__36102;
chunk__35880 = G__36103;
count__35881 = G__36104;
i__35882 = G__36105;
continue;
} else {
var map__35895 = cljs.core.first(seq__35879__$1);
var map__35895__$1 = cljs.core.__destructure_map(map__35895);
var src = map__35895__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35895__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35895__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35895__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35895__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35896){var e_36106 = e35896;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36106);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36106.message)].join('')));
}

var G__36107 = cljs.core.next(seq__35879__$1);
var G__36108 = null;
var G__36109 = (0);
var G__36110 = (0);
seq__35879 = G__36107;
chunk__35880 = G__36108;
count__35881 = G__36109;
i__35882 = G__36110;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35898 = cljs.core.seq(js_requires);
var chunk__35899 = null;
var count__35900 = (0);
var i__35901 = (0);
while(true){
if((i__35901 < count__35900)){
var js_ns = chunk__35899.cljs$core$IIndexed$_nth$arity$2(null,i__35901);
var require_str_36112 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36112);


var G__36114 = seq__35898;
var G__36115 = chunk__35899;
var G__36116 = count__35900;
var G__36117 = (i__35901 + (1));
seq__35898 = G__36114;
chunk__35899 = G__36115;
count__35900 = G__36116;
i__35901 = G__36117;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35898);
if(temp__5753__auto__){
var seq__35898__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35898__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35898__$1);
var G__36118 = cljs.core.chunk_rest(seq__35898__$1);
var G__36119 = c__4638__auto__;
var G__36120 = cljs.core.count(c__4638__auto__);
var G__36121 = (0);
seq__35898 = G__36118;
chunk__35899 = G__36119;
count__35900 = G__36120;
i__35901 = G__36121;
continue;
} else {
var js_ns = cljs.core.first(seq__35898__$1);
var require_str_36122 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36122);


var G__36123 = cljs.core.next(seq__35898__$1);
var G__36124 = null;
var G__36125 = (0);
var G__36126 = (0);
seq__35898 = G__36123;
chunk__35899 = G__36124;
count__35900 = G__36125;
i__35901 = G__36126;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35904){
var map__35905 = p__35904;
var map__35905__$1 = cljs.core.__destructure_map(map__35905);
var msg = map__35905__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35905__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35905__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35907(s__35908){
return (new cljs.core.LazySeq(null,(function (){
var s__35908__$1 = s__35908;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__35908__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__35914 = cljs.core.first(xs__6308__auto__);
var map__35914__$1 = cljs.core.__destructure_map(map__35914);
var src = map__35914__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35914__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35914__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__35908__$1,map__35914,map__35914__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35905,map__35905__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35907_$_iter__35909(s__35910){
return (new cljs.core.LazySeq(null,((function (s__35908__$1,map__35914,map__35914__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35905,map__35905__$1,msg,info,reload_info){
return (function (){
var s__35910__$1 = s__35910;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__35910__$1);
if(temp__5753__auto____$1){
var s__35910__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35910__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__35910__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__35912 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__35911 = (0);
while(true){
if((i__35911 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__35911);
cljs.core.chunk_append(b__35912,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36127 = (i__35911 + (1));
i__35911 = G__36127;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35912),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35907_$_iter__35909(cljs.core.chunk_rest(s__35910__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35912),null);
}
} else {
var warning = cljs.core.first(s__35910__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35907_$_iter__35909(cljs.core.rest(s__35910__$2)));
}
} else {
return null;
}
break;
}
});})(s__35908__$1,map__35914,map__35914__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35905,map__35905__$1,msg,info,reload_info))
,null,null));
});})(s__35908__$1,map__35914,map__35914__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35905,map__35905__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35907(cljs.core.rest(s__35908__$1)));
} else {
var G__36128 = cljs.core.rest(s__35908__$1);
s__35908__$1 = G__36128;
continue;
}
} else {
var G__36129 = cljs.core.rest(s__35908__$1);
s__35908__$1 = G__36129;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__35915_36130 = cljs.core.seq(warnings);
var chunk__35916_36131 = null;
var count__35917_36132 = (0);
var i__35918_36133 = (0);
while(true){
if((i__35918_36133 < count__35917_36132)){
var map__35921_36134 = chunk__35916_36131.cljs$core$IIndexed$_nth$arity$2(null,i__35918_36133);
var map__35921_36135__$1 = cljs.core.__destructure_map(map__35921_36134);
var w_36136 = map__35921_36135__$1;
var msg_36137__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35921_36135__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36138 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35921_36135__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36139 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35921_36135__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35921_36135__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36140)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36138),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36139),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36137__$1)].join(''));


var G__36141 = seq__35915_36130;
var G__36142 = chunk__35916_36131;
var G__36143 = count__35917_36132;
var G__36144 = (i__35918_36133 + (1));
seq__35915_36130 = G__36141;
chunk__35916_36131 = G__36142;
count__35917_36132 = G__36143;
i__35918_36133 = G__36144;
continue;
} else {
var temp__5753__auto___36145 = cljs.core.seq(seq__35915_36130);
if(temp__5753__auto___36145){
var seq__35915_36146__$1 = temp__5753__auto___36145;
if(cljs.core.chunked_seq_QMARK_(seq__35915_36146__$1)){
var c__4638__auto___36147 = cljs.core.chunk_first(seq__35915_36146__$1);
var G__36148 = cljs.core.chunk_rest(seq__35915_36146__$1);
var G__36149 = c__4638__auto___36147;
var G__36150 = cljs.core.count(c__4638__auto___36147);
var G__36151 = (0);
seq__35915_36130 = G__36148;
chunk__35916_36131 = G__36149;
count__35917_36132 = G__36150;
i__35918_36133 = G__36151;
continue;
} else {
var map__35922_36155 = cljs.core.first(seq__35915_36146__$1);
var map__35922_36156__$1 = cljs.core.__destructure_map(map__35922_36155);
var w_36157 = map__35922_36156__$1;
var msg_36158__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35922_36156__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36159 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35922_36156__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36160 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35922_36156__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35922_36156__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36161)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36159),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36160),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36158__$1)].join(''));


var G__36162 = cljs.core.next(seq__35915_36146__$1);
var G__36163 = null;
var G__36164 = (0);
var G__36165 = (0);
seq__35915_36130 = G__36162;
chunk__35916_36131 = G__36163;
count__35917_36132 = G__36164;
i__35918_36133 = G__36165;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__35903_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35903_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4210__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4210__auto____$1){
return new$;
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__35927){
var map__35928 = p__35927;
var map__35928__$1 = cljs.core.__destructure_map(map__35928);
var msg = map__35928__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35928__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35929 = cljs.core.seq(updates);
var chunk__35931 = null;
var count__35932 = (0);
var i__35933 = (0);
while(true){
if((i__35933 < count__35932)){
var path = chunk__35931.cljs$core$IIndexed$_nth$arity$2(null,i__35933);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36025_36166 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36029_36167 = null;
var count__36030_36168 = (0);
var i__36031_36169 = (0);
while(true){
if((i__36031_36169 < count__36030_36168)){
var node_36170 = chunk__36029_36167.cljs$core$IIndexed$_nth$arity$2(null,i__36031_36169);
if(cljs.core.not(node_36170.shadow$old)){
var path_match_36171 = shadow.cljs.devtools.client.browser.match_paths(node_36170.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36171)){
var new_link_36172 = (function (){var G__36044 = node_36170.cloneNode(true);
G__36044.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36171),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36044;
})();
(node_36170.shadow$old = true);

(new_link_36172.onload = ((function (seq__36025_36166,chunk__36029_36167,count__36030_36168,i__36031_36169,seq__35929,chunk__35931,count__35932,i__35933,new_link_36172,path_match_36171,node_36170,path,map__35928,map__35928__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36170);
});})(seq__36025_36166,chunk__36029_36167,count__36030_36168,i__36031_36169,seq__35929,chunk__35931,count__35932,i__35933,new_link_36172,path_match_36171,node_36170,path,map__35928,map__35928__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36171], 0));

goog.dom.insertSiblingAfter(new_link_36172,node_36170);


var G__36173 = seq__36025_36166;
var G__36174 = chunk__36029_36167;
var G__36175 = count__36030_36168;
var G__36176 = (i__36031_36169 + (1));
seq__36025_36166 = G__36173;
chunk__36029_36167 = G__36174;
count__36030_36168 = G__36175;
i__36031_36169 = G__36176;
continue;
} else {
var G__36177 = seq__36025_36166;
var G__36178 = chunk__36029_36167;
var G__36179 = count__36030_36168;
var G__36180 = (i__36031_36169 + (1));
seq__36025_36166 = G__36177;
chunk__36029_36167 = G__36178;
count__36030_36168 = G__36179;
i__36031_36169 = G__36180;
continue;
}
} else {
var G__36181 = seq__36025_36166;
var G__36182 = chunk__36029_36167;
var G__36183 = count__36030_36168;
var G__36184 = (i__36031_36169 + (1));
seq__36025_36166 = G__36181;
chunk__36029_36167 = G__36182;
count__36030_36168 = G__36183;
i__36031_36169 = G__36184;
continue;
}
} else {
var temp__5753__auto___36185 = cljs.core.seq(seq__36025_36166);
if(temp__5753__auto___36185){
var seq__36025_36186__$1 = temp__5753__auto___36185;
if(cljs.core.chunked_seq_QMARK_(seq__36025_36186__$1)){
var c__4638__auto___36187 = cljs.core.chunk_first(seq__36025_36186__$1);
var G__36188 = cljs.core.chunk_rest(seq__36025_36186__$1);
var G__36189 = c__4638__auto___36187;
var G__36190 = cljs.core.count(c__4638__auto___36187);
var G__36191 = (0);
seq__36025_36166 = G__36188;
chunk__36029_36167 = G__36189;
count__36030_36168 = G__36190;
i__36031_36169 = G__36191;
continue;
} else {
var node_36192 = cljs.core.first(seq__36025_36186__$1);
if(cljs.core.not(node_36192.shadow$old)){
var path_match_36193 = shadow.cljs.devtools.client.browser.match_paths(node_36192.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36193)){
var new_link_36194 = (function (){var G__36045 = node_36192.cloneNode(true);
G__36045.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36193),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36045;
})();
(node_36192.shadow$old = true);

(new_link_36194.onload = ((function (seq__36025_36166,chunk__36029_36167,count__36030_36168,i__36031_36169,seq__35929,chunk__35931,count__35932,i__35933,new_link_36194,path_match_36193,node_36192,seq__36025_36186__$1,temp__5753__auto___36185,path,map__35928,map__35928__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36192);
});})(seq__36025_36166,chunk__36029_36167,count__36030_36168,i__36031_36169,seq__35929,chunk__35931,count__35932,i__35933,new_link_36194,path_match_36193,node_36192,seq__36025_36186__$1,temp__5753__auto___36185,path,map__35928,map__35928__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36193], 0));

goog.dom.insertSiblingAfter(new_link_36194,node_36192);


var G__36195 = cljs.core.next(seq__36025_36186__$1);
var G__36196 = null;
var G__36197 = (0);
var G__36198 = (0);
seq__36025_36166 = G__36195;
chunk__36029_36167 = G__36196;
count__36030_36168 = G__36197;
i__36031_36169 = G__36198;
continue;
} else {
var G__36199 = cljs.core.next(seq__36025_36186__$1);
var G__36200 = null;
var G__36201 = (0);
var G__36202 = (0);
seq__36025_36166 = G__36199;
chunk__36029_36167 = G__36200;
count__36030_36168 = G__36201;
i__36031_36169 = G__36202;
continue;
}
} else {
var G__36203 = cljs.core.next(seq__36025_36186__$1);
var G__36204 = null;
var G__36205 = (0);
var G__36206 = (0);
seq__36025_36166 = G__36203;
chunk__36029_36167 = G__36204;
count__36030_36168 = G__36205;
i__36031_36169 = G__36206;
continue;
}
}
} else {
}
}
break;
}


var G__36207 = seq__35929;
var G__36208 = chunk__35931;
var G__36209 = count__35932;
var G__36210 = (i__35933 + (1));
seq__35929 = G__36207;
chunk__35931 = G__36208;
count__35932 = G__36209;
i__35933 = G__36210;
continue;
} else {
var G__36211 = seq__35929;
var G__36212 = chunk__35931;
var G__36213 = count__35932;
var G__36214 = (i__35933 + (1));
seq__35929 = G__36211;
chunk__35931 = G__36212;
count__35932 = G__36213;
i__35933 = G__36214;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35929);
if(temp__5753__auto__){
var seq__35929__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35929__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35929__$1);
var G__36215 = cljs.core.chunk_rest(seq__35929__$1);
var G__36216 = c__4638__auto__;
var G__36217 = cljs.core.count(c__4638__auto__);
var G__36218 = (0);
seq__35929 = G__36215;
chunk__35931 = G__36216;
count__35932 = G__36217;
i__35933 = G__36218;
continue;
} else {
var path = cljs.core.first(seq__35929__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36046_36219 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36050_36220 = null;
var count__36051_36221 = (0);
var i__36052_36222 = (0);
while(true){
if((i__36052_36222 < count__36051_36221)){
var node_36223 = chunk__36050_36220.cljs$core$IIndexed$_nth$arity$2(null,i__36052_36222);
if(cljs.core.not(node_36223.shadow$old)){
var path_match_36224 = shadow.cljs.devtools.client.browser.match_paths(node_36223.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36224)){
var new_link_36225 = (function (){var G__36060 = node_36223.cloneNode(true);
G__36060.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36224),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36060;
})();
(node_36223.shadow$old = true);

(new_link_36225.onload = ((function (seq__36046_36219,chunk__36050_36220,count__36051_36221,i__36052_36222,seq__35929,chunk__35931,count__35932,i__35933,new_link_36225,path_match_36224,node_36223,path,seq__35929__$1,temp__5753__auto__,map__35928,map__35928__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36223);
});})(seq__36046_36219,chunk__36050_36220,count__36051_36221,i__36052_36222,seq__35929,chunk__35931,count__35932,i__35933,new_link_36225,path_match_36224,node_36223,path,seq__35929__$1,temp__5753__auto__,map__35928,map__35928__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36224], 0));

goog.dom.insertSiblingAfter(new_link_36225,node_36223);


var G__36226 = seq__36046_36219;
var G__36227 = chunk__36050_36220;
var G__36228 = count__36051_36221;
var G__36229 = (i__36052_36222 + (1));
seq__36046_36219 = G__36226;
chunk__36050_36220 = G__36227;
count__36051_36221 = G__36228;
i__36052_36222 = G__36229;
continue;
} else {
var G__36230 = seq__36046_36219;
var G__36231 = chunk__36050_36220;
var G__36232 = count__36051_36221;
var G__36233 = (i__36052_36222 + (1));
seq__36046_36219 = G__36230;
chunk__36050_36220 = G__36231;
count__36051_36221 = G__36232;
i__36052_36222 = G__36233;
continue;
}
} else {
var G__36234 = seq__36046_36219;
var G__36235 = chunk__36050_36220;
var G__36236 = count__36051_36221;
var G__36237 = (i__36052_36222 + (1));
seq__36046_36219 = G__36234;
chunk__36050_36220 = G__36235;
count__36051_36221 = G__36236;
i__36052_36222 = G__36237;
continue;
}
} else {
var temp__5753__auto___36238__$1 = cljs.core.seq(seq__36046_36219);
if(temp__5753__auto___36238__$1){
var seq__36046_36239__$1 = temp__5753__auto___36238__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36046_36239__$1)){
var c__4638__auto___36240 = cljs.core.chunk_first(seq__36046_36239__$1);
var G__36241 = cljs.core.chunk_rest(seq__36046_36239__$1);
var G__36242 = c__4638__auto___36240;
var G__36243 = cljs.core.count(c__4638__auto___36240);
var G__36244 = (0);
seq__36046_36219 = G__36241;
chunk__36050_36220 = G__36242;
count__36051_36221 = G__36243;
i__36052_36222 = G__36244;
continue;
} else {
var node_36245 = cljs.core.first(seq__36046_36239__$1);
if(cljs.core.not(node_36245.shadow$old)){
var path_match_36246 = shadow.cljs.devtools.client.browser.match_paths(node_36245.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36246)){
var new_link_36247 = (function (){var G__36061 = node_36245.cloneNode(true);
G__36061.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36246),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36061;
})();
(node_36245.shadow$old = true);

(new_link_36247.onload = ((function (seq__36046_36219,chunk__36050_36220,count__36051_36221,i__36052_36222,seq__35929,chunk__35931,count__35932,i__35933,new_link_36247,path_match_36246,node_36245,seq__36046_36239__$1,temp__5753__auto___36238__$1,path,seq__35929__$1,temp__5753__auto__,map__35928,map__35928__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36245);
});})(seq__36046_36219,chunk__36050_36220,count__36051_36221,i__36052_36222,seq__35929,chunk__35931,count__35932,i__35933,new_link_36247,path_match_36246,node_36245,seq__36046_36239__$1,temp__5753__auto___36238__$1,path,seq__35929__$1,temp__5753__auto__,map__35928,map__35928__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36246], 0));

goog.dom.insertSiblingAfter(new_link_36247,node_36245);


var G__36248 = cljs.core.next(seq__36046_36239__$1);
var G__36249 = null;
var G__36250 = (0);
var G__36251 = (0);
seq__36046_36219 = G__36248;
chunk__36050_36220 = G__36249;
count__36051_36221 = G__36250;
i__36052_36222 = G__36251;
continue;
} else {
var G__36252 = cljs.core.next(seq__36046_36239__$1);
var G__36253 = null;
var G__36254 = (0);
var G__36255 = (0);
seq__36046_36219 = G__36252;
chunk__36050_36220 = G__36253;
count__36051_36221 = G__36254;
i__36052_36222 = G__36255;
continue;
}
} else {
var G__36256 = cljs.core.next(seq__36046_36239__$1);
var G__36257 = null;
var G__36258 = (0);
var G__36259 = (0);
seq__36046_36219 = G__36256;
chunk__36050_36220 = G__36257;
count__36051_36221 = G__36258;
i__36052_36222 = G__36259;
continue;
}
}
} else {
}
}
break;
}


var G__36260 = cljs.core.next(seq__35929__$1);
var G__36261 = null;
var G__36262 = (0);
var G__36263 = (0);
seq__35929 = G__36260;
chunk__35931 = G__36261;
count__35932 = G__36262;
i__35933 = G__36263;
continue;
} else {
var G__36264 = cljs.core.next(seq__35929__$1);
var G__36265 = null;
var G__36266 = (0);
var G__36267 = (0);
seq__35929 = G__36264;
chunk__35931 = G__36265;
count__35932 = G__36266;
i__35933 = G__36267;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__36066){
var map__36067 = p__36066;
var map__36067__$1 = cljs.core.__destructure_map(map__36067);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36067__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__36070){
var map__36071 = p__36070;
var map__36071__$1 = cljs.core.__destructure_map(map__36071);
var _ = map__36071__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36071__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__36072,done,error){
var map__36073 = p__36072;
var map__36073__$1 = cljs.core.__destructure_map(map__36073);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36073__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__36074,done,error){
var map__36075 = p__36074;
var map__36075__$1 = cljs.core.__destructure_map(map__36075);
var msg = map__36075__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36075__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36075__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36075__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36076){
var map__36077 = p__36076;
var map__36077__$1 = cljs.core.__destructure_map(map__36077);
var src = map__36077__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36077__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__36078 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__36078) : done.call(null,G__36078));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__36079){
var map__36080 = p__36079;
var map__36080__$1 = cljs.core.__destructure_map(map__36080);
var msg__$1 = map__36080__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36080__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e36081){var ex = e36081;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__36082){
var map__36083 = p__36082;
var map__36083__$1 = cljs.core.__destructure_map(map__36083);
var env = map__36083__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36083__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__36084){
var map__36085 = p__36084;
var map__36085__$1 = cljs.core.__destructure_map(map__36085);
var msg = map__36085__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36085__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__36086){
var map__36087 = p__36086;
var map__36087__$1 = cljs.core.__destructure_map(map__36087);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36087__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36087__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__36088){
var map__36089 = p__36088;
var map__36089__$1 = cljs.core.__destructure_map(map__36089);
var svc = map__36089__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36089__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
