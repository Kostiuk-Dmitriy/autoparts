const steps = [
  {
    number: '01',
    title: 'Надішліть запит',
    description: 'Вкажіть марку та модель авто, рік випуску та потрібну деталь. Можна через форму або Telegram.',
  },
  {
    number: '02',
    title: 'Отримайте підбір і ціну',
    description: 'Ми підберемо оригінал або аналог, уточнимо наявність та повідомимо вартість.',
  },
  {
    number: '03',
    title: 'Забирайте або отримайте доставку',
    description: 'Самовивіз у Борисполі або доставка по місту та Київській області.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-[#A5D7E8]/20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#576CBC]/10 blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B2447] mb-4">
            Як це працює
          </h2>
          <p className="text-[#576CBC] text-lg max-w-xl mx-auto">
            Три простих кроки до потрібної запчастини
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex flex-col items-center text-center group cursor-default p-8 hover:-translate-y-2 transition-transform duration-300 bg-white rounded-3xl hover:bg-[#F4F9FB]/50 hover:shadow-[0_20px_40px_-10px_rgba(25,55,109,0.08)]">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#A5D7E8] to-transparent z-0 opacity-50" />
              )}
              <div className="relative z-10 bg-gradient-to-br from-[#19376D] to-[#576CBC] text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-black mb-6 shadow-[0_4px_16px_rgba(25,55,109,0.3)] group-hover:scale-110 transition-transform duration-300">
                {step.number}
              </div>
              <h3 className="font-bold text-xl text-[#0B2447] mb-3">{step.title}</h3>
              <p className="text-[#576CBC] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
