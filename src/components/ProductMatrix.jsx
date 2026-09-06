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
  ImageOff,
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
      image: '/images/produk/data-analytics-bootcamp.jpg',
    },
    {
      icon: Code2,
      title: 'Programming & AI',
      badge: 'PEMULA FRIENDLY',
      description: 'Coding, vibe coding, dan cara memakai tools AI untuk produktivitas sehari-hari.',
      image: '/images/produk/programming-ai.jpg',
    },
    {
      icon: Users,
      title: 'Pelatihan Tatap Muka / Vidcon',
      badge: 'MURAH & MUDAH',
      description: 'Sesi langsung dengan pengajar, harga terjangkau, jadwal fleksibel.',
      image: '/images/produk/pelatihan-tatap-muka.jpg',
    },
    {
      icon: Zap,
      title: 'Mini Workshop',
      badge: 'MURAH & MUDAH',
      description: 'Skill sprint intensif satu hari untuk satu topik spesifik.',
      image: '/images/produk/mini-workshop.jpg',
    },
  ],
  digital: [
    {
      icon: BookOpen,
      title: 'Self-Paced Microlearning',
      badge: 'MURAH & MUDAH',
      description: 'Modul mandiri yang bisa diakses kapan saja, sesuai kecepatan belajarmu.',
      image: '/images/produk/self-paced-microlearning.jpg',
    },
    {
      icon: Video,
      title: 'Membership Video Studi Kasus',
      badge: 'MURAH & MUDAH',
      description: 'Kumpulan video pembahasan studi kasus data dan teknologi terbaru.',
      image: '/images/produk/membership-video.jpg',
    },
    {
      icon: FileText,
      title: 'E-Book & Guide Praktis',
      badge: 'PEMULA FRIENDLY',
      description: 'Panduan ringkas dan aplikatif untuk belajar mandiri tanpa ribet.',
      image: '/images/produk/ebook-guide.jpg',
    },
    {
      icon: LayoutTemplate,
      title: 'Ready-to-Use Templates',
      badge: 'MURAH & MUDAH',
      description: 'Dashboard analitik, automation script, dan boilerplate code siap pakai.',
      image: '/images/produk/ready-to-use-templates.jpg',
    },
  ],
  development: [
    {
      icon: Smartphone,
      title: 'Web & Mobile App Development',
      badge: 'BY REQUEST',
      description: 'Full delivery custom build sesuai kebutuhan bisnis atau instansi kamu.',
      image: '/images/produk/web-mobile-development.jpg',
    },
    {
      icon: Building2,
      title: 'Custom Corporate / In-house Training',
      badge: 'BY REQUEST',
      description: 'Program pelatihan yang dirancang khusus untuk tim atau organisasi kamu.',
      image: '/images/produk/corporate-training.jpg',
    },
    {
      icon: Sparkles,
      title: 'Konsultasi Data & AI Integration',
      badge: 'BY REQUEST',
      description: 'Pendampingan integrasi data dan AI untuk UMKM maupun instansi.',
      image: '/images/produk/konsultasi-data-ai.jpg',
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

function ProductImage({ src, alt, Icon }) {
  const [failed, setFailed] = useState(false)

  if (!src || failed) {
    return (
      <div className="relative flex aspect-[16/10] w-full items-center justify-center bg-brand-surface-2">
        <div className="flex flex-col items-center gap-2 text-brand-faint">
          <ImageOff size={24} strokeWidth={1.5} />
          <span className="text-[11px]">Foto menyusul</span>
        </div>
        <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-brand-bg/80 text-brand-red backdrop-blur">
          <Icon size={18} />
        </div>
      </div>
    )
  }

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-surface-2">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-brand-bg/80 text-brand-red backdrop-blur">
        <Icon size={18} />
      </div>
    </div>
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
                  className="group flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-brand-surface transition-colors duration-300 hover:border-brand-red/50"
                >
                  <ProductImage src={product.image} alt={product.title} Icon={Icon} />

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-base font-semibold text-white">
                        {product.title}
                      </h3>
                      <BadgePill text={product.badge} />
                    </div>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted">
                      {product.description}
                    </p>
                    <a href="#kontak" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-red hover:text-white">
                      Pelajari lebih lanjut
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}