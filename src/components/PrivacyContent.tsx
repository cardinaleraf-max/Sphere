'use client'
import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'

export default function PrivacyContent() {
  const { t } = useLanguage()
  const p = t.privacy

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
          {p.back}
        </Link>

        {/* Title */}
        <h1 className="font-display italic font-light text-[clamp(2.2rem,5vw,4rem)] leading-[1.15] text-ivory mb-4 mt-8">
          {p.title}
        </h1>
        <p className="label text-[#B8922C] mb-12" style={{ fontSize: '0.7rem' }}>
          {p.lastUpdated}
        </p>

        <div className="rule-gold w-12 mb-16" />

        <div className="space-y-14 text-[0.9rem] font-light leading-[2] text-ivory/80">

          <section>
            <h2 className="font-display italic text-[1.2rem] text-ivory mb-4">{p.s1Title}</h2>
            <p>{p.s1Body1}</p>
            <p className="mt-4">
              {p.s1Body2}{' '}
              <a href="mailto:info@sphere.com.sa" className="text-[#B8922C] hover:text-ivory transition-colors duration-200 link-underline">
                info@sphere.com.sa
              </a>
            </p>
          </section>

          <div className="rule" style={{ opacity: 0.1 }} />

          <section>
            <h2 className="font-display italic text-[1.2rem] text-ivory mb-4">{p.s2Title}</h2>
            <p>{p.s2Intro}</p>
            <ul className="mt-4 space-y-2 ps-4">
              {p.s2Items.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#B8922C] mt-1 flex-shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">{p.s2Outro}</p>
          </section>

          <div className="rule" style={{ opacity: 0.1 }} />

          <section>
            <h2 className="font-display italic text-[1.2rem] text-ivory mb-4">{p.s3Title}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-[0.82rem]">
                <thead>
                  <tr className="border-b border-ivory/10">
                    <th className="text-start py-3 pe-6 font-normal text-[#B8922C] label" style={{ fontSize: '0.7rem', letterSpacing: '0.2em' }}>{p.s3PurposeHeader}</th>
                    <th className="text-start py-3 font-normal text-[#B8922C] label" style={{ fontSize: '0.7rem', letterSpacing: '0.2em' }}>{p.s3BasisHeader}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ivory/5">
                  {p.s3Rows.map(([purpose, basis]) => (
                    <tr key={purpose}>
                      <td className="py-3 pe-6 text-ivory/80">{purpose}</td>
                      <td className="py-3 text-ivory/60">{basis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <div className="rule" style={{ opacity: 0.1 }} />

          <section>
            <h2 className="font-display italic text-[1.2rem] text-ivory mb-4">{p.s4Title}</h2>
            <p>{p.s4Body}</p>
          </section>

          <div className="rule" style={{ opacity: 0.1 }} />

          <section>
            <h2 className="font-display italic text-[1.2rem] text-ivory mb-4">{p.s5Title}</h2>
            <p>{p.s5Intro}</p>
            <ul className="mt-4 space-y-2 ps-4">
              {p.s5Items.map(right => (
                <li key={right} className="flex items-start gap-3">
                  <span className="text-[#B8922C] mt-1 flex-shrink-0">—</span>
                  <span>{right}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              {p.s5Outro}
            </p>
          </section>

          <div className="rule" style={{ opacity: 0.1 }} />

          <section>
            <h2 className="font-display italic text-[1.2rem] text-ivory mb-4">{p.s6Title}</h2>
            <p>{p.s6Intro}</p>
            <ul className="mt-4 space-y-3 ps-4">
              <li className="flex items-start gap-3">
                <span className="text-[#B8922C] mt-1 flex-shrink-0">—</span>
                <span>
                  <strong className="text-ivory font-normal">{p.s6Essential}</strong> {p.s6EssentialBody}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8922C] mt-1 flex-shrink-0">—</span>
                <span>
                  <strong className="text-ivory font-normal">{p.s6Analytics}</strong> {p.s6AnalyticsBody}
                </span>
              </li>
            </ul>
            <p className="mt-4">{p.s6Outro}</p>
          </section>

          <div className="rule" style={{ opacity: 0.1 }} />

          <section>
            <h2 className="font-display italic text-[1.2rem] text-ivory mb-4">{p.s7Title}</h2>
            <p>{p.s7Body}</p>
          </section>

          <div className="rule" style={{ opacity: 0.1 }} />

          <section>
            <h2 className="font-display italic text-[1.2rem] text-ivory mb-4">{p.s8Title}</h2>
            <p>{p.s8Body}</p>
          </section>

        </div>

        {/* Footer link */}
        <div className="mt-20 pt-10 border-t border-ivory/10">
          <Link
            href="/"
            className="label text-[#B8922C] link-underline"
            style={{ fontSize: '0.7rem', letterSpacing: '0.3em' }}
          >
            {p.returnToSphere}
          </Link>
        </div>
      </div>
    </div>
  )
}
