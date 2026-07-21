export default function Hero() {
  return (
    <section className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden flex flex-col items-center justify-center">
      <img
        src="https://res.cloudinary.com/dpnd307xc/image/upload/v1784594013/bann3r_de5pcy.png"
        alt="FARA Collection Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
      <div className="absolute bottom-10 md:bottom-20 left-0 right-0 flex justify-center">
        <a
          href="#tienda"
          className="inline-block border border-white text-white text-xs font-medium tracking-widest uppercase px-12 py-4 hover:bg-white hover:text-black transition-all duration-300"
        >
          Explorar
        </a>
      </div>
    </section>
  );
}