'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const EASE = [0.76, 0, 0.24, 1] as const

const services = [
  {
    num: '01',
    title: 'Events',
    href: '#events',
    body: 'From intimate gatherings to monumental celebrations — conceived with creative vision and executed with flawless precision. Every occasion is an original.',
  },
  {
    num: '02',
    title: 'Concierge',
    href: '#concierge',
    body: 'Invisible orchestration of your lifestyle. We manage the rare, the exclusive and the everyday with equal grace and absolute discretion.',
  },
  {
    num: '03',
    title: 'PR & Marketing',
    href: '#pr-marketing',
    body: 'Brand presence that transcends visibility. We craft narratives that resonate deeply, influence with purpose and endure beyond the moment.',
  },
]

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null)
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })
  const listRef = useRef(null)
  const listInView = useInView(listRef, { once: true, margin: '-60px' })

  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="services" className="bg-bone">
      {/* Mobile photo strip */}
      <div className="lg:hidden grid grid-cols-2 gap-[2px]">
        <div className="relative" style={{ aspectRatio: '4/3' }}>
          <Image src="/images/services_c.jpg" alt="Gala event" fill className="object-cover" sizes="50vw" />
        </div>
        <div className="relative" style={{ aspectRatio: '4/3' }}>
          <Image src="/images/concierge_main.jpg" alt="Luxury dining" fill className="object-cover" sizes="50vw" />
        </div>
      </div>

      {/* ── Image LEFT, content RIGHT ── */}
      <div className="grid lg:grid-cols-[420px_1fr] xl:grid-cols-[500px_1fr]">

        {/* Left: large image, full height */}
        <div className="hidden lg:block relative min-h-full">
          <Image
            src="/images/services_c.jpg"
            alt="Gala event — crystal chandeliers"
            fill
            className="object-cover"
            sizes="500px"
          />
          {/* Blend right edge */}
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-bone to-transparent" />
        </div>

        {/* Right: content */}
        <div className="px-site lg:pl-16 xl:pl-20 py-[clamp(5rem,10vw,10rem)]">

          {/* Header */}
          <div className="flex items-end gap-5 mb-[clamp(3rem,7vw,7rem)]">
            <span className="section-num text-[clamp(4rem,12vw,12rem)] leading-none" aria-hidden="true">II</span>
            <div ref={headRef} className="mb-3">
              <div className="rule-gold w-6 mb-3" />
              <motion.span
                initial={{ opacity: 0 }}
                animate={headInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
                className="label text-[#B8922C] block mb-4"
              >
                What We Do
              </motion.span>
              <div className="overflow-hidden pb-6 -mb-6">
                <motion.h2
                  initial={{ clipPath: 'inset(0 100% 0 0)' }}
                  animate={headInView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
                  transition={{ duration: 1.4, ease: EASE }}
                  className="font-display italic font-light text-[clamp(2.5rem,7vw,6rem)] leading-[1.15] text-ink"
                >
                  Services
                </motion.h2>
              </div>
            </div>
          </div>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={headInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="text-[0.82rem] font-light leading-[2] text-taupe max-w-md mb-[clamp(3rem,7vw,7rem)]"
          >
            We design and manage events and weddings with elegance and precision. Our concierge services
            and F&B expertise ensure every detail is seamless. Through PR and Media Management, we give
            each event the right resonance, visibility and impact.
          </motion.p>

          {/* Rule */}
          <div className="rule mb-0" />

          {/* Service index */}
          <div ref={listRef}>
            {services.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0 }}
                animate={listInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => go(s.href)}
                className="group flex items-start gap-6 lg:gap-12 py-8 lg:py-10 border-b border-ink/10 cursor-pointer"
              >
                <span
                  className="label flex-shrink-0 pt-1 transition-colors duration-400"
                  style={{ color: hovered === i ? '#B8922C' : '#8C7868' }}
                >
                  {s.num}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display italic font-light text-[clamp(1.8rem,3.5vw,3rem)] leading-tight text-ink group-hover:text-[#B8922C] transition-colors duration-500 mb-3">
                    {s.title}
                  </h3>
                  <motion.p
                    initial={{ maxHeight: 0, opacity: 0 }}
                    animate={hovered === i ? { maxHeight: 120, opacity: 1 } : { maxHeight: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden text-[0.82rem] font-light leading-[2] text-taupe max-w-md max-lg:!max-h-none max-lg:!opacity-100"
                  >
                    {s.body}
                  </motion.p>
                </div>
                <motion.span
                  animate={{ x: hovered === i ? 6 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 label text-taupe pt-2"
                >
                  →
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
