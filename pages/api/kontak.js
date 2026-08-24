// API route: insert pesan kontak ke Google Sheets
// Token Sheets di-handle server-side (tidak expose ke browser)
const { execFileSync } = require("child_process")
const path = require("path")

const GAPI = path.join(
  process.env.HERMES_HOME || path.join(process.env.HOME, ".hermes"),
  "skills/productivity/google-workspace/scripts/google_api.py"
)
const PYTHON = process.env.HERMES_PYTHON || "/Users/mac/.hermes/hermes-agent/venv/bin/python3.11"
const SHEET_ID = "1cP07Nc71ineWAOF0icUBfkSufibjPAADcOGLq_SgYKE"

export default function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ ok: false })
  const { nama, email, pesan } = req.body || {}
  if (!nama || !email || !pesan) return res.status(400).json({ ok: false, msg: "Lengkapi semua field" })
  try {
    const out = execFileSync(PYTHON, [
      GAPI, "sheets", "append", SHEET_ID, "A2:C2",
      "--values", JSON.stringify([[nama, email, pesan]])
    ], { timeout: 15000, encoding: "utf8" })
    if (out.includes("updatedCells")) return res.status(200).json({ ok: true })
    return res.status(500).json({ ok: false, msg: "Gagal menyimpan" })
  } catch (e) {
    return res.status(500).json({ ok: false, msg: "Server error" })
  }
}
