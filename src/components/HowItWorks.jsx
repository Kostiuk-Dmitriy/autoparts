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
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            Як це працює
          </h2>
          <p className="text-[#64748B] text-lg max-w-xl mx-auto">
            Три простих кроки до потрібної запчастини
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-[#E2E8F0] z-0" />
              )}
              <div className="relative z-10 bg-[#1E40AF] text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-sm">
                {step.number}
              </div>
              <h3 className="font-bold text-xl text-[#0F172A] mb-3">{step.title}</h3>
              <p className="text-[#64748B] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
