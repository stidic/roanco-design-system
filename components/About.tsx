"use client";

import FadeIn from "./FadeIn";
import Float from "./Float";

const founders = [
  {
    name: "Stiles Dichter", role: "CEO & Co-Founder", location: "Salt Lake City, UT", territory: "Mountain West",
    description: "Leads business development, operations, and the payment processing partnership that gives Roan Co. its pricing edge. Manages client relationships and drives the company\u2019s go-to-market strategy across the Mountain West.",
    focus: ["Business Development", "Payment Infrastructure", "Operations", "GTM Strategy"],
  },
  {
    name: "Josh Langsam", role: "CTO & Co-Founder", location: "Jupiter, FL", territory: "Southeast Florida",
    description: "Leads technical architecture and agentic system builds. Designs and ships the AI-powered systems that power Phase 2 engagements. Drives client acquisition and delivery across Southeast Florida.",
    focus: ["Agentic Systems", "Technical Architecture", "AI Engineering", "Client Delivery"],
  },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 md:px-16 lg:px-24 py-24 md:py-36">
      <div className="accent-line mb-20" />
      <div className="relative z-10 mx-auto w-full max-w-[1200px]">
        <Float amount={20}>
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-accent" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-accent font-medium">
                <span className="font-mono text-accent/30 mr-1.5">03</span>About
              </span>
            </div>
          </FadeIn>
        </Float>

        <div className="mt-6 grid md:grid-cols-5 gap-16 md:gap-20">
          <div className="md:col-span-3">
            <Float amount={25}>
              <FadeIn delay={0.1}>
                <h2 className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] tracking-[-0.01em]">
                  Two founders. Two markets.{" "}
                  <span className="text-accent">One system.</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.18}>
                <p className="mt-10 text-base leading-[1.85] text-text-muted">
                  Roan Co. is an agentic systems company. We saw the same thing happening
                  everywhere: small businesses overpaying for payment processing and falling
                  behind on AI while enterprise companies raced ahead. We decided to fix both
                  problems \u2014 hands-on, embedded inside the business, not from a distance.
                </p>
                <p className="mt-6 text-base leading-[1.85] text-text-muted">
                  Every engagement follows the same structure: earn trust by saving money on
                  payments, then consult and diagnose in Phase 1, then build the agentic system
                  in Phase 2. With co-founders in{" "}
                  <span className="text-text">Salt Lake City</span> and{" "}
                  <span className="text-text">Jupiter, Florida</span>, we have
                  boots on the ground in two high-density SMB markets from day one.
                </p>
              </FadeIn>
            </Float>
          </div>

          <div className="md:col-span-2">
            <Float amount={35}>
              <FadeIn delay={0.25}>
                <div className="card p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-5 bg-accent/40" />
                    <span className="text-[10px] tracking-[0.25em] uppercase text-text-muted">Why Roan Co.</span>
                  </div>
                  <div className="space-y-4">
                    {[
                      "Processing at cost \u2014 pricing no one else can touch",
                      "Phase 1 + Phase 2 contract structure \u2014 we prove value before we build",
                      "Agentic systems, not generic software \u2014 built for your business specifically",
                      "We embed as a partner, not a vendor \u2014 your success is our success",
                      "Cybersecurity baked into every engagement \u2014 we keep your data safe",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0 text-accent/50">
                          <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                        <span className="text-sm text-text-muted leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </Float>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-5">
          {founders.map((founder, i) => (
            <Float key={founder.name} amount={i % 2 === 0 ? 15 : 25}>
              <FadeIn delay={0.1 + i * 0.08}>
                <div className="card p-8 h-full group">
                  <div className="h-0.5 w-12 rounded-full mb-7 bg-accent/40 transition-all duration-500 group-hover:w-24 group-hover:bg-accent" />
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-accent/60 font-medium">{founder.territory}</span>
                  </div>
                  <h3 className="text-xl font-serif tracking-[-0.01em] group-hover:text-accent transition-colors duration-300">{founder.name}</h3>
                  <p className="text-xs text-text-muted/60 mt-1">{founder.role} — {founder.location}</p>
                  <p className="mt-4 text-sm leading-[1.7] text-text-muted">{founder.description}</p>
                  <div className="mt-6 pt-5 border-t border-border flex flex-wrap gap-2">
                    {founder.focus.map((f) => (
                      <span key={f} className="text-[10px] tracking-wide text-text-muted/50 border border-border px-2.5 py-1 rounded-[6px]">{f}</span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </Float>
          ))}
        </div>
      </div>
    </section>
  );
}
