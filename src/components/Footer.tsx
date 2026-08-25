export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-6">FARA</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Esenciales de lujo minimalistas diseñados para el uso diario moderno.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase mb-6">Tienda</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Nuevos Productos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Más Vendidos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Promociones</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ofertas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase mb-6">Empresa</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Acerca de</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carreras</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Revista</a></li>


            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase mb-6">Redes</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Whatsapp</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase mb-6">Hoja informativa</h4>
            <p className="text-gray-400 text-sm mb-4">Recibe actualizaciones de lanzamientos exclusivos.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="tu@correo.com"
                className="flex-1 bg-gray-900 text-white px-4 py-2 text-sm border border-gray-800 focus:outline-none focus:border-gray-500"
              />
              <button className="bg-white text-black px-4 py-2 text-sm font-medium">Enviar</button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-[10px] tracking-widest uppercase">
          <p>© 2026 Fara. Todos los derechos reservados.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Política de Privacidad</a>
            <a href="#" className="hover:text-white">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  )
}