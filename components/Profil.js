import Image from "next/image"

export default function Profil() {
  return (
    <section id="profil" className="py-24 bg-gradient-to-b from-white via-brand-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-800 mb-4">Profil Sekolah</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            MI Darul Aziziyah adalah Madrasah Ibtidaiyah yang menggabungkan
            kurikulum nasional dan pembelajaran keagamaan yang mendalam,
            didukung oleh tenaga pendidik berpengalaman dan lingkungan belajar nyaman.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Gambar SD modern */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-brand-100">
            <img
              src="https://images.unsplash.com/photo-1580894899510-9f3c7d0cf0e1?auto=format&fit=crop&w=800&q=80"
              alt="Fasilitas Sekolah MI Darul Aziziyah"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 to-transparent" />
          </div>

          {/* Statistik */}
          <div className="space-y-8">
            <div className="border border-brand-100 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <p className="text-3xl font-bold text-brand-600 mb-1">250+</p>
              <p className="text-sm text-gray-600">Siswa Aktif yang bersemangat belajar</p>
            </div>
            <div className="border border-brand-100 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <p className="text-3xl font-bold text-brand-600 mb-1">18</p>
              <p className="text-sm text-gray-600">Guru dan Staf pendidik yang kompeten</p>
            </div>
            <div className="border border-brand-100 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <p className="text-3xl font-bold text-brand-600 mb-1">12+</p>
              <p className="text-sm text-gray-600">Tahun pengalaman pendidikan unggulan</p>
            </div>
            <div className="border border-brand-100 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <p className="text-3xl font-bold text-brand-600 mb-1">100%</p>
              <p className="text-sm text-gray-600">Kompleks fasilitas modern untuk anak</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}