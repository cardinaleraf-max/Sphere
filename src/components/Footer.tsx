import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-night border-t border-[#B8922C]/15">
      <div className="px-site py-10 flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <div className="w-20 opacity-40 hover:opacity-60 transition-opacity duration-400">
          <Image src="/logo-white.svg" alt="S.P.H.E.R.E." width={320} height={48} />
        </div>

        {/* Center */}
        <p className="label text-[#4A4038] text-center">
          Strategic Prestige Hospitality & Elite Relationship Events — Riyadh
        </p>

        {/* Right */}
        <p className="label text-[#4A4038]">
          © {new Date().getFullYear()} S.P.H.E.R.E.
        </p>
      </div>
    </footer>
  )
}
