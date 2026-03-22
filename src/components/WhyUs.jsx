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
    <section id="about" className="py-24 bg-white">
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
                className="bg-white rounded-2xl p-8 border border-[#A5D7E8]/30 shadow-[0_4px_20px_-4px_rgba(25,55,109,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(25,55,109,0.1)] hover:-translate-y-2 transition-all duration-300 group cursor-default"
              >
                <div className="bg-gradient-to-br from-[#E8F4F8] to-[#CFE8F2] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm border border-[#A5D7E8]/50">
                  <Icon className="h-7 w-7 text-[#576CBC] group-hover:text-[#19376D] transition-colors" />
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
