'use client'
import { useRef, useEffect } from 'react'
import { motion, useInView, useMotionValue, useScroll, useMotionValueEvent, animate } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/lib/language-context'

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

// How many degrees the logo turns per pixel scrolled (after the intro spin)
const SCROLL_ROTATION_FACTOR = 0.2

// Logo that spins like a roulette on first scroll into view, then keeps
// turning with the page scroll (direction follows scroll direction) while visible.
function RouletteLogo() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const rotate = useMotionValue(0)
  const opacity = useMotionValue(0)
  const spinDone = useRef(false)
  const visible = useRef(false)
  const lastY = useRef(0)
  const { scrollY } = useScroll()

  // Intro roulette spin on first scroll into view
  useEffect(() => {
    if (!inView) return
    lastY.current = scrollY.get()
    const fade = animate(opacity, 0.9, { duration: 0.8, ease: 'easeOut' })
    const spin = animate(rotate, 1440, {
      duration: 3,
      ease: [0.12, 0.7, 0.2, 1],
      onComplete: () => {
        spinDone.current = true
        lastY.current = scrollY.get()
      },
    })
    return () => {
      fade.stop()
      spin.stop()
    }
  }, [inView, rotate, opacity, scrollY])

  // After the intro, drive rotation from scroll delta — only while visible
  useMotionValueEvent(scrollY, 'change', (y) => {
    const delta = y - lastY.current
    lastY.current = y
    if (!spinDone.current || !visible.current) return
    rotate.set(rotate.get() + delta * SCROLL_ROTATION_FACTOR)
  })

  return (
    <motion.div
      ref={ref}
      style={{ rotate, opacity }}
      onViewportEnter={() => { visible.current = true }}
      onViewportLeave={() => { visible.current = false }}
      viewport={{ margin: '-80px' }}
      className="w-[clamp(180px,30vw,440px)] will-change-transform"
    >
      <Image
        src="/logo-mark.svg"
        alt="S.P.H.E.R.E. emblem"
        width={460}
        height={460}
        className="w-full h-auto"
      />
    </motion.div>
  )
}

export default function About() {
  const acrosticRef = useRef(null)
  const acrosticInView = useInView(acrosticRef, { once: true, margin: '-60px' })
  const { t } = useLanguage()

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
                <span className="label text-[#B8922C]" style={{ fontSize: '1.1rem', letterSpacing: '0.22em' }}>{t.about.label}</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-[0.9rem] font-light leading-[2] text-mist max-w-xl">
                {t.about.intro}
              </p>
            </FadeIn>
          </div>

          <div className="justify-self-center lg:justify-self-end lg:pr-[clamp(0rem,3vw,4rem)]">
            <RouletteLogo />
          </div>
        </div>

        {/* ── Statement ── replaces the acrostic per client request */}
        <div className="border-t border-ivory/10 pt-[clamp(3rem,7vw,7rem)] pb-[clamp(3rem,7vw,7rem)] grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-24 items-start">
          <div>
            <FadeIn className="mb-8 flex items-center gap-4">
              <div className="rule-gold w-6 flex-shrink-0" />
              <span className="label text-[#B8922C]">{t.about.philosophyLabel}</span>
            </FadeIn>
            <div className="overflow-hidden">
              <ClipReveal>
                <h2 className="font-display italic font-light text-[clamp(2rem,4.6vw,4.4rem)] leading-[1.05] text-ivory">
                  {t.about.philosophyLine1}
                </h2>
              </ClipReveal>
            </div>
            <div className="overflow-hidden">
              <ClipReveal delay={0.12}>
                <h2 className="font-display font-light text-[clamp(2rem,4.6vw,4.4rem)] leading-[1.05] text-[#B8922C]">
                  {t.about.philosophyLine2}
                </h2>
              </ClipReveal>
            </div>
          </div>

          <FadeIn delay={0.2} className="lg:pt-[clamp(2rem,5vw,5rem)]">
            <p className="text-[0.9rem] font-light leading-[2] text-mist max-w-md">
              {t.about.philosophyBody}
            </p>
          </FadeIn>
        </div>

        {/* ── Acrostic ── HIDDEN per client request (kept in case they change their mind) */}
        {false && (
        <>
        <FadeIn className="mb-6 flex items-center gap-4">
          <div className="rule-gold w-6 flex-shrink-0" />
          <span className="label text-[#B8922C]">What Our Name Means</span>
        </FadeIn>

        {/* Acrostic — single unified layout, responsive */}
        <div ref={acrosticRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-b border-ivory/10">
          {acrostic.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={acrosticInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              className={`border-b lg:border-b-0 border-r border-ivory/10 py-8 px-5 flex flex-col items-center text-center
                ${i % 2 === 1 ? 'border-r-0 md:border-r' : ''}
                ${i === 2 ? 'md:border-r-0 lg:border-r' : ''}
                ${i === 5 ? 'border-r-0' : ''}
                ${i >= 4 ? 'border-b-0' : ''}
              `}
            >
              <span
                className="font-display italic block leading-none mb-3"
                style={{ fontSize: 'clamp(2.4rem,4.5vw,4rem)', color: '#B8922C' }}
              >
                {item.letter}
              </span>
              <span className="label text-[#B8922C] block mb-4" style={{ fontSize: '0.72rem', letterSpacing: '0.28em' }}>
                {item.word.toUpperCase()}
              </span>
              <p className="text-[0.82rem] font-light leading-[1.85] text-mist">{item.body}</p>
            </motion.div>
          ))}
        </div>
        </>
        )}
      </div>

      {/* ── Heritage ── white, images LEFT */}
      <div id="heritage" className="bg-bone text-ink">
      <div className="rule" style={{ opacity: 0.08 }} />
      <div className="grid lg:grid-cols-[440px_1fr]">

        {/* Left: single full-height portrait image (capped height on mobile) */}
        <FadeIn delay={0.2} className="relative h-[60vh] min-h-[360px] overflow-hidden lg:h-auto lg:min-h-[700px]">
          <Image
            src="/images/heritage.jpg"
            alt="S.P.H.E.R.E. heritage — Italian elegance meets Saudi culture"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 440px"
          />
        </FadeIn>

        <div className="px-site py-10 lg:py-[clamp(5rem,10vw,10rem)]">
          <FadeIn className="mb-8">
            <span className="label text-[#B8922C]" style={{ fontSize: '1.1rem', letterSpacing: '0.22em' }}>{t.about.heritageLabel}</span>
          </FadeIn>
          <div className="overflow-hidden">
            <ClipReveal>
              <h2 className="font-display italic font-light text-[clamp(2rem,5vw,4.8rem)] leading-[1.0] text-ink">
                {t.about.heritageLine1}
              </h2>
            </ClipReveal>
          </div>
          <div className="overflow-hidden">
            <ClipReveal delay={0.1}>
              <h2 className="font-display font-light text-[clamp(2rem,5vw,4.8rem)] leading-[1.0] text-[#B8922C]">
                {t.about.heritageLine2}
              </h2>
            </ClipReveal>
          </div>
          <div className="overflow-hidden">
            <ClipReveal delay={0.18}>
              <h2 className="font-display italic font-light text-[clamp(2rem,5vw,4.8rem)] leading-[1.0] text-ink">
                {t.about.heritageLine3}
              </h2>
            </ClipReveal>
          </div>
          <FadeIn delay={0.3} className="mt-10 mb-[clamp(4rem,8vw,8rem)]">
            <p className="text-[0.9rem] font-light leading-[2] text-taupe max-w-sm">
              {t.about.heritageBody}
            </p>
          </FadeIn>

          <FadeIn>
            <div className="rule mb-[clamp(4rem,8vw,8rem)]" style={{ opacity: 0.08 }} />
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <FadeIn>
              <span className="label text-[#B8922C] block mb-8">{t.about.kingdomLabel}</span>
              <blockquote className="font-display italic text-[1.05rem] font-light text-[#B8922C] leading-relaxed">
                {t.about.kingdomQuote}
              </blockquote>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-[0.9rem] font-light leading-[2] text-taupe pt-[2.4rem]">
                {t.about.kingdomBody}
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
