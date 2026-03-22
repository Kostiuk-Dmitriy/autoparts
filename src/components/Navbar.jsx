import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { href: '#about', label: 'Про нас' },
  { href: '#catalog', label: 'Каталог' },
  { href: '#how-it-works', label: 'Як це працює' },
  { href: '#contact', label: 'Контакти' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-lg border-b border-[#A5D7E8]/30 shadow-sm transition-all duration-300">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <span className="text-3xl md:text-4xl font-extrabold tracking-tight drop-shadow-sm">
              <span className="text-[#576CBC]">Auto</span>
              <span className="text-[#0B2447]">Parts</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#576CBC] hover:text-[#19376D] font-semibold transition-colors text-lg hover:scale-105 transform"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="tel:0930934422"
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-[#19376D] to-[#576CBC] text-white px-6 py-3 rounded-full text-base font-bold hover:shadow-lg hover:shadow-[#576CBC]/30 hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
            >
              <Phone className="h-5 w-5" />
              Зателефонувати
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[#0B2447] hover:scale-110 active:scale-95 transition-transform"
              aria-label="Меню"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-[#CFE8F2]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-4 text-[#0B2447] font-bold hover:text-[#19376D] transition-colors text-xl"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:0930934422"
              className="mt-6 flex items-center gap-3 bg-gradient-to-r from-[#19376D] to-[#576CBC] text-white px-8 py-4 rounded-full text-lg font-bold w-fit shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
            >
              <Phone className="h-5 w-5" />
              Зателефонувати
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
