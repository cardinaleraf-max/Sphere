'use client'
import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, animate, useTransform } from 'framer-motion'
import { useLanguage } from '@/lib/language-context'

const EASE = [0.76, 0, 0.24, 1] as const
const COUNT_EASE = [0.22, 1, 0.36, 1] as const

// Index-aligned with t.stats.items — numbers are locale-agnostic
const NUMBERS = [
  { value: 50, suffix: '+' },
  { value: 10, suffix: '+' },
  { value: 12, suffix: '' },
  { value: 500000, suffix: '+' },
  { value: 15, suffix: '' },
  { value: 98, suffix: '%' },
]

function Counter({ value, suffix, start }: { value: number; suffix: string; start: boolean }) {
  const mv = useMotionValue(0)
  const text = useTransform(mv, (v) => Math.round(v).toLocaleString('en-US'))
  useEffect(() => {
    if (!start) return
    const controls = animate(mv, value, { duration: 2, ease: COUNT_EASE })
    return controls.stop
  }, [start, value, mv])
  return (
    <span className="font-display font-light text-[#B8922C] leading-none tabular-nums text-[clamp(2.6rem,6vw,4.6rem)]">
      <motion.span>{text}</motion.span>
      {suffix}
    </span>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { t } = useLanguage()

  return (
    <section className="bg-night text-ivory border-t border-ivory/10">
      <div className="px-site py-[clamp(4rem,9vw,9rem)]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="mb-[clamp(2.5rem,5vw,4rem)] flex items-center gap-4"
        >
          <div className="rule-gold w-6 flex-shrink-0" />
          <span className="label text-[#B8922C]">{t.stats.label}</span>
        </motion.div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 border-t border-ivory/10">
          {t.stats.items.map((label, i) => {
            // 2-col mobile: right border on left column (even index)
            // 3-col desktop: right border except last column (i % 3 === 2)
            const mobileRight = i % 2 === 0 ? 'border-r' : 'border-r-0'
            const deskRight = i % 3 === 2 ? 'md:border-r-0' : 'md:border-r'
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: i * 0.1, ease: EASE }}
                className={`border-b border-ivory/10 py-[clamp(1.8rem,4vw,3rem)] px-2 ${mobileRight} ${deskRight}`}
              >
                <Counter value={NUMBERS[i].value} suffix={NUMBERS[i].suffix} start={inView} />
                <p className="label text-ivory/60 mt-4 leading-[1.5]" style={{ letterSpacing: '0.16em' }}>
                  {label}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
