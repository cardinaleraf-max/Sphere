'use client'
import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

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
  const [sent, setSent] = useState(false)
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="bg-night text-ivory">
      <div className="px-site py-[clamp(5rem,10vw,10rem)]">

        {/* Section num + headline */}
        <FadeIn className="flex items-end gap-5 mb-[clamp(3rem,6vw,6rem)]">
          <span className="section-num text-[clamp(4rem,12vw,12rem)] leading-none" aria-hidden="true">VI</span>
          <div className="mb-3">
            <div className="rule-gold w-6 mb-3" />
            <span className="label text-[#B8922C]">Contact</span>
          </div>
        </FadeIn>

        <div ref={headRef} className="mb-[clamp(4rem,8vw,8rem)]">
          <div className="overflow-hidden">
            <motion.h2
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={headInView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
              transition={{ duration: 1.6, ease: EASE }}
              className="font-display italic font-light text-[clamp(2.5rem,7vw,7rem)] leading-[0.95] text-ivory"
            >
              Whispers of
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={headInView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
              transition={{ duration: 1.6, delay: 0.1, ease: EASE }}
              className="font-display font-light text-[clamp(2.5rem,7vw,7rem)] leading-[0.95] text-[#B8922C]"
            >
              Excellence.
            </motion.h2>
          </div>
          <FadeIn delay={0.3}>
            <p className="text-[0.72rem] font-light leading-[2] text-mist max-w-md mt-8">
              How we challenge conventions and redefine the standards of the world's finest experiences.
            </p>
          </FadeIn>
        </div>

        {/* Two-column: form + info */}
        <div className="grid lg:grid-cols-[3fr_2fr] gap-16 lg:gap-24">

          {/* Form */}
          <FadeIn delay={0.2}>
            {sent ? (
              <div className="py-16">
                <p className="font-display italic text-[1.5rem] text-[#B8922C] leading-tight mb-4">
                  Your request has been received.
                </p>
                <p className="text-[0.72rem] font-light text-mist leading-[2]">
                  A member of our team will be in touch with the discretion and care your enquiry deserves.
                </p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true) }} className="space-y-10">
                {[
                  { key: 'name', label: 'Name', type: 'text', placeholder: 'Your full name' },
                  { key: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                ].map(f => (
                  <div key={f.key}>
                    <label className="label text-[#B8922C] block mb-4">{f.label}</label>
                    <input
                      type={f.type}
                      required
                      placeholder={f.placeholder}
                      value={form[f.key as keyof typeof form]}
                      onChange={e => setForm(v => ({ ...v, [f.key]: e.target.value }))}
                      className="w-full bg-transparent border-b border-ivory/15 pb-3 text-[0.82rem] font-light text-ivory placeholder:text-mist/40 focus:outline-none focus:border-[#B8922C]/50 transition-colors duration-400"
                    />
                  </div>
                ))}
                <div>
                  <label className="label text-[#B8922C] block mb-4">Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your enquiry..."
                    value={form.message}
                    onChange={e => setForm(v => ({ ...v, message: e.target.value }))}
                    className="w-full bg-transparent border-b border-ivory/15 pb-3 text-[0.82rem] font-light text-ivory placeholder:text-mist/40 focus:outline-none focus:border-[#B8922C]/50 transition-colors duration-400 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="label text-ivory link-underline group flex items-center gap-3"
                >
                  Send Request
                  <motion.span whileHover={{ x: 4 }} className="inline-block">→</motion.span>
                </button>
              </form>
            )}
          </FadeIn>

          {/* Info */}
          <FadeIn delay={0.35} className="space-y-10">
            <div>
              <span className="label text-[#B8922C] block mb-3">Office</span>
              <p className="text-[0.82rem] font-light text-mist">Riyadh, Kingdom of Saudi Arabia</p>
            </div>
            <div className="rule" style={{ opacity: 0.1 }} />
            <div>
              <span className="label text-[#B8922C] block mb-3">Phone</span>
              <a href="tel:+966505736765"
                className="text-[0.82rem] font-light text-mist hover:text-ivory transition-colors duration-300 link-underline">
                +966 50 573 67 65
              </a>
            </div>
            <div className="rule" style={{ opacity: 0.1 }} />
            <div>
              <span className="label text-[#B8922C] block mb-3">Email</span>
              <a href="mailto:info@sphere.com.sa"
                className="text-[0.82rem] font-light text-mist hover:text-ivory transition-colors duration-300 link-underline">
                info@sphere.com.sa
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
