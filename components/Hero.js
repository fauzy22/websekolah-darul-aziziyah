export default function Hero() {
  return (
    <section id="beranda" className="relative w-full min-h-screen flex items-center justify-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1920&q=80')",
          }}
        ></div>
        {/* Emerald Green Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-800/90 to-emerald-700/40 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center text-white">
        <h2 className="text-sm md:text-base font-semibold tracking-[0.3em] uppercase text-emerald-200 mb-4 opacity-90">
          Madrasah Ibtidaiyah
        </h2>
        <h1 className="text-6xl md:text-[72px] md:leading-[1.1] font-black tracking-tighter mb-6 drop-shadow-lg">
          DARUL AZIZIYAH
        </h1>
        <p className="text-xl md:text-2xl text-emerald-50/90 max-w-2xl mx-auto mb-10 font-medium">
          &ldquo;Cerdas intelektual, kuat spiritual&rdquo;
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#kontak"
            className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 bg-white text-emerald-800 font-semibold rounded-lg shadow-lg hover:bg-emerald-50 transition-all active:scale-95"
          >
            Daftar Sekarang
          </a>
          <a
            href="#profil"
            className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all active:scale-95"
          >
            Kenali Kami
          </a>
        </div>
      </div>
    </section>
  )
}