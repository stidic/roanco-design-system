"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FadeIn from "./FadeIn";

const contacts = [
  { name: "Stiles Dichter", role: "CEO", email: "stiles.dichter@gmail.com", phone: "(772) 801-9021", location: "Salt Lake City, UT" },
  { name: "Josh Langsam", role: "CTO", email: "joshualangsam@gmail.com", location: "Jupiter, FL" },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return (
    <section ref={ref} id="contact" className="relative px-6 md:px-16 lg:px-24 py-28 md:py-44">
      <div className="accent-line mb-20" />

      <motion.div className="relative z-10 mx-auto w-full max-w-[1200px]" style={{ y }}>
        <FadeIn>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-accent" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-accent font-medium">
              <span className="font-mono text-accent/30 mr-1.5">04</span>Contact
            </span>
          </div>
          <h2 className="font-serif text-[clamp(3.5rem,10vw,10rem)] leading-[0.88] tracking-[-0.02em]">
            Let&apos;s save you
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-serif text-[clamp(3.5rem,10vw,10rem)] leading-[0.88] tracking-[-0.02em] text-accent">
            money.
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mt-10 max-w-lg text-text-muted text-base leading-[1.7]">
            Start with a free payment processing comparison — we&apos;ll show you exactly
            what you&apos;d save. Then let&apos;s talk about where AI can give you
            your time back.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-14 grid md:grid-cols-2 gap-5">
            {contacts.map((contact) => (
              <div key={contact.name} className="card p-8 group">
                <div className="h-0.5 w-12 rounded-full mb-6 bg-accent/40 transition-all duration-500 group-hover:w-24 group-hover:bg-accent" />
                <h3 className="text-lg font-serif group-hover:text-accent transition-colors duration-300">{contact.name}</h3>
                <p className="text-xs text-text-muted/60 mt-1">{contact.role} — {contact.location}</p>
                <div className="mt-5 space-y-2">
                  <a href={`mailto:${contact.email}`} className="block text-sm text-text-muted hover:text-accent transition-colors duration-300">{contact.email}</a>
                  {contact.phone && (
                    <a href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`} className="block text-sm text-text-muted hover:text-accent transition-colors duration-300">{contact.phone}</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="mailto:stiles.dichter@gmail.com"
              className="inline-flex items-center bg-accent px-7 py-3.5 text-xs tracking-[0.12em] uppercase text-bg font-medium rounded-[8px] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(232,115,90,0.25)] hover:scale-[1.02]">
              Email us
            </a>
            <a href="tel:7728019021"
              className="inline-flex items-center gap-2 border border-border px-7 py-3.5 text-xs tracking-[0.12em] uppercase text-text-muted rounded-[8px] transition-all duration-300 hover:border-border-hover hover:text-accent">
              Call now
            </a>
          </div>
        </FadeIn>
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-[1200px] mt-28 border-t border-border pt-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="block font-serif text-lg text-text/80">Roan Co.</span>
            <span className="block text-[11px] text-text-muted/30 tracking-wide mt-1">Payments · AI · Web & Brand</span>
            <span className="block text-[11px] text-text-muted/30 tracking-wide mt-0.5">&copy; {new Date().getFullYear()} Roan Co., Inc. All rights reserved.</span>
          </div>
          <div className="text-right">
            <span className="block text-[11px] text-text-muted/30 tracking-wide">Salt Lake City, UT & Jupiter, FL</span>
            <span className="block text-[11px] text-text-muted/20 tracking-wide mt-0.5 italic">It&apos;s not if, it&apos;s when.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
