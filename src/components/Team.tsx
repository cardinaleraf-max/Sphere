'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const EASE = [0.76, 0, 0.24, 1] as const

const members = [
  {
    name: 'Alessandro Moretti',
    role: 'Founder & CEO',
    bio: 'With roots in Italian luxury culture and deep ties to the Kingdom, Alessandro leads Sphere with a vision that merges refinement, discretion and cultural intelligence.',
    img: '/images/team_placeholder.jpg',
  },
  {
    name: 'Layla Al-Rashidi',
    role: 'Head of Events',
    bio: 'Layla orchestrates each occasion with precision and artistry — translating creative concepts into flawlessly executed experiences.',
    img: '/images/team_placeholder.jpg',
  },
  {
    name: 'Matteo Conti',
    role: 'Creative Director',
    bio: "Trained in Milan's design scene, Matteo shapes the visual identity of every project — from scenography and lighting to materials and spatial narratives.",
    img: '/images/team_placeholder.jpg',
  },
  {
    name: 'Hana Bernstein',
    role: 'Head of Concierge',
    bio: "Hana brings an intuitive understanding of her clients' needs, managing every detail with discretion and a standard of care that is, quietly, extraordinary.",
    img: '/images/team_placeholder.jpg',
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

export default function Team() {
  const cardsRef = useRef(null)
  const cardsInView = useInView(cardsRef, { once: true, margin: '-60px' })
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })

  return (
    <section id="team" className="bg-bone text-ink">
      <div className="px-site py-[clamp(5rem,10vw,10rem)]">

        {/* Section num + label */}
        <FadeIn className="flex items-end gap-5 mb-[clamp(3rem,6vw,6rem)]">
          <span className="section-num text-[clamp(4rem,12vw,12rem)] leading-none" style={{ color: '#B8922C', opacity: 0.18 }} aria-hidden="true">IV</span>
          <div className="mb-3">
            <div className="rule-gold w-6 mb-3" />
            <span className="label text-[#B8922C]" style={{ fontSize: '1.1rem', letterSpacing: '0.22em' }}>Team</span>
          </div>
        </FadeIn>

        {/* Heading */}
        <div ref={headRef} className="mb-[clamp(4rem,8vw,8rem)] max-w-3xl">
          <div className="overflow-hidden pb-6 -mb-6">
            <motion.h2
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={headInView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
              transition={{ duration: 1.6, ease: EASE }}
              className="font-display italic font-light text-[clamp(2.2rem,5vw,5rem)] leading-[1.15] text-ink"
            >
              The Minds Behind
            </motion.h2>
          </div>
          <div className="overflow-hidden pb-6 -mb-6">
            <motion.h2
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={headInView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
              transition={{ duration: 1.6, delay: 0.1, ease: EASE }}
              className="font-display font-light text-[clamp(2.2rem,5vw,5rem)] leading-[1.15] text-[#B8922C]"
            >
              the Experience.
            </motion.h2>
          </div>
          <FadeIn delay={0.3}>
            <p className="text-[0.9rem] font-light leading-[2] text-taupe max-w-md mt-8">
              A curated team of international professionals, united by a shared commitment to excellence,
              cultural intelligence and the art of the exceptional.
            </p>
          </FadeIn>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 border-t border-ink/10 pt-10">
          {members.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: i * 0.1, ease: EASE }}
              className="group flex flex-col"
            >
              {/* Photo */}
              <div className="relative overflow-hidden mb-6 bg-parchment" style={{ aspectRatio: '3/4' }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true" className="opacity-20">
                    <circle cx="24" cy="18" r="9" stroke="#B8922C" strokeWidth="1" />
                    <path d="M6 44c0-9.941 8.059-18 18-18s18 8.059 18 18" stroke="#B8922C" strokeWidth="1" />
                  </svg>
                </div>
              </div>
              {/* Info */}
              <div className="rule-gold w-6 mb-4 origin-left transition-transform duration-700 group-hover:scale-x-[2]" />
              <h3 className="font-display italic font-light text-[1.2rem] text-ink leading-tight mb-1 group-hover:text-[#B8922C] transition-colors duration-400">
                {m.name}
              </h3>
              <span className="label text-[#B8922C] block mb-4" style={{ fontSize: '0.72rem', letterSpacing: '0.28em' }}>
                {m.role}
              </span>
              <p className="text-[0.82rem] font-light leading-[1.9] text-taupe">
                {m.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
