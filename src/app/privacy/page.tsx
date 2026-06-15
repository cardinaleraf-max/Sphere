import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — S.P.H.E.R.E.',
  description: 'Privacy Policy and Cookie Policy for Sphere Event and Hospitality LLC.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-night text-ivory">
      {/* Gold top rule */}
      <div className="rule-gold" />

      <div className="px-site py-[clamp(4rem,8vw,8rem)] max-w-3xl mx-auto">

        {/* Back link */}
        <Link
          href="/"
          className="label text-[#B8922C] link-underline mb-12 inline-block"
          style={{ fontSize: '0.7rem', letterSpacing: '0.3em' }}
        >
          ← Back
        </Link>

        {/* Title */}
        <h1 className="font-display italic font-light text-[clamp(2.2rem,5vw,4rem)] leading-[1.0] text-ivory mb-4 mt-8">
          Privacy Policy
        </h1>
        <p className="label text-[#B8922C] mb-12" style={{ fontSize: '0.7rem' }}>
          Last updated: June 2025
        </p>

        <div className="rule-gold w-12 mb-16" />

        <div className="space-y-14 text-[0.9rem] font-light leading-[2] text-ivory/80">

          <section>
            <h2 className="font-display italic text-[1.2rem] text-ivory mb-4">1. Data Controller</h2>
            <p>
              Sphere Event and Hospitality LLC, headquartered in Riyadh, Kingdom of Saudi Arabia
              (<strong className="text-ivory font-normal">«Sphere»</strong>, «we», «us»), is the data controller
              of personal data collected through this website.
            </p>
            <p className="mt-4">
              For any privacy-related enquiry, please contact us at:{' '}
              <a href="mailto:info@sphere.com.sa" className="text-[#B8922C] hover:text-ivory transition-colors duration-200 link-underline">
                info@sphere.com.sa
              </a>
            </p>
          </section>

          <div className="rule" style={{ opacity: 0.1 }} />

          <section>
            <h2 className="font-display italic text-[1.2rem] text-ivory mb-4">2. Data We Collect</h2>
            <p>When you submit our contact form, we collect:</p>
            <ul className="mt-4 space-y-2 pl-4">
              {['Full name', 'Email address', 'Message content'].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#B8922C] mt-1 flex-shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              We do not collect sensitive personal data (racial origin, political opinions, health data, etc.).
            </p>
          </section>

          <div className="rule" style={{ opacity: 0.1 }} />

          <section>
            <h2 className="font-display italic text-[1.2rem] text-ivory mb-4">3. Purpose and Legal Basis</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-[0.82rem]">
                <thead>
                  <tr className="border-b border-ivory/10">
                    <th className="text-left py-3 pr-6 font-normal text-[#B8922C] label" style={{ fontSize: '0.7rem', letterSpacing: '0.2em' }}>Purpose</th>
                    <th className="text-left py-3 font-normal text-[#B8922C] label" style={{ fontSize: '0.7rem', letterSpacing: '0.2em' }}>Legal Basis (GDPR Art. 6)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ivory/5">
                  {[
                    ['Responding to enquiries', 'Pre-contractual measures (Art. 6(1)(b))'],
                    ['Analytics & site improvement', 'Legitimate interest (Art. 6(1)(f)) — only with cookie consent'],
                    ['Legal obligations', 'Legal obligation (Art. 6(1)(c))'],
                  ].map(([purpose, basis]) => (
                    <tr key={purpose}>
                      <td className="py-3 pr-6 text-ivory/80">{purpose}</td>
                      <td className="py-3 text-ivory/60">{basis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <div className="rule" style={{ opacity: 0.1 }} />

          <section>
            <h2 className="font-display italic text-[1.2rem] text-ivory mb-4">4. Data Retention</h2>
            <p>
              We retain contact form data for a maximum of 24 months from the date of submission,
              or for as long as necessary to fulfil the purpose for which it was collected.
              After that period, data is securely deleted.
            </p>
          </section>

          <div className="rule" style={{ opacity: 0.1 }} />

          <section>
            <h2 className="font-display italic text-[1.2rem] text-ivory mb-4">5. Your Rights (GDPR)</h2>
            <p>If you are located in the European Economic Area, you have the right to:</p>
            <ul className="mt-4 space-y-2 pl-4">
              {[
                'Access the personal data we hold about you',
                'Request rectification of inaccurate data',
                'Request erasure ("right to be forgotten")',
                'Object to or restrict processing',
                'Data portability',
                'Withdraw consent at any time (where processing is based on consent)',
                'Lodge a complaint with your local supervisory authority',
              ].map(right => (
                <li key={right} className="flex items-start gap-3">
                  <span className="text-[#B8922C] mt-1 flex-shrink-0">—</span>
                  <span>{right}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              To exercise any of these rights, contact us at{' '}
              <a href="mailto:info@sphere.com.sa" className="text-[#B8922C] hover:text-ivory transition-colors duration-200 link-underline">
                info@sphere.com.sa
              </a>
              . We will respond within 30 days.
            </p>
          </section>

          <div className="rule" style={{ opacity: 0.1 }} />

          <section>
            <h2 className="font-display italic text-[1.2rem] text-ivory mb-4">6. Cookies</h2>
            <p>
              This website may use cookies to improve functionality and analyse traffic.
              We distinguish between:
            </p>
            <ul className="mt-4 space-y-3 pl-4">
              <li className="flex items-start gap-3">
                <span className="text-[#B8922C] mt-1 flex-shrink-0">—</span>
                <span>
                  <strong className="text-ivory font-normal">Essential cookies</strong> — required for the site to function
                  correctly. No consent required.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8922C] mt-1 flex-shrink-0">—</span>
                <span>
                  <strong className="text-ivory font-normal">Analytics cookies</strong> — used to understand how visitors
                  interact with the site. Activated only after you provide explicit consent via the cookie banner.
                </span>
              </li>
            </ul>
            <p className="mt-4">
              You can withdraw your cookie consent at any time by clearing your browser's local storage
              or cookies for this domain. Your preference will be forgotten and the banner will reappear
              on your next visit.
            </p>
          </section>

          <div className="rule" style={{ opacity: 0.1 }} />

          <section>
            <h2 className="font-display italic text-[1.2rem] text-ivory mb-4">7. Third Parties</h2>
            <p>
              We do not sell, rent or share your personal data with third parties for marketing purposes.
              We may engage trusted service providers (e.g. hosting, email delivery) who process data
              solely on our behalf under strict data processing agreements.
            </p>
          </section>

          <div className="rule" style={{ opacity: 0.1 }} />

          <section>
            <h2 className="font-display italic text-[1.2rem] text-ivory mb-4">8. Changes to this Policy</h2>
            <p>
              We reserve the right to update this Privacy Policy at any time. Material changes will
              be communicated via a notice on our website. Continued use of the site after changes
              constitutes acceptance of the revised policy.
            </p>
          </section>

        </div>

        {/* Footer link */}
        <div className="mt-20 pt-10 border-t border-ivory/10">
          <Link
            href="/"
            className="label text-[#B8922C] link-underline"
            style={{ fontSize: '0.7rem', letterSpacing: '0.3em' }}
          >
            ← Return to Sphere
          </Link>
        </div>
      </div>
    </div>
  )
}
