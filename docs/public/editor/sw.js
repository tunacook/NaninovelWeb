if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,a)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const t=e=>n(e,r),l={module:{uri:r},exports:o,require:t};i[r]=Promise.all(s.map((e=>l[e]||t(e)))).then((e=>(a(...e),o)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index--iUmSCvm.js",revision:null},{url:"assets/index-A1-wvAcD.css",revision:null},{url:"assets/inter-cyrillic-ext-wght-normal-yBM_KeYt.woff2",revision:null},{url:"assets/inter-cyrillic-wght-normal-ZiSV2vHp.woff2",revision:null},{url:"assets/inter-greek-ext-wght-normal--QGCzYqo.woff2",revision:null},{url:"assets/inter-greek-wght-normal-8iAzSMjZ.woff2",revision:null},{url:"assets/inter-latin-ext-wght-normal-jdaSF5G5.woff2",revision:null},{url:"assets/inter-latin-wght-normal-YFatk6uG.woff2",revision:null},{url:"assets/inter-vietnamese-wght-normal-PxkLsD1V.woff2",revision:null},{url:"assets/jetbrains-mono-cyrillic-wght-normal-abYgcALZ.woff2",revision:null},{url:"assets/jetbrains-mono-greek-wght-normal-VtST8Y2j.woff2",revision:null},{url:"assets/jetbrains-mono-latin-ext-wght-normal-qJtheMis.woff2",revision:null},{url:"assets/jetbrains-mono-latin-wght-normal-AI7HGr_Q.woff2",revision:null},{url:"assets/jetbrains-mono-vietnamese-wght-normal-cvsqbrb2.woff2",revision:null},{url:"bin/Bootsharp.Common.wasm",revision:"99e9acc4f6aa1baef312f4529603f683"},{url:"bin/Bootsharp.FileSystem.wasm",revision:"d73b727c4550caa36a27dca70a92216a"},{url:"bin/Bootsharp.Inject.wasm",revision:"089705725643e97b7ed9bc5d88c5a23a"},{url:"bin/dotnet.js",revision:"27975cfc284632100ab5b2189d3a9dd7"},{url:"bin/dotnet.native.js",revision:"3d96bfb7ac69d3e40aa955e11cff26fa"},{url:"bin/dotnet.native.wasm",revision:"23b4670274dfd9a661a1cec40fe8c566"},{url:"bin/dotnet.runtime.js",revision:"d4532fa189b6031d43727b05ba1e071e"},{url:"bin/Humanizer.wasm",revision:"4e26c5f489e49df1aaee92cc1d681bdb"},{url:"bin/Microsoft.Extensions.DependencyInjection.Abstractions.wasm",revision:"f0eebc6cfe26bab6857f0bfda0e2d723"},{url:"bin/Microsoft.Extensions.DependencyInjection.wasm",revision:"c22c029391cbf53297a880e5e525e7e7"},{url:"bin/Naninovel.Common.Bindings.wasm",revision:"59916fb16eacdeccf93c628919c5efde"},{url:"bin/Naninovel.Common.Modern.wasm",revision:"3c1406c544f29a1eb2cedc1e70e5ee65"},{url:"bin/Naninovel.Common.wasm",revision:"09fe185f68ef70b58a3a3a20d6efd883"},{url:"bin/Naninovel.Editor.wasm",revision:"625af6eb4119ffd0e9e24943eaedf282"},{url:"bin/Naninovel.Editor.WASM.wasm",revision:"bbfb4161aa7c0c20f1da432b8263490b"},{url:"bin/System.Collections.Concurrent.wasm",revision:"33f5375fa982253148f1726edf9ea530"},{url:"bin/System.Collections.wasm",revision:"a77d0e45e6444ff43f9d58100afc6420"},{url:"bin/System.ComponentModel.wasm",revision:"c8ab59df3a203e749a429693aa46b50b"},{url:"bin/System.Linq.wasm",revision:"1e7196b5c5e1092c1de78da9eab1b4b8"},{url:"bin/System.Memory.wasm",revision:"50819659531c6e474c1c107c0f0c9fe7"},{url:"bin/System.Net.Http.wasm",revision:"2c792d41ce360e3e3bf4301aa6d71982"},{url:"bin/System.Net.WebSockets.Client.wasm",revision:"e88a52e2b7020eddc9759c03bdb2b4ba"},{url:"bin/System.Net.WebSockets.wasm",revision:"20aac6b6771daacf7dc014f93a43f15e"},{url:"bin/System.Private.CoreLib.wasm",revision:"2274e2de154da244e229e4713729eaa7"},{url:"bin/System.Private.Uri.wasm",revision:"a51799548d5d3954cbe73f29c3d0281d"},{url:"bin/System.Runtime.InteropServices.JavaScript.wasm",revision:"e196010eecdc7076b3848d2fcdaba102"},{url:"bin/System.Text.Encodings.Web.wasm",revision:"8e60eadbf39842a37dd2fd26463d9a7c"},{url:"bin/System.Text.Json.wasm",revision:"3ccf0141d71013cf3889a5f6d6063c56"},{url:"bin/System.Text.RegularExpressions.wasm",revision:"727d42729c460a45d71d10da4f5bba04"},{url:"icons/logo-192.png",revision:"3d81e6ecc6ac86ad1d9f328fa508de2d"},{url:"icons/logo-512.png",revision:"a70eca74f96de5ba6848a9976a33345f"},{url:"icons/logo-mask.png",revision:"631cab3802424bec688753f9927fdaf8"},{url:"icons/logo.svg",revision:"2ae881ff911e8a9d5979a3ad441ae3cd"},{url:"index.html",revision:"ed0a71c237656c22c57fa157ec77a0c7"},{url:"registerSW.js",revision:"400c0af50daf54112de895e04b65b25f"},{url:"manifest.webmanifest",revision:"99517c143321f4251f57426bee73eedc"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));