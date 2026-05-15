'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const EASE = [0.76, 0, 0.24, 1] as const

const services = [
  'Creative Brand Activation Concepting',
  'Guest Journey & Narrative Design',
  'Strategic Communications Planning',
  'Messaging Frameworks',
  'Social Media Content Strategy & Management',
  'Influencer & VIP Seeding',
  'Media Visibility & Press Relations',
  'Brand Perception Monitoring',
  'Post-event Narrative Guidance',
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

export default function PRMarketing() {
  const listRef = useRef(null)
  const listInView = useInView(listRef, { once: true, margin: '-60px' })

  return (
    <section id="pr-marketing" className="bg-night text-ivory">

      {/* Mobile photo strip */}
      <div className="lg:hidden grid grid-cols-2 gap-[2px]">
        <div className="relative" style={{ aspectRatio: '3/4' }}>
          <Image src="/images/pr_main.jpg" alt="Brand presence" fill className="object-cover object-top" sizes="50vw" />
        </div>
        <div className="relative" style={{ aspectRatio: '3/4' }}>
          <Image src="/images/pr_b.jpg" alt="Cultural elegance" fill className="object-cover object-top" sizes="50vw" />
        </div>
      </div>

      {/* ── Top: image LEFT, headline RIGHT ── */}
      <div className="grid lg:grid-cols-[420px_1fr] xl:grid-cols-[500px_1fr]">

        {/* Left: editorial image */}
        <div className="hidden lg:block relative min-h-[600px] order-first">
          <Image
            src="/images/pr_main.jpg"
            alt="Brand presence and media visibility"
            fill
            className="object-cover object-top"
            sizes="500px"
          />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0D0B09] to-transparent" />
        </div>

        {/* Right: text */}
        <div className="px-site lg:pl-16 xl:pl-20 pt-[clamp(5rem,10vw,10rem)] pb-[clamp(4rem,8vw,8rem)]">
          <FadeIn className="flex items-end gap-5 mb-[clamp(3rem,6vw,6rem)]">
            <span className="section-num text-[clamp(4rem,12vw,12rem)] leading-none" aria-hidden="true">V</span>
            <div className="mb-3">
              <div className="rule-gold w-6 mb-3" />
              <span className="label text-[#B8922C]">PR & Marketing</span>
            </div>
          </FadeIn>

          <div className="max-w-xl mb-[clamp(3rem,6vw,6rem)]">
            <div className="overflow-hidden">
              <ClipReveal>
                <h2 className="font-display italic font-light text-[clamp(2.2rem,5vw,4.8rem)] leading-[1.0] text-ivory">
                  Brand Presence &amp;
                </h2>
              </ClipReveal>
            </div>
            <div className="overflow-hidden">
              <ClipReveal delay={0.1}>
                <h2 className="font-display font-light text-[clamp(2.2rem,5vw,4.8rem)] leading-[1.0] text-[#B8922C]">
                  Experiential Visibility.
                </h2>
              </ClipReveal>
            </div>
          </div>

          <FadeIn delay={0.15} className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <p className="text-[0.72rem] font-light leading-[2] text-mist">
              We design experiences that do more than impress. They amplify a brand's identity and resonance.
              Every touchpoint — from event concept and scenography to digital storytelling and social media —
              is carefully crafted to maximize visibility and create a lasting emotional connection.
            </p>
            <blockquote className="font-display italic text-[1.1rem] font-light text-[#C8BEA8] leading-relaxed border-l border-[#B8922C]/30 pl-6">
              "We craft influence through narrative, emotion and aesthetic precision."
            </blockquote>
          </FadeIn>
        </div>

      </div>

      {/* ── Services list ── */}
      <div className="px-site pb-[clamp(4rem,8vw,8rem)]">
        <div className="rule mb-[clamp(3rem,5vw,5rem)]" style={{ opacity: 0.1 }} />

        <FadeIn className="mb-8">
          <span className="label text-[#B8922C]">Our Expertise</span>
        </FadeIn>

        <div ref={listRef} className="columns-1 sm:columns-2 gap-x-16 lg:gap-x-24">
          {services.map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0 }}
              animate={listInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: i * 0.07 }}
              className="group flex items-start gap-4 py-4 border-b border-ivory/8 break-inside-avoid"
            >
              <span
                className="mt-[6px] flex-shrink-0 font-display italic text-[#B8922C]"
                style={{ fontSize: '0.6rem', opacity: 0.6 }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-[0.72rem] font-light leading-loose text-mist group-hover:text-ivory transition-colors duration-300">
                {s}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
