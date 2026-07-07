'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export default function Footer() {
  const { t, dir, locale } = useLanguage()

  return (
    <footer
      dir={dir}
      lang={locale}
      className={`bg-night border-t border-[#B8922C]/15 ${locale === 'ar' ? 'lang-ar' : ''}`}
    >
      <div className="px-site py-10 flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <div className="w-20 opacity-70 hover:opacity-100 transition-opacity duration-400">
          <Image src="/Logo-Oro.svg" alt="S.P.H.E.R.E." width={320} height={48} />
        </div>

        {/* Center */}
        <p className="label text-mist/80 text-center">
          SPHERE EVENT AND HOSPITALITY LLC - RIYADH
        </p>

        {/* Right */}
        <div className="flex items-center gap-5">
          <a
            href="https://www.instagram.com/sphere.ksa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.footer.instagramAriaLabel}
            className="text-[#B8922C]/60 hover:text-[#B8922C] transition-colors duration-300"
          >
            <InstagramIcon />
          </a>
          <p className="label text-mist/80">© {new Date().getFullYear()} S.P.H.E.R.E.</p>
          <Link href="/privacy" className="label text-mist/50 hover:text-mist/80 transition-colors duration-300">
            {t.footer.privacy}
          </Link>
        </div>
      </div>
    </footer>
  )
}
