import type { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'S.P.H.E.R.E. — Strategic Prestige Hospitality & Elite Relationship Events',
  description:
    'Masters of Haute Living & Whisperers of Excellence. A world of private luxury, elevated hospitality and bespoke experiences shaped with discretion, cultural intelligence and aesthetic precision.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bodoniModa.variable} ${publicSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
