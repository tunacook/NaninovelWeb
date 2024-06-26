# Аудио

В данной статье рассматриваются фоновая музыка (BGM) и звуковые эффекты (SFX); для голосов см. [руководство по озвучиванию](/ru/guide/voicing).

Чтобы добавить, отредактировать или удалить ресурсы BGM и SFX, используйте диспетчер аудиоресурсов, доступный через `Naninovel -> Resources -> Audio`. Вы можете использовать любые аудиоформаты, [поддерживаемые Unity](https://docs.unity3d.com/Manual/AudioFiles.html).

![](https://i.gyazo.com/cacdec36623dbbfcf9f49c594de53c0f.png)

Если у вас много аудиофайлов и их неудобно назначать через меню редактора, можно просто поместить их в папку `Resources/Naninovel/Audio`, и они автоматически будут доступны в скриптах. Вы можете дополнительно организовать их с помощью вложенных папок, если хотите; в этом случае используйте слеш (`/`) при ссылке на них в скриптах naninovel. Например, аудиоклип по адресу: `Resources/Naninovel/Audio/Music/Ambient/Noise002.wav` можно объявить в скрипте как `Music/Ambient/Noise002`.

Также можно использовать [систему адресируемых ассетов](/ru/guide/resource-providers#адресация ), чтобы вручную распределить ресурсы. Чтобы предоставить доступ к ассету, назначьте адрес, равный пути, который вы использовали бы для его объявления с помощью метода, описанного выше, за исключением опущенной части "Resources/". Например, для объявления BGM "MainTheme.wav" назначьте ассету следующий адрес:`Naninovel/Audio/MainTheme`. Имейте в виду, что адресируемый провайдер по умолчанию не используется в редакторе; вы можете разрешить его, включив свойство `Enable Addressable In Editor` в меню конфигурации провайдера ресурсов.

::: warning
Ассеты аудио, не объявленные через диспетчер ресурсов, не будут доступны в различных выпадающих меню редактора, как например, в том, что используется для выбора `Message Sound` для актора персонажа.
:::

Поведение воспроизводимого звука можно настроить с помощью контекстного меню `Naninovel -> Configuration -> Audio`; доступные параметры см. в разделе [Руководство по конфигурации](/ru/guide/configuration#аудио).

## Фоновая музыка

Используйте команду [@bgm], за которой следует название трека, чтобы управлять воспроизведением музыки в скриптах Naninovel:

```nani
; Начать проигрывать зацикленный трек с названием `Sanctuary`
@bgm Sanctuary

; То же самое, что выше, но в начале используется фейд в 10 секунд, и трек проигрывается только один раз
@bgm Sanctuary fade:10 loop:false

; Изменить громкость всех воспроизводимых музыкальных треков до 50% за 2,5 секунды и зациклить их
@bgm volume:0.5 loop:true time:2.5
```

Музыкальные треки по умолчанию зациклены. Если название трека не указано в команде [@bgm], то командой будут затронуты все проигрываемые в данный момент треки. При вызове трека, который уже воспроизводится, воспроизведение не будет затронуто (трек не начнет воспроизводиться с самого начала), но будут применены указанные параметры (громкость, зацикливание).

Можно воспроизвести вступление трека, за которым следует зацикленная часть, используя параметр `intro`, например:

```nani
; Проиграть `BattleThemeIntro` один раз, а затем сразу же зацикленный `BattleThemeMain`.
@bgm BattleThemeMain intro:BattleThemeIntro
```

Чтобы остановить воспроизведение музыки, используйте команду [@stopBgm], за которой следует название трека. Если название трека не указано, команда остановит все воспроизводимые в данный момент треки.

```nani
; Затухание трека `Promenade` в течение 10 секунд и остановка воспроизведения
@stopBgm Promenade fade:10

; Остановить все играющие в данный момент музыкальные треки
@stopBgm
```

## Звуковые эффекты

Используйте команды [@sfx] и [@stopSfx], за которыми следует название клипа, чтобы управлять воспроизведением звуковых эффектов в сценариях Naninovel:

```nani
; Однократно воспроизвести SFX под названием `Explosion`
@sfx Explosion

; Зацикленно воспроизводить SFX `Rain`
@sfx Rain loop:true

; Изменить громкость всех воспроизводимых треков SFX до 75% за 2,5 секунды и отключает зацикливание для всех них
@sfx volume:0.75 loop:false time:2.5
```

Треки звуковых эффектов по умолчанию  не зациклены. Если название трека не указано в команде [@sfx], то командой будут затронуты все проигрываемые в данный момент треки. При вызове трека, который уже воспроизводится, воспроизведение не будет затронуто (трек не начнет воспроизводиться с самого начала), но будут применены указанные параметры (громкость, зацикливание).

Чтобы остановить воспроизведение звукового эффекта (вне зависимости, зациклен тот или нет), используйте команду [@stopSfx], за которой следует название трека. Если название трека не указано, команда остановит все воспроизводимые в данный момент треки.

```nani
; Затухание и остановка трека `Rain` в течение 15 секунд
@stopSfx Rain fade:15

; Остановить все играющие в данный момент треки звуковых эффектов
@stopSfx
```

## Аудиомикшер

Naninovel использует ассет [аудиомикшера](https://docs.unity3d.com/Manual/AudioMixer.html) при воспроизведении аудио для разделения каналов BGM, SFX и голосовой озвучки.

![](https://i.gyazo.com/6271d59ee9ac63a0a218316bd3bc78a8.png)

В меню конфигурации аудио можно назначить пользовательский ассет микшера, изменить группы, используемые для каждого аудиоканала, и контроллеры регулировки громкости (имена открытых параметров). Если пользовательские ассеты микшера не назначены, то по умолчанию будет использоваться стандартный.

![](https://i.gyazo.com/ef2db68edb871608d1718117a37e9486.png)

Чтобы воспроизвести звук через пользовательскую группу в микшере, укажите путь к группе параметром `group`, доступным в командах [@bgm], [@sfx] и [@voice].

```nani
; Воспроизвести зацикленное аудио `Noise` через группу микшера `Master/Ambient`.
@sfx Noise loop:true group:Master/Ambient

; Воспроизвести голосовое аудио `ScaryVoice` через группу микшера `Master/Reverb`.
@voice ScaryVoice group:Master/Reverb
```

Группы извлекаются с помощью метода `FindMatchingGroups(groupPath)` текущего назначенного ассета аудиомикшера; см. [документацию Unity](https://docs.unity3d.com/ScriptReference/Audio.AudioMixer.FindMatchingGroups) для получения дополнительной информации об ожидаемом формате пути. В случае, если несколько групп связаны с предоставленным путем, использоваться для воспроизведения звука будет первая из них.

В скриптах C# используемый в настоящее время аудиомикшер можно получить с помощью [сервиса движка](/ru/guide/engine-services) `IAudioManager`.

```csharp
var audioManager = Engine.GetService<IAudioManager>();
var audioMixer = audioManager.AudioMixer;
```
