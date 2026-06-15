import type { Metadata, Viewport } from 'next'
import { Bodoni_Moda, Public_Sans } from 'next/font/google'
import './globals.css'

const bodoniModa = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
  style: ['normal', 'italic'],
  variable: '--font-bodoni',
  display: 'swap',
})

const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-public',
  display: 'swap',
})

const siteName = 'S.P.H.E.R.E.'
const title = 'S.P.H.E.R.E. — Luxury Events & Concierge in Riyadh, Saudi Arabia'
const description =
  'S.P.H.E.R.E. crafts bespoke luxury events, elevated hospitality and private concierge services in Riyadh and across Saudi Arabia — Italian elegance rooted in Kingdom culture. Masters of Haute Living & Whisperers of Excellence.'

export const metadata: Metadata = {
  metadataBase: new URL('https://sphere.com.sa'),
  title: {
    default: title,
    template: `%s | ${siteName}`,
  },
  description,
  keywords: [
    'luxury events Riyadh',
    'luxury events Saudi Arabia',
    'luxury concierge Riyadh',
    'event design Saudi Arabia',
    'VIP hospitality',
    'bespoke events',
    'luxury event planner Riyadh',
    'F&B consultancy',
    'S.P.H.E.R.E.',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName,
    title,
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  applicationName: siteName,
  category: 'Luxury Events & Hospitality',
}

export const viewport: Viewport = {
  themeColor: '#0D0B09',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'S.P.H.E.R.E.',
  legalName: 'Strategic Prestige Hospitality & Elite Relationship Events',
  url: 'https://sphere.com.sa',
  logo: 'https://sphere.com.sa/logo-mark.svg',
  description,
  email: 'info@sphere.com.sa',
  telephone: '+966505736765',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Riyadh',
    addressCountry: 'SA',
  },
  areaServed: 'Saudi Arabia',
  knowsAbout: [
    'Luxury Events',
    'Event Design',
    'Concierge Services',
    'VIP Hospitality',
    'F&B Consultancy',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bodoniModa.variable} ${publicSans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
