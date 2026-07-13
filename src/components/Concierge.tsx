'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/lib/language-context'

const EASE = [0.76, 0, 0.24, 1] as const

const cardImages = [
  {
    num: '01',
    img: '/images/concierge_portrait.jpg',
    imgAlt: 'Private jet concierge service',
  },
  {
    num: '02',
    img: '/images/14.jpg',
    imgAlt: 'Lifestyle management experience',
  },
  {
    num: '03',
    img: '/images/concierge_b.jpg',
    imgAlt: 'Private luxury travel',
  },
]

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

export default function Concierge() {
  const cardsRef = useRef(null)
  const cardsInView = useInView(cardsRef, { once: true, margin: '-60px' })
  const quoteRef = useRef(null)
  const quoteInView = useInView(quoteRef, { once: true, margin: '-80px' })
  const { t } = useLanguage()
  const cards = cardImages.map((img, i) => ({ ...img, ...t.concierge.cards[i] }))

  return (
    <section id="concierge" className="bg-bone">
      <div className="px-site py-[clamp(5rem,10vw,10rem)]">

        {/* Section number + label */}
        <FadeIn className="flex items-end gap-5 mb-[clamp(3rem,6vw,6rem)]">
          <span className="section-num text-[clamp(4rem,12vw,12rem)] leading-none" style={{ color: '#B8922C', opacity: 0.18 }} aria-hidden="true">III</span>
          <div className="mb-3">
            <div className="rule-gold w-6 mb-3" />
            <span className="label text-[#B8922C]" style={{ fontSize: '1.1rem', letterSpacing: '0.22em' }}>{t.concierge.label}</span>
          </div>
        </FadeIn>

        {/* Full-width quote */}
        <div ref={quoteRef} className="mb-[clamp(4rem,8vw,8rem)]">
          <motion.h2
            initial={{ clipPath: 'inset(-0.2em 100% -0.35em 0)' }}
            animate={quoteInView ? { clipPath: 'inset(-0.2em 0% -0.35em 0)' } : {}}
            transition={{ duration: 1.8, ease: EASE }}
            className="font-display italic font-light text-[clamp(2rem,5.5vw,5.5rem)] leading-[1.15] pb-6 -mb-6 text-ink max-w-4xl"
          >
            {t.concierge.heading1}<br />{t.concierge.heading2}
          </motion.h2>
        </div>

        {/* Rule + intro */}
        <FadeIn className="mb-[clamp(4rem,8vw,8rem)]">
          <div className="rule mb-10" />
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <blockquote className="font-display italic text-[1.3rem] font-light text-[#B8922C] leading-tight whitespace-pre-line">
              {t.concierge.quote}
            </blockquote>
            <p className="text-[0.9rem] font-light leading-[2] text-taupe">
              {t.concierge.intro}
            </p>
          </div>
        </FadeIn>

        {/* Three service cards with images — aligned grid */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 lg:gap-12 border-t border-ink/10 pt-10">
          {cards.map((c, i) => (
            <motion.div
              key={c.num}
              initial={{ opacity: 0 }}
              animate={cardsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.9, delay: i * 0.12 }}
              className="flex flex-col group"
            >
              {/* Image — same aspect ratio for all three */}
              <div className="relative overflow-hidden mb-6" style={{ aspectRatio: '3/4' }}>
                <Image
                  src={c.img}
                  alt={c.imgAlt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <span className="label text-[#B8922C] block mb-3">{c.num}</span>
              <h3 className="font-display italic font-light text-[clamp(1.3rem,2vw,1.8rem)] text-ink leading-tight mb-4 group-hover:text-[#B8922C] transition-colors duration-500">
                {c.title}
              </h3>
              <p className="text-[0.9rem] font-light leading-[2] text-taupe">
                {c.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
