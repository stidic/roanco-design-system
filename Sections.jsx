/* Roan Co. — Nav + Hero + Services + How We Work + About
   Loaded after Primitives.jsx; references window.* */
const { useEffect, useRef, useState } = React;

/* ========== NAV ========== */
window.Nav = function Nav() {
  const [scrolled, setScrolled] = useState(0);
  useEffect(() => {
    const on = () => {
      const doc = document.documentElement;
      const p = doc.scrollTop / Math.max(1, doc.scrollHeight - doc.clientHeight);
      setScrolled({ p, y: doc.scrollTop });
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const p = scrolled.p || 0, y = scrolled.y || 0;
  const bg = Math.min(1, y / 100);
  const links = [
    { n: "01", l: "Services", h: "#services" },
    { n: "02", l: "How We Work", h: "#how-we-work" },
    { n: "03", l: "About", h: "#about" },
    { n: "04", l: "Contact", h: "#contact" },
  ];
  return (
    <>
      <div style={{ position:"fixed", top:0, left:0, right:0, height:2, background:"var(--accent)",
        transform:`scaleX(${p})`, transformOrigin:"left", zIndex:60 }} />
      <nav style={{ position:"fixed", top:2, left:0, right:0, zIndex:50, padding:"0 clamp(24px,5vw,96px)" }}>
        <div style={{ position:"absolute", inset:0, background:"rgba(10,10,10,.85)",
          backdropFilter:"blur(20px)", WebkitBackdropFilter:"blur(20px)",
          borderBottom:"1px solid var(--border)", opacity:bg, transition:"opacity .3s" }} />
        <div style={{ position:"relative", margin:"0 auto", maxWidth:1200,
          display:"flex", alignItems:"center", justifyContent:"space-between", height:80 }}>
          <a href="#" style={{ fontFamily:"var(--font-serif)", fontSize:20, color:"var(--text)", textDecoration:"none", letterSpacing:".01em" }}>
            Roan<span style={{ color:"var(--accent)", fontStyle:"italic" }}>&nbsp;Co.</span>
          </a>
          <div style={{ display:"flex", gap:40 }} className="nav-desktop">
            {links.map(k => (
              <a key={k.l} href={k.h} style={{
                fontSize:12, letterSpacing:".12em", textTransform:"uppercase",
                color:"var(--text-muted)", textDecoration:"none", transition:"color .3s"
              }} onMouseEnter={e=>e.currentTarget.style.color="var(--accent)"}
                 onMouseLeave={e=>e.currentTarget.style.color="var(--text-muted)"}>
                <span style={{ fontFamily:"var(--font-mono)", color:"rgba(255,42,193,.3)", marginRight:6 }}>{k.n}</span>{k.l}
              </a>
            ))}
          </div>
          <a href="#contact" style={{ fontSize:12, letterSpacing:".12em", textTransform:"uppercase", color:"var(--accent)", textDecoration:"none" }}>Get started</a>
        </div>
      </nav>
    </>
  );
};

/* ========== HERO ========== */
window.Hero = function Hero() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const on = () => setY(window.scrollY);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const p = Math.min(1, y / Math.max(1, window.innerHeight));
  return (
    <section data-hero-video-host style={{ position:"relative", minHeight:"100vh", display:"flex", flexDirection:"column", justifyContent:"center", padding:"0 clamp(24px,5vw,96px)", overflow:"hidden" }}>
      <div style={{ position:"absolute", inset:0, zIndex:1, pointerEvents:"none", background:"radial-gradient(ellipse 70% 50% at 50% 90%, rgba(255,42,193,.10), transparent 70%)", transform:`translateY(${p * 30}px)` }} />
      <div style={{ position:"relative", zIndex:2, margin:"0 auto", width:"100%", maxWidth:1200, opacity:1 - p * .9, transform:`translateY(${-p * 40}px)` }}>
        <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:36 }}>
          <span style={{ display:"inline-block", width:42, height:1, background:"rgba(244,208,111,.6)" }} />
          <span style={{ fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:".28em", textTransform:"uppercase", color:"rgba(245,239,224,.65)" }}>Agentic systems for SMBs · Salt Lake City & Jupiter, FL</span>
        </div>
        <h1 style={{ fontFamily:"var(--font-serif)", fontWeight:400, fontSize:"clamp(4rem,11.5vw,11rem)", lineHeight:.86, letterSpacing:"-.025em", margin:0, color:"var(--cream)" }}>Roan</h1>
        <h1 style={{ fontFamily:"var(--font-serif)", fontWeight:400, fontStyle:"italic", fontSize:"clamp(4rem,11.5vw,11rem)", lineHeight:.86, letterSpacing:"-.025em", margin:0, color:"var(--accent)" }}>Co.</h1>
        <p style={{ marginTop:40, maxWidth:600, fontSize:18, lineHeight:1.6, color:"rgba(245,239,224,.78)" }}>
          We embed inside your business, find the pain points eating your time and money, and build AI-powered systems that solve them. Think of it as strapping a V36 engine into your operations.
        </p>
        <p style={{ marginTop:16, maxWidth:600, fontSize:16, lineHeight:1.6, color:"rgba(245,239,224,.55)" }}>
          We start by saving you money on payment processing. Then we show you where AI can reclaim 10–20 hours of your week.{" "}
          <span style={{ fontFamily:"var(--font-serif)", fontStyle:"italic", color:"var(--gold)" }}>It's not if, it's when.</span>
        </p>
        <div style={{ marginTop:40, display:"flex", flexWrap:"wrap", gap:14 }}>
          <a href="#contact" style={{ display:"inline-flex", alignItems:"center", gap:10, padding:"14px 26px", fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:".22em", textTransform:"uppercase", background:"var(--accent)", color:"var(--ink)", borderRadius:4, transition:"transform .25s, box-shadow .25s" }}
            onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-1px)"; e.currentTarget.style.boxShadow="0 8px 24px rgba(255,42,193,.25)"; }}
            onMouseLeave={e=>{ e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="none"; }}>Get started →</a>
          <a href="#services" style={{ display:"inline-flex", alignItems:"center", gap:10, padding:"14px 26px", fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:".22em", textTransform:"uppercase", color:"var(--cream)", border:"1px solid rgba(245,239,224,.25)", borderRadius:4, transition:"border-color .25s, color .25s" }}
            onMouseEnter={e=>{ e.currentTarget.style.borderColor="var(--gold)"; e.currentTarget.style.color="var(--gold)"; }}
            onMouseLeave={e=>{ e.currentTarget.style.borderColor="rgba(245,239,224,.25)"; e.currentTarget.style.color="var(--cream)"; }}>What we do ↓</a>
        </div>
      </div>
      <div style={{ position:"absolute", left:"clamp(24px,5vw,96px)", right:"clamp(24px,5vw,96px)", bottom:32, zIndex:2, display:"flex", justifyContent:"space-between", fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:".24em", textTransform:"uppercase", color:"rgba(245,239,224,.45)" }}>
        <span>SLC · Jupiter, FL</span>
        <span>Roan Co., Inc. · 2026</span>
      </div>
    </section>
  );
};

/* ========== SERVICES — THREE PILLARS ========== */
const SERVICES = [
  { num:"01", title:"Payment Processing", subtitle:"The Door Opener", color:"var(--gold)",
    description:"We access processing at near-cost rates through our infrastructure partnership — then pass those savings to you. We consistently undercut Stripe, Square, and PayPal. This is how we earn your trust before anything else.",
    features:["Rates well below Stripe's 2.9% + $0.30","No hidden fees, no long-term contracts","Same-day or next-day settlement","Simple onboarding, zero disruption"] },
  { num:"02", title:"AI Consulting & System Builds", subtitle:"The Core", color:"var(--accent)",
    description:"Phase 1: we embed in your company, audit operations, find pain points, and train your team on AI tools including Claude Code. Phase 2: we build the agentic system — custom AI automation that handles the repetitive work so your team can focus on what matters. Custom CRMs, automated pipelines, intelligent agents.",
    features:["Free workflow audit to start","AI training and Claude Code tutoring","Custom agentic system builds","Cybersecurity baked into every engagement"] },
  { num:"03", title:"Web & Brand", subtitle:"The Extension", color:"var(--data)",
    description:"Once we understand your business inside and out, the next question is obvious: does your digital presence match the operation we're building? If not, we fix it. Modern websites, clean branding, marketing that converts.",
    features:["Modern, responsive websites","Brand identity and refresh","SEO-optimized from day one","Digital presence that brings in customers"] },
];

window.Services = function Services() {
  return (
    <section id="services" style={{ position:"relative", padding:"144px clamp(24px,5vw,96px)" }}>
      <div style={{ margin:"0 auto", maxWidth:1200 }}>
        <window.SectionHeader num="01" eyebrow="What We Do" title="Three pillars. One partner." topLine={true}
          sub="Payments get us in the door. AI systems are the business. Web and brand complete the picture." />
        <div style={{ marginTop:56, display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:20 }}>
          {SERVICES.map((s, i) => (
            <window.FadeIn key={s.title} delay={.08 + i * .08}>
              <div style={{ background:"var(--bg-elevated)", border:"1px solid var(--border)", borderRadius:8, padding:"36px 32px", height:"100%", display:"flex", flexDirection:"column", transition:"border-color .4s, transform .4s, box-shadow .4s" }}
                onMouseEnter={e=>{ e.currentTarget.style.borderColor="var(--border-hover)"; e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.boxShadow="0 20px 40px -12px rgba(255,42,193,.06)"; }}
                onMouseLeave={e=>{ e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="none"; }}>
                <div style={{ display:"flex", justifyContent:"space-between", marginBottom:16 }}>
                  <span style={{ fontSize:10, letterSpacing:".2em", textTransform:"uppercase", color:s.color, fontWeight:500 }}>{s.subtitle}</span>
                  <span style={{ fontFamily:"var(--font-mono)", fontSize:10, color:"rgba(157,180,216,.3)" }}>{s.num}</span>
                </div>
                <h3 style={{ fontFamily:"var(--font-serif)", fontWeight:400, fontSize:22, margin:0, color:s.color, letterSpacing:"-.01em" }}>{s.title}</h3>
                <p style={{ marginTop:16, fontSize:14, lineHeight:1.75, color:"var(--text-muted)", flex:1 }}>{s.description}</p>
                <div style={{ marginTop:24, paddingTop:20, borderTop:"1px solid var(--border)" }}>
                  {s.features.map(f => (
                    <div key={f} style={{ display:"flex", alignItems:"flex-start", gap:10, marginBottom:10 }}>
                      <span style={{ color:s.color, fontSize:13, marginTop:1, flexShrink:0 }}>✓</span>
                      <span style={{ fontSize:12, color:"rgba(245,239,224,.5)", lineHeight:1.55 }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </window.FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ========== HOW WE WORK ========== */
const STEPS = [
  { num:"01", title:"We save you money", color:"var(--gold)", description:"Before we talk about AI, we prove our value. We compare your current payment processing costs against our near-cost rates, show you the exact savings, and switch you over with zero disruption.", detail:"30–50% average savings" },
  { num:"02", title:"Phase 1 — Consult & Diagnose", color:"var(--accent)", description:"We embed inside your business. We audit every operation — scheduling, invoicing, follow-ups, client intake, data entry — and map exactly where time and money are being wasted. We train your team on AI tools and show you what's possible.", detail:"Consulting + Claude Code tutoring" },
  { num:"03", title:"Phase 2 — Build the System", color:"var(--accent)", description:"Once we know what to fix, we build it. Custom agentic systems — AI-powered automation that handles the repetitive work. Custom CRMs, automated pipelines, intelligent agents. This is where the V36 goes in.", detail:"Custom agentic system build" },
  { num:"04", title:"Ongoing Partnership", color:"var(--data)", description:"AI moves fast. We stay embedded as a partner, not a vendor. Monthly optimization, new capabilities as they emerge, and continuous tuning. If your website or brand needs work, we handle that too.", detail:"We grow with you" },
];

window.HowWeWork = function HowWeWork() {
  return (
    <section id="how-we-work" style={{ position:"relative", padding:"144px clamp(24px,5vw,96px)" }}>
      <div style={{ margin:"0 auto", maxWidth:1200 }}>
        <window.SectionHeader num="02" eyebrow="How We Work" title="Every contract has two phases."
          sub="Phase 1 proves value and surfaces the spec. Phase 2 builds the system." />
        <div style={{ marginTop:56, display:"flex", flexDirection:"column", gap:20 }}>
          {STEPS.map((step, i) => (
            <window.FadeIn key={step.num} delay={.08 + i * .08}>
              <div style={{ background:"var(--bg-elevated)", border:"1px solid var(--border)", borderRadius:8, padding:"36px 40px", transition:"border-color .4s, transform .4s" }}
                onMouseEnter={e=>{ e.currentTarget.style.borderColor="var(--border-hover)"; e.currentTarget.style.transform="translateY(-2px)"; }}
                onMouseLeave={e=>{ e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.transform="translateY(0)"; }}>
                <div style={{ display:"grid", gridTemplateColumns:"auto 1fr auto", gap:32, alignItems:"center" }}>
                  <div style={{ width:56, height:56, borderRadius:"50%", border:"1px solid var(--border)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <span style={{ fontFamily:"var(--font-serif)", fontSize:18, color:step.color }}>{step.num}</span>
                  </div>
                  <div>
                    <h3 style={{ fontFamily:"var(--font-serif)", fontWeight:400, fontSize:22, margin:0, letterSpacing:"-.01em", color:"var(--cream)" }}>{step.title}</h3>
                    <p style={{ marginTop:12, fontSize:14, lineHeight:1.8, color:"var(--text-muted)", maxWidth:600 }}>{step.description}</p>
                  </div>
                  <div style={{ border:"1px solid var(--border)", borderRadius:8, padding:"16px 20px", maxWidth:220, flexShrink:0 }}>
                    <span style={{ fontFamily:"var(--font-mono)", fontSize:12, color:step.color, lineHeight:1.5 }}>{step.detail}</span>
                  </div>
                </div>
              </div>
            </window.FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ========== ABOUT ========== */
const FOUNDERS = [
  { first:"Stiles", last:"Dichter", role:"Co-founder · CEO", focus:"Sales · GTM · Ops · Payments", email:"stiles.dichter@gmail.com",
    bio:"CEO and co-founder. Stiles runs business development, client relationships, and the payment processing partnership that gives Roan Co. its pricing edge. Manages go-to-market strategy across the Mountain West from Salt Lake City." },
  { first:"Joshua", last:"Langsam", role:"Co-founder · CTO", focus:"Engineering · AI · Agentic Systems", email:"joshualangsam@gmail.com",
    bio:"CTO and co-founder. Josh designs and ships the agentic systems that power Phase 2 engagements. Builds in Elixir/Phoenix and TypeScript/Next.js, with Claude and MCP for the intelligent bits. Drives client acquisition and delivery across Southeast Florida." },
];
const VERTICALS = ["CPAs & Accounting","Construction","Law Firms","Healthcare","Dental","Real Estate","Retail","Professional Services"];

window.About = function About() {
  return (
    <section id="about" style={{ position:"relative", padding:"144px clamp(24px,5vw,96px)" }}>
      <div style={{ margin:"0 auto", maxWidth:1200 }}>
        <window.SectionHeader num="03" eyebrow="About" title="Two operators, one system." />
        <window.FadeIn delay={.1}>
          <p style={{ marginTop:24, maxWidth:760, fontSize:16, lineHeight:1.85, color:"var(--text-muted)" }}>
            Roan Co. is an agentic systems company. We saw the same thing everywhere: small businesses overpaying for payments and falling behind on AI while enterprise raced ahead. We decided to fix both — hands-on, embedded inside the business, not from a distance.
          </p>
        </window.FadeIn>
        <div style={{ marginTop:56, display:"grid", gridTemplateColumns:"1fr 1fr", gap:32 }}>
          {FOUNDERS.map((f, i) => (
            <window.FadeIn key={f.last} delay={.15 + i * .1}>
              <div style={{ background:"var(--bg-elevated)", border:"1px solid var(--border)", borderRadius:8, padding:"40px 36px", height:"100%", display:"flex", flexDirection:"column" }}>
                <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:24 }}>
                  <div style={{ height:1, width:24, background:"rgba(255,42,193,.5)" }} />
                  <span style={{ fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:".28em", textTransform:"uppercase", color:"var(--accent)" }}>{f.role}</span>
                </div>
                <h3 style={{ fontFamily:"var(--font-serif)", fontWeight:400, fontSize:40, margin:0, lineHeight:1, letterSpacing:"-.015em", color:"var(--cream)" }}>
                  {f.first}<span style={{ color:"var(--accent)", fontStyle:"italic" }}> {f.last}</span>
                </h3>
                <p style={{ marginTop:24, fontSize:15, lineHeight:1.8, color:"var(--text-muted)" }}>{f.bio}</p>
                <div style={{ marginTop:"auto", paddingTop:28, borderTop:"1px solid var(--border)", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <span style={{ fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:".2em", textTransform:"uppercase", color:"rgba(157,180,216,.5)" }}>{f.focus}</span>
                  <a href={`mailto:${f.email}`} style={{ fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:".12em", color:"var(--cream)", textDecoration:"none" }}
                    onMouseEnter={e=>e.currentTarget.style.color="var(--accent)"} onMouseLeave={e=>e.currentTarget.style.color="var(--cream)"}>{f.email} →</a>
                </div>
              </div>
            </window.FadeIn>
          ))}
        </div>
        <div style={{ marginTop:80, display:"grid", gridTemplateColumns:"3fr 2fr", gap:80 }}>
          <window.FadeIn delay={.2}>
            <div style={{ display:"flex", gap:48, flexWrap:"wrap" }}>
              {[{ n:50, s:"%", l:"Avg. payment savings" },{ n:20, s:"+", l:"Hours/week reclaimed" },{ n:2, s:"", l:"Markets on the ground" }].map(x => (
                <div key={x.l}>
                  <div style={{ fontFamily:"var(--font-serif)", fontSize:56, color:"var(--accent)", lineHeight:1, letterSpacing:"-.03em" }}><window.AnimatedCounter target={x.n} />{x.s}</div>
                  <div style={{ marginTop:8, fontSize:11, color:"var(--text-muted)", textTransform:"uppercase", letterSpacing:".2em" }}>{x.l}</div>
                </div>
              ))}
            </div>
          </window.FadeIn>
          <window.FadeIn delay={.3}>
            <div style={{ background:"var(--bg-elevated)", border:"1px solid var(--border)", borderRadius:8, padding:32 }}>
              <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:16 }}>
                <div style={{ height:1, width:20, background:"rgba(255,42,193,.4)" }} />
                <span style={{ fontSize:10, letterSpacing:".25em", textTransform:"uppercase", color:"var(--text-muted)" }}>Who We Work With</span>
              </div>
              <p style={{ fontSize:13, color:"var(--text-muted)", lineHeight:1.7, marginBottom:20 }}>SMBs with 1–50 employees. We stay dynamic — the system works wherever there are operations to automate.</p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:10 }}>
                {VERTICALS.map(t => (
                  <span key={t} style={{ border:"1px solid var(--border)", padding:"10px 16px", fontSize:12, color:"var(--text-muted)", borderRadius:8, cursor:"default", transition:"all .3s" }}
                    onMouseEnter={e=>{ e.currentTarget.style.borderColor="var(--border-hover)"; e.currentTarget.style.color="var(--accent)"; }}
                    onMouseLeave={e=>{ e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.color="var(--text-muted)"; }}>{t}</span>
                ))}
              </div>
            </div>
          </window.FadeIn>
        </div>
      </div>
    </section>
  );
};
