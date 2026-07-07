'use client'
import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

export type Locale = 'en' | 'ar'

const STORAGE_KEY = 'sphere_locale'

export const translations = {
  en: {
    nav: {
      about: 'About',
      events: 'Events',
      concierge: 'Concierge',
      news: 'News',
      contact: 'Contact',
      enquire: 'Enquire',
      menuAriaLabel: 'Menu',
    },
    footer: {
      privacy: 'Privacy',
      instagramAriaLabel: 'Sphere on Instagram',
    },
    switcher: {
      ariaLabel: 'Change language',
    },
  },
  ar: {
    nav: {
      about: 'من نحن',
      events: 'الفعاليات',
      concierge: 'الكونسيرج',
      news: 'الأخبار',
      contact: 'تواصل',
      enquire: 'استفسار',
      menuAriaLabel: 'القائمة',
    },
    footer: {
      privacy: 'سياسة الخصوصية',
      instagramAriaLabel: 'سفير على إنستغرام',
    },
    switcher: {
      ariaLabel: 'تغيير اللغة',
    },
  },
} as const

type Dictionary = (typeof translations)[Locale]

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Dictionary
  dir: 'ltr' | 'rtl'
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved === 'en' || saved === 'ar') setLocaleState(saved)
    } catch {
      // localStorage unavailable (private browsing, SSR)
    }
  }, [])

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // localStorage unavailable (private browsing, SSR)
    }
  }

  const value: LanguageContextValue = {
    locale,
    setLocale,
    t: translations[locale],
    dir: locale === 'ar' ? 'rtl' : 'ltr',
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
