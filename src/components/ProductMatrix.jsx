import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Code2,
  LayoutTemplate,
  Smartphone,
  Globe,
  Monitor,
  ArrowUpRight,
  ImageOff,
} from 'lucide-react'

const CATEGORIES = [
  { id: 'academy', label: 'Belajar Data Analytics & Programming' },
  { id: 'digital', label: 'Digital Products & Toolkit' },
  { id: 'development', label: 'Jasa Pembuatan Website & Aplikasi' },
]

const PRODUCTS = {
  academy: [
    {
      id: 'quick-course-1',
      // icon dihilangkan untuk produk ini
      title: <>Quick Course I: <br /> Python for Basic Data Analytics</>,
      badge: 'PEMULA FRIENDLY',
      description: (
        <>
          1. Introduction to Data Analytics<br />
          2. Basics Data: Cleansing, Filtering, Grouping<br />
          3. Exploratory Data Analysis<br />
          4. Data Visualization<br />
          5. Dashboard & Capstone
        </>
      ),
      image: '/images/product1.png',
    },
    {
      id: 'quick-course-2',
      // icon dihilangkan untuk produk ini
      title: <>Quick Course II: <br /> Simple Programming & Professional Vibe Coding</>,
      badge: 'MURAH & MUDAH',
      description: (
        <>
          1. Setup & Intro to Google App Script<br />
          2. Building the Input Form (Frontend)<br />
          3. Connecting Frontend & Backend<br />
          4. Dashboard & Visual Summary<br />
          5. AI-Powered Insights & Deployment
        </>
      ),
      image: '/images/product2.png',
    },
    {
      id: 'quick-course-request',
      // icon dihilangkan untuk produk ini
      title: 'Quick Course By Request',
      badge: 'MURAH & MUDAH',
      description: 'Sesi belajar intensif satu hari untuk topik spesifik sesuai kebutuhanmu, jadwal fleksibel.',
      image: '/images/product3.png',
    },
  ],
  digital: [
    {
      id: 'undangan-digital',
      icon: LayoutTemplate,
      title: 'Undangan Digital',
      badge: 'MURAH & MUDAH',
      description: 'Template undangan digital siap pakai untuk pernikahan, ulang tahun, dan berbagai acara penting lainnya.',
      image: '/images/produk/self-paced-microlearning.jpg',
    },
    {
      id: 'aplikasi-siap-pakai',
      icon: Smartphone,
      title: 'Aplikasi Siap Pakai',
      badge: 'PEMULA FRIENDLY',
      description: 'Aplikasi siap pakai yang tinggal disesuaikan sedikit, langsung bisa dipakai tanpa mulai dari nol.',
      image: '/images/produk/ebook-guide.jpg',
    },
    {
      id: 'website-siap-pakai',
      icon: Globe,
      title: 'Website Siap Pakai',
      badge: 'MURAH & MUDAH',
      description: 'Template website siap pakai, tinggal isi konten sesuai kebutuhan dan langsung online.',
      image: '/images/produk/ready-to-use-templates.jpg',
    },
  ],
  development: [
    {
      id: 'pembuatan-website',
      icon: Globe,
      title: 'Pembuatan Website',
      badge: 'BY REQUEST',
      description: 'Pembuatan website custom sesuai kebutuhan bisnis, instansi, atau organisasi kamu.',
      image: '/images/produk/web-mobile-development.jpg',
    },
    {
      id: 'pembuatan-aplikasi-web',
      icon: Code2,
      title: 'Pembuatan Aplikasi Web Based',
      badge: 'BY REQUEST',
      description: 'Pengembangan aplikasi berbasis web, dari dashboard internal hingga sistem khusus sesuai alur kerja tim kamu.',
      image: '/images/produk/web-mobile-development.jpg',
    },
    {
      id: 'pembuatan-aplikasi-desktop',
      icon: Monitor,
      title: 'Pembuatan Aplikasi Desktop',
      badge: 'BY REQUEST',
      description: 'Aplikasi desktop offline untuk kebutuhan operasional yang butuh performa stabil tanpa tergantung koneksi internet.',
      image: '/images/produk/web-mobile-development.jpg',
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
        {/* Badge icon hanya dirender kalau produk ini memang punya Icon */}
        {Icon && (
          <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-brand-bg/80 text-brand-red backdrop-blur">
            <Icon size={18} />
          </div>
        )}
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
      {/* Badge icon hanya dirender kalau produk ini memang punya Icon */}
      {Icon && (
        <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-brand-bg/80 text-brand-red backdrop-blur">
          <Icon size={18} />
        </div>
      )}
    </div>
  )
}

export default function ProductMatrix() {
  const [active, setActive] = useState('academy')

  return (
    <section id="produk" className="px-6 pb-20 pt-8 lg:px-10 lg:pb-28 lg:pt-12">
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
                  key={product.id}
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