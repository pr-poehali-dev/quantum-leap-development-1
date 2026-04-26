import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const plans = [
  {
    name: "Бесплатный",
    price: "0₽",
    period: "навсегда",
    badge: null,
    description: "Попробуйте ИИ без риска",
    features: [
      "10 000 символов в день",
      "Генерация коротких текстов",
      "Базовое редактирование",
      "3 языка для перевода",
      "Стандартная скорость",
    ],
    missing: [
      "Генерация изображений",
      "Работа с файлами",
      "API-доступ",
    ],
    cta: "Начать бесплатно",
    highlight: false,
  },
  {
    name: "Базовый",
    price: "990₽",
    period: "в месяц",
    badge: "Популярный",
    description: "Для активных создателей контента",
    features: [
      "200 000 символов в месяц",
      "Все типы текстов и сценарии",
      "Глубокое редактирование",
      "50+ языков для перевода",
      "Генерация изображений (100/мес)",
      "Загрузка и работа с файлами",
      "Приоритетная обработка",
    ],
    missing: [],
    cta: "Выбрать базовый",
    highlight: true,
  },
  {
    name: "Продвинутый",
    price: "2 490₽",
    period: "в месяц",
    badge: "Макс. возможности",
    description: "Для команд и профессионалов",
    features: [
      "Безлимитная генерация",
      "Все инструменты без ограничений",
      "Генерация видео и презентаций",
      "API-доступ для разработчиков",
      "Интеграция с CMS и CRM",
      "Аналитика и статистика",
      "Персональный менеджер",
    ],
    missing: [],
    cta: "Выбрать продвинутый",
    highlight: false,
  },
]

export function TechnologySection() {
  return (
    <section id="technology" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-orbitron">Выберите тариф</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Начните бесплатно, переходите на платный план когда будете готовы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 flex flex-col border transition-all duration-300 ${
                plan.highlight
                  ? "border-red-500 bg-red-500/5 shadow-[0_0_40px_rgba(239,68,68,0.15)]"
                  : "border-white/10 bg-white/5 hover:border-red-500/40"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-red-500 text-white border-0 px-4 py-1 text-xs font-bold">
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1 font-orbitron">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                  <span className="text-gray-400 mb-1">{plan.period}</span>
                </div>
              </div>

              <div className="flex-1 space-y-3 mb-8">
                {plan.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <Icon name="Check" size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                    {f}
                  </div>
                ))}
                {plan.missing.map((f, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <Icon name="X" size={16} className="text-gray-600 mt-0.5 flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-3 px-6 rounded-xl font-bold text-base transition-all duration-200 ${
                  plan.highlight
                    ? "bg-red-500 hover:bg-red-600 text-white"
                    : "border border-white/20 hover:border-red-500 text-white hover:bg-red-500/10"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
