import { GraduationCap, Wallet, Hammer, UserCheck, Users2, BadgeCheck } from 'lucide-react'

const ADVANTAGES = [
  {
    icon: GraduationCap,
    title: 'Khusus Pemula',
    description: 'Materi disusun dari nol, tanpa asumsi kamu sudah paham teknologi.',
  },
  {
    icon: Wallet,
    title: 'Harga Terjangkau',
    description: 'Belajar berkualitas tanpa harus mengeluarkan biaya besar.',
  },
  {
    icon: Hammer,
    title: 'Langsung Praktik Proyek Nyata',
    description: 'Bukan sekadar teori — kamu mengerjakan proyek yang benar-benar dipakai.',
  },
  {
    icon: UserCheck,
    title: 'Pengajar Aktif Praktisi',
    description: 'Dibimbing langsung oleh mereka yang bekerja di bidangnya setiap hari.',
  },
  {
    icon: Users2,
    title: 'Komunitas Alumni',
    description: 'Jaringan sesama peserta untuk terus belajar dan berkembang bersama.',
  },
  {
    icon: BadgeCheck,
    title: 'Sertifikat Terverifikasi',
    description: 'Bukti kompetensi yang bisa kamu tunjukkan ke perusahaan atau klien.',
  },
]

export default function KeyAdvantages() {
  return (
    <section id="keunggulan" className="px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-semibold text-white lg:text-4xl">
          Kenapa Anagram
        </h2>
        <p className="mt-2 max-w-xl text-brand-muted">
          Enam alasan peserta memilih untuk belajar bersama kami.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ADVANTAGES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/5 bg-brand-surface p-6 transition-colors duration-300 hover:border-brand-red/50"
            >
              <Icon size={22} className="text-brand-red" />
              <h3 className="mt-4 font-display text-base font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
