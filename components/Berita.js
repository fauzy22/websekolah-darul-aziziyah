import { useEffect, useState } from "react"
import { getBerita } from "../lib/berita"

export default function Berita() {
  const [berita, setBerita] = useState([])

  useEffect(() => {
    getBerita().then(setBerita)
  }, [])

  return (
    <section id="berita" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-4">
            Berita &amp; Kegiatan
          </h2>
          <p className="text-lg text-gray-600">Kabar terbaru dari lingkungan sekolah</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {berita.length === 0 ? (
            <p className="text-gray-400 col-span-3 text-center text-lg">Belum ada berita saat ini.</p>
          ) : (
            berita.map((b) => (
              <div
                key={b.id}
                className="group bg-white rounded-3xl overflow-hidden border border-emerald-100 hover:shadow-xl transition-all"
              >
                <div className="h-48 bg-emerald-100 flex items-center justify-center">
                  <span className="text-6xl">📰</span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-emerald-600 font-semibold mb-2 uppercase tracking-wider">
                    {b.tanggal}
                  </p>
                  <h3 className="text-lg font-bold text-emerald-800 mb-2 group-hover:text-emerald-600 transition-colors">
                    {b.judul}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{b.isi}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}