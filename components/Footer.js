export default function Footer() {
  return (
    <footer className="bg-brand-50 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3 text-sm text-sub">
        <div>
          <h4 className="font-semibold text-ink mb-3">MI Darul Aziziyah</h4>
          <p>Madrasah Ibtidaiyah berbasis tahfidz & karakter, mencetak generasi Qur'ani yang cerdas dan berakhlak mulia.</p>
        </div>
        <div>
          <h4 className="font-semibold text-ink mb-3">Navigasi</h4>
          <ul className="space-y-2">
            <li><a href="#profil" className="hover:text-ink">Profil Sekolah</a></li>
            <li><a href="#program" className="hover:text-ink">Program Unggulan</a></li>
            <li><a href="#berita" className="hover:text-ink">Berita & Kegiatan</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-ink mb-3">Kontak</h4>
          <ul className="space-y-2">
            <li>📍 [Alamat Sekolah]</li>
            <li>📞 [Nomor Telepon]</li>
            <li>✉️ info@darulaziziyah.sch.id</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black/5 py-5 text-center text-xs text-sub">
        © {new Date().getFullYear()} MI Darul Aziziyah. Seluruh hak cipta dilindungi.
      </div>
    </footer>
  )
}
