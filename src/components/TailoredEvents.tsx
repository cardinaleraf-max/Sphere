'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const EASE = [0.76, 0, 0.24, 1] as const

const subs = [
  { idx: 'a', title: 'Creative Direction & Event Design', body: 'From concept to scenography — we build the visual soul of each occasion with aesthetic precision and narrative purpose.' },
  { idx: 'b', title: 'Production & Logistics Management', body: 'Flawless execution behind the scenes. Every technical element, every timeline, every partner — orchestrated invisibly.' },
  { idx: 'c', title: 'F&B Consultancy & Catering', body: 'Culinary experiences designed to reflect the spirit of each event — from curated menus to immersive dining concepts with Michelin-starred chefs.' },
  { idx: 'd', title: 'Concierge, VIP Protocol & Guest Experience', body: 'Every guest arrives feeling like the only guest. Each touchpoint handled with quiet, unwavering excellence.' },
]

function ClipReveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  return (
    <motion.div ref={ref}
      initial={{ clipPath: 'inset(0 100% 0 0)' }}
      animate={inView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
      transition={{ duration: 1.4, delay, ease: EASE }}
      className={className}
    >{children}</motion.div>
  )
}

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

export default function TailoredEvents() {
  const listRef = useRef(null)
  const listInView = useInView(listRef, { once: true, margin: '-60px' })

  return (
    <section id="events" className="bg-night text-ivory">

      {/* Mobile photo strip */}
      <div className="lg:hidden grid grid-cols-2 gap-[2px]">
        <div className="relative" style={{ aspectRatio: '4/5' }}>
          <Image src="/images/events_portrait.png" alt="Desert event" fill className="object-cover object-center" sizes="50vw" />
        </div>
        <div className="relative" style={{ aspectRatio: '4/5' }}>
          <Image src="/images/concierge_b.jpg" alt="Luxury travel" fill className="object-cover" sizes="50vw" />
        </div>
      </div>

      {/* ── Hero image + headline ── */}
      <div className="grid lg:grid-cols-[1fr_480px] xl:grid-cols-[1fr_580px]">

        {/* Left: text */}
        <div className="px-site pt-[clamp(5rem,10vw,10rem)] pb-[clamp(4rem,8vw,8rem)]">
          <FadeIn className="flex items-end gap-5 mb-[clamp(3rem,6vw,6rem)]">
            <span className="section-num text-[clamp(4rem,12vw,12rem)] leading-none" aria-hidden="true">III</span>
            <div className="mb-3">
              <div className="rule-gold w-6 mb-3" />
              <span className="label text-[#B8922C]">Tailored Events</span>
            </div>
          </FadeIn>

          <div className="max-w-xl mb-[clamp(2rem,4vw,4rem)]">
            <div className="overflow-hidden">
              <ClipReveal>
                <h2 className="font-display italic font-light text-[clamp(2.4rem,5vw,5rem)] leading-[1.0] text-ivory">
                  Tailored Events &amp;
                </h2>
              </ClipReveal>
            </div>
            <div className="overflow-hidden">
              <ClipReveal delay={0.1}>
                <h2 className="font-display font-light text-[clamp(2.4rem,5vw,5rem)] leading-[1.0] text-[#B8922C]">
                  Elevated Hospitality.
                </h2>
              </ClipReveal>
            </div>
          </div>

          <FadeIn delay={0.15} className="flex items-center gap-4 mb-8">
            <span className="rule-gold w-3 inline-block" />
            <span className="font-display italic text-base text-[#C8BEA8]">A Taste of Beauty</span>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-[0.72rem] font-light leading-[2] text-mist max-w-md">
              S.P.H.E.R.E. offers a suite of services that adapt with grace to the scale and spirit
              of each occasion. Everything is thoughtfully attuned, quietly powerful and unmistakably yours.
            </p>
          </FadeIn>
        </div>

        {/* Right: full-bleed portrait image */}
        <FadeIn delay={0.3} className="relative hidden lg:block min-h-[600px]">
          <Image
            src="/images/events_portrait.png"
            alt="S.P.H.E.R.E. tailored event — desert setting"
            fill
            className="object-cover object-center"
            sizes="500px"
          />
          {/* Gradient blend left edge */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0D0B09] to-transparent" />
        </FadeIn>
      </div>

      {/* ── Sub-services list ── */}
      <div className="px-site pb-[clamp(4rem,8vw,8rem)]">
        <div className="rule mb-0" style={{ opacity: 0.1 }} />

        <div ref={listRef}>
          {subs.map((s, i) => (
            <motion.div
              key={s.idx}
              initial={{ opacity: 0 }}
              animate={listInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.9, delay: i * 0.1 }}
              className="grid lg:grid-cols-[2fr_5fr] gap-6 lg:gap-16 py-8 lg:py-10 border-b border-ivory/8"
            >
              <div className="flex items-baseline gap-3">
                <span className="label text-[#B8922C]">{s.idx}</span>
                <h3 className="font-display italic font-light text-[1.3rem] lg:text-[1.6rem] text-ivory leading-tight">
                  {s.title}
                </h3>
              </div>
              <p className="text-[0.72rem] font-light leading-[2] text-mist max-w-md self-center">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>

        <FadeIn delay={0.3} className="mt-[clamp(4rem,8vw,8rem)]">
          <div className="max-w-2xl border-t border-[#B8922C]/20 pt-10">
            <blockquote className="font-display italic text-[1.1rem] font-light text-[#C8BEA8] leading-relaxed">
              "At S.P.H.E.R.E., creative vision is brought to life by a team of international professionals,
              each bringing expertise and global perspective. From scenography and lighting to music, textures
              and materials — every detail is carefully curated to reflect the unique soul of each occasion."
            </blockquote>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
