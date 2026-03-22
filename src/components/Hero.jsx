export default function Hero() {
  return (
    <section className="pt-16 min-h-screen flex items-center bg-[#F4F9FB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#E8F4F8] text-[#19376D] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>🇪🇺</span> EU · <span>🇺🇸</span> USA · <span>🇯🇵</span> JP
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#0B2447] leading-tight mb-6">
              Запчастини для іномарок у{' '}
              <span className="text-[#576CBC]">Борисполі</span>
            </h1>
            <p className="text-lg text-[#576CBC] mb-8 leading-relaxed">
              EU · USA · JP — швидкий підбір та доставка. Оригінальні деталі та якісні аналоги для вашого автомобіля.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-[#19376D] text-white px-8 py-3 rounded-full font-medium text-center hover:bg-[#576CBC] transition-colors"
              >
                Замовити запчастину
              </a>
              <a
                href="https://t.me/autoparts_boryspil"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#19376D] text-[#19376D] px-8 py-3 rounded-full font-medium text-center hover:bg-[#E8F4F8] transition-colors"
              >
                Написати в Telegram
              </a>
            </div>
          </div>

          {/* SVG Illustration */}
          <div className="hidden lg:flex justify-center">
            <svg viewBox="0 0 400 300" className="w-full max-w-md" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Car body */}
              <rect x="60" y="150" width="280" height="90" rx="10" fill="#CFE8F2" />
              <path d="M100 150 L140 100 L260 100 L300 150Z" fill="#A5D7E8" />
              {/* Windows */}
              <rect x="150" y="110" width="45" height="35" rx="5" fill="#A5D7E8" />
              <rect x="205" y="110" width="45" height="35" rx="5" fill="#A5D7E8" />
              {/* Wheels */}
              <circle cx="130" cy="240" r="35" fill="#0B2447" />
              <circle cx="130" cy="240" r="20" fill="#576CBC" />
              <circle cx="130" cy="240" r="8" fill="#A5D7E8" />
              <circle cx="270" cy="240" r="35" fill="#0B2447" />
              <circle cx="270" cy="240" r="20" fill="#576CBC" />
              <circle cx="270" cy="240" r="8" fill="#A5D7E8" />
              {/* Headlights */}
              <rect x="60" y="165" width="30" height="15" rx="5" fill="#FCD34D" />
              <rect x="310" y="165" width="30" height="15" rx="5" fill="#FCD34D" />
              {/* Gears/parts icons floating */}
              <circle cx="50" cy="80" r="20" fill="#CFE8F2" stroke="#A5D7E8" strokeWidth="2" />
              <text x="50" y="86" textAnchor="middle" fontSize="16">⚙️</text>
              <circle cx="350" cy="60" r="18" fill="#CFE8F2" stroke="#A5D7E8" strokeWidth="2" />
              <text x="350" y="66" textAnchor="middle" fontSize="14">🔧</text>
              <circle cx="370" cy="140" r="16" fill="#CFE8F2" stroke="#A5D7E8" strokeWidth="2" />
              <text x="370" y="146" textAnchor="middle" fontSize="12">🛞</text>
              <circle cx="30" cy="160" r="16" fill="#CFE8F2" stroke="#A5D7E8" strokeWidth="2" />
              <text x="30" y="166" textAnchor="middle" fontSize="12">🔩</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
