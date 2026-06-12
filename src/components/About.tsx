'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const EASE = [0.76, 0, 0.24, 1] as const

const acrostic = [
  {
    letter: 'S',
    word: 'Strategic',
    body: "We think beyond the moment. Every decision is intentional, every detail aligned with a bigger vision that delivers long-term value.",
  },
  {
    letter: 'P',
    word: 'Prestige',
    body: "Prestige isn't claimed — it's earned. It's reflected in our standards, our discretion, and the confidence our clients feel.",
  },
  {
    letter: 'H',
    word: 'Hospitality',
    body: "True hospitality is anticipation. It's the art of making people feel understood, valued, and effortlessly cared for at every touchpoint.",
  },
  {
    letter: 'E',
    word: 'Elite',
    body: "We don't collect contacts — we cultivate trust. Access to us reflects a standard, not just a transaction.",
  },
  {
    letter: 'R',
    word: 'Relationship',
    body: "Our relationships are built on credibility, respect, and shared ambition. Every connection is a long-term investment.",
  },
  {
    letter: 'E',
    word: 'Events',
    body: "Each event is a living expression of our philosophy — thoughtfully designed, flawlessly executed, and remembered long after it ends.",
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
    <motion.div ref={ref} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 1.2, delay }} className={className}>
      {children}
    </motion.div>
  )
}

export default function About() {
  const acrosticRef = useRef(null)
  const acrosticInView = useInView(acrosticRef, { once: true, margin: '-60px' })

  return (
    <section id="about" className="bg-night text-ivory">
      <div className="px-site pt-[clamp(5rem,10vw,10rem)] pb-0">

        {/* Header + body left, logo right (spans both) */}
        <div className="grid lg:grid-cols-[1fr_auto] items-center gap-12 lg:gap-24 mb-[clamp(5rem,10vw,10rem)]">
          <div>
            <FadeIn className="flex items-end gap-5 mb-[clamp(3rem,6vw,6rem)]">
              <span className="section-num text-[clamp(5rem,15vw,15rem)] leading-none" style={{ color: '#B8922C', opacity: 0.18 }} aria-hidden="true">I</span>
              <div className="mb-4">
                <div className="rule-gold w-6 mb-3" />
                <span className="label text-[#B8922C]">About</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-[0.72rem] font-light leading-[2] text-mist max-w-xl">
                S.P.H.E.R.E. has no edges, no weak points, and no hierarchy. It represents completeness,
                balance, and unity: values that define how we operate and how we serve.
                Everything within a sphere is connected, and every connection matters.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.25} className="justify-self-center lg:justify-self-end lg:pr-[clamp(0rem,3vw,4rem)]">
            <Image
              src="/logo-mark.svg"
              alt="S.P.H.E.R.E. emblem"
              width={460}
              height={460}
              className="w-[clamp(180px,30vw,440px)] h-auto opacity-90"
            />
          </FadeIn>
        </div>

        {/* ── Acrostic ── */}
        <FadeIn className="mb-6 flex items-center gap-4">
          <div className="rule-gold w-6 flex-shrink-0" />
          <span className="label text-[#B8922C]">What Our Name Means</span>
        </FadeIn>

        {/* Acrostic wrapper — trigger InView for both layouts */}
        <div ref={acrosticRef}>

          {/* MOBILE: vertical list — lettera+parola sinistra, descrizione destra */}
          <div className="lg:hidden border-t border-b border-ivory/10">
            {acrostic.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={acrosticInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.07 }}
                className="grid grid-cols-[72px_1fr] border-b border-ivory/10 last:border-b-0 py-5"
              >
                {/* Sinistra: lettera + parola */}
                <div className="flex flex-col items-center justify-center border-r border-ivory/10 pr-2">
                  <span
                    className="font-display italic leading-none mb-1.5"
                    style={{ fontSize: '2.2rem', color: '#B8922C' }}
                  >
                    {item.letter}
                  </span>
                  <span className="label text-ivory/35" style={{ fontSize: '0.42rem', letterSpacing: '0.12em' }}>
                    {item.word.toUpperCase()}
                  </span>
                </div>
                {/* Destra: label parola + descrizione */}
                <div className="flex flex-col justify-center pl-4">
                  <span className="label text-[#B8922C] block mb-1.5" style={{ fontSize: '0.48rem', letterSpacing: '0.2em' }}>
                    {item.word.toUpperCase()}
                  </span>
                  <p className="text-[0.68rem] font-light leading-[1.85] text-mist">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* DESKTOP: Row 1 — lettere */}
          <div className="hidden lg:grid grid-cols-6 border-t border-ivory/10">
            {acrostic.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={acrosticInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.07 }}
                className={`border-r border-ivory/10 pt-7 pb-4 flex flex-col items-center text-center ${i === 5 ? 'border-r-0' : ''}`}
              >
                <span
                  className="font-display italic block leading-none mb-2"
                  style={{ fontSize: 'clamp(2.4rem,4.5vw,4.5rem)', color: '#B8922C' }}
                >
                  {item.letter}
                </span>
                <span className="label text-ivory/35" style={{ fontSize: '0.5rem', letterSpacing: '0.32em' }}>
                  {item.word.toUpperCase()}
                </span>
              </motion.div>
            ))}
          </div>

          {/* DESKTOP: Row 2 — schede descrittive */}
          <div className="hidden lg:grid grid-cols-6 border-t border-b border-ivory/10">
            {acrostic.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={acrosticInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.9, delay: 0.2 + i * 0.07 }}
                className={`border-r border-ivory/10 py-10 px-5 flex flex-col items-center text-center ${i === 5 ? 'border-r-0' : ''}`}
              >
                <span className="label text-[#B8922C] block mb-4" style={{ fontSize: '0.5rem', letterSpacing: '0.28em' }}>{item.word.toUpperCase()}</span>
                <p className="text-[0.63rem] font-light leading-[1.85] text-mist">{item.body}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Heritage ── white, images LEFT */}
      <div id="heritage" className="bg-bone text-ink">
      <div className="rule" style={{ opacity: 0.08 }} />
      <div className="grid lg:grid-cols-[440px_1fr]">

        {/* Left: full-height stacked images */}
        <FadeIn delay={0.2} className="hidden lg:grid grid-rows-2 min-h-[700px]">
          <div className="relative overflow-hidden">
            <Image
              src="/images/about_heritage.jpg"
              alt="Saudi architectural heritage"
              fill
              className="object-cover"
              sizes="440px"
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="/images/pr_b.jpg"
              alt="Saudi cultural elegance"
              fill
              className="object-cover object-top"
              sizes="440px"
            />
          </div>
        </FadeIn>

        <div className="px-site py-10 lg:py-[clamp(5rem,10vw,10rem)]">
          <FadeIn className="mb-8">
            <span className="label text-[#B8922C]">Heritage</span>
          </FadeIn>
          <div className="overflow-hidden">
            <ClipReveal>
              <h2 className="font-display italic font-light text-[clamp(2rem,5vw,4.8rem)] leading-[1.0] text-ink">
                Elegance Crafted
              </h2>
            </ClipReveal>
          </div>
          <div className="overflow-hidden">
            <ClipReveal delay={0.1}>
              <h2 className="font-display font-light text-[clamp(2rem,5vw,4.8rem)] leading-[1.0] text-[#B8922C]">
                in Italy, Rooted
              </h2>
            </ClipReveal>
          </div>
          <div className="overflow-hidden">
            <ClipReveal delay={0.18}>
              <h2 className="font-display italic font-light text-[clamp(2rem,5vw,4.8rem)] leading-[1.0] text-ink">
                in Kingdom Culture.
              </h2>
            </ClipReveal>
          </div>
          <FadeIn delay={0.3} className="mt-10 mb-[clamp(4rem,8vw,8rem)]">
            <p className="text-[0.72rem] font-light leading-[2] text-taupe max-w-sm">
              S.P.H.E.R.E. brings together the timeless elegance and refined taste of Italy
              with an authentic Saudi touch — creating experiences that feel both international
              and deeply local.
            </p>
          </FadeIn>

          <FadeIn>
            <div className="rule mb-[clamp(4rem,8vw,8rem)]" style={{ opacity: 0.08 }} />
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <FadeIn>
              <span className="label text-[#B8922C] block mb-8">Kingdom</span>
              <blockquote className="font-display italic text-[1.05rem] font-light text-[#B8922C] leading-relaxed">
                "What sets us apart is our deep understanding of Saudi culture,
                traditions and expectations. We don't simply work in the region:
                we are part of it."
              </blockquote>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-[0.72rem] font-light leading-[2] text-taupe pt-[2.4rem]">
                Inspired by Italian design, craftsmanship and attention to detail,
                we shape events with style, balance and effortless sophistication.
                This fusion allows us to deliver events that are visually striking,
                culturally aligned, and flawlessly executed.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
