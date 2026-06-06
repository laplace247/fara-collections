import { useState } from "react";

const navLinks = [
  { label: "Productos", href: "#productos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Tienda", href: "#tienda" },
  { label: "Acerca", href: "#acerca" },
];

function IconButton({ children, label }) {
  return (
    <button
      type="button"
      aria-label={label}
      className="text-gray-900 hover:text-gray-500 transition-colors p-1"
    >
      {children}
    </button>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="relative flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex-shrink-0 z-10">
            <span className="block font-serif text-3xl md:text-4xl font-semibold leading-none tracking-tight text-gray-900">
              FARA
            </span>
            <span className="block text-[10px] md:text-xs font-sans font-light tracking-[0.25em] uppercase text-gray-700 mt-1">
              collections
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium tracking-widest uppercase text-gray-900 transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-px bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-3 md:gap-5 z-10">
            <div className="hidden sm:flex items-center gap-3 md:gap-5">
              <IconButton label="Buscar">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </IconButton>
              <IconButton label="Mi cuenta">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </IconButton>
              <IconButton label="Favoritos">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </IconButton>
              <IconButton label="Carrito">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </IconButton>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden text-gray-900 hover:text-gray-500 p-1"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-100 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium tracking-widest uppercase text-gray-900 hover:text-gray-500 transition-colors py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
