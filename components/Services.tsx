"use client";

import FadeIn from "./FadeIn";
import Float from "./Float";

const services = [
  {
    num: "01", title: "Payment Processing", subtitle: "The Hook", color: "#E8735A",
    description: "We access payment processing at near-cost rates through our infrastructure partnership — then pass those savings directly to you. We consistently undercut Stripe, Square, and PayPal. For a business processing $500K annually, that\u2019s thousands back in your pocket.",
    features: ["Rates well below Stripe\u2019s 2.9% + $0.30", "No hidden fees, no long-term contracts", "Same-day or next-day settlement", "Simple onboarding, zero disruption"],
  },
  {
    num: "02", title: "AI Consulting", subtitle: "The Value", color: "#7EC88A",
    description: "This is why we exist. We sit down with you, learn how your business actually runs, and show you exactly which tasks \u2014 scheduling, invoicing, follow-ups, document processing \u2014 can be automated with AI tools that exist right now. Then we implement them and train your team.",
    features: ["Free 30-minute workflow audit", "Custom AI implementation", "Staff training included", "Ongoing optimization as AI evolves"],
  },
  {
    num: "03", title: "Web & Brand", subtitle: "The Extension", color: "#7EB8C8",
    description: "If your website doesn\u2019t reflect how good your business actually is, you\u2019re leaving customers on the table. We build modern, clean websites and handle brand refreshes \u2014 the kind of online presence that actually brings in business.",
    features: ["Modern, responsive websites", "Brand identity and refresh", "SEO-optimized from day one", "Ongoing marketing support"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative px-6 md:px-16 lg:px-24 py-24 md:py-36">
      <div className="accent-line mb-20" />
      <div className="relative z-10 mx-auto w-full max-w-[1200px]">
        <Float amount={20}>
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-accent" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-accent font-medium">
                <span className="font-mono text-accent/30 mr-1.5">01</span>Services
              </span>
            </div>
            <h2 className="font-serif text-[clamp(2.2rem,5vw,4rem)] tracking-[-0.02em]">Three ways we help</h2>
            <p className="mt-5 max-w-lg text-text-muted text-base leading-[1.7]">
              Payments save you money. AI saves you time. A better website brings you customers. One partner for all three.
            </p>
          </FadeIn>
        </Float>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <Float key={service.title} amount={i % 2 === 0 ? 15 : 25}>
              <FadeIn delay={0.08 + i * 0.08}>
                <div className="card p-8 flex flex-col h-full group">
                  <div className="h-0.5 w-12 rounded-full mb-7 transition-all duration-500 group-hover:w-24" style={{ background: `${service.color}60` }} />
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] tracking-[0.2em] uppercase font-medium" style={{ color: `${service.color}99` }}>{service.subtitle}</span>
                    <span className="text-[10px] font-mono text-text-muted/30">{service.num}</span>
                  </div>
                  <h3 className="text-xl font-serif tracking-[-0.01em] transition-colors duration-300" style={{ color: service.color }}>{service.title}</h3>
                  <p className="mt-4 text-sm leading-[1.7] text-text-muted flex-grow">{service.description}</p>
                  <div className="mt-6 pt-5 border-t border-border space-y-2.5">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0" style={{ color: `${service.color}60` }}>
                          <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                        <span className="text-xs text-text-muted/70 leading-relaxed">{feature}</span>
                      </div>
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
