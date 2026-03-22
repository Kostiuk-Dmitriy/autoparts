export default function Hero() {
  return (
    <section className="pt-16 min-h-screen flex items-center bg-[#F4F9FB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#E8F4F8] text-[#19376D] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>🇪🇺</span> EU · <span>🇺🇸</span> USA · <span>🇯🇵</span> JP
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#0B2447] via-[#19376D] to-[#576CBC] leading-tight mb-6 drop-shadow-sm tracking-tight">
              Надійні запчастини для{' '}
              <span className="text-[#576CBC] relative inline-block">
                вашого авто
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#A5D7E8]/60" viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0 10 Q 50 20 100 10" fill="transparent" stroke="currentColor" strokeWidth="4" strokeLinecap="round"></path></svg>
              </span>
            </h1>
            <p className="text-lg text-[#576CBC] mb-8 leading-relaxed">
              EU · USA · JP — швидкий підбір та доставка. Оригінальні деталі та якісні аналоги для вашого автомобіля.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-gradient-to-r from-[#19376D] to-[#576CBC] text-white px-8 py-4 rounded-full font-semibold text-center hover:shadow-lg hover:shadow-[#576CBC]/40 hover:-translate-y-1 active:scale-95 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Замовити запчастину</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
              <a
                href="https://t.me/AUTOPARTS_borispol"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#19376D] text-[#19376D] px-8 py-4 rounded-full font-semibold text-center hover:bg-[#19376D] hover:text-white hover:shadow-lg hover:shadow-[#19376D]/20 hover:-translate-y-1 active:scale-95 transition-all duration-300"
              >
                Написати в Telegram
              </a>
            </div>
          </div>

          {/* SVG Illustration */}
          <div className="hidden lg:flex justify-center hover:scale-105 transition-transform duration-500">
            <svg viewBox="0 0 400 300" className="w-full max-w-md drop-shadow-2xl" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="60" y="150" width="280" height="90" rx="20" fill="url(#car-grad)" />
              <path d="M100 150 L140 100 L260 100 L300 150Z" fill="#A5D7E8" />
              <rect x="150" y="110" width="45" height="35" rx="5" fill="#CFE8F2" />
              <rect x="205" y="110" width="45" height="35" rx="5" fill="#CFE8F2" />
              <circle cx="130" cy="240" r="35" fill="#0B2447" className="animate-[spin_4s_linear_infinite]" style={{transformOrigin: '130px 240px'}}/>
              <circle cx="130" cy="240" r="15" fill="#CFE8F2" />
              <circle cx="270" cy="240" r="35" fill="#0B2447" className="animate-[spin_4s_linear_infinite]" style={{transformOrigin: '270px 240px'}}/>
              <circle cx="270" cy="240" r="15" fill="#CFE8F2" />
              <rect x="60" y="165" width="20" height="10" rx="5" fill="#FCD34D" />
              <rect x="320" y="165" width="20" height="10" rx="5" fill="#FCD34D" />
              <circle cx="50" cy="80" r="24" fill="white" className="animate-bounce drop-shadow-md" style={{animationDelay: '0.1s'}} />
              <text x="50" y="86" textAnchor="middle" fontSize="16">⚙️</text>
              <circle cx="350" cy="60" r="22" fill="white" className="animate-bounce drop-shadow-md" style={{animationDelay: '0.3s'}} />
              <text x="350" y="66" textAnchor="middle" fontSize="14">🔧</text>
              <circle cx="370" cy="140" r="20" fill="white" className="animate-bounce drop-shadow-md" style={{animationDelay: '0.2s'}} />
              <text x="370" y="146" textAnchor="middle" fontSize="12">🛞</text>
              <circle cx="30" cy="160" r="20" fill="white" className="animate-bounce drop-shadow-md" style={{animationDelay: '0.4s'}} />
              <text x="30" y="166" textAnchor="middle" fontSize="12">🔩</text>
              <defs>
                <linearGradient id="car-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#576CBC" />
                  <stop offset="100%" stopColor="#19376D" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
