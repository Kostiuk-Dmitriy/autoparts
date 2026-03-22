import { ShieldCheck, Search, Truck, Award } from 'lucide-react'

const advantages = [
  {
    icon: ShieldCheck,
    title: 'Оригінал та аналоги',
    description: 'Пропонуємо оригінальні запчастини та перевірені аналоги провідних виробників.',
  },
  {
    icon: Search,
    title: 'Підбір за VIN-кодом',
    description: 'Точний підбір деталей за VIN-кодом вашого автомобіля — без помилок.',
  },
  {
    icon: Truck,
    title: 'Доставка по Борисполю',
    description: 'Швидка доставка по місту та Київській області. Самовивіз також доступний.',
  },
  {
    icon: Award,
    title: 'Гарантія на товар',
    description: 'Надаємо гарантію на всі запчастини. Ваша впевненість — наш пріоритет.',
  },
]

export default function WhyUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B2447] mb-4">
            Чому обирають нас
          </h2>
          <p className="text-[#576CBC] text-lg max-w-xl mx-auto">
            Ми робимо процес пошуку та замовлення запчастин максимально зручним
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="bg-[#F4F9FB] rounded-xl p-6 border border-[#CFE8F2] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-[#E8F4F8] w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-[#19376D]" />
                </div>
                <h3 className="font-bold text-[#0B2447] mb-2">{item.title}</h3>
                <p className="text-[#576CBC] text-sm leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
