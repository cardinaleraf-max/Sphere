'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '@/lib/language-context'

const EASE = [0.76, 0, 0.24, 1] as const

const articleMeta = [
  {
    idx: '01',
    img: '/images/dream-of-the-desert.jpg',
    href: 'https://globetrender.com/2026/01/14/saudi-arabia-dream-of-the-desert-sleeper-train/',
  },
  {
    idx: '02',
    img: '/images/concierge_main.jpg',
    href: '#',
  },
  {
    idx: '03',
    img: '/images/about_heritage.jpg',
    href: '#',
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

export default function News() {
  const cardsRef = useRef(null)
  const cardsInView = useInView(cardsRef, { once: true, margin: '-60px' })
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })
  const { t } = useLanguage()
  const articles = articleMeta.map((meta, i) => ({ ...meta, ...t.news.articles[i] }))

  return (
    <section id="news" className="bg-night text-ivory">
      <div className="px-site py-[clamp(5rem,10vw,10rem)]">

        {/* Section num + label */}
        <FadeIn className="flex items-end gap-5 mb-[clamp(3rem,6vw,6rem)]">
          <span className="section-num text-[clamp(4rem,12vw,12rem)] leading-none" aria-hidden="true">V</span>
          <div className="mb-3">
            <div className="rule-gold w-6 mb-3" />
            <span className="label text-[#B8922C]" style={{ fontSize: '1.1rem', letterSpacing: '0.22em' }}>{t.news.label}</span>
          </div>
        </FadeIn>

        {/* Heading */}
        <div ref={headRef} className="mb-[clamp(4rem,8vw,8rem)] max-w-3xl">
          <div className="overflow-hidden pb-6 -mb-6">
            <motion.h2
              initial={{ clipPath: 'inset(-0.2em 100% -0.35em 0)' }}
              animate={headInView ? { clipPath: 'inset(-0.2em 0% -0.35em 0)' } : {}}
              transition={{ duration: 1.6, ease: EASE }}
              className="font-display italic font-light text-[clamp(2.2rem,5vw,5rem)] leading-[1.15] text-ivory"
            >
              {t.news.line1}
            </motion.h2>
          </div>
          <div className="overflow-hidden pb-6 -mb-6">
            <motion.h2
              initial={{ clipPath: 'inset(-0.2em 100% -0.35em 0)' }}
              animate={headInView ? { clipPath: 'inset(-0.2em 0% -0.35em 0)' } : {}}
              transition={{ duration: 1.6, delay: 0.1, ease: EASE }}
              className="font-display font-light text-[clamp(2.2rem,5vw,5rem)] leading-[1.15] text-[#B8922C]"
            >
              {t.news.line2}
            </motion.h2>
          </div>
          <FadeIn delay={0.3}>
            <p className="text-[0.9rem] font-light leading-[2] text-mist/80 max-w-md mt-8">
              {t.news.intro}
            </p>
          </FadeIn>
        </div>

        {/* Articles grid */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 lg:gap-10 border-t border-ivory/10 pt-10">
          {articles.map((a, i) => {
            const isExternal = a.href.startsWith('http')
            return (
            <motion.article
              key={a.idx}
              initial={{ opacity: 0, y: 20 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: i * 0.1, ease: EASE }}
              className="group flex flex-col"
            >
              <a
                href={a.href}
                {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className={`flex flex-col h-full ${isExternal ? 'cursor-pointer' : 'cursor-default'}`}
                aria-disabled={!isExternal}
              >
              {/* Image with overlay */}
              <div className="relative overflow-hidden mb-6" style={{ aspectRatio: '16/10' }}>
                <div className="absolute inset-0 bg-[#0D0B09]/50 z-10 group-hover:bg-[#0D0B09]/30 transition-colors duration-700" />
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.4s] ease-out group-hover:scale-[1.06]"
                  style={{ backgroundImage: `url(${a.img})` }}
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="label text-[#B8922C] bg-[#0D0B09]/80 px-2 py-1" style={{ fontSize: '0.7rem', letterSpacing: '0.3em' }}>
                    {a.category}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="flex items-center gap-4 mb-4">
                <span className="label text-[#B8922C]" style={{ fontSize: '0.72rem' }}>{a.idx}</span>
                <div className="rule-gold flex-1 origin-left transition-transform duration-700 group-hover:opacity-80" />
                <span className="label text-mist/50" style={{ fontSize: '0.72rem', letterSpacing: '0.2em' }}>{a.date}</span>
              </div>
              <h3 className="font-display italic font-light text-[1.1rem] lg:text-[1.25rem] text-ivory leading-tight mb-4 group-hover:text-[#B8922C] transition-colors duration-400">
                {a.title}
              </h3>
              <p className="text-[0.85rem] font-light leading-[1.9] text-mist/80 flex-1">
                {a.excerpt}
              </p>
              {isExternal && (
                <div className="mt-5">
                  <span className="label text-[#B8922C] link-underline" style={{ fontSize: '0.72rem', letterSpacing: '0.28em' }}>
                    {t.news.readMore}
                  </span>
                </div>
              )}
              </a>
            </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
