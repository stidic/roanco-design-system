"use client";

import FadeIn from "./FadeIn";
import Float from "./Float";

const steps = [
  { num: "01", title: "We save you money", description: "We review your current payment processing, show you exactly what you\u2019ll save, and switch you over with zero disruption. You start saving immediately.", detail: "Most clients save 30\u201350% on processing fees" },
  { num: "02", title: "We show you where AI fits", description: "We audit your day-to-day operations \u2014 scheduling, invoicing, follow-ups, document processing \u2014 and show you exactly which tasks can be automated with AI tools that exist right now.", detail: "Free 30-minute workflow audit, no obligation" },
  { num: "03", title: "We build what\u2019s missing", description: "Whether it\u2019s implementing the AI workflows we identified, building you a modern website, or refreshing your brand \u2014 we do the work. You focus on running your business.", detail: "Implementation, training, and ongoing optimization" },
];

export default function Process() {
  return (
    <section id="process" className="relative px-6 md:px-16 lg:px-24 py-24 md:py-36">
      <div className="accent-line mb-20" />
      <div className="relative z-10 mx-auto w-full max-w-[1200px]">
        <Float amount={20}>
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-accent" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-accent font-medium">
                <span className="font-mono text-accent/30 mr-1.5">02</span>How It Works
              </span>
            </div>
            <h2 className="font-serif text-[clamp(2.2rem,5vw,4rem)] tracking-[-0.02em]">
              Simple process. <span className="text-accent">Real results.</span>
            </h2>
          </FadeIn>
        </Float>

        <div className="mt-16 space-y-6">
          {steps.map((step, i) => (
            <Float key={step.num} amount={15 + i * 5}>
              <FadeIn delay={0.1 + i * 0.1}>
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
