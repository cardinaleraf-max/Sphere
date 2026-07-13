"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";

const EASE = [0.76, 0, 0.24, 1] as const;

function ClipLine({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div className="overflow-hidden pb-6 -mb-6">
      <motion.div
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 1.6, delay, ease: EASE }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HeroGeometric() {
  const { t } = useLanguage();
  const go = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center">
      {/* Background image */}
      <Image
        src="/images/hero1234.jpg"
        alt="S.P.H.E.R.E. luxury backdrop"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay — /60 for WCAG AA contrast on white text */}
      <div className="absolute inset-0 bg-[#0D0B09]/60 pointer-events-none" />

      {/* Bottom vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0D0B09] to-transparent pointer-events-none" />

      {/* Content — left aligned, vertically centered */}
      <div className="relative z-10 px-site pt-[80px]">
        <div className="max-w-3xl">
          <ClipLine delay={0.5}>
            <h1
              className="font-display italic font-light leading-[1.15]"
              style={{ fontSize: "clamp(2.1rem,5.5vw,5.5rem)", color: "#F0EBE0" }}
            >
              {t.hero.line1}
            </h1>
          </ClipLine>
          <ClipLine delay={0.62}>
            <h1
              className="font-display font-light leading-[1.15]"
              style={{ fontSize: "clamp(2.1rem,5.5vw,5.5rem)", color: "#B8922C" }}
            >
              {t.hero.line2}
            </h1>
          </ClipLine>
          <ClipLine delay={0.74}>
            <h1
              className="font-display italic font-light leading-[1.15]"
              style={{ fontSize: "clamp(2.1rem,5.5vw,5.5rem)", color: "#F0EBE0" }}
            >
              {t.hero.line3}
            </h1>
          </ClipLine>
        </div>

        {/* Subtitle quote */}
        <FadeIn delay={1.0} className="mt-6 lg:mt-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="rule-gold w-5 flex-shrink-0" />
          </div>
          <p
            className="font-display italic font-light leading-snug max-w-sm"
            style={{ fontSize: "clamp(0.9rem,1.5vw,1.28rem)", color: "#B8922C" }}
          >
            {t.hero.quoteLine1}
            <br />
            {t.hero.quoteLine2}
          </p>
        </FadeIn>

        {/* Scroll cue */}
        <FadeIn delay={1.6} className="mt-8 lg:mt-12">
          <button
            onClick={() => go("#about")}
            className="label"
            style={{ color: "#B8922C", opacity: 0.7 }}
          >
            ↓
          </button>
        </FadeIn>
      </div>
    </div>
  );
}
