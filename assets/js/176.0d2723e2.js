(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{473:function(a,t,e){"use strict";e.r(t);var s=e(33),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"playmaker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#playmaker"}},[a._v("#")]),a._v(" Playmaker")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://assetstore.unity.com/packages/tools/visual-scripting/playmaker-368",target:"_blank",rel:"noopener noreferrer"}},[a._v("PlayMaker"),e("OutboundLink")],1),a._v(" is a popular visual scripting tool for Unity specifically designed to be friendly for non-programmers.")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/0a5b219b059fd61c85d225e903d77857.png",alt:""}})]),a._v(" "),e("p",[a._v("Be aware, that in contrast to Bolt, where all the Naninovel's C# API is available by default, PlayMaker requires creating a special C# class for each action. This means that only a limited subset of the engine API is available out of the box when using PlayMaker. The available custom actions could also break in case Naninovel's API change.")]),a._v(" "),e("h2",{attrs:{id:"setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[a._v("#")]),a._v(" Setup")]),a._v(" "),e("p",[a._v("Install PlayMaker following instructions from the "),e("a",{attrs:{href:"https://hutonggames.fogbugz.com/default.asp?W11",target:"_blank",rel:"noopener noreferrer"}},[a._v("official manual"),e("OutboundLink")],1),a._v(".")]),a._v(" "),e("p",[a._v("Download and import "),e("a",{attrs:{href:"https://github.com/Elringus/NaninovelPlayMaker/raw/master/NaninovelPlayMaker.unitypackage",target:"_blank",rel:"noopener noreferrer"}},[a._v("PlayMaker extension package"),e("OutboundLink")],1),a._v(".")]),a._v(" "),e("p",[a._v('The custom Naninovel actions should appear in the PlayMaker actions browser under "Naninovel" category.')]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/a40b0b7b21c73d3b5f64b005085198ea.png",alt:""}})]),a._v(" "),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),e("p",[a._v("The following video demonstrates using PlayMaker FSM (finite state machine) to initialize Naninovel engine, preload and play a scenario script.")]),a._v(" "),e("p"),e("div",{staticClass:"video-container"},[e("iframe",{attrs:{src:"https://www.youtube-nocookie.com/embed/N856vi18XVU",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),e("p"),a._v(" "),e("h3",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[a._v("#")]),a._v(" Events")]),a._v(" "),e("p",[a._v("Some of the essential Naninovel events can be automatically routed to PlayMaker FSMs. For this, create a global "),e("a",{attrs:{href:"https://hutonggames.fogbugz.com/default.asp?W148",target:"_blank",rel:"noopener noreferrer"}},[a._v("user event"),e("OutboundLink")],1),a._v(" with an appropriate name and use it inside an FSM. Following are the available event names:")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("Naninovel/Engine/OnInitialized")])]),a._v(" "),e("li",[e("code",[a._v("Naninovel/ScriptPlayer/OnPlay")])]),a._v(" "),e("li",[e("code",[a._v("Naninovel/ScriptPlayer/OnStop")])]),a._v(" "),e("li",[e("code",[a._v("Naninovel/StateManager/OnGameSaveStarted")])]),a._v(" "),e("li",[e("code",[a._v("Naninovel/StateManager/OnGameSaveFinished")])]),a._v(" "),e("li",[e("code",[a._v("Naninovel/StateManager/OnGameLoadStarted")])]),a._v(" "),e("li",[e("code",[a._v("Naninovel/StateManager/OnGameLoadFinished")])]),a._v(" "),e("li",[e("code",[a._v("Naninovel/TextPrinterManager/OnPrintTextStarted")])]),a._v(" "),e("li",[e("code",[a._v("Naninovel/TextPrinterManager/OnPrintTextFinished")])]),a._v(" "),e("li",[e("code",[a._v("Naninovel/LocalizationManager/OnLocaleChanged")])])]),a._v(" "),e("p",[a._v("It's also possible to broadcast custom PlayMaker events from naninovel scripts using "),e("code",[a._v("@playmaker")]),a._v(" command:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("@playmaker EventName\n")])])]),e("p",[a._v('— will invoke a global user event named "EventName" in all the active FSMs on scene.')]),a._v(" "),e("p",[a._v("The command also allows sending events to specific FSMs by using "),e("code",[a._v("fsm")]),a._v(" and "),e("code",[a._v("object")]),a._v(" parameters. The first parameter allows specifying FSM names, which should receive the event, eg:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("@playmaker EventName fsm:Fsm1,Fsm2\n")])])]),e("p",[a._v('— will invoke an event named "EventName" for FSMs with name "Fsm1" and "Fsm2".')]),a._v(" "),e("p",[a._v("When "),e("code",[a._v("object")]),a._v(" parameter is specified, the event will only be sent to FSMs, that are applied to game objects, which has corresponding names, eg:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("@playmaker EventName object:Obj1,Obj2\n")])])]),e("p",[a._v('— will invoke an event named "EventName" for all the FSMs, that are attached to game objects with names "Obj1" and "Obj2".')]),a._v(" "),e("p",[a._v("You can as well combine "),e("code",[a._v("fsm")]),a._v(" and "),e("code",[a._v("object")]),a._v(" parameters to farther filter the FSMs, that should receive the event.")]),a._v(" "),e("h3",{attrs:{id:"global-variables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#global-variables"}},[a._v("#")]),a._v(" Global Variables")]),a._v(" "),e("p",[a._v("It's possible to access a global PlayMaker variable in Naninovel scripts with the following custom "),e("RouterLink",{attrs:{to:"/zh/guide/script-expressions.html#expression-functions"}},[a._v("expression functions")]),a._v(" available in the extension package:")],1),a._v(" "),e("ul",[e("li",[e("code",[a._v('GetPlayMakerGlobalVariable("variableName")')]),a._v(' — retrieves a variable of a simple type (int, float, string, etc) with the "variableName" name')]),a._v(" "),e("li",[e("code",[a._v('GetPlayMakerGlobalArray("variableName", arrayIndex)')]),a._v(' — retrieves a value stored at "arrayIndex" index of an array variable with the "variableName" name')])]),a._v(" "),e("p",[a._v('Given you have a "Score" integer and "FinishedRoutes" bool array global PlayMaker variables, you can use them in Naninovel scripts as follow:')]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('Felix: My score is {GetPlayMakerGlobalVariable("Score")}.\n\n@if GetPlayMakerGlobalArray("FinishedRoutes",2)\n    Third route (second array index) is completed.\n@else\n    Not yet.\n@endif\n')])])]),e("h2",{attrs:{id:"ide-extension"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ide-extension"}},[a._v("#")]),a._v(" IDE Extension")]),a._v(" "),e("p",[a._v("To add support for "),e("code",[a._v("@playmaker")]),a._v(" command to "),e("RouterLink",{attrs:{to:"/zh/guide/naninovel-scripts.html#ide-support"}},[a._v("Atom IDE extension")]),a._v(", open metadata file located at "),e("code",[a._v("%HOMEPATH%/.atom/packages/language-naniscript/server/metadata.json")]),a._v(" ("),e("code",[a._v("%HOMEPATH%")]),a._v(" is the path to your OS user directory) and add following record to "),e("code",[a._v("commands")]),a._v(" array:")],1),a._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"BroadcastPlayMakerEvent"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"alias"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"playmaker"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"localizable"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"summary"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Broadcasts a PlayMaker event with the provided name."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"params"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"EventName"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"nameless"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"required"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"dataType"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"kind"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"literal"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"contentType"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"string"')]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"summary"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Name of the event to broadcast."')]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"FsmNames"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"alias"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"fsm"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"nameless"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"required"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"dataType"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"kind"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"array"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"contentType"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"string"')]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"summary"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Names of FSMs for which to broadcast the event."')]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"GameObjectNames"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"alias"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"object"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"nameless"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"required"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"dataType"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"kind"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"array"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"contentType"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"string"')]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"summary"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Names of game objects for which to broadcast the event."')]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])])]),e("p",[a._v("After the edit, the file should start as follows:")]),a._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"commands"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"BroadcastPlayMakerEvent"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"alias"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"playmaker"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])])]),e("p",[a._v("Restart the Atom editor (in case it was running), and the "),e("code",[a._v("@playmaker")]),a._v(" command should no longer be highlighted as an error.")])])}),[],!1,null,null,null);t.default=n.exports}}]);