'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const EASE = [0.76, 0, 0.24, 1] as const

const cards = [
  {
    num: '01',
    title: 'Business Concierge',
    body: 'Corporate hospitality, executive travel, private venue sourcing, protocol management and high-level event facilitation for discerning professionals.',
    img: '/images/concierge_b.jpg',
    imgAlt: 'Private luxury travel',
  },
  {
    num: '02',
    title: 'VIP & Client Hospitality',
    body: 'Bespoke experiences for your most valued relationships — from exclusive access and curated journeys to private events that leave a lasting impression.',
    img: '/images/concierge_main.jpg',
    imgAlt: 'VIP desert dining experience',
  },
  {
    num: '03',
    title: 'Personal Concierge',
    body: 'Lifestyle management with absolute discretion. Your time is precious; we ensure every moment of it is perfectly arranged.',
    img: '/images/concierge_portrait.jpg',
    imgAlt: 'Private jet concierge service',
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

  return (
    <section id="concierge" className="bg-bone">
      <div className="px-site py-[clamp(5rem,10vw,10rem)]">

        {/* Section number + label */}
        <FadeIn className="flex items-end gap-5 mb-[clamp(3rem,6vw,6rem)]">
          <span className="section-num text-[clamp(4rem,12vw,12rem)] leading-none" style={{ color: '#B8922C', opacity: 0.18 }} aria-hidden="true">III</span>
          <div className="mb-3">
            <div className="rule-gold w-6 mb-3" />
            <span className="label text-[#B8922C]">Concierge</span>
          </div>
        </FadeIn>

        {/* Full-width quote */}
        <div ref={quoteRef} className="mb-[clamp(4rem,8vw,8rem)]">
          <motion.h2
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={quoteInView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
            transition={{ duration: 1.8, ease: EASE }}
            className="font-display italic font-light text-[clamp(2rem,5.5vw,5.5rem)] leading-[1.05] text-ink max-w-4xl"
          >
            A Way of Living<br />Into Legacy.
          </motion.h2>
        </div>

        {/* Rule + intro */}
        <FadeIn className="mb-[clamp(4rem,8vw,8rem)]">
          <div className="rule mb-10" />
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <blockquote className="font-display italic text-[1.3rem] font-light text-[#B8922C] leading-tight">
              "We are the Quiet Curators<br />of your lifestyle."
            </blockquote>
            <p className="text-[0.72rem] font-light leading-[2] text-taupe">
              With absolute discretion and refined intuition, we curate access to what is rare,
              manage the everyday with elegance and make the extraordinary appear effortless.
              Whether it is a last-minute travel arrangement, a table few can book, or a moment
              designed for no one else but you — our approach remains the same: invisible
              orchestration, deeply personal care and a commitment to excellence.
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
              <p className="text-[0.72rem] font-light leading-[2] text-taupe">
                {c.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
