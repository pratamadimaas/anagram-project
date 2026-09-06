const LINKS = [
  { label: 'Filosofi', href: '#filosofi' },
  { label: 'Program & Produk', href: '#produk' },
  { label: 'Keunggulan', href: '#keunggulan' },
  { label: 'Kontak', href: '#kontak' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-sm font-semibold text-white">Anagram Project</p>
          <p className="mt-1 text-xs text-brand-faint">
            Reinvensi · Ambisi · Progresif © {new Date().getFullYear()} Anagram Project
          </p>
        </div>
        <ul className="flex flex-wrap justify-center gap-5">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-brand-muted hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
