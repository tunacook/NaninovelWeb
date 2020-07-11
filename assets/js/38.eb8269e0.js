(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{415:function(e,t,a){"use strict";a.r(t);var n=a(33),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"render-pipelines"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#render-pipelines"}},[e._v("#")]),e._v(" Render Pipelines")]),e._v(" "),a("p",[e._v("Unity's "),a("a",{attrs:{href:"https://docs.unity3d.com/Manual/render-pipelines.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("scriptable render pipelines"),a("OutboundLink")],1),e._v(" (SRP) — both URP and HDRP — are supported with some limitations and require additional setup.")]),e._v(" "),a("div",{staticClass:"custom-block warn"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("The SRPs are still "),a("a",{attrs:{href:"https://forum.unity.com/threads/915275",target:"_blank",rel:"noopener noreferrer"}},[e._v("hardly production-ready"),a("OutboundLink")],1),e._v(" (despite the official claims from Unity) and lack many features compared to default rendering system. It's not recommended to use the render pipelines, unless you're an advanced user and ready to solve any potential technical issues and limitations.")])]),e._v(" "),a("h2",{attrs:{id:"setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[e._v("#")]),e._v(" Setup")]),e._v(" "),a("p",[e._v("See the "),a("a",{attrs:{href:"https://docs.unity3d.com/Manual/render-pipelines.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("official documentation"),a("OutboundLink")],1),e._v(" on how to install and configure your SRP of choice.")]),e._v(" "),a("p",[e._v("Both URP and HDRP doesn't support multiple cameras, so it's required to disable "),a("code",[e._v("Use UI Camera")]),e._v(" in the camera configuration menu (enabled by default).")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.gyazo.com/5b70d18f028d27124bd8f4a25b2df47c.png",alt:""}})]),e._v(" "),a("p",[e._v("When running under HDRP, change color space to linear (HDRP doesn't support gamma mode, which is set by default).")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.gyazo.com/2c053a6e3d79f080469787b7f09ee8f3.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"limitations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#limitations"}},[e._v("#")]),e._v(" Limitations")]),e._v(" "),a("p",[e._v("Some of the built-in effects and features (eg, Depth Of Field, Digital Glitch, "),a("a",{attrs:{href:"/api/#starttrans",target:"_blank"}},[a("code",[e._v("@startTrans")])]),e._v(" and "),a("a",{attrs:{href:"/api/#finishtrans",target:"_blank"}},[a("code",[e._v("@finishTrans")])]),e._v(" commands) won't work with SRPs due to lack of the required rendering features. It's possible to replace most of the missing effects and features via various hacks and use them without modifying Naninovel's source code or package content; see "),a("RouterLink",{attrs:{to:"/guide/special-effects.html#adding-custom-effects"}},[e._v("special effects")]),e._v(" and "),a("RouterLink",{attrs:{to:"/guide/custom-commands.html"}},[e._v("custom commands")]),e._v(" guides for more information on extending the engine in that regard.")],1)])}),[],!1,null,null,null);t.default=s.exports}}]);