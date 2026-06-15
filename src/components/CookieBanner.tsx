'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const STORAGE_KEY = 'sphere_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (!saved) setVisible(true)
    } catch {
      // localStorage unavailable (private browsing, SSR)
    }
  }, [])

  const accept = () => {
    try { localStorage.setItem(STORAGE_KEY, 'accepted') } catch {}
    setVisible(false)
  }

  const decline = () => {
    try { localStorage.setItem(STORAGE_KEY, 'declined') } catch {}
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-label="Cookie consent"
          className="fixed bottom-0 left-0 right-0 z-[200] bg-[#0D0B09] border-t border-[#B8922C]/20"
        >
          <div className="rule-gold" />
          <div className="px-site py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-[0.9rem] font-light leading-[1.9] text-mist/80 max-w-xl">
              We use cookies to improve your experience and analyse site traffic.
              By clicking Accept, you consent to our use of cookies in accordance with our{' '}
              <Link href="/privacy" className="text-[#B8922C] hover:text-[#B8922C]/80 transition-colors duration-200 underline underline-offset-2">
                Privacy Policy
              </Link>
              .
            </p>
            <div className="flex items-center gap-5 flex-shrink-0">
              <button
                onClick={decline}
                className="label text-mist/50 hover:text-mist/80 transition-colors duration-200"
              >
                Decline
              </button>
              <button
                onClick={accept}
                className="label text-[#0D0B09] bg-[#B8922C] px-5 py-2 hover:bg-[#C8A23C] transition-colors duration-200"
                style={{ fontSize: '0.75rem', letterSpacing: '0.3em' }}
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
