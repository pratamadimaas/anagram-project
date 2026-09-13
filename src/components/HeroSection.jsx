import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, MessageCircle, Target, ImageOff, ChevronLeft, ChevronRight } from 'lucide-react'

const QUIZ_URL =
  'https://script.google.com/macros/s/AKfycbyuQPlV1vl-6ohqAhrPDJRlrhOlpbmXCUN-eO_gPr0_5gtFPOL0bIAiiBTCvAQ_pD-g/exec'

const HERO_SLIDES = [
  { src: '/images/banner1.png', alt: 'Sesi kelas Data Analytics' },
  { src: '/images/hero/slide-2.jpg', alt: 'Sesi kelas Programming & AI' },
  { src: '/images/hero/slide-3.jpg', alt: 'Peserta praktik proyek nyata' },
]

const STATS = [
  { value: '0', label: 'Background IT dibutuhkan' },
  { value: '100%', label: 'Proyek nyata, bukan simulasi' },
  { value: 'Cepat', label: 'Terjangkau dan langsung praktik' },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function HeroSlide({ src, alt, failed, onError }) {
  if (!src || failed) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-brand-surface-2">
        <div className="flex flex-col items-center gap-2 text-brand-faint">
          <ImageOff size={22} strokeWidth={1.5} />
          <span className="text-[11px]">Foto menyusul</span>
        </div>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="eager"
      onError={onError}
      className="h-full w-full object-cover object-center"
    />
  )
}

function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [failedSlides, setFailedSlides] = useState({})
  const timerRef = useRef(null)

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    // Bergeser otomatis setiap 5 detik (5000 ms)
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length)
    }, 5000)
  }, [])

  useEffect(() => {
    startTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [startTimer])

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length)
    startTimer()
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
    startTimer()
  }

  const handleSelectDot = (index) => {
    setActiveIndex(index)
    startTimer()
  }

  const handleSlideError = useCallback((index) => {
    setFailedSlides((prev) => ({ ...prev, [index]: true }))
  }, [])

  return (
    <div className="group relative w-full">
      <div className="relative aspect-[21/9] sm:aspect-[2.4/1] md:aspect-[2.8/1] min-h-[360px] w-full overflow-hidden border-b border-white/10 bg-brand-surface">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <HeroSlide
              src={HERO_SLIDES[activeIndex].src}
              alt={HERO_SLIDES[activeIndex].alt}
              failed={failedSlides[activeIndex]}
              onError={() => handleSlideError(activeIndex)}
            />
          </motion.div>
        </AnimatePresence>

        {/* Tombol Panah Kiri */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Foto sebelumnya"
          className="absolute left-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-white/80 transition-all duration-300 hover:bg-black/60 hover:text-white hover:scale-105 active:scale-95"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Tombol Panah Kanan */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Foto berikutnya"
          className="absolute right-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-white/80 transition-all duration-300 hover:bg-black/60 hover:text-white hover:scale-105 active:scale-95"
        >
          <ChevronRight size={22} />
        </button>

        {/* Indikator Slide Titik */}
        <div className="absolute bottom-4 left-0 right-0 z-10 flex items-center justify-center gap-2">
          {HERO_SLIDES.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => handleSelectDot(i)}
              aria-label={`Tampilkan slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? 'w-6 bg-brand-red' : 'w-1.5 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section id="top" className="relative w-full pb-24 lg:pb-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-crimson-fade" aria-hidden="true" />

      {/* 1. Carousel Full-Width dengan Tombol Navigasi Panah */}
      <HeroCarousel />

      {/* 2. Konten Teks */}
      <motion.div
        className="relative mx-auto flex max-w-4xl flex-col items-center px-6 pt-10 text-center lg:px-10"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.span
          variants={itemVariants}
          className="rounded-full border border-brand-red/40 bg-brand-surface px-4 py-1.5 text-xs font-medium tracking-wide text-brand-muted"
        >
          Data Analytics · Programming · Optimasi AI
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="mt-8 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
        >
          Reinvent your skills, accelerate your future.
        </motion.h1>

        <motion.p variants={itemVariants} className="mt-6 max-w-2xl text-base text-brand-muted lg:text-lg">
          Teknologi dan data bisa dikuasai siapa saja. Cepat, praktis, dan terjangkau,
          tanpa perlu latar belakang IT sama sekali.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-10 flex flex-col gap-4 sm:flex-row">
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
          variants={itemVariants}
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
          variants={itemVariants}
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