import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Filosofi', href: '#filosofi' },
  { label: 'Values', href: '#values' },
  { label: 'Program & Produk', href: '#produk' },
  { label: 'Keunggulan', href: '#keunggulan' },
  { label: 'Kontak', href: '#kontak' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'border-white/10 bg-brand-bg/90 backdrop-blur'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <img
            src="/images/logo1.png"
            alt="Anagram Project"
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="font-display text-lg font-semibold tracking-tight text-white">
            Anagram Project
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-brand-muted transition-colors hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#produk"
            className="rounded-full bg-brand-red px-5 py-2.5 text-sm font-medium text-white shadow-glow transition-colors duration-300 hover:bg-brand-darkred"
          >
            Mulai Belajar
          </a>
        </div>

        <button
          type="button"
          className="text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-brand-bg px-6 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-1 text-brand-muted hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#produk"
            onClick={() => setOpen(false)}
            className="mt-5 block rounded-full bg-brand-red px-5 py-2.5 text-center text-sm font-medium text-white shadow-glow hover:bg-brand-darkred transition-colors"
          >
            Mulai Belajar
          </a>
        </div>
      )}
    </header>
  )
}