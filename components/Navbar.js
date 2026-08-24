export default function Navbar() {
  const links = [
    { href: "#beranda", label: "Beranda" },
    { href: "#profil", label: "Profil" },
    { href: "#program", label: "Program" },
    { href: "#berita", label: "Berita" },
    { href: "#galeri", label: "Galeri" },
    { href: "#kontak", label: "Kontak" },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-green-200/50 shadow-sm glass-nav">
      <nav className="flex justify-between items-center h-20 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Brand */}
        <a href="#beranda" className="font-bold text-2xl text-emerald-700 tracking-tight">
          MI DARUL AZIZIYAH
        </a>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-gray-600 hover:text-emerald-700 transition-colors font-medium hover:border-b-2 hover:border-emerald-700 pb-1"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#kontak"
          className="hidden md:inline-flex items-center justify-center bg-emerald-700 text-white font-medium text-sm px-6 py-2.5 rounded-lg hover:bg-emerald-800 transition-colors active:scale-95"
        >
          PPDB
        </a>
      </nav>
    </header>
  )
}