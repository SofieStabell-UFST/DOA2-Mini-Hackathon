
shadow.cljs.devtools.client.env.module_loaded('core');

try { frontend.run(); } catch (e) { console.error("An error occurred when calling (frontend/run)"); throw(e); }