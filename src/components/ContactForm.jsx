import { useState, useEffect } from 'react'
import { Phone, Send, Instagram } from 'lucide-react'

const PHONE_PATTERN = /^\+?[\d\s\-()]{7,20}$/

export default function ContactForm({ prefilledPart, onPartChange }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    car: '',
    part: '',
    contact: 'viber',
  })
  const [phoneError, setPhoneError] = useState('')

  useEffect(() => {
    if (prefilledPart) {
      setForm((prev) => ({ ...prev, part: prefilledPart }))
    }
  }, [prefilledPart])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (name === 'phone') {
      setPhoneError('')
    }
    if (name === 'part' && onPartChange) {
      onPartChange(value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!PHONE_PATTERN.test(form.phone)) {
      setPhoneError('Введіть коректний номер телефону')
      return
    }
    const text = encodeURIComponent(
      `Нова заявка!\nІм'я: ${form.name}\nТелефон: ${form.phone}\nАвто: ${form.car}\nДеталь: ${form.part}\nСпосіб зв'язку: ${form.contact}`
    )
    window.open(`https://t.me/autoparts_boryspil?text=${text}`, '_blank')
  }

  return (
    <section id="contact" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            Замовити запчастину
          </h2>
          <p className="text-[#64748B] text-lg max-w-xl mx-auto">
            Заповніть форму — ми зв'яжемося з вами якнайшвидше
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 border border-[#E2E8F0] shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-[#0F172A] mb-2">Ім'я</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Ваше ім'я"
                  className="w-full border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2563EB] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0F172A] mb-2">Телефон</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="+380 xx xxx xx xx"
                  className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2563EB] transition-colors ${phoneError ? 'border-red-400' : 'border-[#E2E8F0]'}`}
                />
                {phoneError && (
                  <p className="text-red-500 text-xs mt-1">{phoneError}</p>
                )}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#0F172A] mb-2">Марка та модель авто</label>
              <input
                type="text"
                name="car"
                value={form.car}
                onChange={handleChange}
                required
                placeholder="Наприклад: BMW E46, 2003"
                className="w-full border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2563EB] transition-colors"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#0F172A] mb-2">Потрібна деталь</label>
              <textarea
                name="part"
                value={form.part}
                onChange={handleChange}
                required
                rows={3}
                placeholder="Опишіть потрібну деталь або категорію"
                className="w-full border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2563EB] transition-colors resize-none"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#0F172A] mb-3">Спосіб зв'язку</label>
              <div className="flex flex-wrap gap-4">
                {['viber', 'telegram', 'call'].map((method) => (
                  <label key={method} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="contact"
                      value={method}
                      checked={form.contact === method}
                      onChange={handleChange}
                      className="accent-[#1E40AF]"
                    />
                    <span className="text-sm text-[#0F172A]">
                      {method === 'viber' ? 'Viber' : method === 'telegram' ? 'Telegram' : 'Дзвінок'}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#1E40AF] text-white py-3 rounded-full font-medium hover:bg-[#2563EB] transition-colors flex items-center justify-center gap-2"
            >
              <Send className="h-4 w-4" />
              Надіслати заявку
            </button>
          </form>

          {/* Contact cards */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-xl text-[#0F172A] mb-2">Зв'яжіться з нами</h3>
            <a
              href="tel:+380631234567"
              className="flex items-center gap-4 bg-white rounded-xl p-5 border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#2563EB] transition-all"
            >
              <div className="bg-[#EFF6FF] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-[#1E40AF]" />
              </div>
              <div>
                <p className="text-xs text-[#64748B] mb-0.5">Телефон / Viber</p>
                <p className="font-semibold text-[#0F172A]">+38 (063) 123-45-67</p>
              </div>
            </a>
            <a
              href="https://t.me/autoparts_boryspil"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white rounded-xl p-5 border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#2563EB] transition-all"
            >
              <div className="bg-[#EFF6FF] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <Send className="h-6 w-6 text-[#1E40AF]" />
              </div>
              <div>
                <p className="text-xs text-[#64748B] mb-0.5">Telegram</p>
                <p className="font-semibold text-[#0F172A]">@autoparts_boryspil</p>
              </div>
            </a>
            <a
              href="https://instagram.com/autoparts_boryspil"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white rounded-xl p-5 border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#2563EB] transition-all"
            >
              <div className="bg-[#EFF6FF] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <Instagram className="h-6 w-6 text-[#1E40AF]" />
              </div>
              <div>
                <p className="text-xs text-[#64748B] mb-0.5">Instagram</p>
                <p className="font-semibold text-[#0F172A]">@autoparts_boryspil</p>
              </div>
            </a>

            <div className="mt-4 bg-[#EFF6FF] rounded-xl p-5 border border-[#BFDBFE]">
              <p className="text-sm text-[#1E40AF] font-medium">📍 Бориспіль, Київська область</p>
              <p className="text-sm text-[#64748B] mt-1">Час роботи: Пн–Сб, 9:00–18:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
