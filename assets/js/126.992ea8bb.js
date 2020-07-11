(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{384:function(e,t,a){"use strict";a.r(t);var o=a(33),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"localization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#localization"}},[e._v("#")]),e._v(" Localization")]),e._v(" "),a("p",[e._v("All the game resources (scripts, audio, voice, backgrounds, etc) can be localized to multiple languages/cultures.")]),e._v(" "),a("p",[e._v("By default, all the resources stored in the project are used when the game is running under the "),a("em",[e._v("source locale")]),e._v(". For example, imagine you initially develop the game in English: all the original (source) naninovel scripts you write, UIs, signs on backgrounds, etc are in English; this means the "),a("em",[e._v("source locale")]),e._v(" is "),a("code",[e._v("en")]),e._v(" (or "),a("code",[e._v("en-GB")]),e._v(" / "),a("code",[e._v("en-US")]),e._v(" / etc in case you wish to use separate locales for specific regions).")]),e._v(" "),a("p",[e._v("The "),a("em",[e._v("source locale")]),e._v(" can be changed in the "),a("code",[e._v("Naninovel -> Configuration -> Localization")]),e._v(" menu with the "),a("code",[e._v("Source Locale")]),e._v(" property. "),a("code",[e._v("Source Locale")]),e._v(' property only determines the name (ID) of the locale associated with your source project assets and is used in the "Language" drop-down settings menu and related engine APIs to distinguish the locale.')]),e._v(" "),a("p",[e._v("You can setup additional locales by creating a sub-folder inside "),a("code",[e._v("Resources/Naninovel/Localization")]),e._v(" folder (the so-called "),a("em",[e._v("localization resources root")]),e._v(") with a name equal to one of the "),a("a",{attrs:{href:"https://gist.github.com/Elringus/db90d9c74f13c00fa35131e61d1b73cb",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC5646"),a("OutboundLink")],1),e._v(" language tags you wish to add localization for. For example, to add a German locale, create a "),a("code",[e._v("Resources/Naninovel/Localization/de")]),e._v(' folder. The "Language" drop-down list in the game settings built-in UI will automatically incorporate all the added locales.')]),e._v(" "),a("p",[e._v("Be aware, that you don't have to create a sub-folder in the "),a("em",[e._v("localization resources root")]),e._v(" for the "),a("em",[e._v("source locale")]),e._v(". All the project resources stored outside of the "),a("em",[e._v("localization resources root")]),e._v(" belong to the "),a("em",[e._v("source locale")]),e._v(" by default.")]),e._v(" "),a("p",[a("em",[e._v("Localization resources root")]),e._v(" specific path can be changed in the localization configuration menu via "),a("code",[e._v("Loader > Path Prefix")]),e._v(' property. Notice, that the configured path is relative to a "Resources" folder (not the "Assets"). The resources folders are '),a("a",{attrs:{href:"https://docs.unity3d.com/Manual/LoadingResourcesatRuntime.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("handled in a special way"),a("OutboundLink")],1),e._v(" by Unity; you can have multiple such folders stored anywhere inside the project assets for organization purposes.")]),e._v(" "),a("p",[e._v("You can set which locale is selected by default when player first runs the game with "),a("code",[e._v("Default Locale")]),e._v(" property in the localization configuration menu. When the property is not specified, the game will start in "),a("em",[e._v("source locale")]),e._v(" by default.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.gyazo.com/fb50a8c5f5fa6624105f8eeca6a7523e.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"resources-localization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resources-localization"}},[e._v("#")]),e._v(" Resources Localization")]),e._v(" "),a("p",[e._v("Inside the "),a("em",[e._v("localization resources root")]),e._v(" store resources that will be used instead of the source ones when the corresponding localization is selected in the game settings.")]),e._v(" "),a("p",[e._v('For example, if you wish to replace a "City" appearance sprite of a main background (background actor with "MainBackground" ID) with another one when a '),a("code",[e._v("ja-JP")]),e._v(" locale is selected, place the localized version at the following path: "),a("code",[e._v("Resources/Naninovel/Localization/ja-JP/Backgrounds/MainBackground/City")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"scripts-localization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scripts-localization"}},[e._v("#")]),e._v(" Scripts Localization")]),e._v(" "),a("p",[e._v("The resources localization scheme described above works with all the resource types, except naninovel scripts and managed text documents. For these type of resources, use localization tool accessible via "),a("code",[e._v("Naninovel -> Tools -> Localization")]),e._v(":")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.gyazo.com/5c6b023cbf4617f44102593f13131571.png",alt:"Localization Tool"}})]),e._v(" "),a("p",[e._v("First, select path to the locale folder where to store the generated localization resources. Make sure you've selected an actual locale folder (eg, "),a("code",[e._v("Resources/Naninovel/Localization/ja-JP")]),e._v(") and not just the "),a("em",[e._v("localization resources root")]),e._v(". Label under the property field will indicate when a valid output locale folder is selected displaying name of the selected localization target.")]),e._v(" "),a("p",[e._v('Enabling "Try update" property will attempt to preserve any currently existing localization resources; when disabled all the existing localization resources at the specified path will be lost.')]),e._v(" "),a("p",[e._v('Enabling "Localize text" will also generate '),a("RouterLink",{attrs:{to:"/ru/guide/managed-text.html"}},[e._v("managed text")]),e._v(' localization documents. When enabled, "Text Folder" property will appear allowing to specify path to the source managed text documents ('),a("code",[e._v("Assets/Resources/Naninovel/Text")]),e._v(" by default). It's possible to set the path to a folder containing localized version of text documents to generate a localization variant that is using a non-source language.")],1),e._v(" "),a("p",[e._v('Press "Generate" button to create (update) the localization resources.')]),e._v(" "),a("p",[e._v("Script localization documents consists of statements in the following format:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# ID\n; Source text\nTranslation text\n")])])]),a("p",[a("code",[e._v("# ID")]),e._v(" line is the unique identifier of the source statement in the naninovel script, you shouldn't modify those.")]),e._v(" "),a("p",[a("code",[e._v("; Source text")]),e._v(" line is the original text which you're expected to translate. It's just a comment, so changing this line won't have any effect; it's provided for convenience.")]),e._v(" "),a("p",[e._v("You're expected to put the actual translation right after the comment line with the source text. You can use any number of lines for the translation, just make sure to place them before next "),a("code",[e._v("# ID")]),e._v(" line.")]),e._v(" "),a("p",[e._v("Here is an example translation of a generic text line:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# f63f03ea\n; Yuko: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut ultricies enim, id venenatis arcu. Nullam rhoncus eros eu ante vulputate tempus.\nYuko: Все известные астероиды имеют прямое движение, при этом весеннее равноденствие отражает гейзер. Уравнение времени однократно. Большая Медведица, оценивая блеск освещенного металлического шарика, пространственно притягивает первоначальный метеорный дождь.\n")])])]),a("p",[e._v("In case the translation takes too much space, you can break it into separate commands:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# f63f03ea\n; Yuko: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut ultricies enim, id venenatis arcu. Nullam rhoncus eros eu ante vulputate tempus.\nYuko: Все известные астероиды имеют прямое движение, при этом весеннее равноденствие отражает гейзер. Уравнение времени однократно.\nYuko: Большая Медведица, оценивая блеск освещенного металлического шарика, пространственно притягивает первоначальный метеорный дождь.\n")])])]),a("p",[e._v("You're expected to include any inlined commands present in the source statement to the translation:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# b53b395d\n; Kohaku: Qui ante molestie sit tempor felis.[br 2][char Kohaku.Casual/Angry][style #ff0000,bold,45]Adipiscing elit?[style default][br][skipInput]\nKohaku: Противостояние вызывает кислый метеорный дождь.[br 2][char Kohaku.Casual/Angry][style #ff0000,bold,45]Меандр разрушаем?[style default][br][skipInput]\n")])])]),a("div",{staticClass:"custom-block warn"},[a("p",{staticClass:"custom-block-title"},[e._v("ВНИМАНИЕ")]),e._v(" "),a("p",[e._v("You "),a("strong",[e._v("should not translate character IDs")]),e._v(" (or any other actor IDs). If you do so, some features (eg, character highlight and lip sync) will break. In case you wish to translate author names displayed in text printers, use "),a("RouterLink",{attrs:{to:"/ru/guide/characters.html#display-names"}},[e._v("display names")]),e._v(" feature instead.")],1)]),e._v(" "),a("p",[e._v("Total word count contained in the generated localization documents (excluding the hash lines) is shown in the localization tool window when the generation procedure is finished.")]),e._v(" "),a("p",[e._v('By default, the generated documents will contain the text to translate taken from the source naninovel scripts. In case you wish to instead take the text from already generated localization documents, select "Script Folder" path to point into a folder containing generated localization documents for another locale. For example, let\'s say your source locale is Spanish. By default, the localization documents will contain the source text in Spanish. But what if you already have a Spanish -> English translation and now need to generate English -> Russian documents? Just point "Script Folder" to the folder where English documents are stored; the generated documents will then contain source text taken from the English translation.')]),e._v(" "),a("div",{staticClass:"custom-block example"},[a("p",{staticClass:"custom-block-title"},[e._v("ПРИМЕР")]),e._v(" "),a("p",[e._v("You can find an example localization setup in the "),a("RouterLink",{attrs:{to:"/ru/guide/getting-started.html#demo-project"}},[e._v("demo project")]),e._v(". Feel free to use it as a reference in case having issues setting up localization in your own project.")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);