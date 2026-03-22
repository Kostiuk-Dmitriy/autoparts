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

export default function CatalogGrid() {
  const handleCategoryClick = (categoryName) => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
      // Small delay to allow scroll, then focus/fill the part field
      setTimeout(() => {
        const partField = document.getElementById('part-field')
        if (partField) {
          partField.value = categoryName
          partField.focus()
        }
      }, 600)
    }
  }

  return (
    <section id="catalog" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            Категорії запчастин
          </h2>
          <p className="text-[#64748B] text-lg max-w-xl mx-auto">
            Оберіть категорію — і ми підберемо потрібну деталь
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => handleCategoryClick(cat.name)}
              className="bg-white rounded-xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#2563EB] transition-all text-center group"
            >
              <div className="text-4xl mb-3">{cat.emoji}</div>
              <p className="font-medium text-[#0F172A] text-sm group-hover:text-[#1E40AF] transition-colors">
                {cat.name}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
