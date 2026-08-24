export default function Hero() {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background photo — SD dengan fasilitas modern */}
      <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1920&q=80')"
      }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-900/70 via-brand-800/50 to-brand-900/80"></div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <p className="text-brand-100 font-semibold mb-4 tracking-[0.3em] uppercase text-sm">
          Madrasah Ibtidaiyah
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 drop-shadow-lg">
          DARUL AZIZIYAH
        </h1>
        <p className="text-xl md:text-2xl text-brand-50 leading-relaxed mb-10 max-w-3xl mx-auto">
          Cerdas secara intelektual, kuat secara spiritual. Kami menyiapkan generasi Qur&apos;ani yang berakhlak mulia dan siap menghadapi masa depan.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#kontak" className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl">
            Daftar Sekarang
          </a>
          <a href="#profil" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-8 py-3.5 rounded-full font-semibold transition-all">
            Kenali Kami
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}