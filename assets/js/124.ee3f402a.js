(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{387:function(t,a,e){"use strict";e.r(a);var s=e(33),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"integration-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#integration-options"}},[t._v("#")]),t._v(" Integration Options")]),t._v(" "),e("p",[t._v("While Naninovel is focused around traditional visual novel games the engine is designed to allow integration with existing projects. If you're making a 3D adventure game, RPG or game of any other genre — you can still use Naninovel as a drop-in dialogue (novel) system.")]),t._v(" "),e("p",[e("video",{staticClass:"video",attrs:{loop:"",autoplay:"",muted:""},domProps:{muted:!0}},[e("source",{attrs:{src:"https://i.gyazo.com/b1b6042db4a91b3a8cee74236b33c17c.mp4",type:"video/mp4"}})])]),t._v(" "),e("p",[t._v('There are multiple ways you can integrate Naninovel with a custom project and specific implementation will depend on the type of the project and what exactly you want to achieve with Naninovel. In the following documentation we\'ll list various configuration options and API that could be useful for "pairing" Naninovel with a standalone game. Before you continue, take a look at the '),e("RouterLink",{attrs:{to:"/ru/guide/engine-architecture.html"}},[t._v("engine architecture")]),t._v(" to better understand how it behaves on a conceptual level.")],1),t._v(" "),e("div",{staticClass:"custom-block example"},[e("p",{staticClass:"custom-block-title"},[t._v("ПРИМЕР")]),t._v(" "),e("p",[t._v("Check out an "),e("RouterLink",{attrs:{to:"/ru/guide/integration-options.html#example-project"}},[t._v("example project")]),t._v(", where Naninovel is used as both drop-in dialogue for a 3D adventure game and a switchable standalone novel mode.")],1)]),t._v(" "),e("h2",{attrs:{id:"manual-initialization"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#manual-initialization"}},[t._v("#")]),t._v(" Manual Initialization")]),t._v(" "),e("p",[t._v("The first thing you'll probably want to change is disable "),e("code",[t._v("Initialize On Application Load")]),t._v(" option in the engine configuration menu.")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/f58a8af9f2f6d71286061e55fc228896.png",alt:""}})]),t._v(" "),e("p",[t._v("When enabled, the engine services will automatically initialize on application start. Unless you want to begin your game in novel mode, you would rather manually initialize the engine when it's actually needed.")]),t._v(" "),e("p",[t._v("Use static async "),e("code",[t._v("RuntimeInitializer.InitializeAsync()")]),t._v("  method (or a custom script) to initialize the engine at runtime before using any of the built-in service APIs. You can check whether the engine is currently initialized with "),e("code",[t._v("Engine.Initialized")]),t._v(" property. Use "),e("code",[t._v("Engine.OnInitialized")]),t._v(" event to listen for the initialization finished events.")]),t._v(" "),e("p",[t._v("To reset the engine services (and dispose most of the occupied resources), use "),e("code",[t._v("ResetStateAsync()")]),t._v(" method of "),e("code",[t._v("IStateManager")]),t._v(" service; this is useful, when you're going to temporary switch to some other gameplay mode, but be able to return to novel mode without re-initializing the engine.")]),t._v(" "),e("p",[t._v("To destroy all the engine services and completely remove Naninovel from memory, use "),e("code",[t._v("Engine.Destroy()")]),t._v(" static method.")]),t._v(" "),e("h2",{attrs:{id:"playing-naninovel-scripts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#playing-naninovel-scripts"}},[t._v("#")]),t._v(" Playing Naninovel Scripts")]),t._v(" "),e("p",[t._v("To preload and play a naninovel script with a given name, use "),e("code",[t._v("PreloadAndPlayAsync(ScriptName)")]),t._v(" method of "),e("code",[t._v("IScriptPlayer")]),t._v(" service. To get an engine service, use "),e("code",[t._v("Engine.GetService<TService>()")]),t._v(" static method, where "),e("code",[t._v("TService")]),t._v(' is the type (interface) of the service to retrieve. For example, the following will get a script player service, then preload and play a script with name "Script001":')]),t._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" player "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Engine"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token generic-method"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetService")]),e("span",{pre:!0,attrs:{class:"token generic class-name"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("IScriptPlayer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" player"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("PreloadAndPlayAsync")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Script001"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("When exiting the novel mode and returning to the main game mode, you probably would like to unload all the resources currently used by Naninovel and stop all the engine services. For this, use "),e("code",[t._v("ResetStateAsync()")]),t._v(" method of a "),e("code",[t._v("IStateManager")]),t._v(" service:")]),t._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" stateManager "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Engine"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token generic-method"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetService")]),e("span",{pre:!0,attrs:{class:"token generic class-name"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("IStateManager"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" stateManager"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ResetStateAsync")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"disable-title-menu"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#disable-title-menu"}},[t._v("#")]),t._v(" Disable Title Menu")]),t._v(" "),e("p",[t._v("A built-in title menu implementation will be automatically shown when the engine is initialized, while you'll most likely have your own title menu. You can either modify or completely replace the built-in title menu using "),e("RouterLink",{attrs:{to:"/ru/guide/user-interface.html#ui-customization"}},[t._v("UI customization feature")]),t._v(" or just disable it by turning off "),e("code",[t._v("Show Title UI")]),t._v(" toggle in the engine configuration menu.")],1),t._v(" "),e("h2",{attrs:{id:"engine-objects-layer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#engine-objects-layer"}},[t._v("#")]),t._v(" Engine Objects Layer")]),t._v(" "),e("p",[t._v("You can make the engine assign a specific "),e("a",{attrs:{href:"https://docs.unity3d.com/Manual/Layers.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("layer"),e("OutboundLink")],1),t._v(" for all the objects (except UI-related) it creates via configuration menu.")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/8642fe37ddc45b8514b9f01d70277fbd.png",alt:""}})]),t._v(" "),e("p",[t._v("This will also make the engine's camera to use "),e("a",{attrs:{href:"https://docs.unity3d.com/ScriptReference/Camera-cullingMask.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("culling mask"),e("OutboundLink")],1),t._v(" and render only the objects with the specified layer.")]),t._v(" "),e("p",[t._v("To change layer of the UI objects managed by the engine, use "),e("code",[t._v("Objects Layer")]),t._v(" option in the UI configuration menu.")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/56d863bef96bf72c1fed9ae646db4746.png",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"render-to-texture"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#render-to-texture"}},[t._v("#")]),t._v(" Render to Texture")]),t._v(" "),e("p",[t._v("You can make the engine's camera render to a custom "),e("a",{attrs:{href:"https://docs.unity3d.com/ScriptReference/RenderTexture.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("render texture"),e("OutboundLink")],1),t._v(" instead of the screen (and change other camera-related settings) by assigning a custom camera prefab in camera configuration menu.")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/1b7116fa1bd170d3753b4cdbd27afcf3.png",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"switching-modes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#switching-modes"}},[t._v("#")]),t._v(" Switching Modes")]),t._v(" "),e("p",[t._v('While it heavily depends on the project, following is an abstract example (based on the integration project mentioned previously) on how you can implement switching between "adventure" and "novel" modes via custom commands.')]),t._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token attribute"}},[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CommandAlias")]),e("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"novel"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SwitchToNovelMode")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token type-list"}},[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Command")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringParameter")]),t._v(" ScriptName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringParameter")]),t._v(" Label"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("UniTask")]),t._v(" ExecuteAsync "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CancellationToken")]),t._v(" cancellationToken "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. Disable character control.")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" controller "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token generic-method"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("FindObjectOfType")]),e("span",{pre:!0,attrs:{class:"token generic class-name"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("CharacterController3D"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        controller"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IsInputBlocked "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. Switch cameras.")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" advCamera "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" GameObject"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Find")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AdventureModeCamera"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token generic-method"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetComponent")]),e("span",{pre:!0,attrs:{class:"token generic class-name"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Camera"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        advCamera"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("enabled "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" naniCamera "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Engine"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token generic-method"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetService")]),e("span",{pre:!0,attrs:{class:"token generic class-name"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ICameraManager"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Camera"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        naniCamera"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("enabled "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3. Load and play specified script (if assigned).")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Assigned")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ScriptName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" scriptPlayer "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Engine"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token generic-method"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetService")]),e("span",{pre:!0,attrs:{class:"token generic class-name"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("IScriptPlayer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" scriptPlayer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("PreloadAndPlayAsync")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ScriptName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token named-parameter punctuation"}},[t._v("label")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Label"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4. Enable Naninovel input.")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" inputManager "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Engine"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token generic-method"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetService")]),e("span",{pre:!0,attrs:{class:"token generic class-name"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("IInputManager"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        inputManager"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ProcessInput "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token attribute"}},[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CommandAlias")]),e("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"adventure"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SwitchToAdventureMode")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token type-list"}},[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Command")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("UniTask")]),t._v(" ExecuteAsync "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CancellationToken")]),t._v(" cancellationToken "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. Disable Naninovel input.")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" inputManager "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Engine"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token generic-method"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetService")]),e("span",{pre:!0,attrs:{class:"token generic class-name"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("IInputManager"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        inputManager"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ProcessInput "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. Stop script player.")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" scriptPlayer "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Engine"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token generic-method"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetService")]),e("span",{pre:!0,attrs:{class:"token generic class-name"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("IScriptPlayer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        scriptPlayer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Stop")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3. Reset state.")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" stateManager "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Engine"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token generic-method"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetService")]),e("span",{pre:!0,attrs:{class:"token generic class-name"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("IStateManager"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" stateManager"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ResetStateAsync")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4. Switch cameras.")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" advCamera "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" GameObject"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Find")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AdventureModeCamera"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token generic-method"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetComponent")]),e("span",{pre:!0,attrs:{class:"token generic class-name"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Camera"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        advCamera"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("enabled "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" naniCamera "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Engine"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token generic-method"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetService")]),e("span",{pre:!0,attrs:{class:"token generic class-name"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ICameraManager"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Camera"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        naniCamera"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("enabled "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 5. Enable character control.")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" controller "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token generic-method"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("FindObjectOfType")]),e("span",{pre:!0,attrs:{class:"token generic class-name"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("CharacterController3D"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        controller"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IsInputBlocked "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("The commands can then be used in naninovel scripts:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("; Switch to adventure mode.\n@adventure\n")])])]),e("p",[t._v("— or directly in C# (eg, in "),e("code",[t._v("OnTrigger")]),t._v(" Unity events):")]),t._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" OnTriggerEnter "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Collider")]),t._v(" other"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" switchCommand "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("SwitchToNovelMode")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ScriptName "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Script001"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tswitchCommand"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ExecuteAsync")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Forget")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"other-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#other-options"}},[t._v("#")]),t._v(" Other Options")]),t._v(" "),e("p",[t._v("There are multiple other features (state outsourcing, services overriding, custom serialization, resource and configuration providers, etc), which could be situationally helpful when integrating the engine with another systems; check out rest of the guide for more information. Consider investigating the available "),e("RouterLink",{attrs:{to:"/ru/guide/configuration.html"}},[t._v("configuration options")]),t._v(" as well; some feature may not be described in the guide, but still be handy for integration purposes.")],1),t._v(" "),e("p",[t._v("If you feel some engine API or system is lacking in extendability and requiring source code modification in order to integrate, please "),e("RouterLink",{attrs:{to:"/ru/support/#developer-support"}},[t._v("contact the developer")]),t._v(" — we'll consider improving it.")],1),t._v(" "),e("h2",{attrs:{id:"example-project"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-project"}},[t._v("#")]),t._v(" Example Project")]),t._v(" "),e("p",[t._v("An example project with Naninovel used as both drop-in dialogue for a 3D adventure game and a switchable standalone novel mode is "),e("a",{attrs:{href:"https://github.com/Elringus/NaninovelIntegrationExample",target:"_blank",rel:"noopener noreferrer"}},[t._v("available on GitHub"),e("OutboundLink")],1),t._v(". You can "),e("a",{attrs:{href:"https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository",target:"_blank",rel:"noopener noreferrer"}},[t._v("clone the repository"),e("OutboundLink")],1),t._v(" with a Git client or "),e("a",{attrs:{href:"https://github.com/Elringus/NaninovelIntegrationExample/archive/master.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("download it as a zip archive"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("div",{staticClass:"custom-block warn"},[e("p",{staticClass:"custom-block-title"},[t._v("ВНИМАНИЕ")]),t._v(" "),e("p",[t._v("Naninovel package is not distributed with the project, hence compilation errors will be produced after opening it for the first time; import Naninovel from the Asset Store to resolve the issues.")])]),t._v(" "),e("p",[t._v("All the project-specific (example) scripts are stored at "),e("code",[t._v("Assets/Runtime")]),t._v(" folder.")]),t._v(" "),e("p",[t._v("Naninovel is initialized manually (auto initialization is disabled in the engine configuration menu) via "),e("code",[t._v("Runtime/SetupGame.cs")]),t._v(" script attached to "),e("code",[t._v("SetupGame")]),t._v(" game object located on "),e("code",[t._v("MainScene")]),t._v(" scene.")]),t._v(" "),e("p",[e("code",[t._v("Runtime/DialogueTrigger.cs")]),t._v(" script used as component on triggers perform switch to dialogue mode when player is hitting the trigger colliders.")]),t._v(" "),e("p",[e("code",[t._v("Runtime/SwitchToNovelMode.cs")]),t._v(" custom command is used to switch to novel mode from both C# and naninovel scripts.")]),t._v(" "),e("p",[e("code",[t._v("Runtime/SwitchToAdventureMode.cs")]),t._v(" custom command is used to switch to adventure from novel mode.")])])}),[],!1,null,null,null);a.default=n.exports}}]);