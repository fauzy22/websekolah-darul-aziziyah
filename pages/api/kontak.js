// API route: insert pesan kontak ke Google Sheets via Apps Script Web App proxy
const SHEETS_PROXY_URL = "https://script.google.com/macros/s/AKfycby2jjGr7V8qFentLE3rKaxcqUy6NvDrSBPiuS4ufN1O9y_UyEzchgRMzKFhxdtWm0A/exec"

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ ok: false })
  const { nama, email, pesan } = req.body || {}
  if (!nama || !email || !pesan) return res.status(400).json({ ok: false, msg: "Lengkapi semua field" })
  try {
    const r = await fetch(SHEETS_PROXY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nama, email, pesan }),
    })
    const data = await r.json().catch(() => ({}))
    if (data.ok) return res.status(200).json({ ok: true })
    return res.status(500).json({ ok: false, msg: data.msg || "Gagal menyimpan" })
  } catch {
    return res.status(500).json({ ok: false, msg: "Gangguan jaringan" })
  }
}
