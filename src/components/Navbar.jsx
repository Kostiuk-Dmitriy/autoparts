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
    <header className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-[#E2E8F0]">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <span className="text-xl font-bold">
              <span className="text-[#2563EB]">Auto</span>
              <span className="text-[#0F172A]">Parts</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#64748B] hover:text-[#1E40AF] font-medium transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+380631234567"
              className="hidden sm:flex items-center gap-2 bg-[#1E40AF] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#2563EB] transition-colors"
            >
              <Phone className="h-4 w-4" />
              Зателефонувати
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[#0F172A]"
              aria-label="Меню"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-[#E2E8F0]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-[#0F172A] font-medium hover:text-[#1E40AF] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+380631234567"
              className="mt-3 flex items-center gap-2 bg-[#1E40AF] text-white px-4 py-2 rounded-full text-sm font-medium w-fit"
            >
              <Phone className="h-4 w-4" />
              Зателефонувати
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
