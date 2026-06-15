'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const EASE = [0.76, 0, 0.24, 1] as const

const subs = [
  {
    idx: '01',
    title: 'Creative Direction & Event Design',
    body: 'From concept to scenography — we build the visual soul of each occasion with aesthetic precision and narrative purpose.',
    img: '/images/services_c.jpg',
    imgAlt: 'Gala event — crystal chandeliers',
    pos: 'object-[center_45%]',
  },
  {
    idx: '02',
    title: 'Production & Logistics Management',
    body: 'Flawless execution behind the scenes. Every technical element, every timeline, every partner — orchestrated invisibly.',
    img: '/images/pr_main.jpg',
    imgAlt: 'Event production backstage',
    pos: 'object-[center_72%]',
  },
  {
    idx: '03',
    title: 'F&B Consultancy & Catering',
    body: 'Culinary experiences designed to reflect the spirit of each event — from curated menus to immersive dining concepts with Michelin-starred chefs.',
    img: '/images/concierge_main.jpg',
    imgAlt: 'Luxury dining experience',
    pos: 'object-[center_60%]',
  },
  {
    idx: '04',
    title: 'Guest Management & Protocol',
    body: 'Every guest arrives feeling like the only guest. Each touchpoint handled with quiet, unwavering excellence.',
    img: '/images/12.jpg',
    imgAlt: 'VIP guest experience',
    pos: 'object-[center_65%]',
  },
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
      <div className="lg:hidden relative" style={{ aspectRatio: '16/10' }}>
        <Image src="/images/Events.png" alt="Desert event" fill className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0D0B09] to-transparent" />
      </div>

      {/* ── Hero image + headline ── */}
      <div className="grid lg:grid-cols-[1fr_480px] xl:grid-cols-[1fr_580px]">

        {/* Left: text */}
        <div className="px-site pt-[clamp(5rem,10vw,10rem)] pb-[clamp(4rem,8vw,8rem)]">
          <FadeIn className="flex items-end gap-5 mb-[clamp(3rem,6vw,6rem)]">
            <span className="section-num text-[clamp(4rem,12vw,12rem)] leading-none" aria-hidden="true">II</span>
            <div className="mb-3">
              <div className="rule-gold w-6 mb-3" />
              <span className="label text-[#B8922C]" style={{ fontSize: '1.1rem', letterSpacing: '0.22em' }}>Events</span>
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
            src="/images/Events.png"
            alt="S.P.H.E.R.E. tailored event — desert setting"
            fill
            className="object-cover object-center"
            sizes="500px"
          />
          {/* Gradient blend left edge */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0D0B09] to-transparent" />
        </FadeIn>
      </div>

      {/* ── Sub-services cards ── */}
      <div className="px-site pb-[clamp(4rem,8vw,8rem)]">
        <div className="rule mb-[clamp(2.5rem,5vw,5rem)]" style={{ opacity: 0.1 }} />

        <div ref={listRef} className="grid sm:grid-cols-2 gap-4 lg:gap-6">
          {subs.map((s, i) => (
            <motion.div
              key={s.idx}
              initial={{ opacity: 0, y: 24 }}
              animate={listInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: i * 0.12, ease: EASE }}
              className="group border border-ivory/10 bg-[#14110D] flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.imgAlt}
                  fill
                  className={`object-cover ${s.pos} transition-transform duration-[1.4s] ease-out group-hover:scale-[1.06]`}
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>

              {/* Text below image */}
              <div className="flex flex-col flex-1 p-7 lg:p-10">
                <div className="flex items-center gap-4 mb-5">
                  <span className="label text-[#B8922C]">{s.idx}</span>
                  <div className="rule-gold w-8 origin-left transition-transform duration-700 group-hover:scale-x-[2.2]" />
                </div>
                <h3 className="font-display italic font-light text-[1.6rem] lg:text-[2rem] text-ivory leading-[1.1] mb-4">
                  {s.title}
                </h3>
                <p className="text-[0.85rem] lg:text-[0.92rem] font-light leading-[1.9] text-mist">
                  {s.body}
                </p>
              </div>
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
