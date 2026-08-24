export default function Navbar() {
  const links = [
    { href: "#beranda", label: "Beranda" },
    { href: "#profil", label: "Profil" },
    { href: "#program", label: "Program" },
    { href: "#berita", label: "Berita" },
    { href: "#kontak", label: "Kontak" },
  ]
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-black/5">
      <nav className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#beranda" className="font-semibold tracking-tight text-ink">
          MI Darul Aziziyah
        </a>
        <ul className="hidden md:flex gap-8 text-sm text-sub">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-ink transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#kontak" className="text-sm font-medium text-white bg-brand-600 hover:bg-brand-700 px-4 py-1.5 rounded-full transition-colors">
          PPDB
        </a>
      </nav>
    </header>
  )
}
