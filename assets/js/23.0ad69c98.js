(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{401:function(e,a,t){"use strict";t.r(a);var s=t(33),i=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"custom-variables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#custom-variables"}},[e._v("#")]),e._v(" Custom Variables")]),e._v(" "),t("p",[e._v("Custom variables feature allows to create user-specified variables, modify and use them to drive conditional execution of naninovel scripts or other systems. For example, custom variables can be used to select one of the multiple naninovel scripts to play (scenario routes), based on the decisions player has made in the past. Another frequently used scenario is player stats screen (eg, scores, money, resources etc), based on the choices the player makes throughout the game.")]),e._v(" "),t("p",[e._v("Custom variables can be created, modified and used both in naninovel scripts via "),t("a",{attrs:{href:"/api/#set",target:"_blank"}},[t("code",[e._v("@set")])]),e._v(" and "),t("a",{attrs:{href:"/api/#if",target:"_blank"}},[t("code",[e._v("@if")])]),e._v(" commands and in the C# scripts using "),t("code",[e._v("ICustomVariableManager")]),e._v(" "),t("RouterLink",{attrs:{to:"/guide/engine-services.html"}},[e._v("engine service")]),e._v(".")],1),e._v(" "),t("p",[e._v("For example, the following script command will assign a different value to "),t("code",[e._v("score")]),e._v(" custom variable, based on the choice:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('@choice "I\'m humble, one is enough..." set:score=1\n@choice "Two, please." set:score=2\n@choice "I\'ll take your entire stock!" set:score=999\n')])])]),t("p",[e._v("And the following one will re-route the script execution based on the value of the "),t("code",[e._v("score")]),e._v(" variable:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('@goto MainRoute if:"score > 1 && score <= 900"\n@goto BadEnd if:score>900\n')])])]),t("p",[e._v("See the API reference on "),t("a",{attrs:{href:"/api/#set",target:"_blank"}},[t("code",[e._v("@set")])]),e._v(" and "),t("a",{attrs:{href:"/api/#if",target:"_blank"}},[t("code",[e._v("@if")])]),e._v(" commands for more examples.")]),e._v(" "),t("p",[e._v("All the custom variables are automatically saved with the game. By default, the variables are stored in "),t("strong",[e._v("local scope")]),e._v(". This means, that if you assign some variable in the course of gameplay and player starts a new game or loads another saved game slot, where that variable wasn't assigned — the value will be lost. This is useful for the most type of variables. If, however, you wish to store the variable in "),t("strong",[e._v("global scope")]),e._v(", prepend "),t("code",[e._v("G_")]),e._v(" or "),t("code",[e._v("g_")]),e._v(" to its name, eg: "),t("code",[e._v("G_FinishedMainRoute")]),e._v(" or "),t("code",[e._v("g_total_score")]),e._v(". Global variables can be used to indicate some meta or total information, for example, the number of times player has finished some route or a total score based on all the playthroughs.")]),e._v(" "),t("p",[e._v('You can set pre-defined custom variables (both global and local) with initial values in the "Custom Variables" configuration menu.')]),e._v(" "),t("p",[t("img",{attrs:{src:"https://i.gyazo.com/21701f17403921e34ba4da33b0261ad0.png",alt:""}})]),e._v(" "),t("p",[e._v("Global pre-defined variables are initialized on first application start, while the locals do so on each state reset. Notice, that the value field in the menu expects a valid script expression and not a raw value string.")]),e._v(" "),t("h2",{attrs:{id:"injecting-variables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#injecting-variables"}},[e._v("#")]),e._v(" Injecting Variables")]),e._v(" "),t("p",[e._v("It's possible to inject (inline) custom variable to naninovel script parameter values using the curly braces.")]),e._v(" "),t("p",[e._v("The following script will show an input field UI where user can enter an arbitrary text. Upon submit the entered text will be assigned to the specified custom variable.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('; Allow user to enter an arbitrary text and assign it to `name` custom state variable\n@input name summary:"Choose your name."\n; Stop command is required to halt script execution until user submits the input\n@stop\n\n; You can then inject the assigned `name` variable in naninovel scripts\nArchibald: Greetings, {name}!\n{name}: Yo!\n\n; ...or use it inside set and conditional expressions\n@set score=score+1 if:name=="Felix"\n')])])]),t("p",[e._v("You can inject the custom variables to any parameter values as long as the type allows. Eg, you can't assign a string (text) to an integer (number) parameter.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('@set PlayerName="Felix";PlayerYPosition=0.1;PlayerTint="lightblue"\n\n; The following will produce an error, as `PlayerTint` is not a number.\n@char {PlayerName} pos:50,{PlayerTint} \n\n; ...and this will execute just fine.\n@char {PlayerName} pos:50,{PlayerYPosition} tint:{PlayerTint}\n')])])]),t("h2",{attrs:{id:"variable-triggers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#variable-triggers"}},[e._v("#")]),e._v(" Variable Triggers")]),e._v(" "),t("p",[e._v("When building a "),t("RouterLink",{attrs:{to:"/guide/user-interface.html#ui-customization"}},[e._v("custom UI")]),e._v(" or other systems, you may want to listen (react) for events when a variable value is changed. For example, when building a character stats screen, you want make the text to change with the variables. While the conventional way to implement such behavior would be using a C# script, you can also make use of "),t("code",[e._v("Custom Variable Trigger")]),e._v(" component. The component will invoke Unity events when a variable with specified name is changed. You can bind compatible commands with those events, such as updating the text values.")],1),e._v(" "),t("p",[t("img",{attrs:{src:"https://i.gyazo.com/22eddd109e76d4e63c461e9d75b20ceb.png",alt:""}})]),e._v(" "),t("h2",{attrs:{id:"variables-debug"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#variables-debug"}},[e._v("#")]),e._v(" Variables Debug")]),e._v(" "),t("p",[e._v("While the game is running it's possible to view all the existing variables and change their values for debugging purposes.")]),e._v(" "),t("p",[e._v("Open "),t("RouterLink",{attrs:{to:"/guide/development-console.html"}},[e._v("development console")]),e._v(" and enter "),t("code",[e._v("var")]),e._v(" command to open the variables editor window.")],1),e._v(" "),t("p",[t("img",{attrs:{src:"https://i.gyazo.com/d1812668c0776b01f3a82c5ddcba0145.png",alt:""}})]),e._v(" "),t("p",[e._v('When changing value of a variable in the list, a "SET" button will appear, which you can press to apply the changes.')]),e._v(" "),t("p",[e._v("The variables list is automatically updated when the custom variables are changed while running the game.")])])}),[],!1,null,null,null);a.default=i.exports}}]);