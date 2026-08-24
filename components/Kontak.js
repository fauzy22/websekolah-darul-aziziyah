import { useState } from "react"

const SHEETS_PROXY = "https://script.google.com/macros/s/AKfycby2jjGr7V8qFentLE3rKaxcqUy6NvDrSBPiuS4ufN1O9y_UyEzchgRMzKFhxdtWm0A/exec"

export default function Kontak() {
  const [form, setForm] = useState({ nama: "", email: "", pesan: "" })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    try {
      await fetch(SHEETS_PROXY, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(form),
      })
      setSent(true)
      setForm({ nama: "", email: "", pesan: "" })
    } catch {
      setError("Terjadi gangguan jaringan. Coba lagi nanti.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="kontak" className="py-24 bg-gradient-to-b from-brand-50 to-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-800 mb-4 text-center">
          Hubungi Kami
        </h2>
        <p className="text-lg text-gray-600 mb-12 text-center">
          Tertarik mendaftarkan putra-putri Anda? Kirim pesan dan tim kami akan merespons.
        </p>

        {sent ? (
          <div className="bg-brand-100 border border-brand-200 rounded-3xl p-8 text-center">
            <p className="text-2xl font-bold text-brand-700">✅ Pesan Terkirim!</p>
            <p className="text-brand-600 mt-2">Tim kami akan segera menghubungi Anda.</p>
          </div>
        ) : (
          <form className="grid gap-4" onSubmit={submit}>
            {error && (
              <p className="text-red-600 font-medium text-center bg-red-50 border border-red-200 rounded-xl py-2">
                {error}
              </p>
            )}
            <input
              className="border border-brand-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
              placeholder="Nama Orang Tua"
              value={form.nama}
              onChange={(e) => setForm({ ...form, nama: e.target.value })}
              required
            />
            <input
              className="border border-brand-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
              placeholder="Email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <textarea
              className="border border-brand-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
              rows="4"
              placeholder="Pesan"
              value={form.pesan}
              onChange={(e) => setForm({ ...form, pesan: e.target.value })}
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-brand-600 hover:bg-brand-700 disabled:opacity-50 text-white font-semibold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-xl"
            >
              {loading ? "Mengirim..." : "Kirim Pesan"}
            </button>
          </form>
        )}

        <div className="mt-12 grid md:grid-cols-3 gap-4 text-sm text-gray-600">
          <div className="text-center p-4 rounded-2xl border border-brand-100 bg-white">
            <p className="font-semibold text-brand-700 mb-1">📍 Alamat</p>
            <p>[Alamat Sekolah]</p>
          </div>
          <div className="text-center p-4 rounded-2xl border border-brand-100 bg-white">
            <p className="font-semibold text-brand-700 mb-1">📞 Telepon</p>
            <p>[Nomor Telepon]</p>
          </div>
          <div className="text-center p-4 rounded-2xl border border-brand-100 bg-white">
            <p className="font-semibold text-brand-700 mb-1">✉️ Email</p>
            <p>info@darulaziziyah.sch.id</p>
          </div>
        </div>
      </div>
    </section>
  )
}