const categories = [
  { name: 'Двигун', emoji: '🔧' },
  { name: 'Гальмівна система', emoji: '🛑' },
  { name: 'Підвіска', emoji: '🔩' },
  { name: 'Фільтри', emoji: '🌀' },
  { name: 'Електрика', emoji: '⚡' },
  { name: 'Кузов', emoji: '🚗' },
  { name: 'Трансмісія', emoji: '⚙️' },
  { name: 'Оливи та рідини', emoji: '🛢️' },
]

export default function CatalogGrid({ onCategorySelect }) {
  const handleCategoryClick = (categoryName) => {
    onCategorySelect(categoryName)
  }

  return (
    <section id="catalog" className="py-20 bg-[#F4F9FB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B2447] mb-4">
            Категорії запчастин
          </h2>
          <p className="text-[#576CBC] text-lg max-w-xl mx-auto">
            Оберіть категорію — і ми підберемо потрібну деталь
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => handleCategoryClick(cat.name)}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-[#A5D7E8]/40 shadow-[0_4px_16px_rgba(11,36,71,0.04)] hover:shadow-[0_20px_36px_rgba(87,108,188,0.15)] hover:border-[#576CBC]/40 hover:-translate-y-2 transition-all duration-300 text-center group cursor-pointer active:scale-95"
            >
              <div className="text-5xl mb-4 group-hover:scale-125 group-hover:-rotate-6 transition-transform duration-300 drop-shadow-sm">{cat.emoji}</div>
              <p className="font-medium text-[#0B2447] text-sm group-hover:text-[#19376D] transition-colors">
                {cat.name}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
