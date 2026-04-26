import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="slide-up">
          <h2 className="text-5xl font-bold text-foreground mb-6 font-sans text-balance">
            Создавайте контент в 10 раз быстрее
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Присоединяйтесь к тысячам маркетологов и предпринимателей, которые уже экономят время и бюджет
            с Content AI. Первые 10 000 символов — бесплатно, без карты.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 pulse-button text-lg px-8 py-4"
            >
              Начать бесплатно
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 bg-transparent"
            >
              Смотреть тарифы
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
