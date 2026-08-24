const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80",
    alt: "Kegiatan belajar mengajar di kelas modern",
    caption: "Kelas Nyaman & Modern"
  },
  {
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b0754655?auto=format&fit=crop&w=600&q=80",
    alt: "Anak-anak bermain di taman sekolah",
    caption: "Taman Bermain Aman"
  },
  {
    src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=600&q=80",
    alt: "Laboratorium komputer sekolah",
    caption: "Lab Komputer Lengkap"
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80",
    alt: "Perpustakaan sekolah",
    caption: "Perpustakaan Luas"
  },
  {
    src: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=600&q=80",
    alt: "Kegiatan olahraga sekolah",
    caption: "Lapangan Olahraga"
  },
  {
    src: "https://images.unsplash.com/photo-1498176979269-3112d5a3aa31?auto=format&fit=crop&w=600&q=80",
    alt: "Upacara bendera sekolah",
    caption: "Upacara Rutin Senin"
  },
]

export default function Galeri() {
  return (
    <section id="galeri" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-800 mb-16 text-center">
          Galeri Kegiatan
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="group rounded-3xl overflow-hidden border border-brand-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 bg-white">
                <p className="font-semibold text-brand-800">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 mt-8">
          Foto ilustratif dari berbagai sekolah — ganti dengan foto kegiatan asli nanti.
        </p>
      </div>
    </section>
  )
}