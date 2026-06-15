'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const sections = [
  { num: 'I',   label: 'About',     href: '#about' },
  { num: 'II',  label: 'Events',    href: '#events' },
  { num: 'III', label: 'Concierge', href: '#concierge' },
  // { num: 'IV',  label: 'Team',      href: '#team' }, // Sezione Team nascosta — riattivare in futuro
  { num: 'IV',  label: 'News',      href: '#news' },
  { num: 'V',   label: 'Contact',   href: '#contact' },
]

export default function Navigation() {
  const [dark, setDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const darkSections = ['hero', 'about', 'events', 'news', 'contact']
    const lightSections = ['heritage', 'concierge', 'team']
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const id = e.target.id
            setDark(darkSections.includes(id))
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )
    darkSections.concat(lightSections).forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const go = (href: string) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const bg   = dark ? '#0D0B09' : '#F8F5EF'
  const text = dark ? '#F0EBE0' : '#1A1610'
  const logo = dark ? '/logo-white.svg' : '/logo-black.svg'

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{ backgroundColor: bg, color: text }}
        className="fixed top-0 left-0 right-0 z-[100] transition-colors duration-700"
      >
        {/* Top rule */}
        <div className="rule-gold" />

        <div className="px-site flex items-center h-[60px] justify-between">

          {/* Logo a sinistra (mobile + desktop) */}
          <a
            href="#"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="block w-24 lg:w-28 flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-300"
          >
            {mounted && <Image src={logo} alt="S.P.H.E.R.E." width={320} height={48} priority />}
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {sections.map(s => (
              <li key={s.href}>
                <button
                  onClick={() => go(s.href)}
                  className="group flex items-baseline gap-1.5"
                  style={{ color: text }}
                >
                  <span className="font-display italic text-xs" style={{ color: '#B8922C' }}>
                    {s.num}
                  </span>
                  <span className="label link-underline opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                    {s.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop: enquire a destra */}
          <button
            onClick={() => go('#contact')}
            className="hidden lg:block label link-underline"
            style={{ color: text }}
          >
            Enquire
          </button>

          {/* Mobile: hamburger a destra */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            className="lg:hidden flex flex-col gap-[5px] p-2"
            aria-label="Menu"
          >
            <span className={`block h-px w-6 transition-all duration-400 origin-center ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`}
              style={{ background: text }} />
            <span className={`block h-px transition-all duration-400 ${menuOpen ? 'w-0 opacity-0' : 'w-4'}`}
              style={{ background: text }} />
            <span className={`block h-px w-6 transition-all duration-400 origin-center ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}
              style={{ background: text }} />
          </button>
        </div>

        {/* Bottom rule */}
        <div className="rule" style={{ opacity: dark ? 0.12 : 0.12 }} />
      </motion.nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[90] bg-[#0D0B09] flex flex-col items-center pt-[60px] pb-12 overflow-y-auto"
          >
            {/* Link centrati nello spazio disponibile */}
            <div className="flex-1 w-full flex flex-col items-center justify-center">
              <div className="rule-gold w-16 mb-8" />
              {sections.map((s, i) => (
                <motion.button
                  key={s.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  onClick={() => go(s.href)}
                  className="mb-5 flex items-baseline gap-3 group"
                >
                  <span className="font-display italic text-sm text-[#B8922C]">{s.num}</span>
                  <span className="font-display italic text-[2rem] font-light text-[#F0EBE0] group-hover:text-[#B8922C] transition-colors duration-300">
                    {s.label}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Enquire ancorato in basso */}
            <div className="flex flex-col items-center">
              <div className="rule-gold w-16 mb-6" />
              <button
                onClick={() => go('#contact')}
                className="label text-[#B8922C] link-underline"
              >
                Enquire
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
