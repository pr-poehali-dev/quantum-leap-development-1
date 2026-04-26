import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Маркетинг и соцсети",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Генерируйте посты, сторис, рекламные тексты и заголовки для любых платформ. ИИ учитывает алгоритмы
            соцсетей и создаёт контент, который набирает охваты.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Посты для Instagram, VK, Telegram, LinkedIn
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Рекламные объявления и заголовки для A/B тестов
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Контент-планы и стратегии публикаций
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Бизнес и продажи",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Создавайте коммерческие предложения, описания товаров, скрипты продаж и email-рассылки.
            Персонализированный контент для каждого сегмента аудитории.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Описания товаров для маркетплейсов и интернет-магазинов
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Email-цепочки и персональные рассылки
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Коммерческие предложения и презентации
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "SEO и блогинг",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Пишите SEO-оптимизированные статьи, которые выходят в топ поисковиков. ИИ подбирает ключевые слова,
            структурирует текст и соблюдает требования поисковых алгоритмов.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Длинные статьи с правильной структурой и заголовками
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Мета-описания, title и alt-теги для изображений
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Проверка уникальности и SEO-оценка текста
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Кому подходит Content AI</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Платформа помогает маркетологам, предпринимателям, блогерам и командам создавать
            качественный контент в разы быстрее и без лишних затрат.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
