import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const features = [
  {
    title: "Генерация текстов",
    description: "Статьи, посты, сценарии, email-рассылки, описания товаров — задайте тон, стиль и ключевые слова, ИИ сделает остальное.",
    icon: "FileText",
    badge: "Текст",
  },
  {
    title: "Контент для соцсетей",
    description: "Посты, сторис, подписи к фото, хэштеги и контент-планы для Instagram, VK, Telegram и TikTok — сразу в нужном формате.",
    icon: "Share2",
    badge: "Соцсети",
  },
  {
    title: "Генерация музыки",
    description: "Создавайте треки в любом жанре по текстовому описанию: поп, рок, электронная, джаз, эмбиент — за считанные секунды.",
    icon: "Music",
    badge: "Музыка",
  },
  {
    title: "Музыкальные клипы",
    description: "Автоматическое создание видеоклипа на вашу музыку или описание. ИИ подбирает визуальный ряд, монтаж и стиль.",
    icon: "Clapperboard",
    badge: "Видео",
  },
  {
    title: "Песни под ваш голос",
    description: "Запишите свой голос через микрофон или загрузите аудиофайл — ИИ создаст песню в вашем уникальном стиле и тембре.",
    icon: "Mic",
    badge: "Голос",
  },
  {
    title: "Редактирование и перевод",
    description: "Проверка грамматики, уникальности, перефразирование, перевод на 50+ языков и транскрибация аудио в текст.",
    icon: "PenLine",
    badge: "Редактор",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Всё для создания контента</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Тексты, музыка, видео, соцсети и голосовые треки — в одной ИИ-платформе
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Icon name={feature.icon} size={32} className="text-red-500" fallback="Zap" />
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/tools"
            className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold px-8 py-3 rounded-xl text-base transition-colors duration-200"
          >
            <Icon name="Zap" size={18} />
            Попробовать инструменты
          </a>
        </div>
      </div>
    </section>
  )
}
