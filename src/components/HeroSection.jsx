import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Target } from 'lucide-react'

const QUIZ_URL =
  'https://script.google.com/macros/s/AKfycbyuQPlV1vl-6ohqAhrPDJRlrhOlpbmXCUN-eO_gPr0_5gtFPOL0bIAiiBTCvAQ_pD-g/exec'

const STATS = [
  { value: '0', label: 'Background IT dibutuhkan' },
  { value: '100%', label: 'Proyek nyata, bukan simulasi' },
  { value: 'Cepat', label: 'Terjangkau dan langsung praktik' },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function HeroSection() {
  return (
    <section id="top" className="relative px-6 pb-24 pt-16 lg:px-10 lg:pb-32 lg:pt-24">
      <div className="pointer-events-none absolute inset-0 bg-crimson-fade" aria-hidden="true" />

      <motion.div
        className="relative mx-auto flex max-w-4xl flex-col items-center text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.span
          variants={item}
          className="rounded-full border border-brand-red/40 bg-brand-surface px-4 py-1.5 text-xs font-medium tracking-wide text-brand-muted"
        >
          Data Analytics · Programming · Optimasi AI
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-8 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
        >
          Reinvent your skills, accelerate your future.
        </motion.h1>

        <motion.p variants={item} className="mt-6 max-w-2xl text-base text-brand-muted lg:text-lg">
          Teknologi dan data bisa dikuasai siapa saja. Cepat, praktis, dan terjangkau,
          tanpa perlu latar belakang IT sama sekali.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#produk"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-7 py-3 text-sm font-medium text-white shadow-glow transition-colors duration-300 hover:bg-brand-darkred"
          >
            Lihat Katalog Produk
            <ArrowRight size={16} />
          </a>
          <a
            href="#kontak"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3 text-sm font-medium text-white transition-colors duration-300 hover:border-brand-red/60"
          >
            <MessageCircle size={16} />
            Konsultasi Kebutuhan / By Request
          </a>
        </motion.div>

        <motion.a
          variants={item}
          href={QUIZ_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-8 flex w-full max-w-md items-center gap-4 rounded-2xl border border-white/10 bg-brand-surface px-5 py-4 text-left transition-colors duration-300 hover:border-brand-red/50"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
            <Target size={20} />
          </span>
          <span className="flex-1">
            <span className="block text-sm font-medium text-white">
              Belum yakin mulai dari mana?
            </span>
            <span className="block text-sm text-brand-faint">
              Uji kemampuanmu dulu lewat asesmen singkat
            </span>
          </span>
          <ArrowRight
            size={18}
            className="shrink-0 text-brand-faint transition-transform duration-300 group-hover:translate-x-1 group-hover:text-brand-red"
          />
        </motion.a>

        <motion.dl
          variants={item}
          className="mt-16 grid w-full grid-cols-1 gap-6 border-t border-white/10 pt-10 sm:grid-cols-3"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <dt className="font-display text-2xl font-semibold text-white lg:text-3xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-sm text-brand-faint">{stat.label}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  )
}