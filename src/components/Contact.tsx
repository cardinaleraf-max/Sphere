'use client'
import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '@/lib/language-context'

const EASE = [0.76, 0, 0.24, 1] as const

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1.2, delay }}
      className={className}
    >{children}</motion.div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [accepted, setAccepted] = useState(false)
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })
  const { t } = useLanguage()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!accepted || sending) return
    setSending(true)
    setError('')
    try {
      const res = await fetch('/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          name: form.name,
          email: form.email,
          message: form.message,
          privacy: 'true',
        }),
      })
      if (!res.ok) throw new Error('bad status')
      setSent(true)
    } catch {
      setError(t.contact.errorMessage)
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="bg-night text-ivory">
      <div className="px-site py-[clamp(5rem,10vw,10rem)]">

        {/* Section num + headline */}
        <FadeIn className="flex items-end gap-5 mb-[clamp(3rem,6vw,6rem)]">
          <span className="section-num text-[clamp(4rem,12vw,12rem)] leading-none" aria-hidden="true">VI</span>
          <div className="mb-3">
            <div className="rule-gold w-6 mb-3" />
            <span className="label text-[#B8922C]" style={{ fontSize: '1.1rem', letterSpacing: '0.22em' }}>{t.contact.label}</span>
          </div>
        </FadeIn>

        <div ref={headRef} className="mb-[clamp(4rem,8vw,8rem)]">
          <div className="overflow-hidden">
            <motion.h2
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={headInView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
              transition={{ duration: 1.6, ease: EASE }}
              className="font-display italic font-light text-[clamp(2.5rem,7vw,7rem)] leading-[1.15] text-ivory"
            >
              {t.contact.line1}
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={headInView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
              transition={{ duration: 1.6, delay: 0.1, ease: EASE }}
              className="font-display font-light text-[clamp(2.5rem,7vw,7rem)] leading-[1.15] text-[#B8922C]"
            >
              {t.contact.line2}
            </motion.h2>
          </div>
          <FadeIn delay={0.3}>
            <p className="text-[0.92rem] font-light leading-[2] text-ivory/80 max-w-md mt-8">
              {t.contact.subtitle}
            </p>
          </FadeIn>
        </div>

        {/* Two-column: form + info */}
        <div className="grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-24">

          {/* Form */}
          <FadeIn delay={0.2}>
            {sent ? (
              <div className="py-16">
                <p className="font-display italic text-[1.5rem] text-[#B8922C] leading-tight mb-4">
                  {t.contact.sentTitle}
                </p>
                <p className="text-[0.9rem] font-light text-mist leading-[2]">
                  {t.contact.sentBody}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                {[
                  { key: 'name', label: t.contact.nameLabel, type: 'text', placeholder: t.contact.namePlaceholder },
                  { key: 'email', label: t.contact.emailLabel, type: 'email', placeholder: t.contact.emailPlaceholder },
                ].map(f => (
                  <div key={f.key}>
                    <label className="label text-[#B8922C] block mb-4">{f.label}</label>
                    <input
                      type={f.type}
                      required
                      placeholder={f.placeholder}
                      value={form[f.key as keyof typeof form]}
                      onChange={e => setForm(v => ({ ...v, [f.key]: e.target.value }))}
                      className="w-full bg-transparent border-b border-ivory/30 pb-3 text-[0.9rem] font-light text-ivory placeholder:text-mist/60 focus:outline-none focus:border-[#B8922C]/70 transition-colors duration-400"
                    />
                  </div>
                ))}
                <div>
                  <label className="label text-[#B8922C] block mb-4">{t.contact.messageLabel}</label>
                  <textarea
                    required
                    rows={4}
                    placeholder={t.contact.messagePlaceholder}
                    value={form.message}
                    onChange={e => setForm(v => ({ ...v, message: e.target.value }))}
                    className="w-full bg-transparent border-b border-ivory/30 pb-3 text-[0.9rem] font-light text-ivory placeholder:text-mist/60 focus:outline-none focus:border-[#B8922C]/70 transition-colors duration-400 resize-none"
                  />
                </div>
                {/* Privacy consent */}
                <div className="flex items-start gap-4">
                  <button
                    type="button"
                    role="checkbox"
                    aria-checked={accepted}
                    onClick={() => setAccepted(v => !v)}
                    className={`mt-[2px] w-4 h-4 flex-shrink-0 border transition-colors duration-300 flex items-center justify-center ${accepted ? 'border-[#B8922C] bg-[#B8922C]/15' : 'border-ivory/30'}`}
                  >
                    {accepted && (
                      <svg width="8" height="6" viewBox="0 0 8 6" fill="none" aria-hidden="true">
                        <path d="M1 3 L3 5 L7 1" stroke="#B8922C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>
                  <p className="text-[0.85rem] font-light leading-[1.8] text-ivory/60">
                    {t.contact.privacyPrefix}
                    <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-[#B8922C] hover:text-ivory transition-colors duration-200 underline underline-offset-2">
                      {t.contact.privacyLink}
                    </a>
                    {t.contact.privacySuffix}
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={!accepted || sending}
                  className={`label link-underline group flex items-center gap-3 transition-opacity duration-300 ${accepted && !sending ? 'text-ivory opacity-100' : 'text-ivory/30 opacity-40 cursor-not-allowed'}`}
                >
                  {sending ? t.contact.sendingLabel : t.contact.sendLabel}
                  <motion.span whileHover={{ x: accepted && !sending ? 4 : 0 }} className="inline-block rtl:-scale-x-100">→</motion.span>
                </button>

                {error && (
                  <p className="text-[0.85rem] font-light text-red-400/80" role="alert">{error}</p>
                )}
              </form>
            )}
          </FadeIn>

          {/* Info */}
          <FadeIn delay={0.35} className="space-y-10">
            <div>
              <span className="label text-[#B8922C] block mb-3">{t.contact.officeLabel}</span>
              <p className="text-[0.9rem] font-light text-ivory/85">{t.contact.officeValue}</p>
            </div>
            <div className="rule" style={{ opacity: 0.18 }} />
            <div>
              <span className="label text-[#B8922C] block mb-3">{t.contact.emailColLabel}</span>
              <a href="mailto:info@sphere.com.sa"
                className="text-[0.9rem] font-light text-ivory/85 hover:text-ivory transition-colors duration-300 link-underline">
                info@sphere.com.sa
              </a>
            </div>
            <div className="rule" style={{ opacity: 0.18 }} />
            <div>
              <span className="label text-[#B8922C] block mb-3">{t.contact.followLabel}</span>
              <a href="https://www.instagram.com/sphere.ksa" target="_blank" rel="noopener noreferrer"
                className="text-[0.9rem] font-light text-ivory/85 hover:text-ivory transition-colors duration-300 link-underline">
                @sphere.ksa
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
