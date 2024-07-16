﻿//! Licensed to the .NET Foundation under one or more agreements.
//! The .NET Foundation licenses this file to you under the MIT license.
const e=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,6,64,25,11,11])),t=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11])),o=Symbol.for("wasm promise_control");function n(e,t){let n=null;const r=new Promise((function(o,r){n={isDone:!1,promise:null,resolve:t=>{n.isDone||(n.isDone=!0,o(t),e&&e())},reject:e=>{n.isDone||(n.isDone=!0,r(e),t&&t())}}}));n.promise=r;const s=r;return s[o]=n,{promise:s,promise_control:n}}function r(e){return e[o]}function s(e){(function(e){return void 0!==e[o]})(e)||Ce(!1,"Promise is not controllable")}const i="MONO_WASM: ";function a(e,...t){je.diagnosticTracing&&console.debug(i+e,...t)}function l(e,...t){console.info(i+e,...t)}function c(e,...t){console.info(e,...t)}function u(e,...t){console.warn(i+e,...t)}function d(e,...t){t&&t.length>0&&t[0]&&"object"==typeof t[0]&&t[0].silent||console.error(i+e,...t)}let f;function m(e,t,o){const n={log:t.log,error:t.error},r=t;function s(t,o,r){return function(...s){try{let n=s[0];if(void 0===n)n="undefined";else if(null===n)n="null";else if("function"==typeof n)n=n.toString();else if("string"!=typeof n)try{n=JSON.stringify(n)}catch(e){n=n.toString()}if("string"==typeof n)if("["==n[0]){const t=(new Date).toISOString();n="main"!==e?`[${e}][${t}] ${n}`:`[${t}] ${n}`}else"main"!==e&&(n=`[${e}] ${n}`);o(r?JSON.stringify({method:t,payload:n,arguments:s}):[t+n,...s.slice(1)])}catch(e){n.error(`proxyConsole failed: ${e}`)}}}const i=["debug","trace","warn","info","error"];for(const e of i)"function"!=typeof r[e]&&(r[e]=s(`console.${e}: `,t.log,!1));const a=`${o}/console`.replace("https://","wss://").replace("http://","ws://");f=new WebSocket(a),f.addEventListener("open",(()=>{n.log(`browser: [${e}] Console websocket connected.`)})),f.addEventListener("error",(t=>{n.error(`[${e}] websocket error: ${t}`,t)})),f.addEventListener("close",(t=>{n.error(`[${e}] websocket closed: ${t}`,t)}));const l=e=>{f.readyState===WebSocket.OPEN?f.send(e):n.log(e)};for(const e of["log",...i])r[e]=s(`console.${e}`,l,!0)}const h={},g={},p={};let b,w,y;function v(){const e=Object.values(p),t=Object.values(g),o=R(e),n=R(t),r=o+n;if(0===r)return;const s=_e?"%c":"",i=_e?["background: purple; color: white; padding: 1px 3px; border-radius: 3px;","font-weight: bold;","font-weight: normal;"]:[],a=je.config.linkerEnabled?"":"\nThis application was built with linking (tree shaking) disabled. \nPublished applications will be significantly smaller if you install wasm-tools workload. \nSee also https://aka.ms/dotnet-wasm-features";console.groupCollapsed(`${s}dotnet${s} Loaded ${j(r)} resources${s}${a}`,...i),e.length&&(console.groupCollapsed(`Loaded ${j(o)} resources from cache`),console.table(p),console.groupEnd()),t.length&&(console.groupCollapsed(`Loaded ${j(n)} resources from network`),console.table(g),console.groupEnd()),console.groupEnd()}async function _(){const e=b;if(e){const t=(await e.keys()).map((async t=>{t.url in h||await e.delete(t)}));await Promise.all(t)}}function E(e){return`${e.resolvedUrl}.${e.hash}`}function R(e){return e.reduce(((e,t)=>e+(t.responseBytes||0)),0)}function j(e){return`${(e/1048576).toFixed(2)} MB`}function x(e){var t;if((null===(t=e.resources)||void 0===t?void 0:t.icu)&&"invariant"!=e.globalizationMode){const t=e.applicationCulture||(_e?navigator.languages&&navigator.languages[0]:Intl.DateTimeFormat().resolvedOptions().locale),o=Object.keys(e.resources.icu);let n=null;if("custom"===e.globalizationMode?1===o.length&&(n=o[0]):"hybrid"===e.globalizationMode?n="icudt_hybrid.dat":t&&"all"!==e.globalizationMode?"sharded"===e.globalizationMode&&(n=function(e){const t=e.split("-")[0];return"en"===t||["fr","fr-FR","it","it-IT","de","de-DE","es","es-ES"].includes(e)?"icudt_EFIGS.dat":["zh","ko","ja"].includes(t)?"icudt_CJK.dat":"icudt_no_CJK.dat"}(t)):n="icudt.dat",n&&o.includes(n))return n}return e.globalizationMode="invariant",null}const S=class{constructor(e){this.url=e}toString(){return this.url}};async function A(e,t){try{const o="function"==typeof globalThis.fetch;if(ye){const n=e.startsWith("file://");if(!n&&o)return globalThis.fetch(e,t||{credentials:"same-origin"});w||(y=Se.require("url"),w=Se.require("fs")),n&&(e=y.fileURLToPath(e));const r=await w.promises.readFile(e);return{ok:!0,headers:{length:0,get:()=>null},url:e,arrayBuffer:()=>r,json:()=>JSON.parse(r),text:()=>{throw new Error("NotImplementedException")}}}if(o)return globalThis.fetch(e,t||{credentials:"same-origin"});if("function"==typeof read)return{ok:!0,url:e,headers:{length:0,get:()=>null},arrayBuffer:()=>new Uint8Array(read(e,"binary")),json:()=>JSON.parse(read(e,"utf8")),text:()=>read(e,"utf8")}}catch(t){return{ok:!1,url:e,status:500,headers:{length:0,get:()=>null},statusText:"ERR28: "+t,arrayBuffer:()=>{throw t},json:()=>{throw t},text:()=>{throw t}}}throw new Error("No fetch implementation available")}function D(e){return"string"!=typeof e&&Ce(!1,"url must be a string"),!O(e)&&0!==e.indexOf("./")&&0!==e.indexOf("../")&&globalThis.URL&&globalThis.document&&globalThis.document.baseURI&&(e=new URL(e,globalThis.document.baseURI).toString()),e}const C=/^[a-zA-Z][a-zA-Z\d+\-.]*?:\/\//,T=/[a-zA-Z]:[\\/]/;function O(e){return ye||Ee?e.startsWith("/")||e.startsWith("\\")||-1!==e.indexOf("///")||T.test(e):C.test(e)}let k,M=0;const $=[],L=[],I=new Map,U={"js-module-threads":!0,"js-module-runtime":!0,"js-module-dotnet":!0,"js-module-native":!0},N={...U,"js-module-library-initializer":!0},P={...U,dotnetwasm:!0,heap:!0,manifest:!0},z={...N,manifest:!0},F={...N,dotnetwasm:!0},W={dotnetwasm:!0,symbols:!0},B={resource:!0,assembly:!0,pdb:!0,heap:!0,icu:!0},V={...N,dotnetwasm:!0,symbols:!0};function q(e){return!("icu"==e.behavior&&e.name!=je.preferredIcuAsset)}function J(e,t,o){const n=Object.keys(t||{});Ce(1==n.length,`Expect to have one ${o} asset in resources`);const r=n[0],s={name:r,hash:t[r],behavior:o};return H(s),e.push(s),s}function H(e){P[e.behavior]&&I.set(e.behavior,e)}function Q(e){const t=function(e){Ce(P[e],`Unknown single asset behavior ${e}`);const t=I.get(e);return Ce(t,`Single asset for ${e} not found`),t}(e);if(t.resolvedUrl=je.locateFile(t.name),U[t.behavior]){const e=se(t);e?("string"!=typeof e&&Ce(!1,"loadBootResource response for 'dotnetjs' type should be a URL string"),t.resolvedUrl=e):t.resolvedUrl=ee(t.resolvedUrl,t.behavior)}else if("dotnetwasm"!==t.behavior)throw new Error(`Unknown single asset behavior ${e}`);return t}async function Z(){a("mono_download_assets");try{const e=[],t=t=>{!V[t.behavior]&&q(t)&&je.expected_instantiated_assets_count++,!F[t.behavior]&&q(t)&&(je.expected_downloaded_assets_count++,e.push(Y(t)))};for(const e of L)t(e);await je.memorySnapshotSkippedOrDone.promise;for(const e of $)if(Re.loadedMemorySnapshotSize){if(ie(e),"resource"==e.behavior||"assembly"==e.behavior||"pdb"==e.behavior){const t=X(e,""),o="string"==typeof e.virtualPath?e.virtualPath:e.name;je._loaded_files.push({url:t,file:o})}}else t(e);je.allDownloadsQueued.promise_control.resolve(),await je.runtimeModuleLoaded.promise;const o=[];for(const t of e)o.push((async()=>{const e=await t;if(e.buffer){if(!V[e.behavior]){e.buffer&&"object"==typeof e.buffer||Ce(!1,"asset buffer must be array-like or buffer-like or promise of these"),"string"!=typeof e.resolvedUrl&&Ce(!1,"resolvedUrl must be string");const t=e.resolvedUrl,o=await e.buffer,n=new Uint8Array(o);ie(e),await Re.beforeOnRuntimeInitialized.promise,Re.instantiate_asset(e,t,n)}}else W[e.behavior]?("symbols"===e.behavior&&(await Re.instantiate_symbols_asset(e),ie(e)),W[e.behavior]&&++je.actual_downloaded_assets_count):(e.isOptional||Ce(!1,"Expected asset to have the downloaded buffer"),!F[e.behavior]&&q(e)&&je.expected_downloaded_assets_count--,!V[e.behavior]&&q(e)&&je.expected_instantiated_assets_count--)})());Promise.all(o).then((()=>{Re.allAssetsInMemory.promise_control.resolve()})).catch((e=>{throw je.err("Error in mono_download_assets: "+e),Me(1,e),e}))}catch(e){throw je.err("Error in mono_download_assets: "+e),e}}async function G(e){const t=await Y(e);return await t.pendingDownloadInternal.response,t.buffer}async function Y(e){try{return await K(e)}catch(t){if(!je.enableDownloadRetry)throw t;if(Ee||ye)throw t;if(e.pendingDownload&&e.pendingDownloadInternal==e.pendingDownload)throw t;if(e.resolvedUrl&&-1!=e.resolvedUrl.indexOf("file://"))throw t;if(t&&404==t.status)throw t;e.pendingDownloadInternal=void 0,await je.allDownloadsQueued.promise;try{return a(`Retrying download '${e.name}'`),await K(e)}catch(t){return e.pendingDownloadInternal=void 0,await(100,new Promise((e=>globalThis.setTimeout(e,100)))),a(`Retrying download (2) '${e.name}' after delay`),await K(e)}}}async function K(e){for(;k;)await k.promise;try{++M,M==je.maxParallelDownloads&&(a("Throttling further parallel downloads"),k=n());const t=await async function(e){if(e.pendingDownload&&(e.pendingDownloadInternal=e.pendingDownload),e.pendingDownloadInternal&&e.pendingDownloadInternal.response)return e.pendingDownloadInternal.response;if(e.buffer){const t=await e.buffer;return e.resolvedUrl||(e.resolvedUrl="undefined://"+e.name),e.pendingDownloadInternal={url:e.resolvedUrl,name:e.name,response:Promise.resolve({ok:!0,arrayBuffer:()=>t,json:()=>JSON.parse(new TextDecoder("utf-8").decode(t)),text:()=>{throw new Error("NotImplementedException")},headers:{get:()=>{}}})},e.pendingDownloadInternal.response}const t=e.loadRemote&&je.config.remoteSources?je.config.remoteSources:[""];let o;for(let n of t){n=n.trim(),"./"===n&&(n="");const t=X(e,n);e.name===t?a(`Attempting to download '${t}'`):a(`Attempting to download '${t}' for ${e.name}`);try{e.resolvedUrl=t;const n=ne(e);if(e.pendingDownloadInternal=n,o=await n.response,!o||!o.ok)continue;return o}catch(e){o||(o={ok:!1,url:t,status:0,statusText:""+e});continue}}const n=e.isOptional||e.name.match(/\.pdb$/)&&je.config.ignorePdbLoadErrors;if(o||Ce(!1,`Response undefined ${e.name}`),!n){const t=new Error(`download '${o.url}' for ${e.name} failed ${o.status} ${o.statusText}`);throw t.status=o.status,t}l(`optional download '${o.url}' for ${e.name} failed ${o.status} ${o.statusText}`)}(e);return t?(W[e.behavior]||(e.buffer=await t.arrayBuffer(),++je.actual_downloaded_assets_count),e):e}finally{if(--M,k&&M==je.maxParallelDownloads-1){a("Resuming more parallel downloads");const e=k;k=void 0,e.promise_control.resolve()}}}function X(e,t){let o;return null==t&&Ce(!1,`sourcePrefix must be provided for ${e.name}`),e.resolvedUrl?o=e.resolvedUrl:(o=""===t?"assembly"===e.behavior||"pdb"===e.behavior?e.name:"resource"===e.behavior&&e.culture&&""!==e.culture?`${e.culture}/${e.name}`:e.name:t+e.name,o=ee(je.locateFile(o),e.behavior)),o&&"string"==typeof o||Ce(!1,"attemptUrl need to be path or url string"),o}function ee(e,t){return je.modulesUniqueQuery&&z[t]&&(e+=je.modulesUniqueQuery),e}let te=0;const oe=new Set;function ne(e){try{e.resolvedUrl||Ce(!1,"Request's resolvedUrl must be set");const t=async function(e){let t=await async function(e){const t=b;if(!t||e.noCache||!e.hash||0===e.hash.length)return;const o=E(e);let n;h[o]=!0;try{n=await t.match(o)}catch(e){}if(!n)return;const r=parseInt(n.headers.get("content-length")||"0");return p[e.name]={responseBytes:r},n}(e);return t||(t=await function(e){let t=e.resolvedUrl;if(je.loadBootResource){const o=se(e);if(o instanceof Promise)return o;"string"==typeof o&&(t=o)}const o={};return je.config.disableNoCacheFetch||(o.cache="no-cache"),e.useCredentials?o.credentials="include":!je.config.disableIntegrityCheck&&e.hash&&(o.integrity=e.hash),je.fetch_like(t,o)}(e),function(e,t){const o=b;if(!o||e.noCache||!e.hash||0===e.hash.length)return;const n=t.clone();setTimeout((()=>{const t=E(e);!async function(e,t,o,n){const r=await n.arrayBuffer(),s=function(e){if("undefined"!=typeof performance)return performance.getEntriesByName(e)[0]}(n.url),i=s&&s.encodedBodySize||void 0;g[t]={responseBytes:i};const a=new Response(r,{headers:{"content-type":n.headers.get("content-type")||"","content-length":(i||n.headers.get("content-length")||"").toString()}});try{await e.put(o,a)}catch(e){}}(o,e.name,t,n)}),0)}(e,t)),t}(e),o={name:e.name,url:e.resolvedUrl,response:t};return oe.add(e.name),o.response.then((()=>{"assembly"==e.behavior&&je.loadedAssemblies.push(e.name),te++,je.onDownloadResourceProgress&&je.onDownloadResourceProgress(te,oe.size)})),o}catch(t){const o={ok:!1,url:e.resolvedUrl,status:500,statusText:"ERR29: "+t,arrayBuffer:()=>{throw t},json:()=>{throw t}};return{name:e.name,url:e.resolvedUrl,response:Promise.resolve(o)}}}const re={resource:"assembly",assembly:"assembly",pdb:"pdb",icu:"globalization",vfs:"configuration",manifest:"manifest",dotnetwasm:"dotnetwasm","js-module-dotnet":"dotnetjs","js-module-native":"dotnetjs","js-module-runtime":"dotnetjs","js-module-threads":"dotnetjs"};function se(e){var t;if(je.loadBootResource){const o=null!==(t=e.hash)&&void 0!==t?t:"",n=e.resolvedUrl,r=re[e.behavior];if(r){const t=je.loadBootResource(r,e.name,n,o,e.behavior);return"string"==typeof t?D(t):t}}}function ie(e){e.pendingDownloadInternal=null,e.pendingDownload=null,e.buffer=null,e.moduleExports=null}function ae(e){let t=e.lastIndexOf("/");return t>=0&&t++,e.substring(t)}async function le(e){if(!e)return;const t=Object.keys(e);await Promise.all(t.map((e=>async function(e){try{const t=ee(je.locateFile(e),"js-module-library-initializer");a(`Attempting to import '${t}' for ${e}`);const o=await import(t);je.libraryInitializers.push({scriptName:e,exports:o})}catch(t){u(`Failed to import library initializer '${e}': ${t}`)}}(e))))}async function ce(e,t){if(!je.libraryInitializers)return;const o=[];for(let n=0;n<je.libraryInitializers.length;n++){const r=je.libraryInitializers[n];r.exports[e]&&o.push(ue(r.scriptName,e,(()=>r.exports[e](...t))))}await Promise.all(o)}async function ue(e,t,o){try{await o()}catch(o){throw u(`Failed to invoke '${t}' on library initializer '${e}': ${o}`),Me(1,o),o}}var de="Release";function fe(e,t){if(e===t)return e;const o={...t};return void 0!==o.assets&&o.assets!==e.assets&&(o.assets=[...e.assets||[],...o.assets||[]]),void 0!==o.resources&&(o.resources=he(e.resources||{assembly:{},jsModuleNative:{},jsModuleRuntime:{},wasmNative:{}},o.resources)),void 0!==o.environmentVariables&&(o.environmentVariables={...e.environmentVariables||{},...o.environmentVariables||{}}),void 0!==o.runtimeOptions&&o.runtimeOptions!==e.runtimeOptions&&(o.runtimeOptions=[...e.runtimeOptions||[],...o.runtimeOptions||[]]),Object.assign(e,o)}function me(e,t){if(e===t)return e;const o={...t};return o.config&&(e.config||(e.config={}),o.config=fe(e.config,o.config)),Object.assign(e,o)}function he(e,t){if(e===t)return e;const o={...t};return void 0!==o.assembly&&(o.assembly={...e.assembly||{},...o.assembly||{}}),void 0!==o.lazyAssembly&&(o.lazyAssembly={...e.lazyAssembly||{},...o.lazyAssembly||{}}),void 0!==o.pdb&&(o.pdb={...e.pdb||{},...o.pdb||{}}),void 0!==o.jsModuleWorker&&(o.jsModuleWorker={...e.jsModuleWorker||{},...o.jsModuleWorker||{}}),void 0!==o.jsModuleNative&&(o.jsModuleNative={...e.jsModuleNative||{},...o.jsModuleNative||{}}),void 0!==o.jsModuleRuntime&&(o.jsModuleRuntime={...e.jsModuleRuntime||{},...o.jsModuleRuntime||{}}),void 0!==o.wasmSymbols&&(o.wasmSymbols={...e.wasmSymbols||{},...o.wasmSymbols||{}}),void 0!==o.wasmNative&&(o.wasmNative={...e.wasmNative||{},...o.wasmNative||{}}),void 0!==o.icu&&(o.icu={...e.icu||{},...o.icu||{}}),void 0!==o.satelliteResources&&(o.satelliteResources=ge(e.satelliteResources||{},o.satelliteResources||{})),void 0!==o.modulesAfterConfigLoaded&&(o.modulesAfterConfigLoaded={...e.modulesAfterConfigLoaded||{},...o.modulesAfterConfigLoaded||{}}),void 0!==o.modulesAfterRuntimeReady&&(o.modulesAfterRuntimeReady={...e.modulesAfterRuntimeReady||{},...o.modulesAfterRuntimeReady||{}}),void 0!==o.extensions&&(o.extensions={...e.extensions||{},...o.extensions||{}}),void 0!==o.vfs&&(o.vfs=ge(e.vfs||{},o.vfs||{})),Object.assign(e,o)}function ge(e,t){if(e===t)return e;for(const o in t)e[o]={...e[o],...t[o]};return e}function pe(){const e=je.config;if(e.environmentVariables=e.environmentVariables||{},e.runtimeOptions=e.runtimeOptions||[],e.resources=e.resources||{assembly:{},jsModuleNative:{},jsModuleWorker:{},jsModuleRuntime:{},wasmNative:{},vfs:{},satelliteResources:{}},e.assets){a("config.assets is deprecated, use config.resources instead");for(const t of e.assets){const o={};o[t.name]=t.hash||"";const n={};switch(t.behavior){case"assembly":n.assembly=o;break;case"pdb":n.pdb=o;break;case"resource":n.satelliteResources={},n.satelliteResources[t.culture]=o;break;case"icu":n.icu=o;break;case"symbols":n.wasmSymbols=o;break;case"vfs":n.vfs={},n.vfs[t.virtualPath]=o;break;case"dotnetwasm":n.wasmNative=o;break;case"js-module-threads":n.jsModuleWorker=o;break;case"js-module-runtime":n.jsModuleRuntime=o;break;case"js-module-native":n.jsModuleNative=o;break;case"js-module-dotnet":break;default:throw new Error(`Unexpected behavior ${t.behavior} of asset ${t.name}`)}he(e.resources,n)}}je.assertAfterExit=e.assertAfterExit=e.assertAfterExit||!_e,void 0===e.debugLevel&&"Debug"===de&&(e.debugLevel=-1),void 0===e.cachedResourcesPurgeDelay&&(e.cachedResourcesPurgeDelay=1e4),e.debugLevel=we(e)?e.debugLevel:0,void 0===e.diagnosticTracing&&"Debug"===de&&(e.diagnosticTracing=!0),e.applicationCulture&&(e.environmentVariables.LANG=`${e.applicationCulture}.UTF-8`),Re.diagnosticTracing=je.diagnosticTracing=!!e.diagnosticTracing,Re.waitForDebugger=e.waitForDebugger,e.startupMemoryCache=!!e.startupMemoryCache,e.startupMemoryCache&&Re.waitForDebugger&&(a("Disabling startupMemoryCache because waitForDebugger is set"),e.startupMemoryCache=!1),Re.enablePerfMeasure=!!e.browserProfilerOptions&&globalThis.performance&&"function"==typeof globalThis.performance.measure,je.maxParallelDownloads=e.maxParallelDownloads||je.maxParallelDownloads,je.enableDownloadRetry=void 0!==e.enableDownloadRetry?e.enableDownloadRetry:je.enableDownloadRetry}let be=!1;function we(e){return!!globalThis.navigator&&((!!e.resources.pdb||0!=e.debugLevel)&&(je.isChromium||je.isFirefox))}const ye="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,ve="function"==typeof importScripts,_e="object"==typeof window||ve&&!ye,Ee=!_e&&!ye&&!ve;let Re={},je={},xe={},Se={},Ae=!1;const De={mono:{},binding:{},internal:Se,module:{},loaderHelpers:je,runtimeHelpers:Re,api:xe};function Ce(e,t){if(e)return;const o="Assert failed: "+("function"==typeof t?t():t),n=new Error(o);Re.abort(n)}function Te(){return void 0!==je.exitCode}function Oe(){return Re.runtimeReady&&!Te()}function ke(){Re.runtimeReady||Ce(!1,"mono runtime didn't start yet"),je.assertAfterExit&&Te()&&Ce(!1,`mono runtime already exited with ${je.exitCode}`)}function Me(e,t){var o;const n=t&&"object"==typeof t;e=n&&"number"==typeof t.status?t.status:e;const r=n&&"string"==typeof t.message?t.message:""+t;if((t=n?t:Re.ExitStatus?new Re.ExitStatus(e):new Error("Exit with code "+e+" "+r)).status=e,t.message||(t.message=r),t.stack||(t.stack=(new Error).stack||""),t.silent=!0,!Te()){try{Re.runtimeReady||(a("abort_startup, reason: "+t),function(e){je.allDownloadsQueued.promise_control.reject(e),je.afterConfigLoaded.promise_control.reject(e),je.wasmDownloadPromise.promise_control.reject(e),je.runtimeModuleLoaded.promise_control.reject(e),je.memorySnapshotSkippedOrDone.promise_control.reject(e),Re.dotnetReady&&(Re.dotnetReady.promise_control.reject(e),Re.afterInstantiateWasm.promise_control.reject(e),Re.beforePreInit.promise_control.reject(e),Re.afterPreInit.promise_control.reject(e),Re.afterPreRun.promise_control.reject(e),Re.beforeOnRuntimeInitialized.promise_control.reject(e),Re.afterOnRuntimeInitialized.promise_control.reject(e),Re.afterPostRun.promise_control.reject(e))}(t)),function(e,t){if(0!==e&&t){const e=Re.ExitStatus&&t instanceof Re.ExitStatus?a:d;"string"==typeof t?e(t):t.stack&&t.message?Re.stringify_as_error_with_stack?e(Re.stringify_as_error_with_stack(t)):e(t.message+"\n"+t.stack):e(JSON.stringify(t))}if(je.config&&je.config.logExitCode)if(f){const t=()=>{0==f.bufferedAmount?c("WASM EXIT "+e):globalThis.setTimeout(t,100)};t()}else c("WASM EXIT "+e)}(e,t),function(e){if(_e&&je.config&&je.config.appendElementOnExit){const t=document.createElement("label");t.id="tests_done",e&&(t.style.background="red"),t.innerHTML=e.toString(),document.body.appendChild(t)}}(e),Re.jiterpreter_dump_stats&&Re.jiterpreter_dump_stats(!1),0===e&&(null===(o=je.config)||void 0===o?void 0:o.interopCleanupOnExit)&&Re.forceDisposeProxies(!0,!0)}catch(e){u("mono_exit failed",e)}je.exitCode=e}if(je.config&&je.config.asyncFlushOnExit&&0===e)throw(async()=>{try{await async function(){try{const e=await import("process"),t=e=>new Promise(((t,o)=>{e.on("error",(e=>o(e))),e.write("",(function(){t()}))})),o=t(e.stderr),n=t(e.stdout);await Promise.all([n,o])}catch(e){d(`flushing std* streams failed: ${e}`)}}()}finally{$e(e,t)}})(),t;$e(e,t)}function $e(e,t){if(Oe()&&Re.mono_wasm_exit&&Re.mono_wasm_exit(e),0!==e||!_e)throw ye&&Se.process?Se.process.exit(e):Re.quit&&Re.quit(e,t),t}!function(o){if(Ae)throw new Error("Loader module already loaded");Ae=!0,Re=o.runtimeHelpers,je=o.loaderHelpers,xe=o.api,Se=o.internal,Object.assign(xe,{INTERNAL:Se,invokeLibraryInitializers:ce}),Object.assign(o.module,{disableDotnet6Compatibility:!0,config:{environmentVariables:{}}}),Object.assign(Re,{mono_wasm_bindings_is_ready:!1,javaScriptExports:{},config:o.module.config,diagnosticTracing:!1,abort:e=>{throw e}}),Object.assign(je,{gitHash:"2aade6beb02ea367fd97c4070a4198802fe61c03",config:o.module.config,diagnosticTracing:!1,maxParallelDownloads:16,enableDownloadRetry:!0,assertAfterExit:!_e,_loaded_files:[],loadedFiles:[],loadedAssemblies:[],libraryInitializers:[],actual_downloaded_assets_count:0,actual_instantiated_assets_count:0,expected_downloaded_assets_count:0,expected_instantiated_assets_count:0,afterConfigLoaded:n(),allDownloadsQueued:n(),wasmDownloadPromise:n(),runtimeModuleLoaded:n(),memorySnapshotSkippedOrDone:n(),is_exited:Te,is_runtime_running:Oe,assert_runtime_running:ke,mono_exit:Me,createPromiseController:n,getPromiseController:r,assertIsControllablePromise:s,mono_download_assets:Z,resolve_single_asset_path:Q,setup_proxy_console:m,logDownloadStatsToConsole:v,purgeUnusedCacheEntriesAsync:_,hasDebuggingEnabled:we,retrieve_asset_download:G,invokeLibraryInitializers:ce,exceptions:e,simd:t})}(De);const Le="__mono_message_please_dont_collide__";let Ie=!1;const Ue=De.module,Ne=Ue.config;async function Pe(e){if("function"==typeof e){const t=e(De.api);if(t.ready)throw new Error("Module.ready couldn't be redefined.");Object.assign(Ue,t),me(Ue,t)}else{if("object"!=typeof e)throw new Error("Can't use moduleFactory callback of createDotnetRuntime function.");me(Ue,e)}return await async function(e){if(ye){const e=await import("process"),t=14;if(e.versions.node.split(".")[0]<t)throw new Error(`NodeJS at '${e.execPath}' has too low version '${e.versions.node}', please use at least ${t}. See also https://aka.ms/dotnet-wasm-features`)}const t=import.meta.url,o=t.indexOf("?");var n;if(o>0&&(je.modulesUniqueQuery=t.substring(o)),je.scriptUrl=t.replace(/\\/g,"/").replace(/[?#].*/,""),je.scriptDirectory=(n=je.scriptUrl).slice(0,n.lastIndexOf("/"))+"/",je.locateFile=e=>"URL"in globalThis&&globalThis.URL!==S?new URL(e,je.scriptDirectory).toString():O(e)?e:je.scriptDirectory+e,je.fetch_like=A,je.out=console.log,je.err=console.error,je.onDownloadResourceProgress=e.onDownloadResourceProgress,_e&&globalThis.navigator){const e=globalThis.navigator,t=e.userAgentData&&e.userAgentData.brands;t&&t.length>0?je.isChromium=t.some((e=>"Google Chrome"===e.brand||"Microsoft Edge"===e.brand||"Chromium"===e.brand)):e.userAgent&&(je.isChromium=e.userAgent.includes("Chrome"),je.isFirefox=e.userAgent.includes("Firefox"))}Se.require=ye?await import("module").then((e=>e.createRequire(import.meta.url))):Promise.resolve((()=>{throw new Error("require not supported")})),void 0===globalThis.URL&&(globalThis.URL=S)}(Ue),Ue.ENVIRONMENT_IS_PTHREAD?async function(){(function(){const e=new MessageChannel,t=e.port1,o=e.port2;t.addEventListener("message",(e=>{var n;n=JSON.parse(e.data.config),Ie?a("mono config already received"):(fe(je.config,n),pe(),a("mono config received"),Ie=!0,je.afterConfigLoaded.promise_control.resolve(je.config),_e&&n.forwardConsoleLogsToWS&&void 0!==globalThis.WebSocket&&je.setup_proxy_console("pthread-worker",console,self.location.href)),t.close(),o.close()}),{once:!0}),t.start(),self.postMessage({[Le]:{monoCmd:"preload",port:o}},[o])})(),await je.afterConfigLoaded.promise,function(){const e=je.config;e.assets||Ce(!1,"config.assets must be defined");for(const t of e.assets)H(t)}();const e=ze(),t=await Promise.all(e);return await Fe(t),Ue}():async function(){var e;Ue.configSrc||je.config&&0!==Object.keys(je.config).length&&(je.config.assets||je.config.resources)||(Ue.configSrc="./blazor.boot.json"),await async function(e){var t;const o=e.configSrc;if(be)await je.afterConfigLoaded.promise;else try{if(be=!0,o&&(a("mono_wasm_load_config"),await async function(e){const t=je.locateFile(e.configSrc),o=void 0!==je.loadBootResource?je.loadBootResource("manifest","blazor.boot.json",t,"","manifest"):s(t);let n;n=o?"string"==typeof o?await s(D(o)):await o:await s(ee(t,"manifest"));const r=await async function(e){const t=je.config,o=await e.json();t.applicationEnvironment||(o.applicationEnvironment=e.headers.get("Blazor-Environment")||e.headers.get("DotNet-Environment")||"Production"),o.environmentVariables||(o.environmentVariables={});const n=e.headers.get("DOTNET-MODIFIABLE-ASSEMBLIES");n&&(o.environmentVariables.DOTNET_MODIFIABLE_ASSEMBLIES=n);const r=e.headers.get("ASPNETCORE-BROWSER-TOOLS");return r&&(o.environmentVariables.__ASPNETCORE_BROWSER_TOOLS=r),o}(n);function s(e){return je.fetch_like(e,{method:"GET",credentials:"include",cache:"no-cache"})}fe(je.config,r)}(e)),pe(),await le(null===(t=je.config.resources)||void 0===t?void 0:t.modulesAfterConfigLoaded),await ce("onRuntimeConfigLoaded",[je.config]),e.onConfigLoaded)try{await e.onConfigLoaded(je.config,xe),pe()}catch(e){throw d("onConfigLoaded() failed",e),e}pe(),je.config.startupMemoryCache&&e.instantiateWasm&&Ce(!1,"startupMemoryCache is not supported with Module.instantiateWasm"),je.afterConfigLoaded.promise_control.resolve(je.config),je.config.startupMemoryCache||je.memorySnapshotSkippedOrDone.promise_control.resolve()}catch(t){const n=`Failed to load config file ${o} ${t} ${null==t?void 0:t.stack}`;throw je.config=e.config=Object.assign(je.config,{message:n,error:t,isError:!0}),Me(1,new Error(n)),t}}(Ue),function(){const e=je.config,t=[];if(e.assets)for(const t of e.assets)"object"!=typeof t&&Ce(!1,`asset must be object, it was ${typeof t} : ${t}`),"string"!=typeof t.behavior&&Ce(!1,"asset behavior must be known string"),"string"!=typeof t.name&&Ce(!1,"asset name must be string"),t.resolvedUrl&&"string"!=typeof t.resolvedUrl&&Ce(!1,"asset resolvedUrl could be string"),t.hash&&"string"!=typeof t.hash&&Ce(!1,"asset resolvedUrl could be string"),t.pendingDownload&&"object"!=typeof t.pendingDownload&&Ce(!1,"asset pendingDownload could be object"),B[t.behavior]?$.push(t):L.push(t),H(t);else if(e.resources){const o=e.resources;if(o.wasmNative||Ce(!1,"resources.wasmNative must be defined"),o.jsModuleNative||Ce(!1,"resources.jsModuleNative must be defined"),o.jsModuleRuntime||Ce(!1,"resources.jsModuleRuntime must be defined"),J(L,o.wasmNative,"dotnetwasm"),J(t,o.jsModuleNative,"js-module-native"),J(t,o.jsModuleRuntime,"js-module-runtime"),o.assembly)for(const e in o.assembly)$.push({name:e,hash:o.assembly[e],behavior:"assembly"});if(0!=e.debugLevel&&o.pdb)for(const e in o.pdb)$.push({name:e,hash:o.pdb[e],behavior:"pdb"});if(e.loadAllSatelliteResources&&o.satelliteResources)for(const e in o.satelliteResources)for(const t in o.satelliteResources[e])$.push({name:t,hash:o.satelliteResources[e][t],behavior:"resource",culture:e});if(o.vfs)for(const e in o.vfs)for(const t in o.vfs[e])L.push({name:t,hash:o.vfs[e][t],behavior:"vfs",virtualPath:e});const n=x(e);if(n&&o.icu)for(const e in o.icu)e===n&&$.push({name:e,hash:o.icu[e],behavior:"icu",loadRemote:!0});if(o.wasmSymbols)for(const e in o.wasmSymbols)L.push({name:e,hash:o.wasmSymbols[e],behavior:"symbols"})}if(e.appsettings)for(let t=0;t<e.appsettings.length;t++){const o=e.appsettings[t],n=ae(o);"appsettings.json"!==n&&n!==`appsettings.${e.applicationEnvironment}.json`||L.push({name:o,behavior:"vfs",noCache:!0,useCredentials:!0})}e.assets=[...$,...L,...t]}();const t=ze();await async function(){b=await async function(e){if(!je.config.cacheBootResources||void 0===globalThis.caches||void 0===globalThis.document)return null;if(!1===window.isSecureContext)return null;const t=`dotnet-resources-${globalThis.document.baseURI.substring(globalThis.document.location.origin.length)}`;try{return await caches.open(t)||null}catch(e){return null}}()}(),Y(Q("dotnetwasm")).then((e=>{je.wasmDownloadPromise.promise_control.resolve(e)})).catch((e=>{Me(1,e)})),setTimeout((()=>{!function(){if(je.preferredIcuAsset=x(je.config),je.invariantMode="invariant"==je.config.globalizationMode,!je.invariantMode)if(je.preferredIcuAsset)a("ICU data archive(s) available, disabling invariant mode");else{if("custom"===je.config.globalizationMode||"all"===je.config.globalizationMode||"sharded"===je.config.globalizationMode){const e="invariant globalization mode is inactive and no ICU data archives are available";throw d(`ERROR: ${e}`),new Error(e)}a("ICU data archive(s) not available, using invariant globalization mode"),je.invariantMode=!0,je.preferredIcuAsset=null}const e="DOTNET_SYSTEM_GLOBALIZATION_INVARIANT",t="DOTNET_SYSTEM_GLOBALIZATION_HYBRID",o=je.config.environmentVariables;if(void 0===o[t]&&"hybrid"===je.config.globalizationMode?o[t]="1":void 0===o[e]&&je.invariantMode&&(o[e]="1"),void 0===o.TZ)try{const e=Intl.DateTimeFormat().resolvedOptions().timeZone||null;e&&(o.TZ=e)}catch(e){l("failed to detect timezone, will fallback to UTC")}}(),Z()}),0);const o=await Promise.all(t);return await Fe(o),await Re.dotnetReady.promise,await le(null===(e=je.config.resources)||void 0===e?void 0:e.modulesAfterRuntimeReady),await ce("onRuntimeReady",[De.api]),xe}()}function ze(){const e=Q("js-module-runtime"),t=Q("js-module-native");let o,n;return"object"==typeof e.moduleExports?o=e.moduleExports:(a(`Attempting to import '${e.resolvedUrl}' for ${e.name}`),o=import(e.resolvedUrl)),"object"==typeof t.moduleExports?n=t.moduleExports:(a(`Attempting to import '${t.resolvedUrl}' for ${t.name}`),n=import(t.resolvedUrl)),[o,n]}async function Fe(e){const{initializeExports:t,initializeReplacements:o,configureRuntimeStartup:n,configureEmscriptenStartup:r,configureWorkerStartup:s,setRuntimeGlobals:i,passEmscriptenInternals:a}=e[0],{default:l}=e[1];i(De),t(De),await n(De.module),je.runtimeModuleLoaded.promise_control.resolve(),l((e=>(Object.assign(Ue,{ready:e.ready,__dotnet_runtime:{initializeReplacements:o,configureEmscriptenStartup:r,configureWorkerStartup:s,passEmscriptenInternals:a}}),Ue)))}const We=new class{withModuleConfig(e){try{return me(Ue,e),this}catch(e){throw Me(1,e),e}}withOnConfigLoaded(e){try{return me(Ue,{onConfigLoaded:e}),this}catch(e){throw Me(1,e),e}}withConsoleForwarding(){try{return fe(Ne,{forwardConsoleLogsToWS:!0}),this}catch(e){throw Me(1,e),e}}withExitOnUnhandledError(){const e=function(e,t){e.preventDefault();try{t&&t.silent||Me(1,t)}catch(e){}};try{return _e&&(window.addEventListener("unhandledrejection",(t=>e(t,t.reason))),window.addEventListener("error",(t=>e(t,t.error)))),this}catch(e){throw Me(1,e),e}}withAsyncFlushOnExit(){try{return fe(Ne,{asyncFlushOnExit:!0}),this}catch(e){throw Me(1,e),e}}withExitCodeLogging(){try{return fe(Ne,{logExitCode:!0}),this}catch(e){throw Me(1,e),e}}withElementOnExit(){try{return fe(Ne,{appendElementOnExit:!0}),this}catch(e){throw Me(1,e),e}}withInteropCleanupOnExit(){try{return fe(Ne,{interopCleanupOnExit:!0}),this}catch(e){throw Me(1,e),e}}withAssertAfterExit(){try{return fe(Ne,{assertAfterExit:!0}),this}catch(e){throw Me(1,e),e}}withWaitingForDebugger(e){try{return fe(Ne,{waitForDebugger:e}),this}catch(e){throw Me(1,e),e}}withStartupMemoryCache(e){try{return fe(Ne,{startupMemoryCache:e}),this}catch(e){throw Me(1,e),e}}withConfig(e){try{return fe(Ne,e),this}catch(e){throw Me(1,e),e}}withConfigSrc(e){try{return e&&"string"==typeof e||Ce(!1,"must be file path or URL"),me(Ue,{configSrc:e}),this}catch(e){throw Me(1,e),e}}withVirtualWorkingDirectory(e){try{return e&&"string"==typeof e||Ce(!1,"must be directory path"),this.virtualWorkingDirectory=e,this}catch(e){throw Me(1,e),e}}withEnvironmentVariable(e,t){try{const o={};return o[e]=t,fe(Ne,{environmentVariables:o}),this}catch(e){throw Me(1,e),e}}withEnvironmentVariables(e){try{return e&&"object"==typeof e||Ce(!1,"must be dictionary object"),fe(Ne,{environmentVariables:e}),this}catch(e){throw Me(1,e),e}}withDiagnosticTracing(e){try{return"boolean"!=typeof e&&Ce(!1,"must be boolean"),fe(Ne,{diagnosticTracing:e}),this}catch(e){throw Me(1,e),e}}withDebugging(e){try{return e&&"number"==typeof e||Ce(!1,"must be number"),fe(Ne,{debugLevel:e}),this}catch(e){throw Me(1,e),e}}withApplicationArguments(...e){try{return e&&Array.isArray(e)||Ce(!1,"must be array of strings"),this.applicationArguments=e,this}catch(e){throw Me(1,e),e}}withRuntimeOptions(e){try{return e&&Array.isArray(e)||Ce(!1,"must be array of strings"),fe(Ne,{runtimeOptions:e}),this}catch(e){throw Me(1,e),e}}withMainAssembly(e){try{return fe(Ne,{mainAssemblyName:e}),this}catch(e){throw Me(1,e),e}}withApplicationArgumentsFromQuery(){try{if(!globalThis.window)throw new Error("Missing window to the query parameters from");if(void 0===globalThis.URLSearchParams)throw new Error("URLSearchParams is supported");const e=new URLSearchParams(window.location.search).getAll("arg");return this.withApplicationArguments(...e)}catch(e){throw Me(1,e),e}}withApplicationEnvironment(e){try{return fe(Ne,{applicationEnvironment:e}),this}catch(e){throw Me(1,e),e}}withApplicationCulture(e){try{return fe(Ne,{applicationCulture:e}),this}catch(e){throw Me(1,e),e}}withResourceLoader(e){try{return je.loadBootResource=e,this}catch(e){throw Me(1,e),e}}async create(){try{if(this.instance||(_e&&Ue.config.forwardConsoleLogsToWS&&void 0!==globalThis.WebSocket&&m("main",globalThis.console,globalThis.location.origin),Ue||Ce(!1,"Null moduleConfig"),Ue.config||Ce(!1,"Null moduleConfig.config"),await Pe(Ue),this.instance=De.api),this.virtualWorkingDirectory){const e=this.instance.Module.FS,t=e.stat(this.virtualWorkingDirectory);t&&e.isDir(t.mode)||Ce(!1,`Could not find working directory ${this.virtualWorkingDirectory}`),e.chdir(this.virtualWorkingDirectory)}return this.instance}catch(e){throw Me(1,e),e}}async run(){try{if(Ue.config||Ce(!1,"Null moduleConfig.config"),this.instance||await this.create(),Ue.config.mainAssemblyName||Ce(!1,"Null moduleConfig.config.mainAssemblyName"),!this.applicationArguments)if(ye){const e=await import("process");this.applicationArguments=e.argv.slice(2)}else this.applicationArguments=[];return this.instance.runMainAndExit(Ue.config.mainAssemblyName,this.applicationArguments)}catch(e){throw Me(1,e),e}}},Be=Me,Ve=Pe;Ee||"function"==typeof globalThis.URL||Ce(!1,"This browser/engine doesn't support URL API. Please use a modern version. See also https://aka.ms/dotnet-wasm-features"),"function"!=typeof globalThis.BigInt64Array&&Ce(!1,"This browser/engine doesn't support BigInt64Array API. Please use a modern version. See also https://aka.ms/dotnet-wasm-features");export{Ve as default,We as dotnet,Be as exit};
