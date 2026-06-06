export default function Hero() {
  return (
    <section className="relative w-full aspect-video overflow-hidden flex flex-col items-center justify-center">
      {/* Background image */}
      <img
        src="https://i.postimg.cc/v857dcxk/bann3r.jpg"
        alt="Banner"
        className="w-full h-full object-cover"
      />

      {/* Subtle Gradient Overlay for better depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

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
  );
}
