import { Recycle, Flame, TrendingUp } from 'lucide-react'

const VALUES = [
  {
    number: '01',
    title: 'Reinvensi',
    icon: Recycle,
    description: 'Menyusun ulang apa yang ada menjadi versi terbaik melalui data & teknologi.',
  },
  {
    number: '02',
    title: 'Ambisi',
    icon: Flame,
    description: 'Wadah bagi mereka yang berani melangkah lebih jauh.',
  },
  {
    number: '03',
    title: 'Progresif',
    icon: TrendingUp,
    description: 'Bergerak maju dengan bukti nyata, bukan sekadar teori.',
  },
]

export default function PhilosophyAndValues() {
  return (
    <section id="filosofi" className="px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <blockquote className="border-l-2 border-brand-red bg-brand-surface/60 px-6 py-6 lg:px-8 lg:py-8">
          <p className="font-display text-xl leading-relaxed text-white lg:text-2xl">
            "Dunia tidak kekurangan huruf, ia hanya menunggu seseorang yang berani
            menyusunnya ulang."
          </p>
        </blockquote>

        <div id="values" className="mt-16 grid gap-6 sm:grid-cols-3">
          {VALUES.map(({ number, title, icon: Icon, description }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/5 border-t-2 border-t-brand-red bg-brand-surface p-6 transition-colors duration-300 hover:border-brand-red/50"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-sm text-brand-faint">{number}</span>
                <Icon size={20} className="text-brand-red" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
