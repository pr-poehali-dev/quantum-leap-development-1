import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Анна Соколова",
    role: "SMM-специалист, агентство Bright",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Content AI сократил время на подготовку контент-плана с двух дней до двух часов. Клиенты в восторге — качество текстов даже выросло.",
  },
  {
    name: "Дмитрий Ковалёв",
    role: "Владелец интернет-магазина",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Загрузил 500 SKU — за час получил описания для всех товаров. Раньше на это уходило несколько недель и бюджет на копирайтера.",
  },
  {
    name: "Марина Петрова",
    role: "Контент-маркетолог, SaaS-стартап",
    avatar: "/professional-woman-scientist.png",
    content:
      "Пишем SEO-статьи в 4 раза быстрее. Продвинутый тариф окупился за первый месяц — только за счёт органического трафика.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Что говорят пользователи</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Тысячи маркетологов, предпринимателей и блогеров уже создают контент с Content AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
