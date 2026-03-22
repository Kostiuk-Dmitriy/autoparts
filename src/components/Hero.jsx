export default function Hero() {
  return (
    <section className="pt-16 min-h-screen flex items-center bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#EFF6FF] text-[#1E40AF] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>🇪🇺</span> EU · <span>🇺🇸</span> USA · <span>🇯🇵</span> JP
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#0F172A] leading-tight mb-6">
              Запчастини для іномарок у{' '}
              <span className="text-[#2563EB]">Борисполі</span>
            </h1>
            <p className="text-lg text-[#64748B] mb-8 leading-relaxed">
              EU · USA · JP — швидкий підбір та доставка. Оригінальні деталі та якісні аналоги для вашого автомобіля.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-[#1E40AF] text-white px-8 py-3 rounded-full font-medium text-center hover:bg-[#2563EB] transition-colors"
              >
                Замовити запчастину
              </a>
              <a
                href="https://t.me/autoparts_boryspil"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#1E40AF] text-[#1E40AF] px-8 py-3 rounded-full font-medium text-center hover:bg-[#EFF6FF] transition-colors"
              >
                Написати в Telegram
              </a>
            </div>
          </div>

          {/* SVG Illustration */}
          <div className="hidden lg:flex justify-center">
            <svg viewBox="0 0 400 300" className="w-full max-w-md" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Car body */}
              <rect x="60" y="150" width="280" height="90" rx="10" fill="#E2E8F0" />
              <path d="M100 150 L140 100 L260 100 L300 150Z" fill="#CBD5E1" />
              {/* Windows */}
              <rect x="150" y="110" width="45" height="35" rx="5" fill="#93C5FD" />
              <rect x="205" y="110" width="45" height="35" rx="5" fill="#93C5FD" />
              {/* Wheels */}
              <circle cx="130" cy="240" r="35" fill="#1E293B" />
              <circle cx="130" cy="240" r="20" fill="#64748B" />
              <circle cx="130" cy="240" r="8" fill="#94A3B8" />
              <circle cx="270" cy="240" r="35" fill="#1E293B" />
              <circle cx="270" cy="240" r="20" fill="#64748B" />
              <circle cx="270" cy="240" r="8" fill="#94A3B8" />
              {/* Headlights */}
              <rect x="60" y="165" width="30" height="15" rx="5" fill="#FCD34D" />
              <rect x="310" y="165" width="30" height="15" rx="5" fill="#FCD34D" />
              {/* Gears/parts icons floating */}
              <circle cx="50" cy="80" r="20" fill="#DBEAFE" stroke="#93C5FD" strokeWidth="2" />
              <text x="50" y="86" textAnchor="middle" fontSize="16">⚙️</text>
              <circle cx="350" cy="60" r="18" fill="#DBEAFE" stroke="#93C5FD" strokeWidth="2" />
              <text x="350" y="66" textAnchor="middle" fontSize="14">🔧</text>
              <circle cx="370" cy="140" r="16" fill="#DBEAFE" stroke="#93C5FD" strokeWidth="2" />
              <text x="370" y="146" textAnchor="middle" fontSize="12">🛞</text>
              <circle cx="30" cy="160" r="16" fill="#DBEAFE" stroke="#93C5FD" strokeWidth="2" />
              <text x="30" y="166" textAnchor="middle" fontSize="12">🔩</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
