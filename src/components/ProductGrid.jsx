const categories = [
  {
    id: 1,
    title: 'Nueva Colección',
    subtitle: '2026',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80',
    href: '#nueva-coleccion',
  },
  {
    id: 2,
    title: 'Vestidos',
    subtitle: 'Ver todo',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80',
    href: '#vestidos',
  },
  {
    id: 3,
    title: 'Abrigos',
    subtitle: 'Temporada',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80',
    href: '#abrigos',
  },
  {
    id: 4,
    title: 'Blazers',
    subtitle: 'Esenciales',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80',
    href: '#blazers',
  },
]

export default function ProductGrid() {
  return (
    <section id="productos" className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20">
      <div className="flex items-end justify-between mb-10 md:mb-14">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900">
          Categorías
        </h2>
        <a
          href="#tienda"
          className="text-xs font-medium tracking-widest uppercase text-gray-900 hover:text-gray-500 transition-colors border-b border-gray-900 pb-0.5"
        >
          Ver todo
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {categories.map((category) => (
          <a
            key={category.id}
            href={category.href}
            className="group relative overflow-hidden aspect-[3/4] bg-gray-100"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-white">
              <p className="text-[10px] md:text-xs font-medium tracking-widest uppercase opacity-90">
                {category.subtitle}
              </p>
              <h3 className="font-serif text-xl md:text-2xl font-semibold mt-1">
                {category.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
