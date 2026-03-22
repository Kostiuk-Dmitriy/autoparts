import { Phone, Send, Instagram } from 'lucide-react'

const navLinks = [
  { href: '#about', label: 'Про нас' },
  { href: '#catalog', label: 'Каталог' },
  { href: '#how-it-works', label: 'Як це працює' },
  { href: '#contact', label: 'Контакти' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-3">
              <span className="text-[#60A5FA]">Auto</span>Parts
            </div>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              Запчастини для іномарок · Бориспіль
            </p>
            <p className="text-[#94A3B8] text-sm mt-2">EU · USA · JP</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Навігація</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#94A3B8] hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Контакти</h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+380631234567"
                className="flex items-center gap-3 text-[#94A3B8] hover:text-white text-sm transition-colors"
              >
                <Phone className="h-4 w-4" />
                +38 (063) 123-45-67
              </a>
              <a
                href="https://t.me/autoparts_boryspil"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#94A3B8] hover:text-white text-sm transition-colors"
              >
                <Send className="h-4 w-4" />
                Telegram
              </a>
              <a
                href="https://instagram.com/autoparts_boryspil"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#94A3B8] hover:text-white text-sm transition-colors"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1E293B] pt-6 text-center">
          <p className="text-[#64748B] text-sm">
            © 2025 AutoParts. Всі права захищені.
          </p>
        </div>
      </div>
    </footer>
  )
}
