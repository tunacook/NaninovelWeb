if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,a)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let r={};const c=e=>n(e,o),b={module:{uri:o},exports:r,require:c};i[o]=Promise.all(s.map((e=>b[e]||c(e)))).then((e=>(a(...e),r)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-CqlZak8Y.css",revision:null},{url:"assets/index-Df6mu-Oc.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"bin/aot-instances.wasm",revision:"9f13a4561015f5e89e8ccd1f4fd8b6e3"},{url:"bin/Bootsharp.Common.wasm",revision:"5c2b830fab8ec532c61f1bc68758fdb3"},{url:"bin/Bootsharp.FileSystem.wasm",revision:"d41dedf4623f3c21e54686cb926db090"},{url:"bin/Bootsharp.Inject.wasm",revision:"2f844a7768b36220baa1f773394359a0"},{url:"bin/dotnet.js",revision:"d7c2ec34a8ecf21e53d0e1dc722e5cd8"},{url:"bin/dotnet.native.js",revision:"9b34f612adf4d00d0855c907323b4149"},{url:"bin/dotnet.native.wasm",revision:"8e792b587fa620661720da2caa2f04b7"},{url:"bin/dotnet.runtime.js",revision:"513f42cc007f631036c1156846963bf4"},{url:"bin/Humanizer.wasm",revision:"4e26c5f489e49df1aaee92cc1d681bdb"},{url:"bin/Microsoft.Extensions.DependencyInjection.Abstractions.wasm",revision:"27ef9949c78093fa595ea0aa21b1d435"},{url:"bin/Microsoft.Extensions.DependencyInjection.wasm",revision:"c22c029391cbf53297a880e5e525e7e7"},{url:"bin/Naninovel.Common.Bindings.wasm",revision:"4ed79fc07e34f5a457442e02bb085c95"},{url:"bin/Naninovel.Common.Modern.wasm",revision:"cc848bbf8be74b5e030389c67c5fcdac"},{url:"bin/Naninovel.Common.wasm",revision:"60c44dfe3a10e45a363fe67b64ef06b4"},{url:"bin/Naninovel.Editor.wasm",revision:"f064e755a452d2043abf9e56a77709ec"},{url:"bin/Naninovel.Editor.WASM.wasm",revision:"e0b994289ade0de806574ea871779819"},{url:"bin/System.Collections.Concurrent.wasm",revision:"8a40ac8cdb9e75b6afa9e64d02901111"},{url:"bin/System.Collections.wasm",revision:"aa6de615d6e7ef9335daeac7a95794a2"},{url:"bin/System.ComponentModel.wasm",revision:"957c21a65fe416f32f479101cdae085b"},{url:"bin/System.Linq.wasm",revision:"decd0a39d71a3ab1bb07ba20c53619df"},{url:"bin/System.Memory.wasm",revision:"f3a664da2b76ba56c7a9afdf94124781"},{url:"bin/System.Net.Http.wasm",revision:"b22dab1630aa83204c3ae3c889585bd6"},{url:"bin/System.Net.WebSockets.Client.wasm",revision:"1b4e00df9355da40081f93984a1d72ae"},{url:"bin/System.Net.WebSockets.wasm",revision:"02c9940e547f2b7517d5e5c49cbc9157"},{url:"bin/System.Private.CoreLib.wasm",revision:"81373a8ff0d0854728768c5aa4ace229"},{url:"bin/System.Private.Uri.wasm",revision:"3bc6bfc3c8bc459f9ee6626e94ac1267"},{url:"bin/System.Runtime.InteropServices.JavaScript.wasm",revision:"32186f7e4e92056e5c73184c5a502fe0"},{url:"bin/System.Text.Encodings.Web.wasm",revision:"6ea967e5fb45f12887deac74c13aa42e"},{url:"bin/System.Text.Json.wasm",revision:"74b39167467ea04511bbcb9a9246b6e2"},{url:"bin/System.Text.RegularExpressions.wasm",revision:"dbea4337b13e0497c44191427ee9c3a8"},{url:"fonts/inter-italic.woff2",revision:"650756001f1c3d7c39c59e812c2736e7"},{url:"fonts/inter.woff2",revision:"499fcada6ddb2c38718c2c16a190d639"},{url:"fonts/jb-italic.ttf",revision:"bf423b77f11b3cef4969bab1a7939dd8"},{url:"fonts/jb.ttf",revision:"4e546cf31f9ad0c6c43a0c9abbc9f9d4"},{url:"icons/logo-192.png",revision:"3d81e6ecc6ac86ad1d9f328fa508de2d"},{url:"icons/logo-512.png",revision:"a70eca74f96de5ba6848a9976a33345f"},{url:"icons/logo-mask.png",revision:"631cab3802424bec688753f9927fdaf8"},{url:"icons/logo.svg",revision:"2ae881ff911e8a9d5979a3ad441ae3cd"},{url:"index.html",revision:"f8cdd95acd0e43ca1091112e3659f131"},{url:"shots/shot1.webp",revision:"43542e1773b799750562ebf109c1d0aa"},{url:"icons/logo-192.png",revision:"3d81e6ecc6ac86ad1d9f328fa508de2d"},{url:"icons/logo-512.png",revision:"a70eca74f96de5ba6848a9976a33345f"},{url:"icons/logo-mask.png",revision:"631cab3802424bec688753f9927fdaf8"},{url:"icons/logo.svg",revision:"2ae881ff911e8a9d5979a3ad441ae3cd"},{url:"manifest.webmanifest",revision:"8a7df0db13b52fa99684ca621ebfc46b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
