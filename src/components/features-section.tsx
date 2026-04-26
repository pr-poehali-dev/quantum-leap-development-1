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
    title: "Редактирование и улучшение",
    description: "Проверка грамматики, уникальности, перефразирование и расширение текста. Ваш личный редактор 24/7.",
    icon: "PenLine",
    badge: "Редактор",
  },
  {
    title: "Генерация изображений",
    description: "Создавайте иллюстрации, баннеры и визуалы по текстовому описанию. Подходит для соцсетей, рекламы и сайтов.",
    icon: "Image",
    badge: "Визуал",
  },
  {
    title: "Переводы и транскрибация",
    description: "Перевод текстов на десятки языков, преобразование аудио в текст и текста в речь за считанные секунды.",
    icon: "Languages",
    badge: "Перевод",
  },
  {
    title: "Презентации и документы",
    description: "Шаблоны, автоматическое заполнение, визуализация данных. Профессиональные слайды без дизайнера.",
    icon: "Presentation",
    badge: "Документы",
  },
  {
    title: "API для разработчиков",
    description: "Встраивайте ИИ-инструменты в свои сервисы. Интеграция с CMS, CRM, соцсетями и email-платформами.",
    icon: "Code2",
    badge: "API",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Всё для создания контента</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Мощные ИИ-инструменты в одном месте — от идеи до готового материала за минуты
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
      </div>
    </section>
  )
}
