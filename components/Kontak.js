import { useState } from "react"

const SHEETS_PROXY = "https://script.google.com/macros/s/AKfycby2jjGr7V8qFentLE3rKaxcqUy6NvDrSBPiuS4ufN1O9y_UyEzchgRMzKFhxdtWm0A/exec"

export default function Kontak() {
  const [formData, setFormData] = useState({ nama: "", email: "", pesan: "" })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch(SHEETS_PROXY, {
        method: "POST",
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setSubmitted(true)
        setFormData({ nama: "", email: "", pesan: "" })
      }
    } catch (err) {
      console.error("Form submit failed:", err)
    }
    setSubmitting(false)
  }

  if (submitted) {
    return (
      <section id="kontak" className="py-24 bg-emerald-50">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="w-20 h-20 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-6">
            <span className="text-4xl">✅</span>
          </div>
          <h3 className="text-2xl font-bold text-emerald-800 mb-4">Terima Kasih!</h3>
          <p className="text-gray-600">Pesan Anda telah terkirim. Kami akan menghubungi Anda segera.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="kontak" className="py-24 bg-gray-50/50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-4">Hubungi Kami</h2>
          <p className="text-lg text-gray-600">
            Tertarik mendaftarkan putra-putri Anda? Kirim pesan dan tim kami akan merespons.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4 bg-white p-8 rounded-3xl shadow-lg border border-emerald-100">
          <input
            type="text"
            name="nama"
            placeholder="Nama Orang Tua"
            required
            value={formData.nama}
            onChange={handleChange}
            className="border border-emerald-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="border border-emerald-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
          />
          <textarea
            name="pesan"
            placeholder="Pesan"
            rows="4"
            required
            value={formData.pesan}
            onChange={handleChange}
            className="border border-emerald-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all resize-none"
          ></textarea>
          <button
            type="submit"
            disabled={submitting}
            className="bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 text-white font-semibold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-95"
          >
            {submitting ? "Mengirim..." : "Kirim Pesan"}
          </button>
        </form>

        <div className="mt-12 grid md:grid-cols-3 gap-4 text-sm">
          <div className="text-center p-6 rounded-2xl border border-emerald-100 bg-white">
            <p className="font-semibold text-emerald-700 mb-1">📍 Alamat</p>
            <p className="text-gray-600">[Alamat Sekolah]</p>
          </div>
          <div className="text-center p-6 rounded-2xl border border-emerald-100 bg-white">
            <p className="font-semibold text-emerald-700 mb-1">📞 Telepon</p>
            <p className="text-gray-600">[Nomor Telepon]</p>
          </div>
          <div className="text-center p-6 rounded-2xl border border-emerald-100 bg-white">
            <p className="font-semibold text-emerald-700 mb-1">✉️ Email</p>
            <p className="text-gray-600">info@darulaziziyah.sch.id</p>
          </div>
        </div>
      </div>
    </section>
  )
}