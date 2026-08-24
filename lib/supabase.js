const SUPABASE_URL = "https://uxoqstxwlphxgtuzjaaf.supabase.co"
const SUPABASE_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsInByb2plY3QiOiJ1eG9xc3R4d2xwaHhndHV6amFhZiIsImlhdCI6MTc1NTk4NDAwMCwiZXhwIjoyODcwNjUzNjAwfQ"

export async function getBerita() {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/berita?select=*&order=tanggal.desc`, {
    headers: { apikey: SUPABASE_ANON, Authorization: `Bearer ${SUPABASE_ANON}` },
  })
  return res.json()
}

export async function insertKontak(nama, email, pesan) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/kontak`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_ANON,
      Authorization: `Bearer ${SUPABASE_ANON}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({ nama, email, pesan }),
  })
  return res.ok
}
