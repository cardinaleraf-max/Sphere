'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.4 }}
          onClick={scrollUp}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-[150] w-10 h-10 flex items-center justify-center border border-[#B8922C]/30 bg-[#0D0B09]/80 backdrop-blur-sm text-[#B8922C]/60 hover:text-[#B8922C] hover:border-[#B8922C]/60 transition-colors duration-300"
          style={{ backdropFilter: 'blur(8px)' }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M1 8 L6 3 L11 8" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
