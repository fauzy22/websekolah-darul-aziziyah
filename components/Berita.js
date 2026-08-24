import { useEffect, useState } from "react"
import { getBerita } from "../lib/berita"

export default function Berita() {
  const [berita, setBerita] = useState([])

  useEffect(() => {
    getBerita().then(setBerita).catch(() => setBerita([]))
  }, [])

  return (
    <section id="berita" className="py-24 bg-gradient-to-b from-white to-brand-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-800 mb-16 text-center">
          Berita & Kegiatan
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {berita.length > 0 ? (
            berita.map((b) => (
              <article
                key={b.id}
                className="bg-white rounded-3xl border border-brand-100 p-8 hover:shadow-xl transition-all duration-300"
              >
                <p className="text-xs text-brand-600 font-semibold mb-3 uppercase tracking-wide">
                  {b.tanggal}
                </p>
                <h3 className="text-lg font-bold mb-3 leading-snug text-brand-800">{b.judul}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{b.isi}</p>
              </article>
            ))
          ) : (
            <p className="text-gray-400 col-span-3 text-center text-lg">
              Belum ada berita saat ini.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}