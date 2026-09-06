import { useState } from 'react'
import { Send, MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '6281234567890' // Ganti dengan nomor WhatsApp resmi Anagram Project

export default function CallToAction() {
  const [form, setForm] = useState({ name: '', contact: '', need: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // Integrasikan dengan endpoint / CRM kamu di sini.
    setSent(true)
  }

  const waMessage = encodeURIComponent(
    `Halo Anagram Project, saya ${form.name || '(nama)'} ingin konsultasi: ${
      form.need || '(kebutuhan)'
    }`
  )

  return (
    <section id="kontak" className="px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <h2 className="font-display text-3xl font-semibold text-white lg:text-4xl">
            Siap menyusun ulang langkahmu?
          </h2>
          <p className="mt-4 text-brand-muted">
            Ceritakan kebutuhanmu, tim Anagram akan membantu menentukan program atau solusi
            yang paling pas — mulai dari kelas untuk pemula sampai proyek by request.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-medium text-white shadow-glow transition-colors duration-300 hover:bg-brand-darkred"
          >
            <MessageCircle size={16} />
            Konsultasi via WhatsApp
          </a>
        </div>

        <div className="rounded-2xl border border-white/5 bg-brand-surface p-6 lg:p-8">
          {sent ? (
            <p className="text-brand-muted">
              Terima kasih, {form.name || 'Sahabat Anagram'}. Pesanmu sudah kami catat dan tim
              akan segera menghubungi.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm text-brand-muted">
                  Nama
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-sm text-white outline-none focus:border-brand-red"
                  placeholder="Nama lengkap"
                />
              </div>
              <div>
                <label htmlFor="contact" className="mb-1.5 block text-sm text-brand-muted">
                  Email atau nomor WhatsApp
                </label>
                <input
                  id="contact"
                  name="contact"
                  value={form.contact}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-sm text-white outline-none focus:border-brand-red"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label htmlFor="need" className="mb-1.5 block text-sm text-brand-muted">
                  Kebutuhan
                </label>
                <textarea
                  id="need"
                  name="need"
                  value={form.need}
                  onChange={handleChange}
                  rows={3}
                  className="w-full rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-sm text-white outline-none focus:border-brand-red"
                  placeholder="Contoh: butuh training data analytics untuk tim"
                />
              </div>
              <button
                type="submit"
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-red px-5 py-2.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-brand-darkred"
              >
                Kirim
                <Send size={15} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
