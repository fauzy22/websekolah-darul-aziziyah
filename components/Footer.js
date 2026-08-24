export default function Footer() {
  return (
    <footer className="bg-brand-900 text-brand-50">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h4 className="font-bold text-xl text-white mb-4">MI DARUL AZIZIYAH</h4>
          <p className="text-sm text-brand-200 leading-relaxed">
            Madrasah Ibtidaiyah berbasis Tahfidz & karakter, mencetak generasi
            Qur&apos;ani yang cerdas, berakhlak mulia, dan siap menghadapi masa depan.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h5 className="font-semibold text-white mb-4">Navigasi</h5>
          <ul className="space-y-3 text-sm">
            <li><a href="#beranda" className="hover:text-white transition-colors">Beranda</a></li>
            <li><a href="#profil" className="hover:text-white transition-colors">Profil Sekolah</a></li>
            <li><a href="#program" className="hover:text-white transition-colors">Program Unggulan</a></li>
            <li><a href="#berita" className="hover:text-white transition-colors">Berita & Kegiatan</a></li>
            <li><a href="#galeri" className="hover:text-white transition-colors">Galeri</a></li>
            <li><a href="#kontak" className="hover:text-white transition-colors">Kontak</a></li>
          </ul>
        </div>

        {/* Quick Info */}
        <div>
          <h5 className="font-semibold text-white mb-4">Info Cepat</h5>
          <ul className="space-y-3 text-sm text-brand-200">
            <li>📍 [Alamat Sekolah]</li>
            <li>📞 [Nomor Telepon]</li>
            <li>✉️ info@darulaziziyah.sch.id</li>
            <li>🕘 Senin &mdash; Jumat: 07.00 &mdash; 16.00</li>
          </ul>
        </div>

        {/* PPDB CTA */}
        <div className="flex flex-col justify-center">
          <a href="#kontak" className="bg-brand-600 hover:bg-brand-700 text-white text-center font-semibold px-6 py-3 rounded-full transition-all shadow-lg">
            Daftar PPDB Sekarang
          </a>
        </div>
      </div>

      <div className="border-t border-brand-800/30 py-5 text-center text-xs text-brand-300">
        © {new Date().getFullYear()} MI DARUL AZIZIYAH. All rights reserved.
      </div>
    </footer>
  )
}