'use client'
import { useLanguage } from '@/lib/language-context'

export default function LanguageSwitcher({ color }: { color: string }) {
  const { locale, setLocale, t } = useLanguage()

  return (
    <div
      className="flex items-center gap-1.5 label"
      role="group"
      aria-label={t.switcher.ariaLabel}
      style={{ color }}
    >
      <button
        onClick={() => setLocale('en')}
        className="link-underline"
        style={{ opacity: locale === 'en' ? 1 : 0.5 }}
        aria-current={locale === 'en'}
      >
        EN
      </button>
      <span aria-hidden="true" style={{ opacity: 0.4 }}>/</span>
      <button
        onClick={() => setLocale('ar')}
        className="link-underline"
        style={{ opacity: locale === 'ar' ? 1 : 0.5 }}
        aria-current={locale === 'ar'}
      >
        AR
      </button>
    </div>
  )
}
