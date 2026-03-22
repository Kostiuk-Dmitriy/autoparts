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
              className="bg-white rounded-xl p-6 border border-[#CFE8F2] shadow-sm hover:shadow-md hover:border-[#576CBC] transition-all text-center group"
            >
              <div className="text-4xl mb-3">{cat.emoji}</div>
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
