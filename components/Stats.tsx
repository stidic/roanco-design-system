"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import FadeIn from "./FadeIn";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, target, { duration: 2, ease: [0.25, 0.1, 0.25, 1] });
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return () => { controls.stop(); unsubscribe(); };
  }, [isInView, target, count, rounded]);

  return (
    <motion.span ref={ref} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
      {display}{suffix}
    </motion.span>
  );
}

const stats = [
  { value: 50, suffix: "%", label: "Average savings on payment processing fees", color: "#E8735A" },
  { value: 20, suffix: "+", label: "Hours/week reclaimed with agentic systems", color: "#7EC88A" },
  { value: 2, suffix: "", label: "Markets with boots on the ground", color: "#7EB8C8" },
];

const verticals = ["CPAs & Accounting", "Construction", "Law Firms", "Healthcare", "Dental", "Real Estate", "Retail", "Professional Services"];

export default function Stats() {
  return (
    <section className="relative px-6 md:px-16 lg:px-24 py-20 md:py-28">
      <div className="relative z-10 mx-auto w-full max-w-[1200px]">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <div className="text-center md:text-left">
                <div className="text-[clamp(3rem,7vw,5rem)] font-light tracking-[-0.03em]" style={{ color: stat.color }}>
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-20 pt-10 border-t border-border">
            <span className="text-[10px] tracking-[0.25em] uppercase text-text-muted/40 block mb-6">Who we work with</span>
            <p className="text-sm text-text-muted/70 mb-6 max-w-lg leading-relaxed">
              SMBs with 1–50 employees across a wide range of verticals. We stay dynamic — the system works wherever there are workflows to automate.
            </p>
            <div className="flex flex-wrap gap-3">
              {verticals.map((v) => (
                <span key={v} className="border border-border px-5 py-2.5 text-xs tracking-wide text-text-muted transition-colors duration-300 hover:border-border-hover hover:text-accent rounded-[8px] cursor-default">
                  {v}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
