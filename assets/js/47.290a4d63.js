(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{421:function(e,t,a){"use strict";a.r(t);var o=a(33),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"unlockable-items"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unlockable-items"}},[e._v("#")]),e._v(" Unlockable Items")]),e._v(" "),a("p",[e._v("The unlockables feature allows to manage items, which have a persistent state of being either locked or unlocked. You can use it in a variety of ways, for example to represent slots in a CG or movie gallery, achievements, tips and other systems where some entity should be able to become unlocked or activated when player satisfies a condition.")]),e._v(" "),a("p",[e._v("Each unlockable item is represented by a string identifier and boolean value, indicating whether the item is unlocked. In naninovel scripts, use "),a("a",{attrs:{href:"/api/#unlock",target:"_blank"}},[a("code",[e._v("@unlock")])]),e._v(" and "),a("a",{attrs:{href:"/api/#lock",target:"_blank"}},[a("code",[e._v("@lock")])]),e._v(" commands to respectively unlock and lock an item with a specific ID, eg:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("@unlock SecretAchievement\n")])])]),a("p",[e._v("— will unlock item "),a("code",[e._v("SecretAchievement")]),e._v(" and")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("@lock SecretAchievement\n")])])]),a("p",[e._v("— will lock it back.")]),e._v(" "),a("p",[e._v("The unlockable state of the items is stored under "),a("RouterLink",{attrs:{to:"/guide/state-management.html#global-state"}},[e._v("global scope")]),e._v(" and doesn't depend on local game sessions; eg, if you unlock some item, it won't become locked again when player starts a new game or loads another saved game.")],1),e._v(" "),a("p",[e._v("To bind an actual "),a("a",{attrs:{href:"https://docs.unity3d.com/Manual/class-GameObject.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("GameObject"),a("OutboundLink")],1),e._v(" with the unlockable item, use "),a("code",[e._v("UnlockableTrigger")]),e._v(" component:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.gyazo.com/9e92d5296e5f07d68ce6122ccb1da34a.png",alt:""}})]),e._v(" "),a("p",[e._v("Set the item's ID to the "),a("code",[e._v("Unlockable Item Id")]),e._v(" field and bind an command that should be performed when the items is unlocked. The illustration above, for example, makes the GameObject active when "),a("code",[e._v("SecretAchievement")]),e._v(" is unlocked and vice versa.")]),e._v(" "),a("p",[e._v("In C# you can access the unlockable items using "),a("code",[e._v("UnlockableManager")]),e._v(" "),a("RouterLink",{attrs:{to:"/guide/engine-services.html"}},[e._v("engine service")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"unlockable-resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unlockable-resources"}},[e._v("#")]),e._v(" Unlockable Resources")]),e._v(" "),a("p",[e._v("Under the unlockables configuration menu ("),a("code",[e._v("Naninovel -> Configuration -> Unlockables")]),e._v("), you can find resources manager, that allows to store arbitrary assets to be used with the unlockables feature.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.gyazo.com/17fa198861ed72de3ab1f9dc6b02b3d8.png",alt:""}})]),e._v(" "),a("p",[e._v("The unlockable resources are used by the built-in unlockable systems, such as "),a("RouterLink",{attrs:{to:"/guide/unlockable-items.html#cg-gallery"}},[e._v("CG Gallery")]),e._v(". You can also utilize the manager for you own custom systems.")],1),e._v(" "),a("h2",{attrs:{id:"cg-gallery"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cg-gallery"}},[e._v("#")]),e._v(" CG Gallery")]),e._v(" "),a("p",[e._v("Using the CG gallery feature, you can specify texture resources (images), that can be unlocked throughout the game and then browsed via the "),a("code",[e._v("ICGGalleryUI")]),e._v(" UI accessible from the title menu.")]),e._v(" "),a("p"),a("div",{staticClass:"video-container"},[a("iframe",{attrs:{src:"https://www.youtube-nocookie.com/embed/wkZeszk6gm0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),a("p"),e._v(" "),a("p",[e._v("By default, all the unlockable texture resources with "),a("code",[e._v("CG")]),e._v(" prefix added via "),a("RouterLink",{attrs:{to:"/guide/unlockable-items.html#unlockable-resources"}},[e._v("unlockable resources manager")]),e._v(" and "),a("RouterLink",{attrs:{to:"/guide/backgrounds.html"}},[e._v("background")]),e._v(" sprite resources of the "),a("code",[e._v("MainBackground")]),e._v(" actor with the same prefix will be considered unlockable CG items.")],1),e._v(" "),a("p",[e._v("To add an unlockable CG item to the gallery, you can either use one of the existing main background resources, by prepending "),a("code",[e._v("CG")]),e._v(" to its path:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.gyazo.com/83a6eff3f91c05027ba1fbc5098e03c2.png",alt:""}})]),e._v(" "),a("p",[e._v('— or add a "standalone" texture using the unlockable resources manager, accessible with '),a("code",[e._v("Naninovel -> Resources -> Unlockables")]),e._v(":")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.gyazo.com/236bddfd0a02c18b94153cfb7189a877.png",alt:""}})]),e._v(" "),a("p",[e._v("No matter which way you'll choose, you can then unlock and lock the items using "),a("a",{attrs:{href:"/api/#unlock",target:"_blank"}},[a("code",[e._v("@unlock")])]),e._v(" and "),a("a",{attrs:{href:"/api/#lock",target:"_blank"}},[a("code",[e._v("@lock")])]),e._v(" commands respectively.")]),e._v(" "),a("p",[e._v("For example, to unlock the "),a("code",[e._v("CG/Map")]),e._v(" item added in the illustrations above, use the following script command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("@unlock CG/Map\n")])])]),a("p",[e._v("In case you'll use both unlockable and background resources to add the CG items, the resources specified in the unlockables manager will be displayed in the CG gallery first. You can change this behavior as well as the actual sources from where the available CG resources are retrieved using "),a("code",[e._v("Cg Sources")]),e._v(" property of "),a("code",[e._v("CG Gallery Panel")]),e._v(" script, attached to the root of UI prefab representing the CG Gallery (built-in implementation stored at "),a("code",[e._v("Naninovel/Prefabs/DefaultUI/ICGGalleryUI.CGGalleryPanel")]),e._v(").")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.gyazo.com/c62c69eea8d6b1147aacb178dcaa9347.png",alt:""}})]),e._v(" "),a("p",[e._v("When there is at least one CG item added to any of the sources (no matter the unlocked state), "),a("code",[e._v("CG GALLERY")]),e._v(" button will appear in the title menu allowing to access the CG Gallery browser.")]),e._v(" "),a("p",[e._v("You can modify or completely replace the built-in "),a("code",[e._v("ICGGalleryUI")]),e._v(" implementation using the "),a("RouterLink",{attrs:{to:"/guide/user-interface.html#ui-customization"}},[e._v("UI customization feature")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"tips"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tips"}},[e._v("#")]),e._v(" Tips")]),e._v(" "),a("p",[e._v("Unlockable tips system allows to specify a set of text records using localizable "),a("RouterLink",{attrs:{to:"/guide/managed-text.html"}},[e._v("managed text")]),e._v(" documents; the records can then be unlocked throughout the game and be browsed via the "),a("code",[e._v("ITipsUI")]),e._v(" UI accessible from the title menu and text printer control panels.")],1),e._v(" "),a("p",[e._v("The system can be used to build an in-game vocabulary/encyclopedia or achievements tracker.")]),e._v(" "),a("p"),a("div",{staticClass:"video-container"},[a("iframe",{attrs:{src:"https://www.youtube-nocookie.com/embed/CRZuS1u_J4c",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),a("p"),e._v(" "),a("p",[e._v("To define the available tips, create a "),a("code",[e._v("Tips.txt")]),e._v(" text document inside the "),a("RouterLink",{attrs:{to:"/guide/managed-text.html"}},[e._v("managed text")]),e._v(" resources directory ("),a("code",[e._v("Resources/Naninovel/Text")]),e._v(" by default). Each line identifies a single tip record. The line should begin with tip ID followed by colon; then the tip's title, category (optional) and description should be specified, all separated by vertical lines ("),a("code",[e._v("|")]),e._v("), eg:")],1),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Tip1ID: Tip 1 Title | Tip 1 Category | Tip 1 Description\nTip2ID: Tip 2 Title || Tip 2 Description\nTip3ID: Tip 3 Title \nTip4ID: Tip 4 Title | Tip 4 Category |\n...\n")])])]),a("p",[e._v("You can use "),a("a",{attrs:{href:"https://docs.unity3d.com/Manual/StyledText.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("rich text tags"),a("OutboundLink")],1),e._v(" and insert line breaks ("),a("code",[e._v("\\n")]),e._v(") inside the description section of the tip records.")]),e._v(" "),a("p",[e._v("When there is at least one tip record in the "),a("code",[e._v("Tips.txt")]),e._v(' managed text document, "TIPS" button will appear in the main menu and control panels, leading to the tips browser.')]),e._v(" "),a("p",[e._v("To unlock a tip record, use "),a("a",{attrs:{href:"/api/#unlock",target:"_blank"}},[a("code",[e._v("@unlock")])]),e._v(" and "),a("a",{attrs:{href:"/api/#lock",target:"_blank"}},[a("code",[e._v("@lock")])]),e._v(" to lock the record back followed by the tip ID (should always be preceded by "),a("code",[e._v("Tips/")]),e._v(" prefix) in the naninovel scripts. Eg, to unlock a "),a("code",[e._v("Tip1ID")]),e._v(" tip record use:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("@unlock Tips/Tip1ID\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);