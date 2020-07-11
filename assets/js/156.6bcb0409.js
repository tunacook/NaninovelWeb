(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{353:function(t,v,_){"use strict";_.r(v);var e=_(33),a=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"属性配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#属性配置"}},[t._v("#")]),t._v(" 属性配置")]),t._v(" "),_("p",[t._v("资源配置保存于"),_("code",[t._v("Assets/NaninovelData/Resources/Naninovel/Configuration")]),t._v(" 目录。\n这些在第一次打开配置菜单的时候会自动生成。")]),t._v(" "),_("p",[t._v("配置菜单按 "),_("code",[t._v("Naninovel -> Configuration")]),t._v(" or "),_("code",[t._v("Edit -> Project Settings -> Naninovel")]),t._v(" 打开.")]),t._v(" "),_("p",[t._v("注意，所有配置菜单支持unity的预设保存功能如下图 "),_("a",{attrs:{href:"https://docs.unity3d.com/Manual/Presets",target:"_blank",rel:"noopener noreferrer"}},[t._v("Unity's presets feature"),_("OutboundLink")],1),t._v(". 在发布到不同平台的时候很方便。(如, mobile, standlone, consoles, 等).")]),t._v(" "),_("p",[_("video",{staticClass:"video",attrs:{loop:"",autoplay:"",muted:""},domProps:{muted:!0}},[_("source",{attrs:{src:"https://i.gyazo.com/55f5c74bfc16e1af2455034647525df3.mp4",type:"video/mp4"}})])]),t._v(" "),_("p",[t._v("在项目运行的时候也可以修改或是添加新配置，或是改变读取配置信息的方式，（如，从远端读取json文档），详情参考 "),_("RouterLink",{attrs:{to:"/zh/guide/custom-configuration.html"}},[t._v("custom configuration")]),t._v("。")],1),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),_("p",[t._v("该配置根据版本 "),_("a",{attrs:{href:"https://github.com/Elringus/NaninovelWeb/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("Naninovel v1.10"),_("OutboundLink")],1),t._v(".")])]),t._v(" "),_("h2",{attrs:{id:"audio"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#audio"}},[t._v("#")]),t._v(" Audio")]),t._v(" "),_("div",{staticClass:"config-table"},[_("table",[_("thead",[_("tr",[_("th",[t._v("属性")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Audio Loader")]),t._v(" "),_("td",[t._v("Audio- (Addressable, Project)")]),t._v(" "),_("td",[t._v("用于读取（BGM和音效SFX）的加载器。")])]),t._v(" "),_("tr",[_("td",[t._v("Voice Loader")]),t._v(" "),_("td",[t._v("Voice- (Addressable, Project)")]),t._v(" "),_("td",[t._v("用于读取Voice（大概指人声音配音）。")])]),t._v(" "),_("tr",[_("td",[t._v("Default Master Volume")]),t._v(" "),_("td",[t._v("1")]),t._v(" "),_("td",[t._v("用于控制游戏音量。")])]),t._v(" "),_("tr",[_("td",[t._v("Default Bgm Volume")]),t._v(" "),_("td",[t._v("1")]),t._v(" "),_("td",[t._v("用于控制BGM音量。")])]),t._v(" "),_("tr",[_("td",[t._v("Default Sfx Volume")]),t._v(" "),_("td",[t._v("1")]),t._v(" "),_("td",[t._v("用于控制SFX音量。")])]),t._v(" "),_("tr",[_("td",[t._v("Default Voice Volume")]),t._v(" "),_("td",[t._v("1")]),t._v(" "),_("td",[t._v("用于控制人声音量。")])]),t._v(" "),_("tr",[_("td",[t._v("Enable Auto Voicing 开启人声自动播放")]),t._v(" "),_("td",[t._v("False")]),t._v(" "),_("td",[t._v("启用时每个"),_("code",[t._v("PrintText")]),t._v(" 命令会试图播放以下的音频剪辑"),_("code",[t._v("VoiceResourcesPrefix/ScriptName/LineIndex.ActionIndex")]),t._v("。")])]),t._v(" "),_("tr",[_("td",[t._v("Voice Overlap Policy 人声重叠规则")]),t._v(" "),_("td",[t._v("Prevent Overlap")]),t._v(" "),_("td",[t._v("决定怎么播放重叠的人声："),_("br"),t._v(" • Allow Overlap — 允许已播放的声音播放结束，允许人声重叠"),_("br"),t._v(" • Prevent Overlap — 停止任何正在播放的人声，再播放吓一跳，不允许人声重叠"),_("br"),t._v(" • Prevent Character Overlap —  不允许同一角色的声音重叠，允许不同的角色的声音重叠。 (auto voicing)和"),_("a",{attrs:{href:"/api/#voice",target:"_blank"}},[_("code",[t._v("@voice")])]),t._v("命令的声音可以重叠。")])]),t._v(" "),_("tr",[_("td",[t._v("Custom Audio Mixer")]),t._v(" "),_("td",[t._v("Null")]),t._v(" "),_("td",[t._v("音频混合器，用于控制Audio groups。未定义时使用默认值。")])]),t._v(" "),_("tr",[_("td",[t._v("Master Volume Handle Name")]),t._v(" "),_("td",[t._v("Master Volume")]),t._v(" "),_("td",[t._v("控制主音量的混合器的名字 (exposed parameter公开参数)。")])]),t._v(" "),_("tr",[_("td",[t._v("Bgm Group Path")]),t._v(" "),_("td",[t._v("Master/BGM")]),t._v(" "),_("td",[t._v("控制的BGM组的路径。")])]),t._v(" "),_("tr",[_("td",[t._v("Bgm Volume Handle Name")]),t._v(" "),_("td",[t._v("BGM Volume")]),t._v(" "),_("td",[t._v("控制BGM的混合器的名字 (exposed parameter公开参数)。")])]),t._v(" "),_("tr",[_("td",[t._v("Sfx Group Path")]),t._v(" "),_("td",[t._v("Master/SFX")]),t._v(" "),_("td",[t._v("控制的SFX组的路径。")])]),t._v(" "),_("tr",[_("td",[t._v("Sfx Volume Handle Name")]),t._v(" "),_("td",[t._v("SFX Volume")]),t._v(" "),_("td",[t._v("控制SFX音效的混合器的名字 (exposed parameter公开参数)。")])]),t._v(" "),_("tr",[_("td",[t._v("Voice Group Path")]),t._v(" "),_("td",[t._v("Master/Voice")]),t._v(" "),_("td",[t._v("控制人声组的路径。")])]),t._v(" "),_("tr",[_("td",[t._v("Voice Volume Handle Name")]),t._v(" "),_("td",[t._v("Voice Volume")]),t._v(" "),_("td",[t._v("控制人声的混合器的名字 (exposed parameter公开参数)。")])])])])]),t._v(" "),_("h2",{attrs:{id:"backgrounds"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#backgrounds"}},[t._v("#")]),t._v(" Backgrounds")]),t._v(" "),_("div",{staticClass:"config-table"},[_("table",[_("thead",[_("tr",[_("th",[t._v("Property")]),t._v(" "),_("th",[t._v("Default Value")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Default Metadata")]),t._v(" "),_("td",[t._v("Object Ref")]),t._v(" "),_("td",[t._v("默认使用的数据的元数据配置，创建背景元素和要使用的元素ID不存在时调用的。")])]),t._v(" "),_("tr",[_("td",[t._v("Metadata")]),t._v(" "),_("td",[t._v("Object Ref")]),t._v(" "),_("td",[t._v("创建具体ID背景元素时使用的元数据。")])]),t._v(" "),_("tr",[_("td",[t._v("Scene Origin")]),t._v(" "),_("td",[t._v("(0.5, 0.0)")]),t._v(" "),_("td",[t._v("场景中背景生成的定位参考点。")])]),t._v(" "),_("tr",[_("td",[t._v("Z Offset")]),t._v(" "),_("td",[t._v("100")]),t._v(" "),_("td",[t._v("创建元素时初始化元素与相机的z轴偏移。")])]),t._v(" "),_("tr",[_("td",[t._v("Z Step")]),t._v(" "),_("td",[t._v("0.1")]),t._v(" "),_("td",[t._v("z轴上生成元素的间隔，用于避免深度渲染冲突。")])]),t._v(" "),_("tr",[_("td",[t._v("Default Easing")]),t._v(" "),_("td",[t._v("Linear")]),t._v(" "),_("td",[t._v("默认使用的切换动画效果，如改变外观，位置，色调等。")])]),t._v(" "),_("tr",[_("td",[t._v("Auto Show On Modify")]),t._v(" "),_("td",[t._v("True")]),t._v(" "),_("td",[t._v("当执行修改命令后，是否自动显示（演示）元素。")])])])])]),t._v(" "),_("h2",{attrs:{id:"camera"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#camera"}},[t._v("#")]),t._v(" Camera")]),t._v(" "),_("div",{staticClass:"config-table"},[_("table",[_("thead",[_("tr",[_("th",[t._v("Property")]),t._v(" "),_("th",[t._v("Default Value")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Reference Resolution")]),t._v(" "),_("td",[t._v("(1920, 1080)")]),t._v(" "),_("td",[t._v("参考分辨率用于评估正确渲染范围，以保证背景人物元素的正常显示，建议背景元素分辨率和该设置保持一致。")])]),t._v(" "),_("tr",[_("td",[t._v("Auto Correct Ortho Size")]),t._v(" "),_("td",[t._v("True")]),t._v(" "),_("td",[t._v("是否基于当前相机显示的方位比率来纠正正交大小，以此确保背景和人物的位置正确。")])]),t._v(" "),_("tr",[_("td",[t._v("Default Ortho Size")]),t._v(" "),_("td",[t._v("5.35")]),t._v(" "),_("td",[t._v("当自动纠正关闭时，默认相机正交大小。")])]),t._v(" "),_("tr",[_("td",[t._v("Initial Position")]),t._v(" "),_("td",[t._v("(0.0, 0.0, -10.0)")]),t._v(" "),_("td",[t._v("生成相机的世界坐标位置。")])]),t._v(" "),_("tr",[_("td",[t._v("Orthographic")]),t._v(" "),_("td",[t._v("True")]),t._v(" "),_("td",[t._v("相机使用透视还是正交模式，自定义相机预制体由定义时无效。")])]),t._v(" "),_("tr",[_("td",[t._v("Custom Camera Prefab")]),t._v(" "),_("td",[t._v("Null")]),t._v(" "),_("td",[t._v("带相机组件用于渲染的预制体，不定义时，使用默认设置，如果你想修改部分属性（背景色，FOV，HDR，等）或者添加后处理脚本效果，按需创建预制体绑定即可。")])]),t._v(" "),_("tr",[_("td",[t._v("Use UI Camera")]),t._v(" "),_("td",[t._v("True")]),t._v(" "),_("td",[t._v("是否使用单独相机渲染UI，会使用各自的配置应用于主要相机和UI相机，这样可以避免图像后处理影响到UI，节约部分性能。")])]),t._v(" "),_("tr",[_("td",[t._v("Custom UI Camera Prefab")]),t._v(" "),_("td",[t._v("Null")]),t._v(" "),_("td",[t._v("带相机组件的用于UI渲染的相机预制体，不配置时使用默认，当 "),_("code",[t._v("UseUICamera")]),t._v(" 关闭时无效。")])]),t._v(" "),_("tr",[_("td",[t._v("Default Easing")]),t._v(" "),_("td",[t._v("Linear")]),t._v(" "),_("td",[t._v("默认使用的相机过渡动画效果（缩放，位置，旋转等）。")])]),t._v(" "),_("tr",[_("td",[t._v("Thumbnail Resolution")]),t._v(" "),_("td",[t._v("(240, 140)")]),t._v(" "),_("td",[t._v("保存栏位的截图分辨率。")])]),t._v(" "),_("tr",[_("td",[t._v("Hide UI In Thumbnails")]),t._v(" "),_("td",[t._v("False")]),t._v(" "),_("td",[t._v("截图时是否忽略UI层级。")])])])])]),t._v(" "),_("h2",{attrs:{id:"characters"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#characters"}},[t._v("#")]),t._v(" Characters")]),t._v(" "),_("div",{staticClass:"config-table"},[_("table",[_("thead",[_("tr",[_("th",[t._v("Property")]),t._v(" "),_("th",[t._v("Default Value")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Auto Arrange On Add")]),t._v(" "),_("td",[t._v("True")]),t._v(" "),_("td",[t._v("是否按X轴平均分布新生成的角色。")])]),t._v(" "),_("tr",[_("td",[t._v("Default Metadata")]),t._v(" "),_("td",[t._v("Object Ref")]),t._v(" "),_("td",[t._v("默认使用的数据的元数据配置，创建角色元素和要使用的元素ID不存在时调用的。")])]),t._v(" "),_("tr",[_("td",[t._v("Metadata")]),t._v(" "),_("td",[t._v("Object Ref")]),t._v(" "),_("td",[t._v("创建具体ID角色元素时使用的元数据。")])]),t._v(" "),_("tr",[_("td",[t._v("Avatar Loader")]),t._v(" "),_("td",[t._v("Character Avatars- (Addressable, Project)")]),t._v(" "),_("td",[t._v("用于加载人物头像的资源加载器配置。")])]),t._v(" "),_("tr",[_("td",[t._v("Scene Origin")]),t._v(" "),_("td",[t._v("(0.5, 0.0)")]),t._v(" "),_("td",[t._v("场景中人物生成的定位参考点。")])]),t._v(" "),_("tr",[_("td",[t._v("Z Offset")]),t._v(" "),_("td",[t._v("50")]),t._v(" "),_("td",[t._v("生成元素到相机的z轴偏移。")])]),t._v(" "),_("tr",[_("td",[t._v("Z Step")]),t._v(" "),_("td",[t._v("0.1")]),t._v(" "),_("td",[t._v("生成元素z轴偏移，避免深度渲染冲突。")])]),t._v(" "),_("tr",[_("td",[t._v("Default Easing")]),t._v(" "),_("td",[t._v("Smooth Step")]),t._v(" "),_("td",[t._v("默认使用的切换动画效果，如改变外观，位置，色调等。")])]),t._v(" "),_("tr",[_("td",[t._v("Auto Show On Modify")]),t._v(" "),_("td",[t._v("True")]),t._v(" "),_("td",[t._v("当执行修改命令后，是否自动显示（演示）元素。")])])])])]),t._v(" "),_("h2",{attrs:{id:"choice-handlers"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#choice-handlers"}},[t._v("#")]),t._v(" Choice Handlers")]),t._v(" "),_("div",{staticClass:"config-table"},[_("table",[_("thead",[_("tr",[_("th",[t._v("Property")]),t._v(" "),_("th",[t._v("Default Value")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Default Handler Id")]),t._v(" "),_("td",[t._v("Button List")]),t._v(" "),_("td",[t._v("默认使用的选择处理器。")])]),t._v(" "),_("tr",[_("td",[t._v("Default Metadata")]),t._v(" "),_("td",[t._v("Object Ref")]),t._v(" "),_("td",[t._v("默认使用的数据的元数据配置，创建选择处理器和要使用的选择处理器ID不存在时调用的。")])]),t._v(" "),_("tr",[_("td",[t._v("Metadata")]),t._v(" "),_("td",[t._v("Object Ref")]),t._v(" "),_("td",[t._v("创建具体ID选择处理器时使用的元数据。")])]),t._v(" "),_("tr",[_("td",[t._v("Default Easing")]),t._v(" "),_("td",[t._v("Linear")]),t._v(" "),_("td",[t._v("默认使用的切换动画效果，如改变外观，位置，色调等。")])]),t._v(" "),_("tr",[_("td",[t._v("Auto Show On Modify")]),t._v(" "),_("td",[t._v("True")]),t._v(" "),_("td",[t._v("当执行修改命令后，是否自动显示（演示）元素。")])])])])]),t._v(" "),_("h2",{attrs:{id:"custom-variables"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#custom-variables"}},[t._v("#")]),t._v(" Custom Variables")]),t._v(" "),_("div",{staticClass:"config-table"},[_("table",[_("thead",[_("tr",[_("th",[t._v("Property")]),t._v(" "),_("th",[t._v("Default Value")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Predefined Variables")]),t._v(" "),_("td",[t._v("Object Ref")]),t._v(" "),_("td",[t._v("默认初始化的列表变量。 全局变量（名字 "),_("code",[t._v("G_")]),t._v(" or "),_("code",[t._v("g_")]),t._v("开头）在启动时初始化，其他在每个state使用时初始化。")])])])])]),t._v(" "),_("h2",{attrs:{id:"engine"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#engine"}},[t._v("#")]),t._v(" Engine")]),t._v(" "),_("div",{staticClass:"config-table"},[_("table",[_("thead",[_("tr",[_("th",[t._v("Property")]),t._v(" "),_("th",[t._v("Default Value")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Generated Data Path")]),t._v(" "),_("td",[t._v("Naninovel Data")]),t._v(" "),_("td",[t._v("存储自动生成资源的路径。")])]),t._v(" "),_("tr",[_("td",[t._v("Override Objects Layer")]),t._v(" "),_("td",[t._v("False")]),t._v(" "),_("td",[t._v("是否为所有引擎物体，绑定特定layer，用于Unity相机渲染的culling mask，用于避免Naninovel被其他相机渲染。")])]),t._v(" "),_("tr",[_("td",[t._v("Objects Layer")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("当 "),_("code",[t._v("Override Objects Layer")]),t._v(" 开启时，该layer会被用于所有游戏物体。")])]),t._v(" "),_("tr",[_("td",[t._v("Async Exception Log Type")]),t._v(" "),_("td",[t._v("Error")]),t._v(" "),_("td",[t._v("Log type to use for UniTask-related exceptions.")])]),t._v(" "),_("tr",[_("td",[t._v("Initialize On Application Load")]),t._v(" "),_("td",[t._v("True")]),t._v(" "),_("td",[t._v("应用启动时，本资源是否自动初始化。")])]),t._v(" "),_("tr",[_("td",[t._v("Show Initialization UI")]),t._v(" "),_("td",[t._v("True")]),t._v(" "),_("td",[t._v("资源初始化的时候，是否显示加载UI。")])]),t._v(" "),_("tr",[_("td",[t._v("Custom Initialization UI")]),t._v(" "),_("td",[t._v("Null")]),t._v(" "),_("td",[t._v("前者启用时显示的UI。不定义时使用默认。")])]),t._v(" "),_("tr",[_("td",[t._v("Show Title UI")]),t._v(" "),_("td",[t._v("True")]),t._v(" "),_("td",[t._v("资源初始化完成以后是否自动显示标题画面，你可以定制标题画面，使用资源的自定义UI特性，参考指导手册。")])]),t._v(" "),_("tr",[_("td",[t._v("Enable Development Console")]),t._v(" "),_("td",[t._v("True")]),t._v(" "),_("td",[t._v("是否打开开发控制台。")])]),t._v(" "),_("tr",[_("td",[t._v("Toggle Console Key")]),t._v(" "),_("td",[t._v("Back Quote")]),t._v(" "),_("td",[t._v("切换控制台的key，在触摸屏你可以使用多点触摸呼出。")])])])])]),t._v(" "),_("h2",{attrs:{id:"input"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#input"}},[t._v("#")]),t._v(" Input")]),t._v(" "),_("div",{staticClass:"config-table"},[_("table",[_("thead",[_("tr",[_("th",[t._v("Property")]),t._v(" "),_("th",[t._v("Default Value")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Spawn Event System")]),t._v(" "),_("td",[t._v("True")]),t._v(" "),_("td",[t._v("是否在初始化是生成event system。")])]),t._v(" "),_("tr",[_("td",[t._v("Custom Event System")]),t._v(" "),_("td",[t._v("Null")]),t._v(" "),_("td",[t._v("带有"),_("code",[t._v("EventSystem")]),t._v(" 组件的预制体，用于监听输入，未定义时生成默认的。")])]),t._v(" "),_("tr",[_("td",[t._v("Spawn Input Module")]),t._v(" "),_("td",[t._v("True")]),t._v(" "),_("td",[t._v("是否在初始化是生成input module。")])]),t._v(" "),_("tr",[_("td",[t._v("Custom Input Module")]),t._v(" "),_("td",[t._v("Null")]),t._v(" "),_("td",[t._v("带有"),_("code",[t._v("InputModule")]),t._v("  组件的预制体，用于监听输入，未定义时生成默认的。")])]),t._v(" "),_("tr",[_("td",[t._v("Touch Frequency Limit")]),t._v(" "),_("td",[t._v("0.1")]),t._v(" "),_("td",[t._v("触摸输入频率闲置，单位秒。")])]),t._v(" "),_("tr",[_("td",[t._v("Process Legacy Bindings")]),t._v(" "),_("td",[t._v("True")]),t._v(" "),_("td",[t._v("是否使用传统输入方式，如果使用新的Unity输入系统，就关闭。")])]),t._v(" "),_("tr",[_("td",[t._v("Bindings")]),t._v(" "),_("td",[t._v("Object Ref")]),t._v(" "),_("td",[t._v("用于存取输入的Bindings。")])])])])]),t._v(" "),_("h2",{attrs:{id:"localization"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#localization"}},[t._v("#")]),t._v(" Localization")]),t._v(" "),_("div",{staticClass:"config-table"},[_("table",[_("thead",[_("tr",[_("th",[t._v("Property")]),t._v(" "),_("th",[t._v("Default Value")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Loader")]),t._v(" "),_("td",[t._v("Localization- (Addressable, Project)")]),t._v(" "),_("td",[t._v("用于加载本地化资源的加载器。")])]),t._v(" "),_("tr",[_("td",[t._v("Source Locale")]),t._v(" "),_("td",[t._v("En")]),t._v(" "),_("td",[t._v("本地项目的使用哪种本地化配置(用于资源的语言设置)。")])]),t._v(" "),_("tr",[_("td",[t._v("Default Locale")]),t._v(" "),_("td",[t._v("Null")]),t._v(" "),_("td",[t._v("第一次启动时使用的本地化配置。如果不配置则使用 "),_("code",[t._v("Source Locale")]),t._v(" 的配置。")])])])])]),t._v(" "),_("h2",{attrs:{id:"managed-text"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#managed-text"}},[t._v("#")]),t._v(" Managed Text")]),t._v(" "),_("div",{staticClass:"config-table"},[_("table",[_("thead",[_("tr",[_("th",[t._v("Property")]),t._v(" "),_("th",[t._v("Default Value")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Loader")]),t._v(" "),_("td",[t._v("Text- (Addressable, Project)")]),t._v(" "),_("td",[t._v("用于加载托管文本的资源加载器配置。")])])])])]),t._v(" "),_("h2",{attrs:{id:"movies"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#movies"}},[t._v("#")]),t._v(" Movies")]),t._v(" "),_("div",{staticClass:"config-table"},[_("table",[_("thead",[_("tr",[_("th",[t._v("Property")]),t._v(" "),_("th",[t._v("Default Value")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Loader")]),t._v(" "),_("td",[t._v("Movies- (Addressable, Project)")]),t._v(" "),_("td",[t._v("用于加载电影的资源加载器配置。")])]),t._v(" "),_("tr",[_("td",[t._v("Skip On Input")]),t._v(" "),_("td",[t._v("True")]),t._v(" "),_("td",[t._v("播放时是否允许用户点击去掉跳过。")])]),t._v(" "),_("tr",[_("td",[t._v("Skip Frames")]),t._v(" "),_("td",[t._v("True")]),t._v(" "),_("td",[t._v("是否允许帧跳过以匹配当前时间。")])]),t._v(" "),_("tr",[_("td",[t._v("Fade Duration")]),t._v(" "),_("td",[t._v("1")]),t._v(" "),_("td",[t._v("播放开始结束时的渐入渐隐时长。")])]),t._v(" "),_("tr",[_("td",[t._v("Custom Fade Texture")]),t._v(" "),_("td",[t._v("Null")]),t._v(" "),_("td",[t._v("渐入渐隐显示的图片，不定义时使用默认黑色效果过渡。")])]),t._v(" "),_("tr",[_("td",[t._v("Play Intro Movie")]),t._v(" "),_("td",[t._v("False")]),t._v(" "),_("td",[t._v("显示标题菜单以前是否使用开场动画。")])]),t._v(" "),_("tr",[_("td",[t._v("Intro Movie Name")]),t._v(" "),_("td",[t._v("Null")]),t._v(" "),_("td",[t._v("开场动画的路径配置。")])])])])]),t._v(" "),_("h2",{attrs:{id:"resource-provider"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#resource-provider"}},[t._v("#")]),t._v(" Resource Provider")]),t._v(" "),_("div",{staticClass:"config-table"},[_("table",[_("thead",[_("tr",[_("th",[t._v("Property")]),t._v(" "),_("th",[t._v("Default Value")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Resource Policy")]),t._v(" "),_("td",[t._v("Static")]),t._v(" "),_("td",[t._v("脚本执行时，加载卸载资源的规则："),_("br"),t._v(" • Static — （静态）所有资源在读取画面时预加载，并在脚本执行完成后卸载，默认使用的配置推荐适用于大多情况。"),_("br"),t._v(" • Dynamic — （动态）根据"),_("code",[t._v("Dynamic Policy Steps")]),t._v("加载，不使用的资源卸载。用于低配低内存设备，可能在游戏时会有加载时间卡顿。")])]),t._v(" "),_("tr",[_("td",[t._v("Dynamic Policy Steps")]),t._v(" "),_("td",[t._v("25")]),t._v(" "),_("td",[t._v("当Resource Policy使用动态配置时，定义在多少句前预加载。")])]),t._v(" "),_("tr",[_("td",[t._v("Optimize Loading Priority")]),t._v(" "),_("td",[t._v("True")]),t._v(" "),_("td",[t._v("当Resource Policy使用动态配置时，会将Uniyt的后台加载线程优先级设置为低，避免加载卡顿。")])]),t._v(" "),_("tr",[_("td",[t._v("Log Resource Loading")]),t._v(" "),_("td",[t._v("False")]),t._v(" "),_("td",[t._v("是否再加载界面显示资源加载信息。")])]),t._v(" "),_("tr",[_("td",[t._v("Enable Build Processing")]),t._v(" "),_("td",[t._v("True")]),t._v(" "),_("td",[t._v("Whether to register a custom build player handle to process the assets assigned as Naninovel resources."),_("br"),_("br"),t._v("注意: 重启Unity编辑器后生效。")])]),t._v(" "),_("tr",[_("td",[t._v("Use Addressables")]),t._v(" "),_("td",[t._v("True")]),t._v(" "),_("td",[t._v("当Addressable Asset System安装时，开启会优化资源读取，节约build时间。")])]),t._v(" "),_("tr",[_("td",[t._v("Auto Build Bundles")]),t._v(" "),_("td",[t._v("True")]),t._v(" "),_("td",[t._v("Whether to automatically build the addressable asset bundles when building the player.  "),_("code",[t._v("Use Addressables")]),t._v(" 关闭时无效。")])]),t._v(" "),_("tr",[_("td",[t._v("Allow Addressable In Editor")]),t._v(" "),_("td",[t._v("False")]),t._v(" "),_("td",[t._v("Whether to use addressable provider in editor. Enable if you're manually exposing resources via addressable address instead of assigning them with Naninovel's resource managers. Be aware, that enabling this could cuase issues when resources are assigned both in resources manager and registered with an addressable address and then renamed or dublicated.")])]),t._v(" "),_("tr",[_("td",[t._v("Extra Labels")]),t._v(" "),_("td",[t._v("Null")]),t._v(" "),_("td",[t._v("Addressable provider will only work with assets, that have the assigned labels in addition to "),_("code",[t._v("Naninovel")]),t._v(" label. Can be used to filter assets used by the engine based on custom criterias (eg, HD vs SD textures).")])]),t._v(" "),_("tr",[_("td",[t._v("Local Root Path")]),t._v(" "),_("td",[t._v("%DATA%/Resources")]),t._v(" "),_("td",[t._v("Path root to use for the local resource provider. Can be an absolute path to the folder where the resources are located, or a relative path with one of the available origins:"),_("br"),t._v(" • %DATA% — Game data folder on the target device (UnityEngine.Application.dataPath)."),_("br"),t._v(" • %PDATA% — Persistent data directory on the target device (UnityEngine.Application.persistentDataPath)."),_("br"),t._v(" • %STREAM% — "),_("code",[t._v("StreamingAssets")]),t._v(" folder (UnityEngine.Application.streamingAssetsPath)."),_("br"),t._v(" • %SPECIAL{F}% — An OS special folder (where F is value from System.Environment.SpecialFolder).")])]),t._v(" "),_("tr",[_("td",[t._v("Project Root Path")]),t._v(" "),_("td",[t._v("Naninovel")]),t._v(" "),_("td",[t._v("Path relative to "),_("code",[t._v("Resources")]),t._v(" folders, under which the naninovel-specific assets are located.")])]),t._v(" "),_("tr",[_("td",[t._v("Google Drive Root Path")]),t._v(" "),_("td",[t._v("Resources")]),t._v(" "),_("td",[t._v("Path root to use for the Google Drive resource provider.")])]),t._v(" "),_("tr",[_("td",[t._v("Google Drive Request Limit")]),t._v(" "),_("td",[t._v("2")]),t._v(" "),_("td",[t._v("Maximum allowed concurrent requests when contacting Google Drive API.")])]),t._v(" "),_("tr",[_("td",[t._v("Google Drive Caching Policy")]),t._v(" "),_("td",[t._v("Smart")]),t._v(" "),_("td",[t._v("Cache policy to use when downloading resources. "),_("code",[t._v("Smart")]),t._v(" will attempt to use Changes API to check for the modifications on the drive. "),_("code",[t._v("PurgeAllOnInit")]),t._v(" will to re-download all the resources when the provider is initialized.")])])])])]),t._v(" "),_("h2",{attrs:{id:"script-player"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#script-player"}},[t._v("#")]),t._v(" Script Player")]),t._v(" "),_("div",{staticClass:"config-table"},[_("table",[_("thead",[_("tr",[_("th",[t._v("Property")]),t._v(" "),_("th",[t._v("Default Value")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Skip Time Scale")]),t._v(" "),_("td",[t._v("10")]),t._v(" "),_("td",[t._v("在skip模式下使用的time scale。")])]),t._v(" "),_("tr",[_("td",[t._v("Min Auto Play Delay")]),t._v(" "),_("td",[t._v("3")]),t._v(" "),_("td",[t._v("在auto模式下执行到下一句命令的最小等待时长。")])]),t._v(" "),_("tr",[_("td",[t._v("Show Debug On Init")]),t._v(" "),_("td",[t._v("False")]),t._v(" "),_("td",[t._v("是否再引擎初始化时显示玩家debug窗口。")])])])])]),t._v(" "),_("h2",{attrs:{id:"scripts"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#scripts"}},[t._v("#")]),t._v(" Scripts")]),t._v(" "),_("div",{staticClass:"config-table"},[_("table",[_("thead",[_("tr",[_("th",[t._v("Property")]),t._v(" "),_("th",[t._v("Default Value")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Loader")]),t._v(" "),_("td",[t._v("Scripts- (Addressable, Project)")]),t._v(" "),_("td",[t._v("用于加载Naninovel脚本的的资源加载器配置。")])]),t._v(" "),_("tr",[_("td",[t._v("Initialization Script")]),t._v(" "),_("td",[t._v("Null")]),t._v(" "),_("td",[t._v("在引擎初始化完成后执行的脚本。")])]),t._v(" "),_("tr",[_("td",[t._v("Title Script")]),t._v(" "),_("td",[t._v("Null")]),t._v(" "),_("td",[t._v("显示标题画面时执行的脚本。用于定制标题画面，背景，音乐等。")])]),t._v(" "),_("tr",[_("td",[t._v("Start Game Script")]),t._v(" "),_("td",[t._v("Null")]),t._v(" "),_("td",[t._v("开始新游戏时执行的脚本，未定义时使用配置的第一脚本。")])]),t._v(" "),_("tr",[_("td",[t._v("Auto Add Scripts")]),t._v(" "),_("td",[t._v("True")]),t._v(" "),_("td",[t._v("是否自动添加创建的Naninovel脚本。")])]),t._v(" "),_("tr",[_("td",[t._v("Hot Reload Scripts")]),t._v(" "),_("td",[t._v("True")]),t._v(" "),_("td",[t._v("运行中是否自动重新加载编辑后的脚本。")])]),t._v(" "),_("tr",[_("td",[t._v("Count Total Commands")]),t._v(" "),_("td",[t._v("False")]),t._v(" "),_("td",[t._v("是否在初始化时计算所有可执行语句数量。如果你不使用"),_("code",[t._v("TotalCommandsCount")]),t._v("属性和脚本内的"),_("code",[t._v("CalculateProgress")]),t._v(" 方法，可以关闭来节省加载时间。")])]),t._v(" "),_("tr",[_("td",[t._v("Enable Visual Editor")]),t._v(" "),_("td",[t._v("True")]),t._v(" "),_("td",[t._v("选中脚本时是否自动显示内置编辑器。")])]),t._v(" "),_("tr",[_("td",[t._v("Hide Unused Parameters")]),t._v(" "),_("td",[t._v("True")]),t._v(" "),_("td",[t._v("某行未被选定或鼠标停留时，是否隐藏未指定参数的命令。")])]),t._v(" "),_("tr",[_("td",[t._v("Insert Line Key")]),t._v(" "),_("td",[t._v("Space")]),t._v(" "),_("td",[t._v("显示"),_("code",[t._v("Insert Line")]),t._v("窗口的快捷键。设置为"),_("code",[t._v("None")]),t._v("关闭。")])]),t._v(" "),_("tr",[_("td",[t._v("Insert Line Modifier")]),t._v(" "),_("td",[t._v("Control")]),t._v(" "),_("td",[_("code",[t._v("Insert Line Key")]),t._v("的快捷键。设置为"),_("code",[t._v("None")]),t._v("关闭。")])]),t._v(" "),_("tr",[_("td",[t._v("Save Script Key")]),t._v(" "),_("td",[t._v("S")]),t._v(" "),_("td",[t._v("选中时保存序列化脚本的快捷键，设置为"),_("code",[t._v("None")]),t._v("关闭。")])]),t._v(" "),_("tr",[_("td",[t._v("Save Script Modifier")]),t._v(" "),_("td",[t._v("Control")]),t._v(" "),_("td",[_("code",[t._v("Save Script Key")]),t._v("的快捷键。设置为"),_("code",[t._v("None")]),t._v("关闭。")])]),t._v(" "),_("tr",[_("td",[t._v("Editor Page Length")]),t._v(" "),_("td",[t._v("1000")]),t._v(" "),_("td",[t._v("内置编辑器每页可现实多少行。")])]),t._v(" "),_("tr",[_("td",[t._v("Editor Custom Style Sheet")]),t._v(" "),_("td",[t._v("Null")]),t._v(" "),_("td",[t._v("允许调整编辑器的默认风格。")])]),t._v(" "),_("tr",[_("td",[t._v("Graph Orientation")]),t._v(" "),_("td",[t._v("Horizontal")]),t._v(" "),_("td",[t._v("允许调整水平或垂直方向。")])]),t._v(" "),_("tr",[_("td",[t._v("Graph Auto Align Padding")]),t._v(" "),_("td",[t._v("(10.0, 0.0)")]),t._v(" "),_("td",[t._v("在每个节点执行时会加上的外边距。")])]),t._v(" "),_("tr",[_("td",[t._v("Graph Custom Style Sheet")]),t._v(" "),_("td",[t._v("Null")]),t._v(" "),_("td",[t._v("允许调整默认脚本样式。")])]),t._v(" "),_("tr",[_("td",[t._v("Enable Community Modding")]),t._v(" "),_("td",[t._v("False")]),t._v(" "),_("td",[t._v("是否允许添加外部naninovel脚本。")])]),t._v(" "),_("tr",[_("td",[t._v("External Loader")]),t._v(" "),_("td",[t._v("Scripts- (Local)")]),t._v(" "),_("td",[t._v("用于加载外部naninovel脚本的资源加载器配置。")])]),t._v(" "),_("tr",[_("td",[t._v("Enable Navigator")]),t._v(" "),_("td",[t._v("True")]),t._v(" "),_("td",[t._v("是否允许初始化脚本导航器浏览所有可用naninovel脚本。")])]),t._v(" "),_("tr",[_("td",[t._v("Show Navigator On Init")]),t._v(" "),_("td",[t._v("False")]),t._v(" "),_("td",[t._v("是否在初始化完成以后显示naninovel脚本导航器。")])]),t._v(" "),_("tr",[_("td",[t._v("Navigator Sort Order")]),t._v(" "),_("td",[t._v("900")]),t._v(" "),_("td",[t._v("脚本导航器的sort order。")])])])])]),t._v(" "),_("h2",{attrs:{id:"spawn"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#spawn"}},[t._v("#")]),t._v(" Spawn")]),t._v(" "),_("div",{staticClass:"config-table"},[_("table",[_("thead",[_("tr",[_("th",[t._v("Property")]),t._v(" "),_("th",[t._v("Default Value")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Loader")]),t._v(" "),_("td",[t._v("Spawn- (Addressable, Project)")]),t._v(" "),_("td",[t._v("用于生成资源的资源加载器配置。")])])])])]),t._v(" "),_("h2",{attrs:{id:"state"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[t._v("#")]),t._v(" State")]),t._v(" "),_("div",{staticClass:"config-table"},[_("table",[_("thead",[_("tr",[_("th",[t._v("Property")]),t._v(" "),_("th",[t._v("Default Value")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Save Folder Name")]),t._v(" "),_("td",[t._v("Saves")]),t._v(" "),_("td",[t._v("会创建于游戏数据目录。")])]),t._v(" "),_("tr",[_("td",[t._v("Default Settings Slot Id")]),t._v(" "),_("td",[t._v("Settings")]),t._v(" "),_("td",[t._v("设置保存文件的名字。")])]),t._v(" "),_("tr",[_("td",[t._v("Default Global Slot Id")]),t._v(" "),_("td",[t._v("Global Save")]),t._v(" "),_("td",[t._v("全局保存文件的名字。")])]),t._v(" "),_("tr",[_("td",[t._v("Save Slot Mask")]),t._v(" "),_("td",[t._v("Game Save{0:000}")]),t._v(" "),_("td",[t._v("命名保存栏位的Mask名字。")])]),t._v(" "),_("tr",[_("td",[t._v("Quick Save Slot Mask")]),t._v(" "),_("td",[t._v("Game Quick Save{0:000}")]),t._v(" "),_("td",[t._v("命名快速保存栏位的Mask名字。")])]),t._v(" "),_("tr",[_("td",[t._v("Save Slot Limit")]),t._v(" "),_("td",[t._v("99")]),t._v(" "),_("td",[t._v("最大保存栏位。")])]),t._v(" "),_("tr",[_("td",[t._v("Quick Save Slot Limit")]),t._v(" "),_("td",[t._v("18")]),t._v(" "),_("td",[t._v("最大快速保存栏位。")])]),t._v(" "),_("tr",[_("td",[t._v("Binary Save Files")]),t._v(" "),_("td",[t._v("True")]),t._v(" "),_("td",[t._v("是否保存为(.nson) 文件而非(.json)，更难编辑和作弊，会花费更多cpu和保存读取时间。")])]),t._v(" "),_("tr",[_("td",[t._v("Load Start Delay")]),t._v(" "),_("td",[t._v("0.3")]),t._v(" "),_("td",[t._v("在开始加载命令前的等待时间（秒），用于完成预加载动画，避免加载相关的卡顿。")])]),t._v(" "),_("tr",[_("td",[t._v("Reset On Goto")]),t._v(" "),_("td",[t._v("True")]),t._v(" "),_("td",[t._v("是否允许在使用"),_("a",{attrs:{href:"/api/#goto",target:"_blank"}},[_("code",[t._v("@goto")])]),t._v("命令是卸载资源，推荐开启，避免内存溢出问题，如果关闭了该配置，可以手动使用"),_("a",{attrs:{href:"/api/#resetstate",target:"_blank"}},[_("code",[t._v("@resetState")])]),t._v("命令控制卸载资源。")])]),t._v(" "),_("tr",[_("td",[t._v("Enable State Rollback")]),t._v(" "),_("td",[t._v("True")]),t._v(" "),_("td",[t._v("是否允许玩家回跳文本。")])]),t._v(" "),_("tr",[_("td",[t._v("State Rollback Steps")]),t._v(" "),_("td",[t._v("1024")]),t._v(" "),_("td",[t._v("允许在运行时回跳的最大步进数，更大值耗费更多内存。")])]),t._v(" "),_("tr",[_("td",[t._v("Saved Rollback Steps")]),t._v(" "),_("td",[t._v("128")]),t._v(" "),_("td",[t._v("允许在读取存档后回跳的最大步进数，更大值保存文件会耗费更多空间。")])]),t._v(" "),_("tr",[_("td",[t._v("Game State Handler")]),t._v(" "),_("td",[t._v("Naninovel.IO Game State Slot Manager, Elringus.Naninovel.Runtime, Version=0.0.0.0, Culture=neutral, Public Key Token=null")]),t._v(" "),_("td",[t._v("Implementation responsible for de-/serializing local (session-specific) game state; see "),_("code",[t._v("State Management")]),t._v(" guide on how to add custom serialization handlers.")])]),t._v(" "),_("tr",[_("td",[t._v("Global State Handler")]),t._v(" "),_("td",[t._v("Naninovel.IO Global State Slot Manager, Elringus.Naninovel.Runtime, Version=0.0.0.0, Culture=neutral, Public Key Token=null")]),t._v(" "),_("td",[t._v("Implementation responsible for de-/serializing global game state; see "),_("code",[t._v("State Management")]),t._v(" guide on how to add custom serialization handlers.")])]),t._v(" "),_("tr",[_("td",[t._v("Settings State Handler")]),t._v(" "),_("td",[t._v("Naninovel.IO Settings Slot Manager, Elringus.Naninovel.Runtime, Version=0.0.0.0, Culture=neutral, Public Key Token=null")]),t._v(" "),_("td",[t._v("Implementation responsible for de-/serializing game settings; see "),_("code",[t._v("State Management")]),t._v(" guide on how to add custom serialization handlers.")])])])])]),t._v(" "),_("h2",{attrs:{id:"text-printers"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#text-printers"}},[t._v("#")]),t._v(" Text Printers")]),t._v(" "),_("div",{staticClass:"config-table"},[_("table",[_("thead",[_("tr",[_("th",[t._v("Property")]),t._v(" "),_("th",[t._v("Default Value")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Default Printer Id")]),t._v(" "),_("td",[t._v("Dialogue")]),t._v(" "),_("td",[t._v("默认使用的text printer的ID配置。")])]),t._v(" "),_("tr",[_("td",[t._v("Max Reveal Delay")]),t._v(" "),_("td",[t._v("0.06")]),t._v(" "),_("td",[t._v("延迟限制（单位秒），在设置中"),_("code",[t._v("message speed")]),t._v("可用值范围，值越大，显示速度越慢。")])]),t._v(" "),_("tr",[_("td",[t._v("Max Auto Wait Delay")]),t._v(" "),_("td",[t._v("0.02")]),t._v(" "),_("td",[t._v("延迟限制（单位秒），auto模式下每个字母的显示间隔，在设置中"),_("code",[t._v("auto delay")]),t._v("可用值范围，值越大，显示速度越慢。")])]),t._v(" "),_("tr",[_("td",[t._v("Scale Auto Wait")]),t._v(" "),_("td",[t._v("True")]),t._v(" "),_("td",[t._v("是否在auto模式下根据显示速度自动缩放等待时间。")])]),t._v(" "),_("tr",[_("td",[t._v("Default Metadata")]),t._v(" "),_("td",[t._v("Object Ref")]),t._v(" "),_("td",[t._v("默认使用的text printer的元数据配置，创建text printer和要使用的text printer的ID不存在时调用的。")])]),t._v(" "),_("tr",[_("td",[t._v("Metadata")]),t._v(" "),_("td",[t._v("Object Ref")]),t._v(" "),_("td",[t._v("创建具体ID的text printer元素时使用的元数据")])]),t._v(" "),_("tr",[_("td",[t._v("Scene Origin")]),t._v(" "),_("td",[t._v("(0.5, 0.0)")]),t._v(" "),_("td",[t._v("场景中生成元素的定位参考点。")])]),t._v(" "),_("tr",[_("td",[t._v("Z Offset")]),t._v(" "),_("td",[t._v("100")]),t._v(" "),_("td",[t._v("生成元素到相机的z轴偏移。")])]),t._v(" "),_("tr",[_("td",[t._v("Z Step")]),t._v(" "),_("td",[t._v("0.1")]),t._v(" "),_("td",[t._v("z轴上生成元素的间隔，用于避免深度渲染冲突。")])]),t._v(" "),_("tr",[_("td",[t._v("Default Easing")]),t._v(" "),_("td",[t._v("Linear")]),t._v(" "),_("td",[t._v("默认使用的切换动画效果，如改变外观，位置，色调等。")])]),t._v(" "),_("tr",[_("td",[t._v("Auto Show On Modify")]),t._v(" "),_("td",[t._v("False")]),t._v(" "),_("td",[t._v("当执行修改命令后，是否自动显示（演示）元素。")])])])])]),t._v(" "),_("h2",{attrs:{id:"ui"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ui"}},[t._v("#")]),t._v(" UI")]),t._v(" "),_("div",{staticClass:"config-table"},[_("table",[_("thead",[_("tr",[_("th",[t._v("Property")]),t._v(" "),_("th",[t._v("Default Value")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Loader")]),t._v(" "),_("td",[t._v("UI- (Addressable, Project)")]),t._v(" "),_("td",[t._v("用于加载UI的资源加载器配置。")])]),t._v(" "),_("tr",[_("td",[t._v("Objects Layer")]),t._v(" "),_("td",[t._v("5")]),t._v(" "),_("td",[t._v("引擎用于注册UI的layer，用于遮挡剔除UI，用于"),_("code",[t._v("toogle UI")]),t._v("特性。")])]),t._v(" "),_("tr",[_("td",[t._v("Render Mode")]),t._v(" "),_("td",[t._v("Screen Space Camera")]),t._v(" "),_("td",[t._v("用于所有管理的UI元素的画布渲染模式。")])]),t._v(" "),_("tr",[_("td",[t._v("Sorting Offset")]),t._v(" "),_("td",[t._v("1")]),t._v(" "),_("td",[t._v("所有管理元素的排序步进。")])])])])]),t._v(" "),_("h2",{attrs:{id:"unlockables"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#unlockables"}},[t._v("#")]),t._v(" Unlockables")]),t._v(" "),_("div",{staticClass:"config-table"},[_("table",[_("thead",[_("tr",[_("th",[t._v("Property")]),t._v(" "),_("th",[t._v("Default Value")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Loader")]),t._v(" "),_("td",[t._v("Unlockables- (Addressable, Project)")]),t._v(" "),_("td",[t._v("用于加载未解锁资源的资源加载器配置。")])])])])])])}),[],!1,null,null,null);v.default=a.exports}}]);