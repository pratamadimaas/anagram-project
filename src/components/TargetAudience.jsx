import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PERSONAS = [
  {
    label: 'Fresh Graduate',
    description: 'Baru lulus dan ingin punya skill konkret yang langsung dilirik perusahaan.',
  },
  {
    label: 'Pegawai / ASN',
    description: 'Ingin naik level dengan kemampuan data tanpa meninggalkan pekerjaan utama.',
  },
  {
    label: 'Pelaku UMKM',
    description: 'Butuh cara praktis memakai data dan teknologi untuk mengembangkan usaha.',
  },
  {
    label: 'Mahasiswa',
    description: 'Ingin melengkapi kuliah dengan skill praktis di luar kurikulum kampus.',
  },
  {
    label: 'Career Switcher',
    description: 'Sedang beralih jalur karier ke bidang data dan teknologi dari latar belakang lain.',
  },
  {
    label: 'Siapa Saja',
    description: 'Tertarik belajar teknologi tanpa latar belakang IT sama sekali? Anagram terbuka untukmu.',
  },
]

export default function TargetAudience() {
  const [active, setActive] = useState(0)

  return (
    <section className="px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-3xl font-semibold text-white lg:text-4xl">
          Untuk Siapa Anagram
        </h2>
        <p className="mt-2 max-w-xl text-brand-muted">
          Pilih salah satu untuk melihat gambaran singkatnya.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {PERSONAS.map((persona, index) => (
            <button
              key={persona.label}
              onClick={() => setActive(index)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                active === index
                  ? 'border-brand-red bg-brand-red/15 text-white'
                  : 'border-white/10 bg-brand-surface text-brand-muted hover:border-brand-red/40'
              }`}
            >
              {persona.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="mt-6 rounded-2xl border border-white/5 bg-brand-surface p-6"
          >
            <p className="text-brand-muted">{PERSONAS[active].description}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
