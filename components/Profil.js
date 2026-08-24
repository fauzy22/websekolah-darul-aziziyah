const stats = [
  { icon: "👥", value: "250+", label: "Siswa Aktif" },
  { icon: "📚", value: "18", label: "Guru Berdedikasi" },
  { icon: "🏫", value: "12+", label: "Tahun Berkarya" },
  { icon: "✅", value: "100%", label: "Fasilitas Modern" },
]

export default function Profil() {
  return (
    <section id="profil" className="py-24 bg-gray-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform">
            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80"
              alt="Siswa belajar di kelas MI Darul Aziziyah"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>

          {/* Text Side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6">
              Membangun Generasi Rabbani
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
              MI Darul Aziziyah berkomitmen memberikan pendidikan dasar terbaik
              yang menyeimbangkan ilmu pengetahuan modern dengan pemahaman agama
              Islam yang mendalam.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow text-center"
                >
                  <div className="text-4xl mb-2">{s.icon}</div>
                  <h3 className="text-3xl font-bold text-emerald-700 mb-1">{s.value}</h3>
                  <p className="text-sm text-gray-600">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}