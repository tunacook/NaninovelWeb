(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{347:function(t,a,e){"use strict";e.r(a);var r=e(33),n=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"начаnо-работы"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#начаnо-работы"}},[t._v("#")]),t._v(" Начало работы")]),t._v(" "),e("h2",{attrs:{id:"необходимые-компоненты"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#необходимые-компоненты"}},[t._v("#")]),t._v(" Необходимые компоненты")]),t._v(" "),e("p",[t._v("Naninovel – это расширение для "),e("a",{attrs:{href:"https://unity.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("игрового движка Unity"),e("OutboundLink")],1),t._v(", поэтому настоятельно рекомендуется изучить основы использования движка перед началом работы с Naninovel.")]),t._v(" "),e("p",[t._v("Указанные ниже главы руководства являются важнейшими:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://docs.unity3d.com/Manual/GettingStartedInstallingHub",target:"_blank",rel:"noopener noreferrer"}},[t._v("Установка Unity"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://docs.unity3d.com/Manual/GettingStarted",target:"_blank",rel:"noopener noreferrer"}},[t._v("Создание проектов"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://docs.unity3d.com/Manual/LearningtheInterface",target:"_blank",rel:"noopener noreferrer"}},[t._v("Интерфейс редактора"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://docs.unity3d.com/Manual/AssetStore",target:"_blank",rel:"noopener noreferrer"}},[t._v("Использование Asset Store"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://docs.unity3d.com/Manual/PublishingBuilds",target:"_blank",rel:"noopener noreferrer"}},[t._v("Публикация сборок"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("В случае, если вы не собираетесь создавать какой-либо пользовательский геймплей за пределами Naninovel, можете не углубляться в изучение информации о сценах, так как Naninovel позаботится об этом.")]),t._v(" "),e("h2",{attrs:{id:"основные-концепты"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#основные-концепты"}},[t._v("#")]),t._v(" Основные концепты")]),t._v(" "),e("p",[t._v("Прежде чем использовать Naninovel, давайте пробежимся по некоторым основным концептам.")]),t._v(" "),e("p",[t._v("Важнейшим из них, с которым вы постоянно будете сталкиваться в остальной части руководства, является "),e("em",[t._v("актор")]),t._v(". Актор – это объект, описываемый идентификатором (ID), внешностью, положением в пространстве (в сцене) и некоторыми другими параметрами.")]),t._v(" "),e("p",[t._v("Актор – абстрактный объект, который не может существовать непосредственно; вместо этого используются его специализированные типы с различными дополнительными параметрами:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Тип актора")]),t._v(" "),e("th",[t._v("Дополнительные параметры")]),t._v(" "),e("th",[t._v("Описание")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("RouterLink",{attrs:{to:"/ru/guide/characters.html"}},[t._v("Персонаж")])],1),t._v(" "),e("td",[t._v("Направление взгляда")]),t._v(" "),e("td",[t._v("Представляет персонажа в сцене.")])]),t._v(" "),e("tr",[e("td",[e("RouterLink",{attrs:{to:"/ru/guide/backgrounds.html"}},[t._v("Фон")])],1),t._v(" "),e("td",[t._v("Отсутствуют")]),t._v(" "),e("td",[t._v("Представляет фоновое изображение сцены; по умолчанию размещается за акторами персонажей.")])]),t._v(" "),e("tr",[e("td",[e("RouterLink",{attrs:{to:"/ru/guide/text-printers.html"}},[t._v("Текстовый принтер")])],1),t._v(" "),e("td",[t._v("Текст, ID персонажа, Процесс отображения")]),t._v(" "),e("td",[t._v("Постепенно проявляет (печатает) текстовое сообщение в течение некоторого времени.")])]),t._v(" "),e("tr",[e("td",[e("RouterLink",{attrs:{to:"/ru/guide/choices.html"}},[t._v("Обработчик выбора")])],1),t._v(" "),e("td",[t._v("Варианты выбора")]),t._v(" "),e("td",[t._v("Позволяет игроку выбрать один из доступных вариантов.")])])])]),t._v(" "),e("p",[t._v("Рассмотрим типичную сцену визуальной новеллы – с персонажем, изображенным поверх фона. В Naninovel она будет представлена следующим образом:")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/1d4d5130056f7d6acee978c5fde42cfc.gif",alt:""}})]),t._v(" "),e("p",[t._v('Теперь, предположим, вы хотите, чтобы персонаж "Kohaku" выглядел счастливым. У вас есть несколько текстур (изображений) этого персонажа, изображающих различные эмоции. В Naninovel такие текстуры называются "внешностью" актора. Чтобы получить желаемый результат, нужно изменить внешность актора персонажа. Точно так же для того, чтобы "MainBackground" отображал другой фон, необходимо изменить внешность актора фона.')]),t._v(" "),e("p",[t._v("Акторы и их параметры управляются (направляются) с помощью команд, указанных в "),e("RouterLink",{attrs:{to:"/ru/guide/naninovel-scripts.html"}},[t._v("скриптах Naninovel")]),t._v(".")],1),t._v(" "),e("p",[t._v("Ещё одним широко используемым концептом является "),e("RouterLink",{attrs:{to:"/ru/guide/user-interface.html"}},[t._v("пользовательский интерфейс")]),t._v(" (UI). UI используется игроком для взаимодействия с акторами и остальной игрой. Сюда входят различные меню (главное меню, сохранение-загрузка, настройки и т. д.) и панели управления (режим авточтения, пропуск текста и т. д.). Элементы пользовательского интерфейса по умолчанию располагаются поверх акторов.")],1),t._v(" "),e("p",[t._v("Текстовые принтеры и обработчики выбора рассматриваются и как акторы, и как элементы пользовательского интерфейса, то есть они имеют качества акторов и могут управляться с помощью скриптов Naninovel, и в то же время используются игроками для взаимодействия с игрой.")]),t._v(" "),e("p",[t._v("Если вы знакомы с программированием, взгляните на "),e("RouterLink",{attrs:{to:"/ru/guide/engine-architecture.html"}},[t._v("архитектуру движка")]),t._v(", чтобы понять, как он спроектирован с точки зрения программного обеспечения.")],1),t._v(" "),e("h2",{attrs:{id:"создание-нового-проекта-unity"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#создание-нового-проекта-unity"}},[t._v("#")]),t._v(" Создание нового проекта Unity")]),t._v(" "),e("p",[t._v("Итак, держа основные концепты в уме, начнем первоначальную настройку. Первое, что вам понадобится – проект Unity. Обратитесь к "),e("a",{attrs:{href:"https://docs.unity3d.com/Manual/GettingStarted",target:"_blank",rel:"noopener noreferrer"}},[t._v("руководству Unity"),e("OutboundLink")],1),t._v(", описывающему создание проекта.")]),t._v(" "),e("p",[t._v("При создании проекта вы, вероятно, захотите использовать шаблон "),e("code",[t._v("2D Template")]),t._v(", чтобы установить редактор в режим 2D проекта, благодаря чему изображения будут импортироваться по умолчанию как спрайты, и вам не придется вручную изменять настройки импорта. Вы можете изменить режим работы редактора позже, используя "),e("a",{attrs:{href:"https://docs.unity3d.com/Manual/2DAnd3DModeSettings.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("настройки проекта"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v('Когда вы создадите новый проект, Unity автоматически добавит пример сцены с двумя игровыми объектами в ней: "Main Camera" и "Directional Light". Naninovel полностью независим от сцены, поэтому вы можете удалить эти объекты из сцены, чтобы они не создавали ненужной производительной нагрузки. Вы также можете удалить саму сцену, хотя для корректной работы некоторых функций редактора рекомендуется иметь в проекте хотя бы одну сцену.')]),t._v(" "),e("h2",{attrs:{id:"установка-naninovel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#установка-naninovel"}},[t._v("#")]),t._v(" Установка Naninovel")]),t._v(" "),e("p",[t._v("Загрузите пакет Naninovel с помощью "),e("a",{attrs:{href:"https://docs.unity3d.com/Manual/AssetStore.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("окна Asset Store"),e("OutboundLink")],1),t._v(" и дождитесь начальной компиляции скриптов и импорта ассетов. Вы можете свободно перемещать папку 'Naninovel' в любое место в директории ассетов вашего проекта, если хотите.")]),t._v(" "),e("p",[t._v("В процессе использования Naninovel в папке 'Assets/NaninovelData' будет автоматически сгенерирован ряд ассетов (конфигурация, настройки, сохранения и т.д.). В отличие от папки пакета Naninovel, не стоит вручную перемещать папку данных (она будет автоматически перегенерирована). Если вы хотите изменить её расположение, измените свойство "),e("code",[t._v("Generated Data Path")]),t._v(" в меню конфигурации движка.")]),t._v(" "),e("h2",{attrs:{id:"добавnение-скрипта-naninovel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#добавnение-скрипта-naninovel"}},[t._v("#")]),t._v(" Добавление скрипта Naninovel")]),t._v(" "),e("p",[t._v("Воспользуйтесь контекстным меню ассетов "),e("code",[t._v("Create -> Naninovel -> Naninovel Script")]),t._v(" для создания ассета скрипта Naninovel.")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/be7677077abeb4f805979bd647d6d90e.png",alt:"Создание скрипта Naninovel"}})]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("ПРИМЕЧАНИЕ")]),t._v(" "),e("p",[t._v("Вы можете создавать и хранить скрипты Naninovel (а также все другие ресурсы Naninovel) в любой папке проекта и организовывать их по своему усмотрению, как и задавать им имена. Приведенная выше иллюстрация является лишь примером.")])]),t._v(" "),e("p",[t._v("Скрипты Naninovel – это текстовые документы (с расширением "),e("code",[t._v(".nani")]),t._v(") где вы контролируете происходящее в сцене. Вы можете открывать их и редактировать с помощью любого текстового редактора на ваш выбор, например Notepad, TextEdit или "),e("a",{attrs:{href:"https://atom.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Atom"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/f552c2ef323f9ec1171eba72e0c55432.png",alt:"Открытие скрипта Naninovel"}})]),t._v(" "),e("p",[t._v("Вы также можете использовать визуальный редактор скриптов для редактирования скриптов Naninovel. Выберите созданный скрипт, и вы увидите, что визуальный редактор автоматически откроется в окне инспектора.")]),t._v(" "),e("p",[e("video",{staticClass:"video",attrs:{loop:"",autoplay:"",muted:""},domProps:{muted:!0}},[e("source",{attrs:{src:"https://i.gyazo.com/ba57b9f78116e57408125325bdf66be9.mp4",type:"video/mp4"}})])]),t._v(" "),e("p",[t._v("Чтобы добавить новую строку в скрипт, щелкните правой кнопкой мыши в месте, куда вы хотите вставить строку, либо нажмите "),e("code",[t._v("Ctrl+Space")]),t._v(' (вы можете изменить стандартные комбинации клавиш в меню конфигурации ввода) и выберите нужную строку или тип команды. Чтобы изменить порядок строк, перетащите их, используя их номерные метки. Чтобы удалить строку, нажмите на неё правой кнопкой мыши и выберите "Удалить".')]),t._v(" "),e("p",[t._v("После изменения скрипта с помощью визуального редактора вы увидите звездочку ("),e("code",[t._v("*")]),t._v(") над именем сценария в шапке инспектора. Это означает, что ассет изменён и должен быть сохранен; нажмите "),e("code",[t._v("Ctrl+S")]),t._v(", чтобы сохранить внесённые изменения. Если вы попытаетесь выбрать другой ассет, не сохранив изменения в скрипте, появится диалоговое окно, позволяющее либо сохранить, либо отменить изменения.")]),t._v(" "),e("p",[t._v("Визуальный редактор автоматически синхронизирует редактируемый скрипт при его обновлении извне, так что вы можете легко работать со сценариями как в текстовых, так и в визуальных редакторах.")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("ПРИМЕЧАНИЕ")]),t._v(" "),e("p",[t._v("В остальной части этого руководства мы будем использовать текстовый редактор, но вы можете повторить все те же шаги в визуальном редакторе, если хотите.")])]),t._v(" "),e("p",[t._v('Для того, чтобы ассет Naninovel (например, созданный вами скрипт) стал "видимым" для движка, он должен быть назначен ресурсом проекта. При создании с помощью меню создания ассетов скрипты назначаются автоматически. Чтобы назначить (или отредактировать/удалить) файл скрипта вручную, используйте окно скриптовых ресурсов, доступное в меню редактора '),e("code",[t._v("Naninovel -> Resources -> Scripts")]),t._v(". Чтобы добавить скрипт, нажмите кнопку "),e("code",[t._v("+")]),t._v(" (знак плюс) в списке, чтобы добавить новую строку, и перетащите файл скрипта в неё. Кроме того, можно перетащить несколько выделенных ассетов или даже целые папки в список, чтобы добавить их группой.")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/b3281a145ba54e6cb6cbdaa478ea894d.png",alt:"Добавление скрипта Naninovel"}})]),t._v(" "),e("p",[t._v("Откройте созданный скрипт в текстовом редакторе и добавьте следующий текст:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Hello World!\n@stop\n")])])]),e("p",[t._v('Первая строка выведет текст "Hello World!" при запуске игры, а вторая требуется для корректной остановки выполнения скрипта.')]),t._v(" "),e("p",[t._v("Войдите в режим воспроизведения и начните новую игру, чтобы увидеть результат.")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("ПРИМЕЧАНИЕ")]),t._v(" "),e("p",[t._v("Все доступные встроенные команды скрипта, поддерживаемые параметры и примеры использования приведены в "),e("RouterLink",{attrs:{to:"/ru/api/"}},[t._v("справочнике по API")]),t._v(". Кроме того, можно добавить пользовательские команды; дополнительную информацию смотрите в "),e("RouterLink",{attrs:{to:"/ru/guide/custom-commands.html"}},[t._v("руководстве")]),t._v(".")],1)]),t._v(" "),e("p",[t._v('Если кнопка "НОВАЯ ИГРА" в главном меню неактивна, убедитесь, что свойство '),e("code",[t._v("Start Game Script")]),t._v(" в настройках скриптов ("),e("code",[t._v("Naninovel -> Configuration -> Scripts")]),t._v(") равно имени созданного скрипта. Свойство заполняется автоматически при создании первого скрипта через меню создания ассетов, но может не сработать, если вы скопируете в проект уже существующий скрипт.")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/47e34c913994a5b3e88d8f30d5127b7b.png",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"добавnение-персонажа"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#добавnение-персонажа"}},[t._v("#")]),t._v(" Добавление персонажа")]),t._v(" "),e("p",[t._v("Персонажи в Naninovel могут быть основаны на обычных и нарезанных спрайтах, анимированных моделях Live2D и 3D-моделях; вы также можете добавить свои собственные варианты реализации. В этом туториале мы будем использовать спрайты.")]),t._v(" "),e("p",[t._v("Каждый персонаж представлен ID и набором вариантов внешности. Чтобы добавить персонажа, используйте графический интерфейс менеджера персонажей, доступный через меню "),e("code",[t._v("Naninovel -> Resources -> Characters")]),t._v(", добавьте новую строку актора персонажа, указав ее ID, затем дважды щелкните по ней (или нажмите кнопку в конце строки) и добавьте все варианты спрайта в список "),e("code",[t._v("Resources")]),t._v(". Как и в случае со скриптами Naninovel, вы можете перетащить в список сразу несколько ассетов и папок.")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/0c1e81ea1a20165c1bf88854df177b7f.png",alt:"Создание персонажа"}})]),t._v(" "),e("p",[t._v('Предположим, что ID созданного персонажа – "Kohaku". Отредактируйте скрипт Naninovel, чтобы показать добавленного персонажа:')]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("@char Kohaku\nHello World!\n@stop\n")])])]),e("p",[t._v('Запустите игру, и вы увидите спрайт персонажа в центре экрана. Если вы не укажете внешность, то по умолчанию будет выбрана либо та, имя которой равно ID персонажа, либо внешность с названием "Default". Чтобы выбрать определенную внешность, добавьте её название после ID персонажа, разделив их точкой, как здесь:')]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("@char Kohaku.Happy\nHello World!\n@stop\n")])])]),e("p",[t._v('Так как персонажу "Kohaku" была выбрана внешность под названием "Happy", соответствующий спрайт будет отображен вместо стандартного.')]),t._v(" "),e("p",[t._v("Теперь вы можете связать выводимый текст с именем персонажа, добавив его ID, а затем двоеточие перед текстом:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("@char Kohaku.Happy\nKohaku: Hello World!\n@stop\n")])])]),e("p",[t._v("Кроме того, можно объединить объявление внешности персонажа с выводом текстом, чтобы сократить код:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Kohaku.Happy: Hello World!\n@stop\n")])])]),e("p",[t._v("Чтобы скрыть (удалить из сцены) персонажа (или любой другой актор, например, фон, текстовый принтер и т. д.), используйте команду "),e("a",{attrs:{href:"/api/#hide",target:"_blank"}},[e("code",[t._v("@hide")])]),t._v(", за которой следует ID актора:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Kohaku.Happy: Hello World!\n@hide Kohaku\n@stop\n")])])]),e("h2",{attrs:{id:"добавnение-фона"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#добавnение-фона"}},[t._v("#")]),t._v(" Добавление фона")]),t._v(" "),e("p",[t._v("Подобно персонажам, фон в Naninovel может быть представлен несколькими способами: спрайт, простой объект, видео и сцена; также возможны пользовательские реализации.")]),t._v(" "),e("p",[t._v("Вы можете создать несколько независимых акторов фона, хотя в типичной визуальной новелле обычно используется только один, меняется лишь его внешность. Чтобы упростить процедуру, актор "),e("code",[t._v("MainBackground")]),t._v(" по умолчанию добавляется в список акторов фона, и вам не нужно указывать его ID каждый раз, чтобы изменить его внешность в скриптах Naninovel.")]),t._v(" "),e("p",[t._v("Добавьте фоновые спрайты через меню "),e("code",[t._v("Naninovel -> Resources -> Backgrounds")]),t._v(". Строка "),e("code",[t._v("MainBackground")]),t._v(" откроется автоматически, но вы все равно можете вернуться в список акторов и создать другие, если потребуется.")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/98e88780625c7f2e1ef88db7ef10d1f4.png",alt:"Добавление фона"}})]),t._v(" "),e("p",[t._v('Предположим, что добавленная внешность спрайта фона называется "City". Чтобы отобразить фон, используйте команду '),e("a",{attrs:{href:"/api/#back",target:"_blank"}},[e("code",[t._v("@back")])]),t._v(", за которой следует название внешности фона:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("@back City \n")])])]),e("p",[t._v("При переключении между фонами по умолчанию будет использоваться кроссфейд "),e("RouterLink",{attrs:{to:"/ru/guide/transition-effects.html"}},[t._v("эффект перехода")]),t._v(". Чтобы сменить эффект, укажите тип перехода после внешности:")],1),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("@back City \n@back School.RadialBlur\n")])])]),e("p",[t._v('Это позволит перейти от фона "City" к фону "School", используя эффект перехода "RadialBlur".')]),t._v(" "),e("p",[t._v('Чтобы обратиться к фону, отличному от основного (например, если вы хотите создать несколько фонов поверх друг друга), укажите ID актора. Например, если фоновый актор с ID "Flower" существует отдельно от основного, следующие команды изменят его внешность на "Bloomed", а затем на "Withered":')]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("@back Flower id:Flower\n@back Withered id:Flower\n")])])]),e("h2",{attrs:{id:"добавnение-музыки-и-звуковых-эффектов"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#добавnение-музыки-и-звуковых-эффектов"}},[t._v("#")]),t._v(" Добавление музыки и звуковых эффектов")]),t._v(" "),e("p",[t._v("Чтобы добавить ассет BGM (фоновая музыка) или SFX (звуковой эффект), используйте меню редактора "),e("code",[t._v("Naninovel -> Resources -> Audio")]),t._v(". Вы можете использовать любые аудиоформаты, "),e("a",{attrs:{href:"https://docs.unity3d.com/Manual/AudioFiles.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("поддерживаемые Unity"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/cacdec36623dbbfcf9f49c594de53c0f.png",alt:"Управление аудио"}})]),t._v(" "),e("p",[t._v('Допустим, вы добавили BGM трек под названием "ThePromenade". Для воспроизведения этого трека в качестве фоновой музыки используйте команду '),e("a",{attrs:{href:"/api/#bgm",target:"_blank"}},[e("code",[t._v("@bgm")])]),t._v(", за которой следует название трека:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("@bgm ThePromenade\n")])])]),e("p",[t._v("Эффект кроссфейда будет автоматически применен при смене музыкального трека. Музыка по умолчанию будет зациклена, но вы можете изменить это, как и громкость, и длительность затухания с помощью параметров команды.")]),t._v(" "),e("p",[t._v('Напротив, звуковые эффекты по умолчанию не будут зациклены. Предположим, вы добавили SFX с названием "Explosion" – используйте команду '),e("a",{attrs:{href:"/api/#sfx",target:"_blank"}},[e("code",[t._v("@sfx")])]),t._v(", чтобы воспроизвести его:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("@sfx Explosion\n")])])]),e("h2",{attrs:{id:"видеогайд"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#видеогайд"}},[t._v("#")]),t._v(" Видеогайд")]),t._v(" "),e("p",[t._v("Если вы предпочитаете видеогайды, то здесь вы можете найти таковой, иллюстрирующий вышеприведенные инструкции.")]),t._v(" "),e("p"),e("div",{staticClass:"video-container"},[e("iframe",{attrs:{src:"https://www.youtube-nocookie.com/embed/wFil5vje3NE",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),e("p"),t._v(" "),e("h2",{attrs:{id:"демо-проект"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#демо-проект"}},[t._v("#")]),t._v(" Демо-проект")]),t._v(" "),e("p",[t._v("Полные исходники демо-проекта (того же, что демонстрировался в магазине) доступны на GitHub здесь: "),e("a",{attrs:{href:"https://github.com/Elringus/NaninovelDemo",target:"_blank",rel:"noopener noreferrer"}},[t._v("github.com/Elringus/NaninovelDemo"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("Вы можете "),e("a",{attrs:{href:"https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository",target:"_blank",rel:"noopener noreferrer"}},[t._v("клонировать репозиторий с помощью клиента Git"),e("OutboundLink")],1),t._v(" или "),e("a",{attrs:{href:"https://github.com/Elringus/NaninovelDemo/archive/master.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("скачать его в виде zip-архива"),e("OutboundLink")],1),t._v(". Обратите внимание на то, что ресурсы, распространяемые вместе с демо-проектом, могут быть предметами пользовательских лицензий и предоставляться исключительно в учебных целях.")]),t._v(" "),e("div",{staticClass:"custom-block warn"},[e("p",{staticClass:"custom-block-title"},[t._v("ВНИМАНИЕ")]),t._v(" "),e("p",[t._v("Пакет Naninovel не распространяется вместе с проектом, а значит, при первом его открытии могут появиться ошибки компиляции; импортируйте Naninovel из хранилища ассетов, чтобы решить эту проблему.")])])])}),[],!1,null,null,null);a.default=n.exports}}]);