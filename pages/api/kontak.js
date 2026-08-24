// API route: insert pesan kontak ke Google Sheets via Apps Script Web App proxy
// Set Env Var di Vercel: SHEETS_PROXY_URL = <URL Web App Apps Script>
const SHEET_ID = "1cP07Nc71ineWAOF0icUBfkSufibjPAADcOGLq_SgYKE"

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ ok: false })
  const { nama, email, pesan } = req.body || {}
  if (!nama || !email || !pesan) return res.status(400).json({ ok: false, msg: "Lengkapi semua field" })
  const proxy = process.env.SHEETS_PROXY_URL
  if (!proxy) return res.status(500).json({ ok: false, msg: "Proxy belum dikonfigurasi" })
  try {
    const r = await fetch(proxy, {
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
