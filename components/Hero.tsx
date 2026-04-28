"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const line = {
  hidden: { y: "110%", opacity: 0 },
  visible: (i: number) => ({
    y: "0%", opacity: 1,
    transition: { delay: i * 0.15, duration: 1, ease: [0.76, 0, 0.24, 1] as const },
  }),
};

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: {
      y: { type: "spring" as const, damping: 25, stiffness: 150, delay: 0.5 + i * 0.12 },
      opacity: { duration: 0.6, delay: 0.5 + i * 0.12 },
    },
  }),
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-screen flex-col justify-center px-6 md:px-16 lg:px-24">
      <div className="hero-glow" />
      <motion.div className="relative z-10 mx-auto w-full max-w-[1200px]" style={{ opacity }}>
        <div className="overflow-hidden">
          <motion.div style={{ y: y1 }}>
            <motion.h1 className="font-serif text-[clamp(4.5rem,13vw,13rem)] leading-[0.85] tracking-[-0.03em]"
              variants={line} initial="hidden" animate="visible" custom={0}>
              Roan
            </motion.h1>
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.div style={{ y: y2 }}>
            <motion.h1 className="font-serif text-[clamp(4.5rem,13vw,13rem)] leading-[0.85] tracking-[-0.03em] text-accent"
              variants={line} initial="hidden" animate="visible" custom={1}>
              Co.
            </motion.h1>
          </motion.div>
        </div>

        <motion.div className="mt-12 md:mt-16 max-w-xl">
          <motion.p className="text-sm tracking-wide text-text-muted" variants={fade} initial="hidden" animate="visible" custom={0}>
            <span className="text-accent italic font-serif text-base">It&apos;s not if, it&apos;s when.</span>
          </motion.p>

          <motion.p className="mt-5 text-base md:text-lg text-text-muted leading-relaxed" variants={fade} initial="hidden" animate="visible" custom={1}>
            We save your business money on payment processing.{" "}
            <span className="text-text">Then we show you where AI can save you 10–20 hours a week.</span>{" "}
            And if your digital presence doesn&apos;t match the business you&apos;re building, we fix that too.
          </motion.p>

          <motion.div className="mt-10 flex flex-wrap gap-4" variants={fade} initial="hidden" animate="visible" custom={2}>
            <a href="#contact"
              className="inline-flex items-center bg-accent px-7 py-3.5 text-xs tracking-[0.12em] uppercase text-bg font-medium rounded-[8px] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(232,115,90,0.25)] hover:scale-[1.02]">
              Get started
            </a>
            <a href="#services"
              className="inline-flex items-center gap-2 border border-border px-7 py-3.5 text-xs tracking-[0.12em] uppercase text-text-muted rounded-[8px] transition-all duration-300 hover:border-border-hover hover:text-text">
              What we do
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" /></svg>
            </a>
          </motion.div>
        </motion.div>

        <motion.div className="mt-20 flex flex-wrap gap-8 md:gap-16" variants={fade} initial="hidden" animate="visible" custom={3}>
          {[
            { label: "Payments", desc: "Save money" },
            { label: "AI Workflows", desc: "Save time" },
            { label: "Web & Brand", desc: "Look better" },
          ].map((item, i) => (
            <div key={item.label} className="flex items-center gap-3">
              <span className="font-mono text-[10px] text-accent/30">0{i + 1}</span>
              <div>
                <span className="text-xs tracking-[0.1em] uppercase text-text">{item.label}</span>
                <span className="block text-[11px] text-text-muted/50 mt-0.5">{item.desc}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
