# Fara Collections

Sitio web de e-commerce de moda minimalista diseñado para mostrar colecciones de ropa y accesorios. Fara Collections presenta una interfaz elegante y moderna con navegación responsive, catálogo de productos y experiencia de usuario optimizada.

## 🚀 Stack Tecnológico

- **React 19.2.6** - Framework de UI
- **Vite 8.0.12** - Build tool y servidor de desarrollo
- **TailwindCSS 3.4.19** - Framework de CSS utility-first
- **PostCSS 8.5.15** - Procesador de CSS
- **ESLint 10.3.0** - Linting de código

## ✨ Características

- **Barra de Anuncios**: Banner rotativo con promociones y anuncios (envíos gratis, descuentos, nuevas colecciones)
- **Navegación Responsive**: Menú de navegación adaptativo para desktop y móvil
- **Hero Section**: Sección principal con imagen de fondo y call-to-action
- **Grid de Categorías**: Visualización de categorías de productos (Nueva Colección, Vestidos, Abrigos, Blazers)
- **Footer Completo**: Información de marca, enlaces de navegación, suscripción a newsletter y redes sociales
- **Diseño Minimalista**: Estética elegante con tipografía serif y sans-serif
- **Iconos SVG**: Iconos integrados para búsqueda, cuenta, favoritos y carrito
- **Animaciones**: Transiciones suaves en hover y efectos de escala

## 📁 Estructura del Proyecto

```
fara-collections/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/
│   │   ├── AnnouncementBar.jsx    # Barra de anuncios rotativos
│   │   ├── Header.jsx             # Navegación principal
│   │   ├── Hero.jsx               # Sección hero
│   │   ├── ProductGrid.jsx        # Grid de categorías
│   │   └── Footer.jsx             # Footer del sitio
│   ├── App.css
│   ├── App.jsx                    # Componente principal
│   ├── index.css
│   └── main.jsx                   # Punto de entrada
├── index.html                     # Página principal
│   ├── head.html                  # Encabezado de la página
│   ├── body.html                  # Cuerpo de la página
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone <repository-url>
cd fara-collections
```

2. Instala las dependencias:
```bash
npm install
```

## 📦 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo en modo hot-reload
- `npm run build` - Construye el proyecto para producción
- `npm run preview` - Previsualiza la build de producción localmente
- `npm run lint` - Ejecuta ESLint para verificar el código

## 🎨 Personalización

### Colores y Estilos
Los estilos se configuran principalmente a través de TailwindCSS. Modifica `tailwind.config.js` para personalizar la paleta de colores y configuraciones globales.

### Contenido
- **Anuncios**: Edita el array `announcements` en `src/components/AnnouncementBar.jsx`
- **Categorías**: Modifica el array `categories` en `src/components/ProductGrid.jsx`
- **Enlaces de navegación**: Actualiza `navLinks` en `src/components/Header.jsx`

## 🌐 Despliegue

El proyecto está configurado para ser desplegado en plataformas como Vercel, Netlify o cualquier servicio de hosting estático. Ejecuta `npm run build` para generar la carpeta `dist` con los archivos de producción.

## 📄 Licencia

Este proyecto es privado y confidencial.