import { useState } from 'react'
import { Phone, Send, Instagram, MapPin, Clock } from 'lucide-react'

const PHONE_PATTERN = /^\+?[\d\s\-()]{7,20}$/

export default function ContactForm({ prefilledPart, onPartChange }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    car: '',
    contact: 'viber',
  })
  const [phoneError, setPhoneError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'part') {
      if (onPartChange) onPartChange(value)
      return
    }
    setForm((prev) => ({ ...prev, [name]: value }))
    if (name === 'phone') {
      setPhoneError('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!PHONE_PATTERN.test(form.phone)) {
      setPhoneError('Введіть коректний номер телефону')
      return
    }

    const TELEGRAM_TOKEN = "8752085527:AAEkPI5X5kdArOC7Cl1NWhGnC9DQ8rq3PV8";
    const CHAT_ID = "5157938433";
    const partText = prefilledPart || form.part || "—";

    const text = 
      `🔧 <b>Нова заявка — AutoParts Бориспіль</b>\n\n` +
      `👤 Ім'я: ${form.name}\n` +
      `📞 Телефон: ${form.phone}\n` +
      `🚗 Авто: ${form.car}\n` +
      `🔩 Деталь: ${partText}\n` +
      `📱 Спосіб зв'язку: ${form.contact}`;

    try {
      await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text,
          parse_mode: "HTML"
        })
      });
      alert("✅ Заявку успішно відправлено!");
      setForm({ name: '', phone: '', car: '', contact: 'viber' });
      if (onPartChange) onPartChange('');
    } catch (error) {
      console.error(error);
      alert("❌ Відбулася помилка. Спробуйте пізніше або зв'яжіться з нами іншим способом.");
    }
  }

  return (
    <section id="contact" className="py-24 bg-[#F4F9FB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B2447] mb-4">
            Замовити запчастину
          </h2>
          <p className="text-[#576CBC] text-lg max-w-xl mx-auto">
            Заповніть форму — ми зв'яжемося з вами якнайшвидше
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-[#A5D7E8]/40 shadow-[0_8px_30px_rgba(11,36,71,0.04)] hover:shadow-[0_8px_30px_rgba(11,36,71,0.08)] transition-shadow">
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-[#0B2447] mb-2">Ім'я</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Ваше ім'я"
                  className="w-full border border-[#CFE8F2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#576CBC] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0B2447] mb-2">Телефон</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="+380 xx xxx xx xx"
                  className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#576CBC] transition-colors ${phoneError ? 'border-red-400' : 'border-[#CFE8F2]'}`}
                />
                {phoneError && (
                  <p className="text-red-500 text-xs mt-1">{phoneError}</p>
                )}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#0B2447] mb-2">VIN-cod Марка та модель авто</label>
              <input
                type="text"
                name="car"
                value={form.car}
                onChange={handleChange}
                required
                placeholder="Наприклад: BMW E46, 2003"
                className="w-full border border-[#CFE8F2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#576CBC] transition-colors"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#0B2447] mb-2">Потрібна деталь</label>
              <textarea
                name="part"
                value={prefilledPart || ''}
                onChange={handleChange}
                required
                rows={3}
                placeholder="Опишіть потрібну деталь або категорію"
                className="w-full border border-[#CFE8F2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#576CBC] transition-colors resize-none"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#0B2447] mb-3">Спосіб зв'язку</label>
              <div className="flex flex-wrap gap-4">
                {['viber', 'telegram', 'call'].map((method) => (
                  <label key={method} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="contact"
                      value={method}
                      checked={form.contact === method}
                      onChange={handleChange}
                      className="accent-[#19376D]"
                    />
                    <span className="text-sm text-[#0B2447]">
                      {method === 'viber' ? 'Viber' : method === 'telegram' ? 'Telegram' : 'Дзвінок'}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#19376D] to-[#576CBC] text-white py-4 rounded-full font-bold hover:shadow-lg hover:shadow-[#576CBC]/30 hover:-translate-y-1 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 mt-4"
            >
              <Send className="h-4 w-4" />
              Надіслати заявку
            </button>
          </form>

          {/* Contact cards */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-xl text-[#0B2447] mb-2">Зв'яжіться з нами</h3>
            <a
              href="tel:0930934422"
              className="flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-[#A5D7E8]/40 shadow-[0_4px_16px_rgba(11,36,71,0.02)] hover:shadow-[0_8px_24px_rgba(87,108,188,0.12)] hover:border-[#576CBC] hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="bg-gradient-to-br from-[#E8F4F8] to-[#CFE8F2] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 shadow-inner">
                <Phone className="h-6 w-6 text-[#19376D] group-hover:text-[#576CBC] transition-colors" />
              </div>
              <div>
                <p className="text-xs text-[#576CBC] mb-0.5">Телефон / Viber</p>
                <p className="font-semibold text-[#0B2447]">093-093-44-22</p>
              </div>
            </a>
            <a
              href="https://t.me/AUTOPARTS_borispol"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-[#A5D7E8]/40 shadow-[0_4px_16px_rgba(11,36,71,0.02)] hover:shadow-[0_8px_24px_rgba(87,108,188,0.12)] hover:border-[#576CBC] hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="bg-gradient-to-br from-[#E8F4F8] to-[#CFE8F2] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-inner">
                <Send className="h-6 w-6 text-[#19376D] group-hover:text-[#576CBC] transition-colors" />
              </div>
              <div>
                <p className="text-xs text-[#576CBC] mb-0.5">Telegram</p>
                <p className="font-semibold text-[#0B2447]">@AUTOPARTS_borispol</p>
              </div>
            </a>
            <a
              href="https://www.instagram.com/autoparts_boryspil?igsh=anl0Zjhid2N4Ymk0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-[#A5D7E8]/40 shadow-[0_4px_16px_rgba(11,36,71,0.02)] hover:shadow-[0_8px_24px_rgba(87,108,188,0.12)] hover:border-[#576CBC] hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="bg-gradient-to-br from-[#E8F4F8] to-[#CFE8F2] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 shadow-inner">
                <Instagram className="h-6 w-6 text-[#19376D] group-hover:text-[#576CBC] transition-colors" />
              </div>
              <div>
                <p className="text-xs text-[#576CBC] mb-0.5">Instagram</p>
                <p className="font-semibold text-[#0B2447]">@AUTOPARTS_borispol</p>
              </div>
            </a>

            <div className="mt-4 bg-gradient-to-br from-[#F4F9FB] to-[#E8F4F8] rounded-3xl p-6 md:p-8 border border-[#A5D7E8]/50 shadow-inner space-y-4">
              <a 
                href="https://maps.app.goo.gl/knVvwJZSUtPw7veZA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <div className="bg-white p-2 rounded-lg shadow-sm group-hover:bg-[#576CBC] transition-colors duration-300">
                  <MapPin className="h-5 w-5 text-[#19376D] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-sm text-[#19376D] font-medium group-hover:text-[#576CBC] transition-colors">м. Бориспіль, Київська область</p>
                  <p className="text-sm text-[#576CBC] mt-0.5 underline hover:text-[#576CBC] decoration-transparent hover:decoration-[#576CBC] transition-all">Відкрити в Google Maps</p>
                </div>
              </a>

              <div className="flex items-start gap-3 border-t border-[#A5D7E8]/60 pt-4">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <Clock className="h-5 w-5 text-[#19376D]" />
                </div>
                <div>
                  <p className="text-sm text-[#19376D] font-medium mb-1">Графік роботи</p>
                  <div className="text-sm text-[#576CBC] space-y-0.5">
                    <div className="flex gap-2"><span className="w-12">Пн-Пт:</span> <span className="font-medium text-[#0B2447]">9.00 - 19.00</span></div>
                    <div className="flex gap-2"><span className="w-12">Сб:</span> <span className="font-medium text-[#0B2447]">9.00 - 17.00</span></div>
                    <div className="flex gap-2"><span className="w-12">Нд:</span> <span className="font-medium text-[#0B2447]">10.00 - 14.00</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
