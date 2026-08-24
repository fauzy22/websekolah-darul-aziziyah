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
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/90 border-b border-brand-100">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#beranda" className="font-bold text-xl tracking-tight text-brand-800">
          MI DARUL AZIZIYAH
        </a>
        <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-brand-700 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-600 after:transition-all hover:after:w-full">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#kontak" className="text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 px-5 py-2 rounded-full transition-all shadow-sm hover:shadow-md">
          PPDB
        </a>
      </nav>
    </header>
  )
}