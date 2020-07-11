(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{452:function(e,t,o){"use strict";o.r(t);var i=o(33),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"voicing"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#voicing"}},[e._v("#")]),e._v(" Voicing")]),e._v(" "),o("p",[e._v("To expose voice clips to the engine, store them under "),o("code",[e._v("Resources/Naninovel/Voice")]),e._v(" folder (can be changed in audio configuration under "),o("code",[e._v("Loader")]),e._v(" foldout). You can additionally organize them with sub-folders, if you wish; in this case use forward slashes ("),o("code",[e._v("/")]),e._v(") when referencing them in naninovel scripts. Eg, voice audio clip stored as "),o("code",[e._v("Resources/Naninovel/Voice/Intro/Day/25.wav")]),e._v(" can be referenced in scripts as "),o("code",[e._v("Voice/Intro/Day/25")]),e._v(".")]),e._v(" "),o("p",[e._v("It's also possible to use "),o("RouterLink",{attrs:{to:"/zh/guide/resource-providers.html#addressable"}},[e._v("addressable asset system")]),e._v(' to manually expose the resources. To expose an asset, assign address equal to the path you\'d use to expose it via the method described above, except omit the "Resources/" part. Eg, to expose a "Hello.wav" voice clip, assign the clip asset following address: '),o("code",[e._v("Naninovel/Voice/Hello")]),e._v(". Be aware, that addressable provider is not used in editor by default; you can allow it by enabling "),o("code",[e._v("Enable Addressable In Editor")]),e._v(" property in resource provider configuration menu.")],1),e._v(" "),o("p",[e._v("You can use any audio formats "),o("a",{attrs:{href:"https://docs.unity3d.com/Manual/AudioFiles.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("supported by Unity"),o("OutboundLink")],1),e._v(" for your voice clips.")]),e._v(" "),o("p",[e._v("Voice playback behavior can be configured using "),o("code",[e._v("Naninovel -> Configuration -> Audio")]),e._v(" context menu; for available options see "),o("RouterLink",{attrs:{to:"/zh/guide/configuration.html#audio"}},[e._v("configuration guide")]),e._v(".")],1),e._v(" "),o("p",[e._v("Use "),o("a",{attrs:{href:"/api/#voice",target:"_blank"}},[o("code",[e._v("@voice")])]),e._v(" command followed by the clip name (path) to play the voice in naninovel scripts.")]),e._v(" "),o("h2",{attrs:{id:"auto-voicing"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#auto-voicing"}},[e._v("#")]),e._v(" Auto Voicing")]),e._v(" "),o("p",[e._v("In fully-voiced games, it could become tedious to specify a "),o("a",{attrs:{href:"/api/#voice",target:"_blank"}},[o("code",[e._v("@voice")])]),e._v(" command for each voiced line. Auto voicing feature allows to automatically play a voice clip that has a name equal to the line number of the currently played "),o("a",{attrs:{href:"/api/#print",target:"_blank"}},[o("code",[e._v("@print")])]),e._v(" command; this way, you won't have to use "),o("a",{attrs:{href:"/api/#voice",target:"_blank"}},[o("code",[e._v("@voice")])]),e._v(" commands in naninovel scripts at all — voices will be automatically played when the corresponding text lines are printed in the game.")]),e._v(" "),o("p",[e._v("To enable auto voicing feature, use "),o("code",[e._v("Enable Auto Voicing")]),e._v(" toggle in the Audio configuration menu.")]),e._v(" "),o("p",[e._v("Audio clips used for the auto voicing feature should be grouped under a folder with name equal to the script name, and has the following name: "),o("em",[e._v("LineNumber")]),e._v("."),o("em",[e._v("CommandIndex")]),e._v(", where "),o("em",[e._v("LineNumber")]),e._v(" is the line number of the corresponding print command and "),o("em",[e._v("CommandIndex")]),e._v(" is the inline or command index of the print command in cases when dealing with generic text lines.")]),e._v(" "),o("p",[e._v('For example, consider the following naninovel script with name "Script001":')]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('@print text:"Text from a print command."\nText from a simple generic text line.\nText from first sentence.[i] Text from second sentence.\n')])])]),o("p",[e._v("In order for the auto voicing system to play corresponding audio clips when printing those lines, the clips should be placed under "),o("code",[e._v("Resources/Naninovel/Voice/Script001")]),e._v(" folder (or registered with "),o("RouterLink",{attrs:{to:"/zh/guide/resource-providers.html#addressable"}},[e._v("addressable system")]),e._v(") and have the following names:")],1),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Text")]),e._v(" "),o("th",[e._v("Voice Clip Name")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("Text from a print command.")]),e._v(" "),o("td",[e._v("1.0")])]),e._v(" "),o("tr",[o("td",[e._v("Text from a simple generic text line.")]),e._v(" "),o("td",[e._v("2.0")])]),e._v(" "),o("tr",[o("td",[e._v("Text from first sentence.")]),e._v(" "),o("td",[e._v("3.0")])]),e._v(" "),o("tr",[o("td",[e._v("Text from second sentence.")]),e._v(" "),o("td",[e._v("3.2")])])])]),e._v(" "),o("p",[e._v("To simplify the process, when auto voicing feature is enabled, name of voice clip for the currently printed text is displayed in the debug window:")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://i.gyazo.com/12772ecc7c14011bcde4a74c81e997b8.png",alt:"auto voicing"}})]),e._v(" "),o("p",[e._v("To open the debug window, make sure "),o("code",[e._v("Enable Development Console")]),e._v(" is turned on in the engine configuration, then press "),o("code",[e._v("~")]),e._v(" key while in play mode, type "),o("code",[e._v("debug")]),e._v(" and press "),o("code",[e._v("Enter")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"voiceover-documents"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#voiceover-documents"}},[e._v("#")]),e._v(" Voiceover Documents")]),e._v(" "),o("p",[e._v("You can use voiceover documents generator utility accessible via "),o("code",[e._v("Naninovel -> Tools -> Voiceover Documents")]),e._v(" to generate documents, containing printed text from the "),o("a",{attrs:{href:"/api/#print",target:"_blank"}},[o("code",[e._v("@print")])]),e._v(" commands and generic text lines. Each printed text message will be associated with the auto voice clip name to be used with the auto voicing feature.")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://i.gyazo.com/69466444d4b8b43d76e7f1566db5ca9a.png",alt:""}})]),e._v(" "),o("p",[o("code",[e._v("Locale")]),e._v(" property allows to select a specific locale for which to generate the documents (the localized naninovel scripts for the selected locale should exist in your project).")]),e._v(" "),o("p",[e._v("When "),o("code",[e._v("Use Markdown Format")]),e._v(" property is enabled, the generated files will be of "),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Markdown",target:"_blank",rel:"noopener noreferrer"}},[e._v("markdown format"),o("OutboundLink")],1),e._v(" (.md extension) with some additional formatting for better readability.")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://i.gyazo.com/ed6776026a79140de9e9f6a155faffdc.png",alt:""}})]),e._v(" "),o("p",[e._v("The voiceover documents are intended to be used by the voice actors when recording the voiceover audio clips.")])])}),[],!1,null,null,null);t.default=a.exports}}]);