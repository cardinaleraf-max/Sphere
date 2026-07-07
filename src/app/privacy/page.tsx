import type { Metadata } from 'next'
import PrivacyContent from '@/components/PrivacyContent'

export const metadata: Metadata = {
  title: 'Privacy Policy — S.P.H.E.R.E.',
  description: 'Privacy Policy and Cookie Policy for Sphere Event and Hospitality LLC.',
}

export default function PrivacyPage() {
  return <PrivacyContent />
}
