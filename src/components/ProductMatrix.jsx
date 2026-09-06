import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BarChart3,
  Code2,
  Users,
  Zap,
  BookOpen,
  Video,
  FileText,
  LayoutTemplate,
  Smartphone,
  Building2,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react'

const CATEGORIES = [
  { id: 'academy', label: 'Academy & Workshop' },
  { id: 'digital', label: 'Digital Products & Toolkit' },
  { id: 'development', label: 'Development & Solutions' },
]

const PRODUCTS = {
  academy: [
    {
      icon: BarChart3,
      title: 'Data Analytics Bootcamp',
      badge: 'PEMULA FRIENDLY',
      description: 'Belajar mengolah dan membaca data dari nol, langsung dengan studi kasus nyata.',
    },
    {
      icon: Code2,
      title: 'Programming & AI',
      badge: 'PEMULA FRIENDLY',
      description: 'Coding, vibe coding, dan cara memakai tools AI untuk produktivitas sehari-hari.',
    },
    {
      icon: Users,
      title: 'Pelatihan Tatap Muka / Vidcon',
      badge: 'MURAH & MUDAH',
      description: 'Sesi langsung dengan pengajar, harga terjangkau, jadwal fleksibel.',
    },
    {
      icon: Zap,
      title: 'Mini Workshop',
      badge: 'MURAH & MUDAH',
      description: 'Skill sprint intensif satu hari untuk satu topik spesifik.',
    },
  ],
  digital: [
    {
      icon: BookOpen,
      title: 'Self-Paced Microlearning',
      badge: 'MURAH & MUDAH',
      description: 'Modul mandiri yang bisa diakses kapan saja, sesuai kecepatan belajarmu.',
    },
    {
      icon: Video,
      title: 'Membership Video Studi Kasus',
      badge: 'MURAH & MUDAH',
      description: 'Kumpulan video pembahasan studi kasus data dan teknologi terbaru.',
    },
    {
      icon: FileText,
      title: 'E-Book & Guide Praktis',
      badge: 'PEMULA FRIENDLY',
      description: 'Panduan ringkas dan aplikatif untuk belajar mandiri tanpa ribet.',
    },
    {
      icon: LayoutTemplate,
      title: 'Ready-to-Use Templates',
      badge: 'MURAH & MUDAH',
      description: 'Dashboard analitik, automation script, dan boilerplate code siap pakai.',
    },
  ],
  development: [
    {
      icon: Smartphone,
      title: 'Web & Mobile App Development',
      badge: 'BY REQUEST',
      description: 'Full delivery custom build sesuai kebutuhan bisnis atau instansi kamu.',
    },
    {
      icon: Building2,
      title: 'Custom Corporate / In-house Training',
      badge: 'BY REQUEST',
      description: 'Program pelatihan yang dirancang khusus untuk tim atau organisasi kamu.',
    },
    {
      icon: Sparkles,
      title: 'Konsultasi Data & AI Integration',
      badge: 'BY REQUEST',
      description: 'Pendampingan integrasi data dan AI untuk UMKM maupun instansi.',
    },
  ],
}

function BadgePill({ text }) {
  const styles = {
    'PEMULA FRIENDLY': 'bg-brand-red/15 text-brand-red border-brand-red/30',
    'MURAH & MUDAH': 'bg-white/5 text-brand-muted border-white/15',
    'BY REQUEST': 'bg-brand-darkred/20 text-white border-brand-darkred/50',
  }
  return (
    <span
      className={`inline-block rounded-full border px-3 py-1 text-[11px] font-medium ${styles[text]}`}
    >
      {text}
    </span>
  )
}

export default function ProductMatrix() {
  const [active, setActive] = useState('academy')

  return (
    <section id="produk" className="px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-3xl font-semibold text-white lg:text-4xl">
              Program & Produk
            </h2>
            <p className="mt-2 max-w-xl text-brand-muted">
              Pilih jalur belajar yang paling sesuai dengan kebutuhan dan tujuanmu.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                active === cat.id
                  ? 'bg-brand-red text-white shadow-glow'
                  : 'bg-brand-surface text-brand-muted hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {PRODUCTS[active].map((product) => {
              const Icon = product.icon
              return (
                <div
                  key={product.title}
                  className="flex flex-col rounded-2xl border border-white/5 bg-brand-surface p-6 transition-colors duration-300 hover:border-brand-red/50"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                      <Icon size={20} />
                    </div>
                    <BadgePill text={product.badge} />
                  </div>
                  <h3 className="mt-5 font-display text-base font-semibold text-white">
                    {product.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted">
                    {product.description}
                  </p>
                  <a
                    href="#kontak"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-red hover:text-white"
                  >
                    Pelajari lebih lanjut
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
