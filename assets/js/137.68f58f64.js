(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{378:function(e,t,a){"use strict";a.r(t);var r=a(33),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"text-printers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#text-printers"}},[e._v("#")]),e._v(" Text Printers")]),e._v(" "),a("p",[e._v("Text printers are actors used to present text messages, that can be revealed (printed) over time.")]),e._v(" "),a("p",[e._v("Printers' behavior can be configured using "),a("code",[e._v("Naninovel -> Configuration -> Printers")]),e._v(" context menu; for available options see "),a("RouterLink",{attrs:{to:"/ru/guide/configuration.html#printers"}},[e._v("configuration guide")]),e._v(". The printers' resources manager can be accessed using "),a("code",[e._v("Naninovel -> Resources -> Printers")]),e._v(" context menu.")],1),e._v(" "),a("p",[e._v("In naninovel scripts, text printers are mostly controlled with "),a("a",{attrs:{href:"/api/#print",target:"_blank"}},[a("code",[e._v("@print")])]),e._v(" and "),a("a",{attrs:{href:"/api/#printer",target:"_blank"}},[a("code",[e._v("@printer")])]),e._v(" commands:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('; Will make the `Dialogue` printer default\n@printer Dialogue\n\n; Will make the `Fullscreen` printer default\n@printer Fullscreen\n\n; Will print the phrase using a default printer\n@print text:"Lorem ipsum dolor sit amet."\n\n; The same as above, but using generic text statement\nLorem ipsum dolor sit amet.\n\n; The same as above, but associated with character "Felix"\nFelix: Lorem ipsum dolor sit amet.\n')])])]),a("p",[e._v("Be aware, that even though the built-in printers are implemented as UIs, they're still actors and all the actor-related visibility changes (show/hide animations) use durations set either in the corresponding commands or actor configuration: eg, "),a("code",[e._v("time")]),e._v(" parameter of "),a("a",{attrs:{href:"/api/#showprinter",target:"_blank"}},[a("code",[e._v("@showPrinter")])]),e._v(" command controls show animation duration and when it's not specified, "),a("code",[e._v("Change Visibility Duration")]),e._v(" printer actor configuration property is used as a default duration; "),a("code",[e._v("Fade Time")]),e._v(" property found on the root of the printer UI prefab is ignored in this case.")]),e._v(" "),a("h2",{attrs:{id:"auto-advance-text"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auto-advance-text"}},[e._v("#")]),e._v(" Auto-Advance Text")]),e._v(" "),a("p",[e._v("Auto-advance feature allows to automatically continue script execution when handling "),a("RouterLink",{attrs:{to:"/ru/api/#i"}},[a("code",[e._v("i")])]),e._v(" commands.")],1),e._v(" "),a("p",[a("video",{staticClass:"video",attrs:{loop:"",autoplay:"",muted:""},domProps:{muted:!0}},[a("source",{attrs:{src:"https://i.gyazo.com/e6f58f861fa18bd62591db9794e7641b.mp4",type:"video/mp4"}})])]),e._v(" "),a("p",[e._v('Wait for user input or "i" commands halt script execution until user activates a '),a("code",[e._v("Continue")]),e._v(' input and are typically used after printing-out a text message. When in auto-advance mode, "i" commands will instead halt script execution for a period of time and then finish, allowing execution of the following command. Halt period depends on the length of the last printed text message and further modified by "Print speed" game setting.')]),e._v(" "),a("p",[e._v("Auto-advance mode can be toggled using "),a("code",[e._v("AutoPlay")]),e._v(" input ("),a("code",[e._v("A")]),e._v(' key by default for standalone input module) or "AUTO" button in the control panel.')]),e._v(" "),a("h2",{attrs:{id:"text-skipping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#text-skipping"}},[e._v("#")]),e._v(" Text Skipping")]),e._v(" "),a("p",[e._v("Text skipping feature allows to fast-forward execution of the "),a("a",{attrs:{href:"/api/#print",target:"_blank"}},[a("code",[e._v("@print")])]),e._v(" commands, effectively skipping text revealing (printing) process.")]),e._v(" "),a("p",[a("video",{staticClass:"video",attrs:{loop:"",autoplay:"",muted:""},domProps:{muted:!0}},[a("source",{attrs:{src:"https://i.gyazo.com/9605a5c8cd1911217350d77712f47e7d.mp4",type:"video/mp4"}})])]),e._v(" "),a("p",[e._v("Skip mode can be toggled using "),a("code",[e._v("Skip")]),e._v(" input ("),a("code",[e._v("Ctrl")]),e._v(' key by default for standalone input module) or "SKIP" button in the control panel.')]),e._v(" "),a("p",[e._v("By default, skip mode is only available while executing commands that was already executed in the past; e.g. if the user hadn't already read the text that is going to be printed, skip mode won't be available. This can be changed in the game settings using \"Skip mode\" setting.")]),e._v(" "),a("h2",{attrs:{id:"printer-backlog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#printer-backlog"}},[e._v("#")]),e._v(" Printer Backlog")]),e._v(" "),a("p",[e._v("Printer backlog is a feature allowing user to re-read previously printed text.")]),e._v(" "),a("p",[a("video",{staticClass:"video",attrs:{loop:"",autoplay:"",muted:""},domProps:{muted:!0}},[a("source",{attrs:{src:"https://i.gyazo.com/4bde6752b676aa1acedb54d2af075ced.mp4",type:"video/mp4"}})])]),e._v(" "),a("p",[e._v("Backlog can be shown at any time during main game loop by activating "),a("code",[e._v("ShowBacklog")]),e._v(" input ("),a("code",[e._v("L")]),e._v(' key by default for standalone input module) or pressing "LOG" button in the control panel.')]),e._v(" "),a("h2",{attrs:{id:"dialogue-printer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dialogue-printer"}},[e._v("#")]),e._v(" Dialogue Printer")]),e._v(" "),a("p",[e._v("Dialogue printers present text inside windows with a flexible height. They initially take about a third of the screen size and will increase the height when the content requires more space. Dialogue printers also expose associated character name in a label above the text window.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.gyazo.com/73abe9eabc7b285109b08e77dbf75430.png",alt:"Dialogue Printer"}})]),e._v(" "),a("h2",{attrs:{id:"wide-printer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wide-printer"}},[e._v("#")]),e._v(" Wide Printer")]),e._v(" "),a("p",[e._v("Wide printers are very like dialogue printers, except for some changes in the panel layout tailored for wide displays. Wide printers also support "),a("RouterLink",{attrs:{to:"/ru/guide/characters.html#avatar-textures"}},[e._v("character avatars")]),e._v(" feature.")],1),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.gyazo.com/83c091c08846fa1cab8764a8d4dddeda.png",alt:"Wide Printer"}})]),e._v(" "),a("h2",{attrs:{id:"fullscreen-printer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fullscreen-printer"}},[e._v("#")]),e._v(" Fullscreen Printer")]),e._v(" "),a("p",[e._v('Fullscreen printers present text inside windows with a static size. They take most of the screen size and are indented for presenting large amounts of text, aka "NVL" mode.')]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.gyazo.com/c7861949717f9b600b664365af53abbc.png",alt:"Fullscreen Printer"}})]),e._v(" "),a("p",[e._v("Fullscreen printers won't reset text by default on each consequent print command; instead, use "),a("a",{attrs:{href:"/api/#resettext",target:"_blank"}},[a("code",[e._v("@resetText")])]),e._v(" command to clear contents of the printer when required. This can be changed by enabling "),a("code",[e._v("Auto Reset")]),e._v(" in the printer actor configuration menu.")]),e._v(" "),a("p",[e._v("Each print command handled by a fullscreen printer will prepend 2 line breaks before the printed text by default (except when current content of the printer is empty). This can be disabled in the printer actor configuration menu by setting "),a("code",[e._v("Auto Line Break")]),e._v(" to zero.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.gyazo.com/978c2eb05215aac2d62177cfb58bfbef.png",alt:""}})]),e._v(" "),a("p",[e._v("Below is an example on using fullscreen printer.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("; Activate fullscreen printer.\n@printer Fullscreen\n\n; Following lines will be printed in the same window, separated by two line breaks.\nLorem ipsum dolor sit amet. Proin ultricies in leo id scelerisque. \nPraesent vel orci luctus, tincidunt nisi et, fringilla arcu. In a metus orci. \nMaecenas congue nunc quis lectus porttitor, eget commodo massa congue.\n\n; Clear contents of the printer.\n@resetText\n\n; Print more lines.\nMorbi ultrices dictum diam, in gravida neque vulputate in. \n...\n")])])]),a("h2",{attrs:{id:"chat-printer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chat-printer"}},[e._v("#")]),e._v(" Chat Printer")]),e._v(" "),a("p",[e._v('Chat printer presents text inside message bubbles framed in a window with vertically-scrollable content, resembling a mobile messager app. Instead of revealing the printed message character by character, it shows "author is typing" animation for the duration of the reveal effect and then instantly shows the printed message. Chat printer supports '),a("RouterLink",{attrs:{to:"/ru/guide/characters.html#avatar-textures"}},[e._v("character avatars")]),e._v(" feature.")],1),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.gyazo.com/3c04aecabe7f754ffc9ce5452eeba270.png",alt:"Chat Printer"}})]),e._v(" "),a("p",[e._v("When using generic text lines and "),a("a",{attrs:{href:"/api/#print",target:"_blank"}},[a("code",[e._v("@print")])]),e._v(" commands, the text in the target printer will reset (clear) by default. In case with chat printers, this will remove all the messages when a new one is added, which may not be desirable in most cases. Setting "),a("code",[e._v("reset")]),e._v(" parameter to "),a("em",[e._v("false")]),e._v(" will prevent clearing the printer, eg:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('@print "Orci varius natoque penatibus." author:Kohaku reset:false\n@print "Integer ullamcorper fringilla ipsum a scelerisque." author:Yuko reset:false\n')])])]),a("p",[e._v("— will print two messages without resetting the printer.")]),e._v(" "),a("h2",{attrs:{id:"bubble-printer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bubble-printer"}},[e._v("#")]),e._v(" Bubble Printer")]),e._v(" "),a("p",[e._v("Bubble printers can be used for a manga/comic style of text presentation.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.gyazo.com/900ee728505a0d7ce2eb597f3aa2249a.png",alt:""}})]),e._v(" "),a("p",[e._v('The built-in bubble printer supports two appearances: "Left" and "Right", which can be used to align the direction of the printer based on which side it\'s positioned relative to the character.')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("@printer Bubble.Left pos:42,80 visible:false time:0\n@show Bubble wait:false\nMisaki: Aliquam lobortis!\n@char Nanikun.Happy wait:false\n@printer Bubble.Right pos:53,55 visible:false time:0\n@show Bubble wait:false\nNanikun: Integer nec maximus elit, eget posuere risus.\n")])])]),a("p",[e._v("To display more than one bubble (or any other) printer at a time, add custom printers.")]),e._v(" "),a("h2",{attrs:{id:"adding-custom-printers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-custom-printers"}},[e._v("#")]),e._v(" Adding Custom Printers")]),e._v(" "),a("p",[e._v("You can add custom text printers based on the built-in templates or create new printers from scratch. For example, let's customize the built-in "),a("code",[e._v("Dialogue")]),e._v(" template.")]),e._v(" "),a("p",[e._v("Use "),a("code",[e._v("Create -> Naninovel -> Text Printers -> Dialogue")]),e._v(" asset context menu to create a dialogue prefab somewhere outside of the Naninovel package, e.g. at the "),a("code",[e._v("Assets/TextPrinters")]),e._v(" folder.")]),e._v(" "),a("p",[e._v("Edit the prefab: change font, textures, add animations, etc. For more information on the available UI building tools consult "),a("a",{attrs:{href:"https://docs.unity3d.com/Packages/com.unity.ugui@latest",target:"_blank",rel:"noopener noreferrer"}},[e._v("Unity documentation for uGUI"),a("OutboundLink")],1),e._v(". There are also a couple of tutorial videos and an example project on working with uGUI in the "),a("RouterLink",{attrs:{to:"/ru/guide/user-interface.html#ui-customization"}},[e._v("UI customization guide")]),e._v(".")],1),e._v(" "),a("p",[e._v("Expose the prefab to engine resources using the printer's manager GUI, which can be accessed with "),a("code",[e._v("Naninovel -> Resources -> Printers")]),e._v(" context menu. Add a new record using "),a("code",[e._v("+")]),e._v(" (plus) button, enter actor ID (can differ from the prefab name) and double click the record to open actor settings. Drag-drop printer prefab to the "),a("code",[e._v("Resource")]),e._v(" field.")]),e._v(" "),a("p",[a("video",{staticClass:"video",attrs:{loop:"",autoplay:"",muted:""},domProps:{muted:!0}},[a("source",{attrs:{src:"https://i.gyazo.com/3f51881fa554720b7a4092dca42fd15e.mp4",type:"video/mp4"}})])]),e._v(" "),a("p",[e._v("You can now use the new text printer by activating it via "),a("a",{attrs:{href:"/api/#printer",target:"_blank"}},[a("code",[e._v("@printer")])]),e._v(" command and specifying actor ID you've set in the manager.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("@printer MyNewPrinter\n")])])]),a("div",{staticClass:"custom-block example"},[a("p",{staticClass:"custom-block-title"},[e._v("ПРИМЕР")]),e._v(" "),a("p",[e._v("Check out "),a("RouterLink",{attrs:{to:"/ru/guide/getting-started.html#demo-project"}},[e._v("demo project")]),e._v(" for an example on adding a custom printer. The prefab is stored as "),a("code",[e._v("Assets/Prefabs/PimpedPrinter.prefab")]),e._v("; the printer appears in the demo when Kohaku-chan attempts to create her own one :3")],1)]),e._v(" "),a("p",[e._v("It's also possible to create a printer from scratch by manually implementing "),a("code",[e._v("ITextPrinterActor")]),e._v(" interface. See the guide on "),a("RouterLink",{attrs:{to:"/ru/guide/custom-actor-implementations.html"}},[e._v("custom actor implementations")]),e._v(" for more information.")],1),e._v(" "),a("p",[e._v("When modifying text component, be aware, that line hight less than 1.0 is not supported (rendered lines will overlap in this case, making it impossible to apply reveal effect). Consider editing the text font itself to reduce vertical clearing.")]),e._v(" "),a("h2",{attrs:{id:"text-reveal-effect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#text-reveal-effect"}},[e._v("#")]),e._v(" Text Reveal Effect")]),e._v(" "),a("p",[e._v('By default, a gradient fade effect is applied when printing out the text messages. If, however, you prefer the more conventional "typewriter" style, you can disable the fade effect by disabling '),a("code",[e._v("Slide Clip Rect")]),e._v(" and setting "),a("code",[e._v("Reveal Fade Width")]),e._v(" property in "),a("code",[e._v("Revealable Text")]),e._v(" component to zero. "),a("code",[e._v("Revealable Text")]),e._v(" components are applied to the text objects in some of the built-in printers; eg, you can find it attached to "),a("code",[e._v("Fullscreen/Content/Printer/Text")]),e._v(" game object of a "),a("code",[e._v("Fullscreen")]),e._v(" printer prefab.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.gyazo.com/ab848f3c1c56921634b9d2b872e7c0cb.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"text-reveal-sounds"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#text-reveal-sounds"}},[e._v("#")]),e._v(" Text Reveal Sounds")]),e._v(" "),a("p",[e._v("For the built-in printers, that support revealing effect (currently, "),a("code",[e._v("Dialogue")]),e._v(", "),a("code",[e._v("Fullscreen")]),e._v(" and "),a("code",[e._v("Wide")]),e._v(") you can optionally set SFX to be played when the characters are revealed.")]),e._v(" "),a("p",[e._v('Follow the "Adding Custom Printers" guide above to create a custom printer based on any of the built-in ones, then find '),a("code",[e._v("Revealable Text Printer Panel")]),e._v(" component attached to the root object of the prefab and use "),a("code",[e._v("Reveal Sfx")]),e._v(" property to set the SFX to be played when a character is revealed. The actual list of the available options is based on the audio resources you've added via the "),a("code",[e._v("Naninovel -> Resources -> Audio")]),e._v(" menu.")]),e._v(" "),a("p",[e._v("You can also use "),a("code",[e._v("Chars SFX")]),e._v(' list property to map multiple SFXs to specific characters. The following illustration represents setup, where "Keystroke2" SFX will be played for spaces, "Explosion" for characters '),a("code",[e._v("D")]),e._v(", "),a("code",[e._v("d")]),e._v(", "),a("code",[e._v("F")]),e._v(", "),a("code",[e._v("1")]),e._v(", "),a("code",[e._v("4")]),e._v(", "),a("code",[e._v("9")]),e._v(", and "),a("code",[e._v("*")]),e._v(", no SFX will be played for "),a("code",[e._v("%")]),e._v(' character and "Keystroke1" will be played for all the other characters.')]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.gyazo.com/c51247254e262dca35267b3689460ad2.png",alt:""}})]),e._v(" "),a("p",[e._v("Alternatively, you can set "),a("code",[e._v("Message Sound")]),e._v(" in the character configuration menus to play character-specific sounds when the text is revealed while that character is the author of the message (no matter which text printer is printing that message). In case both "),a("code",[e._v("Message Sound")]),e._v(" of the message's author and "),a("code",[e._v("Reveal Sfx")]),e._v(" of the default printer are assigned, "),a("code",[e._v("Message Sound")]),e._v(" will be played instead of the printer's default "),a("code",[e._v("Reveal SFX")]),e._v(". "),a("code",[e._v("Chars SFX")]),e._v(", when configured, will always be played, no matter if "),a("code",[e._v("Message Sound")]),e._v(" of the author is specified or not.")]),e._v(" "),a("p",[e._v("The text reveal sounds are played very often (depending on the message reveal speed) and are clipped when same sound is played in consequence, so make sure the corresponding audio clips are very short and sharp (without any pause/silence at the beginning).")]),e._v(" "),a("p",[e._v("In case the reveal sounds are not working for you (eg, the sound is not short enough to play it on each char reveal), consider using "),a("code",[e._v("OnPrintTextStarted")]),e._v(" and "),a("code",[e._v("OnPrintTextFinished")]),e._v(" events of the "),a("code",[e._v("TextPrinterManager")]),e._v(" "),a("RouterLink",{attrs:{to:"/ru/guide/engine-services.html"}},[e._v("engine service")]),e._v(" to start/stop looping the sound accordingly. Those events are also exposed to PlayMaker, in case you prefer a "),a("RouterLink",{attrs:{to:"/ru/guide/playmaker.html"}},[e._v("visual scripting")]),e._v(" solution.")],1),e._v(" "),a("h2",{attrs:{id:"textmesh-pro"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#textmesh-pro"}},[e._v("#")]),e._v(" TextMesh Pro")]),e._v(" "),a("p",[e._v("Naninovel supports "),a("a",{attrs:{href:"https://assetstore.unity.com/packages/essentials/beta-projects/textmesh-pro-84126",target:"_blank",rel:"noopener noreferrer"}},[e._v("TextMesh Pro"),a("OutboundLink")],1),e._v(" via built-in "),a("code",[e._v("TMProFullscreen")]),e._v(", "),a("code",[e._v("TMProDialogue")]),e._v(", "),a("code",[e._v("TMProWide")]),e._v(" and "),a("code",[e._v("TMProBubble")]),e._v(" printers implemented with the TMPro UI text components.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.gyazo.com/bb143607ce79e5a28d89052c7f9fb07c.png",alt:""}})]),e._v(" "),a("p",[e._v("Before using the TMPro printers, make sure you have TextMesh Pro installed in your Unity project. TextMesh Pro can be installed via package manager accessible via "),a("code",[e._v("Window -> Package Manager")]),e._v(" menu.")]),e._v(" "),a("p",[e._v("You can select the TMPro printers to route all the print commands to them using "),a("a",{attrs:{href:"/api/#printer",target:"_blank"}},[a("code",[e._v("@printer")])]),e._v(" command in naninovel scripts:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("; Activate dialogue TMPro printer\n@printer TMProDialogue\n; Print text using the activated printer\nHello World!\n")])])]),a("p",[e._v("When creating custom TextMesh Pro font assets or materials, don't forget to apply "),a("code",[e._v("Naninovel/RevealableTMProText")]),e._v(" shader to the font material, otherwise text reveal effect won't work.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.gyazo.com/18e112ba90cad84f44f0b78db0db303a.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"text-styles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#text-styles"}},[e._v("#")]),e._v(" Text Styles")]),e._v(" "),a("p",[e._v("Various text styles can be applied via rich text tags placed right inside the text or using "),a("a",{attrs:{href:"/api/#style",target:"_blank"}},[a("code",[e._v("@style")])]),e._v(" command.")]),e._v(" "),a("p",[e._v("The default (non-TMPro) text printers are based on "),a("a",{attrs:{href:"https://docs.unity3d.com/Manual/script-Text.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Unity's text rendering system"),a("OutboundLink")],1),e._v(" and support basic text styling like color, size, bold, italic, etc. Refer to "),a("a",{attrs:{href:"https://docs.unity3d.com/Manual/StyledText.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("guide on text tags"),a("OutboundLink")],1),e._v(" for more info.")]),e._v(" "),a("p",[e._v("TextMesh Pro printers support a wide range of additional text tags. See the "),a("a",{attrs:{href:"http://digitalnativestudios.com/textmeshpro/docs/rich-text/",target:"_blank",rel:"noopener noreferrer"}},[e._v("official documentation"),a("OutboundLink")],1),e._v(" for more info.")]),e._v(" "),a("p",[e._v("Support for "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Ruby_character",target:"_blank",rel:"noopener noreferrer"}},[e._v("ruby"),a("OutboundLink")],1),e._v(" (furigana) characters is additionally provided by the Naninovel's TextMesh Pro printers via custom "),a("code",[e._v("<ruby>")]),e._v(" tag. Wrap the text above which the ruby characters should be placed with the ruby tag and specify the ruby text inside the tag, eg:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('Lorem <ruby="VERY">ipsum</ruby> dolor sit amet. \n')])])]),a("p",[e._v('— "VERY" ruby text will appear right above "ipsum" word when the message is printed at runtime.')]),e._v(" "),a("p",[e._v("You can additionally control the size and vertical line offset of the ruby text by changing properties of "),a("code",[e._v("RevealableTMProText")]),e._v(" component attached to the printer prefabs.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.gyazo.com/7e1e927c144f30353baaab2ac7b643c7.png",alt:""}})]),e._v(" "),a("p",[e._v("Below is a video demonstration of the ruby tags in action.")]),e._v(" "),a("p"),a("div",{staticClass:"video-container"},[a("iframe",{attrs:{src:"https://www.youtube-nocookie.com/embed/aWdq7YxIxkE",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),a("p")])}),[],!1,null,null,null);t.default=n.exports}}]);