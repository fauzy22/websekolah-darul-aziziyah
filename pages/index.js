import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { getBerita } from "../lib/berita"
import { useReveal } from "../lib/useReveal"

const program = [
  { title: "Tahfidz Al-Qur'an", desc: "Program unggulan menghafal Al-Qur'an dengan metode talaqqi dan tartil sejak kelas 1." },
  { title: "Kurikulum Merdeka", desc: "Pembelajaran yang menumbuhkan profil pelajar Pancasila dan literasi digital." },
  { title: "Bahasa Arab & Inggris", desc: "Pondasi bahasa global dan bahasa sumber keilmuan Islam sejak dini." },
  { title: "Akhlak & Adab", desc: "Pembiasaan karakter mulia melalui keteladanan dan lingkungan sekolah." },
]

export default function Home() {
  const [berita, setBerita] = useState([])
  const [form, setForm] = useState({ nama: "", email: "", pesan: "" })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  // Reveal refs per section
  const [profRef, profShown] = useReveal()
  const [progRef, progShown] = useReveal()
  const [newsRef, newsShown] = useReveal()
  const [galRef, galShown] = useReveal()
  const [conRef, conShown] = useReveal()

  useEffect(() => {
    getBerita().then(setBerita).catch(() => setBerita([]))
  }, [])

  const SHEETS_PROXY = "https://script.google.com/macros/s/AKfycby2jjGr7V8qFentLE3rKaxcqUy6NvDrSBPiuS4ufN1O9y_UyEzchgRMzKFhxdtWm0A/exec"
  const submit = async (e) => {
    e.preventDefault()
    setLoading(true); setError("")
    try {
      const res = await fetch(SHEETS_PROXY, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.ok) { setSent(true); setForm({ nama: "", email: "", pesan: "" }) }
      else setError(data.msg || "Gagal mengirim. Coba lagi.")
    } catch {
      setError("Terjadi gangguan jaringan. Coba lagi nanti.")
    } finally { setLoading(false) }
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <section id="beranda" className="max-w-7xl mx-auto px-6 pt-24 pb-12 animate-fade-up">
        <div className="rounded-3xl overflow-hidden shadow-sm border border-black/5 mb-12">
          <img src="/banner-hero.svg" alt="Banner MI Darul Aziziyah" className="w-full h-auto" />
        </div>
        <div className="text-center">
          <p className="text-brand-600 font-medium mb-4 tracking-wide uppercase text-sm">Madrasah Ibtidaiyah</p>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-ink mb-6">MI Darul Aziziyah</h1>
          <p className="text-xl text-sub max-w-2xl mx-auto leading-relaxed">
            Cerdas secara intelektual, kuat secara spiritual. Kami menyiapkan generasi Qur'ani
            yang berakhlak mulia dan siap menghadapi masa depan.
          </p>
          <div className="mt-10 flex gap-4 justify-center">
            <a href="#kontak" className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-full font-medium transition-colors">Daftar Sekarang</a>
            <a href="#profil" className="border border-black/10 hover:border-black/30 px-6 py-3 rounded-full font-medium transition-colors">Kenali Kami</a>
          </div>
        </div>
      </section>

      <section id="profil" ref={profRef} className={`bg-brand-50 py-24 ${profShown ? "reveal is-visible" : "reveal"}`}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Profil Sekolah</h2>
            <p className="text-sub leading-relaxed mb-4">
              MI Darul Aziziyah adalah lembaga pendidikan dasar Islam yang menggabungkan
              kurikulum nasional dengan pembelajaran keagamaan yang mendalam.
            </p>
            <p className="text-sub leading-relaxed">
              Didukung tenaga pendidik berpengalaman dan lingkungan belajar nyaman,
              kami berkomitmen mencetak santri yang cinta ilmu dan cinta kepada Sang Pencipta.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div><p className="text-3xl font-semibold text-brand-600">250+</p><p className="text-xs text-sub mt-1">Siswa Aktif</p></div>
              <div><p className="text-3xl font-semibold text-brand-600">18</p><p className="text-xs text-sub mt-1">Guru & Staff</p></div>
              <div><p className="text-3xl font-semibold text-brand-600">12</p><p className="text-xs text-sub mt-1">Tahun Berdiri</p></div>
            </div>
          </div>
          <div className="rounded-3xl bg-white shadow-sm border border-black/5 p-10 text-center">
            <div className="w-24 h-24 mx-auto rounded-2xl bg-brand-100 flex items-center justify-center text-brand-600 text-3xl font-semibold">DA</div>
            <p className="mt-5 font-medium">Darul Aziziyah</p>
            <p className="text-sm text-sub">"Aziz = Mulia"</p>
          </div>
        </div>
      </section>

      <section id="program" ref={progRef} className={`py-24 ${progShown ? "reveal is-visible" : "reveal"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12 text-center">Program Unggulan</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {program.map((p, i) => (
              <div key={p.title} className={`p-6 rounded-2xl border border-black/5 hover:shadow-md transition-shadow reveal delay-${(i % 4) + 1} ${progShown ? "is-visible" : ""}`}>
                <h3 className="font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-sub leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="berita" ref={newsRef} className={`bg-brand-50 py-24 ${newsShown ? "reveal is-visible" : "reveal"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12 text-center">Berita & Kegiatan</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {berita.length > 0 ? berita.map((b, i) => (
              <article key={b.id} className={`bg-white rounded-2xl border border-black/5 p-6 hover:shadow-md transition-shadow reveal delay-${(i % 4) + 1} ${newsShown ? "is-visible" : ""}`}>
                <p className="text-xs text-brand-600 mb-2">{b.tanggal}</p>
                <h3 className="font-semibold mb-2 leading-snug">{b.judul}</h3>
                <p className="text-sm text-sub leading-relaxed">{b.isi}</p>
              </article>
            )) : (
              <p className="text-sub col-span-3 text-center">Belum ada berita.</p>
            )}
          </div>
        </div>
      </section>

      <section id="galeri" ref={galRef} className={`py-24 ${galShown ? "reveal is-visible" : "reveal"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12 text-center">Galeri Kegiatan</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((n, i) => (
              <div key={n} className={`rounded-2xl overflow-hidden border border-black/5 hover:shadow-md transition-shadow reveal delay-${(i % 4) + 1} ${galShown ? "is-visible" : ""}`}>
                <img src="/galeri-contoh.svg" alt={`Galeri ${n}`} className="w-full h-auto" />
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-sub mt-6">Contoh placeholder — ganti dengan foto kegiatan asli nanti.</p>
        </div>
      </section>

      <section id="kontak" ref={conRef} className={`py-24 ${conShown ? "reveal is-visible" : "reveal"}`}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Hubungi Kami</h2>
          <p className="text-sub mb-10">Tertarik mendaftarkan putra-putri Anda? Kirim pesan dan tim kami akan merespons.</p>
          {sent ? (
            <p className="text-brand-600 font-medium">✅ Pesan terkirim! Kami akan segera menghubungi Anda.</p>
          ) : (
            <>
              {error && <p className="text-red-600 font-medium mb-4">{error}</p>}
              <form className="grid gap-4 text-left" onSubmit={submit}>
                <input className="border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="Nama Orang Tua" value={form.nama} onChange={(e) => setForm({ ...form, nama: e.target.value })} required />
                <input className="border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                <textarea className="border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500" rows="4" placeholder="Pesan" value={form.pesan} onChange={(e) => setForm({ ...form, pesan: e.target.value })} required />
                <button type="submit" disabled={loading} className="bg-brand-600 hover:bg-brand-700 disabled:opacity-50 text-white font-medium py-3 rounded-xl transition-colors">
                  {loading ? "Mengirim..." : "Kirim Pesan"}
                </button>
              </form>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
