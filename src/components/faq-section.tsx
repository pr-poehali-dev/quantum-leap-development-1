import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Что входит в бесплатный тариф?",
      answer:
        "Бесплатный тариф включает до 10 000 символов в день, генерацию коротких текстов, базовое редактирование и перевод на 3 языка. Это отличный старт, чтобы попробовать платформу без каких-либо обязательств.",
    },
    {
      question: "Могу ли я отменить подписку в любой момент?",
      answer:
        "Да, вы можете отменить подписку в любое время в личном кабинете. Платные функции будут доступны до конца оплаченного периода.",
    },
    {
      question: "Насколько качественны сгенерированные тексты?",
      answer:
        "Content AI использует современные языковые модели с поддержкой русского языка. Тексты требуют минимальной правки и подходят для публикации. Встроенная проверка уникальности и грамматики дополнительно улучшает качество.",
    },
    {
      question: "Есть ли API для интеграции в мои сервисы?",
      answer:
        "Да, API-доступ доступен на тарифе Продвинутый. Вы получаете полную документацию, SDK и поддержку разработчиков для интеграции с вашим сайтом, CRM или другими инструментами.",
    },
    {
      question: "Мои данные в безопасности?",
      answer:
        "Все данные передаются по зашифрованному соединению (TLS). Мы не используем ваши тексты для обучения моделей без разрешения. Политика конфиденциальности доступна на сайте.",
    },
    {
      question: "Поддерживается ли генерация на других языках кроме русского?",
      answer:
        "На тарифе Базовый доступно 50+ языков. Платформа отлично справляется с русским, английским, испанским, немецким, французским и другими популярными языками.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о Content AI, тарифах и возможностях платформы.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
