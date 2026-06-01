export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[480px] max-h-[720px] flex flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://i.postimg.cc/sgdKNzh6/carru.jpg)' }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CTA */}
      <div className="absolute bottom-3 md:bottom-20 left-0 right-0 flex justify-center">
        <a
          href="#tienda"
          className="inline-block border border-white text-white text-xs font-medium tracking-widest uppercase px-10 py-3 hover:bg-white/10 transition-colors"
        >
          Explorar
        </a>
      </div>
    </section>
  )
}
