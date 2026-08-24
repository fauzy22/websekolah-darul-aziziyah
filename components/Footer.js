export default function Footer() {
  const navLinks = [
    { href: "#beranda", label: "Beranda" },
    { href: "#profil", label: "Profil Sekolah" },
    { href: "#program", label: "Program Unggulan" },
    { href: "#berita", label: "Berita & Kegiatan" },
    { href: "#galeri", label: "Galeri" },
    { href: "#kontak", label: "Kontak" },
  ]

  return (
    <footer className="bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold mb-4">MI DARUL AZIZIYAH</h3>
          <p className="text-sm text-emerald-200 leading-relaxed">
            Madrasah Ibtidaiyah berbasis Tahfidz &amp; karakter, mencetak generasi Qur&apos;ani
            yang cerdas, berakhlak mulia, dan siap menghadapi masa depan.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Navigasi</h4>
          <ul className="space-y-3 text-sm text-emerald-200">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-white transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Info Cepat</h4>
          <ul className="space-y-3 text-sm text-emerald-200">
            <li>📍 [Alamat Sekolah]</li>
            <li>📞 [Nomor Telepon]</li>
            <li>✉️ info@darulaziziyah.sch.id</li>
            <li>🕘 Senin — Jumat: 07.00 — 16.00</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="flex flex-col justify-center">
          <a
            href="#kontak"
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-center font-semibold px-6 py-3 rounded-full transition-all shadow-lg hover:shadow-xl active:scale-95"
          >
            Daftar PPDB Sekarang
          </a>
        </div>
      </div>

      <div className="border-t border-emerald-800/50 py-5 text-center text-xs text-emerald-300">
        © 2026 MI DARUL AZIZIYAH. All rights reserved.
      </div>
    </footer>
  )
}