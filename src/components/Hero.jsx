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

          {/* Image Illustration */}
          <div className="hidden lg:flex flex-col items-center justify-center group w-full">
            {/* Foreground Car */}
            <img 
              src="/hero-car.png" 
              alt="AutoParts Car" 
              className="relative z-10 w-full max-w-[480px] object-contain drop-shadow-[0_20px_40px_rgba(11,36,71,0.25)] group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-500" 
            />
            {/* Text Underneath (Wheels specifically overlapping the letters) */}
            <h2 className="relative z-0 -mt-36 lg:-mt-44 text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0B2447] to-[#576CBC] tracking-[0.1em] uppercase drop-shadow-sm transition-transform duration-500 select-none whitespace-nowrap">
              AutoParts
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
