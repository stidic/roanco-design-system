"use client";

import FadeIn from "./FadeIn";
import Float from "./Float";

const steps = [
  {
    num: "01",
    title: "We save you money",
    description: "Before we talk about AI, we prove our value. We compare your current payment processing costs against our near-cost rates, show you the exact savings, and switch you over with zero disruption. You start saving from day one.",
    detail: "30\u201350% average savings on processing fees",
  },
  {
    num: "02",
    title: "Phase 1: Consult & Diagnose",
    description: "We embed inside your business. We audit every workflow \u2014 scheduling, invoicing, follow-ups, client intake, data entry \u2014 and map exactly where time and money are being wasted. We train your team on AI tools and show you what\u2019s possible. This is the consulting phase.",
    detail: "Free workflow audit to start. Full engagement: $2K\u2013$5K",
  },
  {
    num: "03",
    title: "Phase 2: Build the System",
    description: "Once we know what to fix, we build it. Custom agentic systems \u2014 AI-powered automation that runs on its own, handles the repetitive work, and gives your team their time back. This is where the V36 goes in.",
    detail: "Custom agentic system build: $3K\u2013$15K",
  },
  {
    num: "04",
    title: "Ongoing Optimization",
    description: "AI moves fast. We stay embedded as a partner, not a vendor. Monthly optimization, new capabilities as they emerge, and continuous tuning to make sure the systems keep delivering. If your website or brand needs work, we handle that too.",
    detail: "Monthly retainer: $500\u2013$2K/mo",
  },
];

export default function Process() {
  return (
    <section id="how-we-work" className="relative px-6 md:px-16 lg:px-24 py-24 md:py-36">
      <div className="accent-line mb-20" />
      <div className="relative z-10 mx-auto w-full max-w-[1200px]">
        <Float amount={20}>
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-accent" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-accent font-medium">
                <span className="font-mono text-accent/30 mr-1.5">02</span>How We Work
              </span>
            </div>
            <h2 className="font-serif text-[clamp(2.2rem,5vw,4rem)] tracking-[-0.02em]">
              Every contract has <span className="text-accent">two phases.</span>
            </h2>
            <p className="mt-5 max-w-xl text-text-muted text-base leading-[1.7]">
              Phase 1 proves value and surfaces the exact spec. Phase 2 builds the system. Payments get us in the door before any of it starts.
            </p>
          </FadeIn>
        </Float>

        <div className="mt-16 space-y-6">
          {steps.map((step, i) => (
            <Float key={step.num} amount={15 + i * 5}>
              <FadeIn delay={0.1 + i * 0.08}>
                <div className="card p-8 md:p-10 group">
                  <div className="grid md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-2 flex md:flex-col items-center md:items-start gap-4">
                      <div className="w-14 h-14 rounded-full border border-border flex items-center justify-center text-accent/60 group-hover:border-border-hover group-hover:text-accent transition-all duration-300">
                        <span className="font-serif text-lg">{step.num}</span>
                      </div>
                    </div>
                    <div className="md:col-span-7">
                      <h3 className="text-xl md:text-2xl font-serif tracking-[-0.01em] group-hover:text-accent transition-colors duration-300">{step.title}</h3>
                      <p className="mt-4 text-sm md:text-base leading-[1.8] text-text-muted">{step.description}</p>
                    </div>
                    <div className="md:col-span-3 flex items-center">
                      <div className="border border-border rounded-[8px] px-5 py-4 w-full">
                        <span className="text-xs font-mono text-accent/60 leading-relaxed">{step.detail}</span>
                      </div>
                    </div>
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
