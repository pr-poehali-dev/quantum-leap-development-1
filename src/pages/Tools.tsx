import { useState, useRef } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import Icon from "@/components/ui/icon"

// ─── Text Generator ───────────────────────────────────────────────────────────
function TextTool() {
  const [prompt, setPrompt] = useState("")
  const [type, setType] = useState("post")
  const [tone, setTone] = useState("friendly")
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)

  const examples: Record<string, string> = {
    post: "Напиши пост для Instagram о пользе утренней зарядки. Аудитория — молодые профессионалы 25-35 лет.",
    article: "Напиши статью о трендах контент-маркетинга в 2025 году, 1000 слов, с подзаголовками.",
    email: "Напиши email-рассылку для запуска нового продукта — ИИ-платформы для создания контента.",
    script: "Напиши сценарий YouTube-видео о том, как ИИ меняет работу маркетологов, длительность 5 минут.",
    product: "Напиши описание беспроводных наушников с активным шумоподавлением для маркетплейса.",
  }

  const simulate = () => {
    if (!prompt.trim()) return
    setLoading(true)
    setResult("")
    setTimeout(() => {
      const samples: Record<string, string> = {
        post: `✨ Утро решает всё!\n\nЕсли хочешь быть продуктивным весь день — начни с 15 минут зарядки. Без переговоров с собой, без "завтра". Просто вставай и делай.\n\n💡 3 упражнения, которые изменят твоё утро:\n→ Планка 60 секунд\n→ 20 приседаний\n→ Растяжка 5 минут\n\nПопробуй неделю — и напиши в комментариях, что изменилось 👇\n\n#утро #продуктивность #зарядка #здоровье #мотивация`,
        article: `# Тренды контент-маркетинга в 2025 году\n\nКонтент-маркетинг стремительно меняется под влиянием ИИ-технологий, новых пользовательских привычек и алгоритмов платформ.\n\n## 1. ИИ-генерация как стандарт\nБолее 80% компаний уже используют ИИ для создания первичных черновиков контента. Главное преимущество — скорость: то, что раньше занимало день, теперь делается за час.\n\n## 2. Короткое видео доминирует\nReels, Shorts, TikTok — форматы до 60 секунд генерируют в 3 раза больше органического охвата, чем длинные видео...\n\n## 3. Персонализация на уровне сегментов\nАудитории ждут контента, который говорит именно с ними...`,
        email: `Тема: Представляем Content AI — ваш новый творческий партнёр 🚀\n\nПривет!\n\nМы рады сообщить о запуске Content AI — платформы, которая генерирует тексты, музыку и видео по одному описанию.\n\n🎯 Что вы получаете:\n• Статьи и посты за 30 секунд\n• Музыкальные треки в любом жанре\n• Видеоклипы под вашу музыку\n\nПервые 10 000 символов — бесплатно. Без карты.\n\n→ Начать бесплатно\n\nС уважением,\nКоманда Content AI`,
        script: `[ВСТУПЛЕНИЕ — 0:00-0:30]\nВы тратите часы на создание одного поста? Что если я скажу, что ИИ может сделать это за 10 секунд?\n\n[ОСНОВНАЯ ЧАСТЬ — 0:30-4:00]\nСегодня разберём, как ИИ меняет профессию маркетолога...\n\n[ДЕМО — 2:00-3:30]\nПоказываю на экране: ввожу запрос, получаю готовый пост...\n\n[ПРИЗЫВ К ДЕЙСТВИЮ — 4:00-5:00]\nЕсли хочешь попробовать — ссылка в описании. Ставь лайк, если было полезно!`,
        product: `**Беспроводные наушники SoundPro X5 с активным шумоподавлением**\n\nПогрузитесь в чистый звук без лишнего шума. Технология ANC Pro блокирует до 98% внешних звуков — идеально для офиса, транспорта и путешествий.\n\n🔊 Характеристики:\n• 40 часов автономной работы\n• Быстрая зарядка: 10 мин = 3 часа музыки\n• Кодек LDAC — качество Hi-Res Audio\n• Мягкие амбушюры с памятью формы\n\n✈️ Создано для тех, кто ценит тишину и качество.`,
      }
      setResult(samples[type] || samples.post)
      setLoading(false)
    }, 1800)
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-gray-400 mb-2 block">Тип контента</label>
          <Select value={type} onValueChange={setType}>
            <SelectTrigger className="bg-white/5 border-white/10 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="post">Пост для соцсетей</SelectItem>
              <SelectItem value="article">Статья / блог</SelectItem>
              <SelectItem value="email">Email-рассылка</SelectItem>
              <SelectItem value="script">Сценарий видео</SelectItem>
              <SelectItem value="product">Описание товара</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-sm text-gray-400 mb-2 block">Тон</label>
          <Select value={tone} onValueChange={setTone}>
            <SelectTrigger className="bg-white/5 border-white/10 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="friendly">Дружелюбный</SelectItem>
              <SelectItem value="professional">Профессиональный</SelectItem>
              <SelectItem value="humorous">Юмористический</SelectItem>
              <SelectItem value="serious">Серьёзный</SelectItem>
              <SelectItem value="motivational">Мотивирующий</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <label className="text-sm text-gray-400 mb-2 block">Ваш запрос</label>
        <Textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder={examples[type]}
          className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 min-h-[120px] resize-none"
        />
      </div>

      <Button
        onClick={simulate}
        disabled={loading || !prompt.trim()}
        className="bg-red-500 hover:bg-red-600 text-white w-full py-3"
      >
        {loading ? (
          <span className="flex items-center gap-2"><Icon name="Loader2" size={16} className="animate-spin" /> Генерирую...</span>
        ) : (
          <span className="flex items-center gap-2"><Icon name="Sparkles" size={16} /> Сгенерировать</span>
        )}
      </Button>

      {result && (
        <div className="bg-white/5 border border-white/10 rounded-xl p-5 relative">
          <div className="flex items-center justify-between mb-3">
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Готово</Badge>
            <button
              onClick={() => { navigator.clipboard.writeText(result) }}
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 text-sm"
            >
              <Icon name="Copy" size={14} /> Копировать
            </button>
          </div>
          <pre className="text-gray-200 text-sm leading-relaxed whitespace-pre-wrap font-space-mono">{result}</pre>
        </div>
      )}
    </div>
  )
}

// ─── Social Media Tool ────────────────────────────────────────────────────────
function SocialTool() {
  const [platform, setPlatform] = useState("instagram")
  const [topic, setTopic] = useState("")
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<{ platform: string; content: string }[]>([])

  const platforms = [
    { value: "instagram", label: "Instagram", icon: "Camera" },
    { value: "vk", label: "VK", icon: "Users" },
    { value: "telegram", label: "Telegram", icon: "Send" },
    { value: "tiktok", label: "TikTok", icon: "Music2" },
    { value: "all", label: "Все платформы", icon: "Globe" },
  ]

  const simulate = () => {
    if (!topic.trim()) return
    setLoading(true)
    setResults([])
    setTimeout(() => {
      const generated = platform === "all"
        ? [
            { platform: "Instagram", content: `🌟 ${topic}\n\nЭто то, о чём все говорят прямо сейчас. Поделитесь своим мнением в комментариях!\n\n#тренд #контент #новости` },
            { platform: "VK", content: `Друзья, сегодня поговорим о важном — ${topic}.\n\nЧто думаете? Голосуйте ниже 👇` },
            { platform: "Telegram", content: `**${topic}**\n\nКороткий разбор для тех, кто не в теме:\n→ Что происходит\n→ Почему важно\n→ Что делать` },
            { platform: "TikTok", content: `POV: ты узнал про ${topic} 😮\n\nЧасть 1 из 3 — сохраняй, чтобы не потерять!\n#fyp #вирус #тренд2025` },
          ]
        : [{ platform: platforms.find(p => p.value === platform)?.label || platform, content: `✨ ${topic}\n\nГотовый контент адаптирован под формат ${platform}.\n\nВзаимодействуйте с аудиторией — задайте вопрос в конце!\n\n#контент #маркетинг #${platform}` }]
      setResults(generated)
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="text-sm text-gray-400 mb-3 block">Платформа</label>
        <div className="flex flex-wrap gap-2">
          {platforms.map((p) => (
            <button
              key={p.value}
              onClick={() => setPlatform(p.value)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border ${
                platform === p.value
                  ? "bg-red-500 border-red-500 text-white"
                  : "border-white/10 text-gray-400 hover:border-red-500/40 hover:text-white"
              }`}
            >
              <Icon name={p.icon} size={14} fallback="Hash" />
              {p.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-sm text-gray-400 mb-2 block">Тема или идея поста</label>
        <Textarea
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Например: запуск нового продукта, советы по утренней рутине, анонс акции..."
          className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 min-h-[100px] resize-none"
        />
      </div>

      <Button onClick={simulate} disabled={loading || !topic.trim()} className="bg-red-500 hover:bg-red-600 text-white w-full py-3">
        {loading ? (
          <span className="flex items-center gap-2"><Icon name="Loader2" size={16} className="animate-spin" /> Создаю посты...</span>
        ) : (
          <span className="flex items-center gap-2"><Icon name="Share2" size={16} /> Создать контент</span>
        )}
      </Button>

      {results.length > 0 && (
        <div className="space-y-4">
          {results.map((r, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <Badge className="bg-red-500/20 text-red-400 border-red-500/30">{r.platform}</Badge>
                <button onClick={() => navigator.clipboard.writeText(r.content)} className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 text-sm">
                  <Icon name="Copy" size={14} /> Копировать
                </button>
              </div>
              <pre className="text-gray-200 text-sm leading-relaxed whitespace-pre-wrap font-space-mono">{r.content}</pre>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Music Generator ──────────────────────────────────────────────────────────
function MusicTool() {
  const [genre, setGenre] = useState("pop")
  const [mood, setMood] = useState("energetic")
  const [duration, setDuration] = useState([30])
  const [description, setDescription] = useState("")
  const [loading, setLoading] = useState(false)
  const [generated, setGenerated] = useState(false)

  const genres = ["Pop", "Rock", "Electronic", "Jazz", "Hip-Hop", "Ambient", "Classical", "R&B"]
  const moods = ["Energetic", "Chill", "Romantic", "Dramatic", "Happy", "Melancholic"]

  const simulate = () => {
    if (!description.trim()) return
    setLoading(true)
    setGenerated(false)
    setTimeout(() => {
      setLoading(false)
      setGenerated(true)
    }, 3000)
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-gray-400 mb-2 block">Жанр</label>
          <div className="flex flex-wrap gap-2">
            {genres.map((g) => (
              <button
                key={g}
                onClick={() => setGenre(g.toLowerCase())}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200 ${
                  genre === g.toLowerCase()
                    ? "bg-red-500 border-red-500 text-white"
                    : "border-white/10 text-gray-400 hover:border-red-500/40 hover:text-white"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="text-sm text-gray-400 mb-2 block">Настроение</label>
          <div className="flex flex-wrap gap-2">
            {moods.map((m) => (
              <button
                key={m}
                onClick={() => setMood(m.toLowerCase())}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200 ${
                  mood === m.toLowerCase()
                    ? "bg-red-500 border-red-500 text-white"
                    : "border-white/10 text-gray-400 hover:border-red-500/40 hover:text-white"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div>
        <label className="text-sm text-gray-400 mb-2 block">Длительность: {duration[0]} сек</label>
        <Slider value={duration} onValueChange={setDuration} min={15} max={180} step={15} className="w-full" />
        <div className="flex justify-between text-xs text-gray-600 mt-1">
          <span>15 сек</span><span>3 мин</span>
        </div>
      </div>

      <div>
        <label className="text-sm text-gray-400 mb-2 block">Опишите трек</label>
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Например: вдохновляющая мелодия для утреннего подкаста, без слов, с фортепиано и лёгкими ударными..."
          className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 min-h-[100px] resize-none"
        />
      </div>

      <Button onClick={simulate} disabled={loading || !description.trim()} className="bg-red-500 hover:bg-red-600 text-white w-full py-3">
        {loading ? (
          <span className="flex items-center gap-2"><Icon name="Loader2" size={16} className="animate-spin" /> Создаю музыку...</span>
        ) : (
          <span className="flex items-center gap-2"><Icon name="Music" size={16} /> Сгенерировать трек</span>
        )}
      </Button>

      {generated && (
        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Трек готов</Badge>
            <span className="text-gray-400 text-sm">{genre} · {mood} · {duration[0]}с</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center flex-shrink-0">
              <Icon name="Music2" size={20} className="text-red-400" />
            </div>
            <div className="flex-1">
              <div className="text-white font-medium mb-1">AI Generated Track</div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-red-500 to-red-300 w-0 animate-pulse rounded-full" style={{ width: "45%" }} />
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>0:00</span><span>0:{duration[0]}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center hover:bg-red-600 transition-colors">
                <Icon name="Play" size={16} className="text-white" />
              </button>
              <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-red-500/40 transition-colors">
                <Icon name="Download" size={16} className="text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Music Video Tool ─────────────────────────────────────────────────────────
function ClipTool() {
  const [style, setStyle] = useState("cinematic")
  const [prompt, setPrompt] = useState("")
  const [loading, setLoading] = useState(false)
  const [generated, setGenerated] = useState(false)
  const [progress, setProgress] = useState(0)

  const styles = [
    { value: "cinematic", label: "Кинематографический" },
    { value: "anime", label: "Аниме / Рисованный" },
    { value: "abstract", label: "Абстрактный" },
    { value: "retro", label: "Ретро / Винтаж" },
    { value: "neon", label: "Неон / Киберпанк" },
    { value: "nature", label: "Природа / Пейзажи" },
  ]

  const simulate = () => {
    if (!prompt.trim()) return
    setLoading(true)
    setGenerated(false)
    setProgress(0)
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(interval); setLoading(false); setGenerated(true); return 100 }
        return p + 5
      })
    }, 200)
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="text-sm text-gray-400 mb-3 block">Визуальный стиль клипа</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {styles.map((s) => (
            <button
              key={s.value}
              onClick={() => setStyle(s.value)}
              className={`px-3 py-2.5 rounded-lg text-sm font-medium border transition-all duration-200 text-left ${
                style === s.value
                  ? "bg-red-500/20 border-red-500 text-red-400"
                  : "border-white/10 text-gray-400 hover:border-red-500/30 hover:text-white"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-sm text-gray-400 mb-2 block">Описание клипа или загрузите аудио</label>
        <Textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Например: динамичный клип для рок-трека с видами ночного города, быстрый монтаж, неоновые огни..."
          className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 min-h-[100px] resize-none"
        />
      </div>

      <div className="border border-dashed border-white/20 rounded-xl p-6 text-center hover:border-red-500/40 transition-colors cursor-pointer">
        <Icon name="Upload" size={28} className="text-gray-500 mx-auto mb-2" />
        <p className="text-gray-400 text-sm">Загрузить аудио для клипа</p>
        <p className="text-gray-600 text-xs mt-1">MP3, WAV, FLAC до 50 МБ</p>
      </div>

      <Button onClick={simulate} disabled={loading || !prompt.trim()} className="bg-red-500 hover:bg-red-600 text-white w-full py-3">
        {loading ? (
          <span className="flex items-center gap-2"><Icon name="Loader2" size={16} className="animate-spin" /> Рендерю клип... {progress}%</span>
        ) : (
          <span className="flex items-center gap-2"><Icon name="Clapperboard" size={16} /> Создать клип</span>
        )}
      </Button>

      {loading && (
        <div className="space-y-2">
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-red-500 to-red-300 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
          <p className="text-gray-500 text-xs text-center">ИИ генерирует визуальный ряд и монтирует клип...</p>
        </div>
      )}

      {generated && (
        <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
          <div className="aspect-video bg-gradient-to-br from-gray-900 to-black flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-purple-900/20" />
            <div className="text-center z-10">
              <Icon name="Play" size={48} className="text-white/70 mx-auto mb-2" />
              <p className="text-gray-400 text-sm">Клип готов к просмотру</p>
            </div>
          </div>
          <div className="p-4 flex items-center justify-between">
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Готово · {style}</Badge>
            <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
              <Icon name="Download" size={14} /> Скачать MP4
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Voice Song Tool ──────────────────────────────────────────────────────────
function VoiceTool() {
  const [mode, setMode] = useState<"record" | "upload">("record")
  const [isRecording, setIsRecording] = useState(false)
  const [recordTime, setRecordTime] = useState(0)
  const [hasVoice, setHasVoice] = useState(false)
  const [genre, setGenre] = useState("pop")
  const [lyrics, setLyrics] = useState("")
  const [loading, setLoading] = useState(false)
  const [generated, setGenerated] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<string | null>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  const startRecording = () => {
    setIsRecording(true)
    setRecordTime(0)
    timerRef.current = setInterval(() => setRecordTime((t) => t + 1), 1000)
  }

  const stopRecording = () => {
    setIsRecording(false)
    if (timerRef.current) clearInterval(timerRef.current)
    if (recordTime > 1) setHasVoice(true)
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setUploadedFile(file.name)
      setHasVoice(true)
    }
  }

  const simulate = () => {
    if (!hasVoice) return
    setLoading(true)
    setGenerated(false)
    setTimeout(() => { setLoading(false); setGenerated(true) }, 3500)
  }

  const genres = ["Pop", "R&B", "Rock", "Soul", "Electronic", "Folk"]

  return (
    <div className="space-y-6">
      <div className="flex gap-2 p-1 bg-white/5 rounded-xl">
        <button
          onClick={() => { setMode("record"); setHasVoice(false); setUploadedFile(null) }}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${mode === "record" ? "bg-red-500 text-white" : "text-gray-400 hover:text-white"}`}
        >
          <Icon name="Mic" size={15} /> Записать голос
        </button>
        <button
          onClick={() => { setMode("upload"); setIsRecording(false); setHasVoice(false) }}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${mode === "upload" ? "bg-red-500 text-white" : "text-gray-400 hover:text-white"}`}
        >
          <Icon name="Upload" size={15} /> Загрузить файл
        </button>
      </div>

      {mode === "record" ? (
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
          {isRecording ? (
            <div className="space-y-4">
              <div className="relative mx-auto w-20 h-20">
                <div className="absolute inset-0 rounded-full bg-red-500/20 animate-ping" />
                <button
                  onMouseUp={stopRecording}
                  onTouchEnd={stopRecording}
                  className="relative w-20 h-20 rounded-full bg-red-500 flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <Icon name="Square" size={24} className="text-white" />
                </button>
              </div>
              <p className="text-red-400 font-mono text-lg">
                {String(Math.floor(recordTime / 60)).padStart(2, "0")}:{String(recordTime % 60).padStart(2, "0")}
              </p>
              <p className="text-gray-400 text-sm">Нажмите стоп, чтобы завершить запись</p>
            </div>
          ) : hasVoice ? (
            <div className="space-y-3">
              <Icon name="CheckCircle" size={40} className="text-green-400 mx-auto" />
              <p className="text-white font-medium">Голос записан ({recordTime} сек)</p>
              <button onClick={() => { setHasVoice(false); setRecordTime(0) }} className="text-gray-400 hover:text-white text-sm transition-colors">
                Записать заново
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <button
                onMouseDown={startRecording}
                onTouchStart={startRecording}
                className="w-20 h-20 rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center mx-auto hover:bg-red-500/30 transition-colors group"
              >
                <Icon name="Mic" size={32} className="text-red-400 group-hover:text-red-300" />
              </button>
              <p className="text-gray-400 text-sm">Удерживайте кнопку для записи</p>
              <p className="text-gray-600 text-xs">Пойте, напевайте или просто говорите — ИИ создаст трек в вашем тембре</p>
            </div>
          )}
        </div>
      ) : (
        <div
          onClick={() => fileRef.current?.click()}
          className="bg-white/5 border border-dashed border-white/20 rounded-xl p-8 text-center cursor-pointer hover:border-red-500/40 transition-colors"
        >
          <input ref={fileRef} type="file" accept="audio/*" className="hidden" onChange={handleFileUpload} />
          {uploadedFile ? (
            <div className="space-y-2">
              <Icon name="CheckCircle" size={36} className="text-green-400 mx-auto" />
              <p className="text-white font-medium">{uploadedFile}</p>
              <button onClick={(e) => { e.stopPropagation(); setUploadedFile(null); setHasVoice(false) }} className="text-gray-400 hover:text-white text-sm">
                Загрузить другой
              </button>
            </div>
          ) : (
            <>
              <Icon name="Upload" size={36} className="text-gray-500 mx-auto mb-3" />
              <p className="text-gray-300 font-medium">Загрузите запись голоса</p>
              <p className="text-gray-500 text-sm mt-1">MP3, WAV, M4A, OGG до 20 МБ</p>
            </>
          )}
        </div>
      )}

      <div>
        <label className="text-sm text-gray-400 mb-2 block">Жанр песни</label>
        <div className="flex flex-wrap gap-2">
          {genres.map((g) => (
            <button
              key={g}
              onClick={() => setGenre(g.toLowerCase())}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200 ${
                genre === g.toLowerCase()
                  ? "bg-red-500 border-red-500 text-white"
                  : "border-white/10 text-gray-400 hover:border-red-500/40 hover:text-white"
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-sm text-gray-400 mb-2 block">Текст песни (необязательно)</label>
        <Textarea
          value={lyrics}
          onChange={(e) => setLyrics(e.target.value)}
          placeholder="Напишите свои слова или опишите тему — ИИ сочинит текст сам..."
          className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 min-h-[100px] resize-none"
        />
      </div>

      <Button onClick={simulate} disabled={loading || !hasVoice} className="bg-red-500 hover:bg-red-600 text-white w-full py-3">
        {!hasVoice ? (
          <span className="flex items-center gap-2"><Icon name="Mic" size={16} /> Сначала запишите голос</span>
        ) : loading ? (
          <span className="flex items-center gap-2"><Icon name="Loader2" size={16} className="animate-spin" /> Создаю песню под ваш голос...</span>
        ) : (
          <span className="flex items-center gap-2"><Icon name="Sparkles" size={16} /> Создать песню</span>
        )}
      </Button>

      {generated && (
        <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-4">
          <div className="flex items-center justify-between">
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Песня готова</Badge>
            <span className="text-gray-400 text-sm">{genre} · ваш тембр</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500/30 to-purple-500/30 border border-red-500/30 flex items-center justify-center flex-shrink-0">
              <Icon name="Mic2" size={22} className="text-red-400" />
            </div>
            <div className="flex-1">
              <div className="text-white font-medium mb-1">Ваша персональная песня</div>
              <div className="flex gap-1">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={i} className="w-1 bg-red-500/60 rounded-full" style={{ height: `${8 + Math.random() * 16}px` }} />
                ))}
              </div>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center hover:bg-red-600 transition-colors">
                <Icon name="Play" size={16} className="text-white" />
              </button>
              <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-red-500/40 transition-colors">
                <Icon name="Download" size={16} className="text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Song Creator Tool ────────────────────────────────────────────────────────
const LYRICS_SAMPLES: Record<string, Record<string, string>> = {
  pop: {
    love: `[Куплет 1]\nТы улыбаешься — и мир становится светлей,\nМои мысли только о тебе среди ночей,\nКаждый шаг навстречу — как первый снегопад,\nЯ не знаю как сказать, но ты мне очень рад.\n\n[Припев]\nЭто больше чем слова,\nЭто больше чем мечта,\nТы — моя весна,\nМоя любовь, моя звезда.\n\n[Куплет 2]\nРуки тянутся к тебе в вечерней тишине,\nЧувства новые горят в моей душе вполне,\nКаждый взгляд как целый мир, каждый вздох — как стих,\nНет на свете ничего прекрасней нас двоих.\n\n[Припев]\nЭто больше чем слова,\nЭто больше чем мечта,\nТы — моя весна,\nМоя любовь, моя звезда.\n\n[Бридж]\nОстановись, взгляни на небо,\nМы с тобой — как будто было всегда,\nИ пусть бегут года — я рядом,\nТы и я навсегда.`,
    freedom: `[Куплет 1]\nОткрываю дверь, за окном рассвет,\nВпереди дорог — миллион побед,\nСброшены оковы прошлых давних лет,\nЯ иду вперёд — и пути назад здесь нет.\n\n[Припев]\nСвободен как ветер, лечу без границ,\nМой голос звучит — не упасть мне ниц,\nСвободен как ветер, открытый простор,\nЭта жизнь моя — я начну разговор.\n\n[Куплет 2]\nПусть вокруг шумит суетливый мир,\nЯ найду свой путь, я построю пир,\nКаждый день как дар, каждый миг — как стих,\nЯ живу сейчас — и ловлю этот тих.\n\n[Припев]\nСвободен как ветер, лечу без границ,\nМой голос звучит — не упасть мне ниц,\nСвободен как ветер, открытый простор,\nЭта жизнь моя — я начну разговор.`,
  },
  rock: {
    fight: `[Куплет 1]\nМир горит — но я не гасну,\nСквозь огонь иду, мне ясно:\nНет пути назад отсюда,\nЯ — живое чудо.\n\n[Припев]\nЭто мой бой, мой огонь,\nНе сломать меня — не тронь!\nЯ встаю из пепла вновь,\nЭто воля, это кровь!\n\n[Куплет 2]\nТысяча ударов — выстоял,\nКаждый шрам — мой личный выигрыш,\nНебо надо мной — открытое,\nСердце моё — незабитое.\n\n[Припев]\nЭто мой бой, мой огонь,\nНе сломать меня — не тронь!\nЯ встаю из пепла вновь,\nЭто воля, это кровь!`,
    night: `[Куплет 1]\nНочь накрывает город тенью,\nГитара плачет по весенью,\nНеон мигает — ты одна,\nИ эта боль на всех одна.\n\n[Припев]\nТёмная ночь — моя подруга,\nЗвук электричества — как вьюга,\nКричу в пустоту — молчит она,\nТолько музыка — одна, одна.\n\n[Соло]\n[гитарное соло]\n\n[Куплет 2]\nАсфальт мокрый отражает\nОгни тех, кто всё теряет,\nНо рифф гитарный — не сдаётся,\nИ сердце вместе с ним бьётся.`,
  },
  "r&b": {
    vibe: `[Куплет 1]\nПоздний вечер, свет приглушен,\nТвой силуэт — и я заслушан,\nМузыка течёт рекой,\nВсе слова — про нас с тобой.\n\n[Припев]\nЭтот вайб — только наш,\nЗвук и ритм — общий паж,\nТанцуй со мной до утра,\nМы — огонь, мы — игра.\n\n[Куплет 2]\nТвои движения как стихи,\nМои руки — без лихи,\nВ этом танце — только мы,\nВ этом трансе — нет зимы.\n\n[Аутро]\nOoh, yeah, tonight...\nТолько ты и я в этом свете,\nВсё что нужно — здесь, в ответе.`,
  },
  electronic: {
    future: `[Интро — инструментал]\n\n[Куплет 1]\nБиты пульсируют в венах,\nМир цифровой — без измены,\nКоды и звуки — мой язык,\nЯ — электрический дневник.\n\n[Дроп]\nDrop it! Let it go!\nЭтот ритм — как поток,\nВ такт — твоё дыханье,\nЭто — наше зданье.\n\n[Куплет 2]\nНейросети ткут узоры,\nЧеловек и код — без ссоры,\nМы — будущее прямо здесь,\nНаша песня — новая смесь.\n\n[Дроп]\nDrop it! Let it go!\nЭтот ритм — как поток,\nВ такт — твоё дыханье,\nЭто — наше зданье.`,
  },
}

function SongTool() {
  // Шаг 1 — текст
  const [step, setStep] = useState<1 | 2>(1)
  const [lyricsMode, setLyricsMode] = useState<"generate" | "manual">("generate")
  const [lyricsPrompt, setLyricsPrompt] = useState("")
  const [genre, setGenre] = useState("pop")
  const [mood, setMood] = useState("love")
  const [lyrics, setLyrics] = useState("")
  const [lyricsLoading, setLyricsLoading] = useState(false)

  // Шаг 2 — трек
  const [trackStyle, setTrackStyle] = useState("pop")
  const [tempo, setTempo] = useState([100])
  const [trackLoading, setTrackLoading] = useState(false)
  const [trackReady, setTrackReady] = useState(false)
  const [trackProgress, setTrackProgress] = useState(0)

  const genres = [
    { value: "pop", label: "Pop" },
    { value: "rock", label: "Rock" },
    { value: "r&b", label: "R&B" },
    { value: "electronic", label: "Electronic" },
    { value: "folk", label: "Folk" },
    { value: "hip-hop", label: "Hip-Hop" },
  ]

  const moodsByGenre: Record<string, { value: string; label: string }[]> = {
    pop: [{ value: "love", label: "Любовь" }, { value: "freedom", label: "Свобода" }, { value: "summer", label: "Лето" }],
    rock: [{ value: "fight", label: "Борьба" }, { value: "night", label: "Ночь" }, { value: "road", label: "Дорога" }],
    "r&b": [{ value: "vibe", label: "Вайб" }, { value: "love", label: "Любовь" }, { value: "night", label: "Ночь" }],
    electronic: [{ value: "future", label: "Будущее" }, { value: "night", label: "Ночь" }, { value: "freedom", label: "Свобода" }],
    folk: [{ value: "home", label: "Дом" }, { value: "road", label: "Дорога" }, { value: "love", label: "Любовь" }],
    "hip-hop": [{ value: "fight", label: "Борьба" }, { value: "freedom", label: "Свобода" }, { value: "night", label: "Ночь" }],
  }

  const getMoods = () => moodsByGenre[genre] || moodsByGenre.pop

  const generateLyrics = () => {
    setLyricsLoading(true)
    setLyrics("")
    setTimeout(() => {
      const genreMap = LYRICS_SAMPLES[genre] || LYRICS_SAMPLES.pop
      const sample = genreMap[mood] || Object.values(genreMap)[0] ||
        `[Куплет 1]\nСлова рождаются из воздуха,\nМузыка живёт в каждом из нас,\nЭта песня — для тебя одного,\nЭтот миг — наш общий сейчас.\n\n[Припев]\nПоём вместе, поём вслух,\nКаждый звук — живой, не пух,\nМузыка — наш общий дух,\nПоём вместе, поём вслух.`
      setLyrics(sample)
      setLyricsLoading(false)
    }, 2000)
  }

  const startTrack = () => {
    if (!lyrics.trim()) return
    setTrackLoading(true)
    setTrackReady(false)
    setTrackProgress(0)
    const interval = setInterval(() => {
      setTrackProgress((p) => {
        if (p >= 100) {
          clearInterval(interval)
          setTrackLoading(false)
          setTrackReady(true)
          return 100
        }
        return p + 2
      })
    }, 80)
  }

  const waveHeights = Array.from({ length: 32 }, () => 4 + Math.floor(Math.random() * 20))

  return (
    <div className="space-y-0">
      {/* Stepper */}
      <div className="flex items-center gap-0 mb-8">
        {[{ n: 1, label: "Текст песни" }, { n: 2, label: "Создать трек" }].map(({ n, label }, i) => (
          <div key={n} className="flex items-center flex-1">
            <button
              onClick={() => { if (n === 2 && !lyrics.trim()) return; setStep(n as 1 | 2) }}
              className="flex items-center gap-2 group"
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-200 ${
                step === n
                  ? "bg-red-500 border-red-500 text-white"
                  : lyrics.trim() && n === 2
                  ? "border-red-500/60 text-red-400 hover:bg-red-500/10"
                  : "border-white/20 text-gray-500"
              }`}>
                {step > n && lyrics ? <Icon name="Check" size={14} /> : n}
              </div>
              <span className={`text-sm font-medium transition-colors duration-200 ${step === n ? "text-white" : "text-gray-500"}`}>
                {label}
              </span>
            </button>
            {i === 0 && (
              <div className={`flex-1 h-px mx-3 transition-colors duration-300 ${lyrics.trim() ? "bg-red-500/50" : "bg-white/10"}`} />
            )}
          </div>
        ))}
      </div>

      {/* ── Шаг 1: текст ── */}
      {step === 1 && (
        <div className="space-y-6">
          {/* Режим */}
          <div className="flex gap-2 p-1 bg-white/5 rounded-xl">
            <button
              onClick={() => setLyricsMode("generate")}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${lyricsMode === "generate" ? "bg-red-500 text-white" : "text-gray-400 hover:text-white"}`}
            >
              <Icon name="Sparkles" size={14} /> Сгенерировать автоматически
            </button>
            <button
              onClick={() => setLyricsMode("manual")}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${lyricsMode === "manual" ? "bg-red-500 text-white" : "text-gray-400 hover:text-white"}`}
            >
              <Icon name="PenLine" size={14} /> Написать самому
            </button>
          </div>

          {lyricsMode === "generate" ? (
            <>
              {/* Жанр */}
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Жанр</label>
                <div className="flex flex-wrap gap-2">
                  {genres.map((g) => (
                    <button
                      key={g.value}
                      onClick={() => { setGenre(g.value); setMood(getMoods()[0]?.value || "love") }}
                      className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 ${
                        genre === g.value
                          ? "bg-red-500 border-red-500 text-white"
                          : "border-white/10 text-gray-400 hover:border-red-500/40 hover:text-white"
                      }`}
                    >
                      {g.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Тема */}
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Тема / настроение</label>
                <div className="flex flex-wrap gap-2">
                  {getMoods().map((m) => (
                    <button
                      key={m.value}
                      onClick={() => setMood(m.value)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 ${
                        mood === m.value
                          ? "bg-red-500/20 border-red-500 text-red-400"
                          : "border-white/10 text-gray-400 hover:border-red-500/30 hover:text-white"
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Свободный запрос */}
              <div>
                <label className="text-sm text-gray-400 mb-2 block">
                  Дополнительный запрос <span className="text-gray-600">(необязательно)</span>
                </label>
                <Textarea
                  value={lyricsPrompt}
                  onChange={(e) => setLyricsPrompt(e.target.value)}
                  placeholder="Например: песня о расставании, но с надеждой на будущее; главный герой — молодой путешественник..."
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 min-h-[80px] resize-none"
                />
              </div>

              <Button
                onClick={generateLyrics}
                disabled={lyricsLoading}
                className="bg-red-500 hover:bg-red-600 text-white w-full py-3"
              >
                {lyricsLoading
                  ? <span className="flex items-center gap-2"><Icon name="Loader2" size={16} className="animate-spin" /> Пишу текст...</span>
                  : <span className="flex items-center gap-2"><Icon name="Sparkles" size={16} /> Сгенерировать текст</span>
                }
              </Button>
            </>
          ) : (
            <>
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Ваш текст песни</label>
                <Textarea
                  value={lyrics}
                  onChange={(e) => setLyrics(e.target.value)}
                  placeholder={"[Куплет 1]\nВаши строки...\n\n[Припев]\nВаш припев..."}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 min-h-[240px] resize-none font-space-mono text-sm"
                />
              </div>
              <div className="text-right text-xs text-gray-600">{lyrics.length} символов</div>
            </>
          )}

          {/* Результат текста */}
          {lyrics && lyricsMode === "generate" && (
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Текст готов</Badge>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => navigator.clipboard.writeText(lyrics)}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 text-sm"
                  >
                    <Icon name="Copy" size={14} /> Копировать
                  </button>
                  <button
                    onClick={() => setLyrics("")}
                    className="text-gray-500 hover:text-white transition-colors flex items-center gap-1 text-sm"
                  >
                    <Icon name="RefreshCw" size={14} /> Перегенерировать
                  </button>
                </div>
              </div>
              <pre className="text-gray-200 text-sm leading-relaxed whitespace-pre-wrap font-space-mono max-h-64 overflow-y-auto">{lyrics}</pre>
              <div className="pt-2 border-t border-white/10">
                <label className="text-xs text-gray-500 mb-2 block">Можно отредактировать перед созданием трека</label>
                <Textarea
                  value={lyrics}
                  onChange={(e) => setLyrics(e.target.value)}
                  className="bg-white/5 border-white/10 text-white text-sm min-h-[120px] resize-none font-space-mono"
                />
              </div>
            </div>
          )}

          {lyrics && (
            <Button
              onClick={() => setStep(2)}
              className="bg-white/10 hover:bg-white/20 text-white w-full py-3 border border-white/20"
            >
              <span className="flex items-center gap-2">
                Дальше — создать трек <Icon name="ArrowRight" size={16} />
              </span>
            </Button>
          )}
        </div>
      )}

      {/* ── Шаг 2: трек ── */}
      {step === 2 && (
        <div className="space-y-6">
          {/* Превью текста */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-500 uppercase tracking-wider">Текст песни</span>
              <button onClick={() => setStep(1)} className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1">
                <Icon name="Pencil" size={12} /> Изменить
              </button>
            </div>
            <pre className="text-gray-300 text-xs leading-relaxed whitespace-pre-wrap font-space-mono max-h-28 overflow-y-auto">{lyrics}</pre>
          </div>

          {/* Музыкальный стиль */}
          <div>
            <label className="text-sm text-gray-400 mb-2 block">Музыкальный стиль трека</label>
            <div className="flex flex-wrap gap-2">
              {genres.map((g) => (
                <button
                  key={g.value}
                  onClick={() => setTrackStyle(g.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 ${
                    trackStyle === g.value
                      ? "bg-red-500 border-red-500 text-white"
                      : "border-white/10 text-gray-400 hover:border-red-500/40 hover:text-white"
                  }`}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </div>

          {/* Темп */}
          <div>
            <label className="text-sm text-gray-400 mb-2 block">
              Темп: <span className="text-white font-mono">{tempo[0]} BPM</span>{" "}
              <span className="text-gray-600 text-xs">
                {tempo[0] < 80 ? "· медленный" : tempo[0] < 110 ? "· средний" : tempo[0] < 140 ? "· быстрый" : "· очень быстрый"}
              </span>
            </label>
            <Slider value={tempo} onValueChange={setTempo} min={60} max={180} step={5} className="w-full" />
            <div className="flex justify-between text-xs text-gray-600 mt-1">
              <span>60 BPM</span><span>120 BPM</span><span>180 BPM</span>
            </div>
          </div>

          {/* Дополнительно */}
          <div>
            <label className="text-sm text-gray-400 mb-2 block">
              Пожелания к звуку <span className="text-gray-600">(необязательно)</span>
            </label>
            <Textarea
              placeholder="Например: живые инструменты, женский вокал, атмосферное вступление, гитарное соло в бридже..."
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 min-h-[80px] resize-none"
            />
          </div>

          <Button
            onClick={startTrack}
            disabled={trackLoading || trackReady}
            className="bg-red-500 hover:bg-red-600 text-white w-full py-3"
          >
            {trackLoading
              ? <span className="flex items-center gap-2"><Icon name="Loader2" size={16} className="animate-spin" /> Создаю трек... {trackProgress}%</span>
              : trackReady
              ? <span className="flex items-center gap-2"><Icon name="CheckCircle" size={16} /> Трек готов!</span>
              : <span className="flex items-center gap-2"><Icon name="Music" size={16} /> Создать трек</span>
            }
          </Button>

          {/* Прогресс */}
          {trackLoading && (
            <div className="space-y-3">
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-red-500 to-orange-400 rounded-full transition-all duration-100"
                  style={{ width: `${trackProgress}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>{trackProgress < 30 ? "Анализирую текст..." : trackProgress < 60 ? "Генерирую мелодию..." : trackProgress < 85 ? "Добавляю инструменты..." : "Финальный микс..."}</span>
                <span>{trackProgress}%</span>
              </div>
            </div>
          )}

          {/* Результат трека */}
          {trackReady && (
            <div className="bg-gradient-to-br from-red-500/10 to-purple-500/10 border border-red-500/30 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-sm px-3 py-1">
                  <Icon name="Music2" size={12} className="inline mr-1" /> Трек готов
                </Badge>
                <span className="text-gray-400 text-sm">{trackStyle} · {tempo[0]} BPM</span>
              </div>

              {/* Обложка + плеер */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-500/40 to-purple-600/40 border border-red-500/30 flex items-center justify-center flex-shrink-0">
                  <Icon name="Music2" size={26} className="text-red-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-semibold mb-2 truncate">AI Song · {trackStyle}</div>
                  {/* Волна */}
                  <div className="flex items-end gap-0.5 h-8">
                    {waveHeights.map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm bg-red-500/60"
                        style={{ height: `${h}px` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Кнопки */}
              <div className="flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-red-500 hover:bg-red-600 rounded-xl text-white text-sm font-medium transition-colors">
                  <Icon name="Play" size={16} /> Слушать
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-white/20 hover:border-white/40 rounded-xl text-gray-300 text-sm font-medium transition-colors">
                  <Icon name="Download" size={16} /> Скачать MP3
                </button>
                <button
                  onClick={() => { setStep(1); setTrackReady(false); setTrackProgress(0) }}
                  className="px-4 py-2.5 border border-white/10 hover:border-red-500/40 rounded-xl text-gray-500 hover:text-white text-sm transition-colors"
                >
                  <Icon name="RefreshCw" size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ─── Main Tools Page ──────────────────────────────────────────────────────────
const tabs = [
  { value: "text", label: "Тексты", icon: "FileText" },
  { value: "social", label: "Соцсети", icon: "Share2" },
  { value: "song", label: "Песня", icon: "Mic2" },
  { value: "music", label: "Музыка", icon: "Music" },
  { value: "clip", label: "Клипы", icon: "Clapperboard" },
  { value: "voice", label: "Мой голос", icon: "Mic" },
]

export default function Tools() {
  return (
    <div className="dark min-h-screen bg-black">
      <Navbar />
      <main className="pt-24 pb-20 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white font-orbitron mb-3">
            ИИ-<span className="text-red-500">Инструменты</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Попробуйте каждый инструмент прямо сейчас — без регистрации
          </p>
        </div>

        <Tabs defaultValue="text" className="w-full">
          <TabsList className="w-full bg-white/5 border border-white/10 rounded-xl p-1 mb-8 flex flex-wrap h-auto gap-1">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex-1 min-w-[80px] flex items-center justify-center gap-1.5 py-2.5 text-sm data-[state=active]:bg-red-500 data-[state=active]:text-white rounded-lg"
              >
                <Icon name={tab.icon} size={14} fallback="Zap" />
                <span className="hidden sm:inline">{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8">
            <TabsContent value="text" className="mt-0 focus-visible:outline-none">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-white mb-1">Генерация текстов</h2>
                <p className="text-gray-400 text-sm">Статьи, посты, email, сценарии и описания товаров — в любом тоне</p>
              </div>
              <TextTool />
            </TabsContent>

            <TabsContent value="social" className="mt-0 focus-visible:outline-none">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-white mb-1">Контент для соцсетей</h2>
                <p className="text-gray-400 text-sm">Готовые посты с хэштегами для Instagram, VK, Telegram и TikTok</p>
              </div>
              <SocialTool />
            </TabsContent>

            <TabsContent value="song" className="mt-0 focus-visible:outline-none">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-white mb-1">Создание песни</h2>
                <p className="text-gray-400 text-sm">Шаг 1 — генерируем текст по запросу или пишем сами. Шаг 2 — создаём полноценный трек</p>
              </div>
              <SongTool />
            </TabsContent>

            <TabsContent value="music" className="mt-0 focus-visible:outline-none">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-white mb-1">Генерация музыки</h2>
                <p className="text-gray-400 text-sm">Создайте оригинальный трек по описанию — любой жанр и настроение</p>
              </div>
              <MusicTool />
            </TabsContent>

            <TabsContent value="clip" className="mt-0 focus-visible:outline-none">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-white mb-1">Музыкальные клипы</h2>
                <p className="text-gray-400 text-sm">ИИ создаёт видеоряд, подбирает монтаж и рендерит клип под вашу музыку</p>
              </div>
              <ClipTool />
            </TabsContent>

            <TabsContent value="voice" className="mt-0 focus-visible:outline-none">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-white mb-1">Песни под ваш голос</h2>
                <p className="text-gray-400 text-sm">Запишите голос или загрузите файл — ИИ создаст полноценную песню в вашем тембре</p>
              </div>
              <VoiceTool />
            </TabsContent>
          </div>
        </Tabs>

        <p className="text-center text-gray-600 text-sm mt-8">
          Это демо-режим. Для генерации реального контента{" "}
          <a href="/" className="text-red-400 hover:text-red-300 underline">выберите тариф</a>
        </p>
      </main>
      <Footer />
    </div>
  )
}