const programs = [
  {
    icon: "📖",
    title: "Tahfidz Al-Qur'an",
    desc: "Program unggulan menghafal Al-Qur'an dengan metode talaqqi dan tartil sejak kelas 1.",
  },
  {
    icon: "📚",
    title: "Kurikulum Merdeka",
    desc: "Pembelajaran yang menumbuhkan profil pelajar Pancasila dan literasi digital.",
  },
  {
    icon: "🌍",
    title: "Bahasa Arab & Inggris",
    desc: "Pondasi bahasa global dan bahasa sumber keilmuan Islam sejak dini.",
  },
  {
    icon: "🤲",
    title: "Akhlak & Adab",
    desc: "Pembiasaan karakter mulia melalui keteladanan dan lingkungan sekolah.",
  },
]

export default function Program() {
  return (
    <section id="program" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-800 mb-16 text-center">
          Program Unggulan
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((p) => (
            <div
              key={p.title}
              className="group p-8 rounded-3xl border border-brand-100 bg-brand-50/50 hover:bg-white hover:shadow-xl hover:border-brand-200 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-brand-100 group-hover:bg-brand-600 group-hover:text-white flex items-center justify-center text-3xl transition-colors">
                {p.icon}
              </div>
              <h3 className="text-lg font-bold mt-6 mb-3 text-brand-800">{p.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}