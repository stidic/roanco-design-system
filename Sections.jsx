/* Roan Co. — Nav + Hero + Services + What We Build + How We Work + About
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
    { n: "02", l: "Technology", h: "#technology" },
    { n: "03", l: "Our Work", h: "#our-work" },
    { n: "04", l: "About", h: "#about" },
    { n: "05", l: "Contact", h: "#contact" },
  ];
  return (
    <>
      <div style={{ position:"fixed", top:0, left:0, right:0, height:2, background:"var(--accent)", transform:`scaleX(${p})`, transformOrigin:"left", zIndex:60 }} />
      <nav style={{ position:"fixed", top:2, left:0, right:0, zIndex:50, padding:"0 clamp(24px,5vw,96px)" }}>
        <div style={{ position:"absolute", inset:0, background:"rgba(10,10,10,.85)", backdropFilter:"blur(20px)", WebkitBackdropFilter:"blur(20px)", borderBottom:"1px solid var(--border)", opacity:bg, transition:"opacity .3s" }} />
        <div style={{ position:"relative", margin:"0 auto", maxWidth:1200, display:"flex", alignItems:"center", justifyContent:"space-between", height:80 }}>
          <a href="#" style={{ fontFamily:"var(--font-serif)", fontSize:20, color:"var(--text)", textDecoration:"none", letterSpacing:".01em" }}>
            Roan<span style={{ color:"var(--accent)", fontStyle:"italic" }}>&nbsp;Co.</span>
          </a>
          <div style={{ display:"flex", gap:36 }} className="nav-desktop">
            {links.map(k => (
              <a key={k.l} href={k.h} style={{ fontSize:11, letterSpacing:".12em", textTransform:"uppercase", color:"var(--text-muted)", textDecoration:"none", transition:"color .3s" }}
                onMouseEnter={e=>e.currentTarget.style.color="var(--accent)"} onMouseLeave={e=>e.currentTarget.style.color="var(--text-muted)"}>
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
          We're an agentic systems company. We embed inside your business, find the pain points eating your time and money, and build AI-powered systems that solve them.
        </p>
        <p style={{ marginTop:16, maxWidth:600, fontSize:16, lineHeight:1.6, color:"rgba(245,239,224,.55)" }}>
          Custom CRMs. Automated pipelines. Intelligent agents. We consult first, then we build.{" "}
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

/* ========== SERVICES — THREE PILLARS (AI FIRST) ========== */
const SERVICES = [
  { num:"01", title:"AI Consulting & Agentic Systems", subtitle:"The Core", color:"var(--accent)",
    description:"This is what we do. We embed in your company, audit your operations, find the pain points, and train your team on AI tools. Then we build the agentic system — custom AI automation that runs on its own. Custom CRMs, automated pipelines, intelligent agents that handle the repetitive work so your team can focus on what actually moves the needle.",
    features:["Free workflow audit to start","AI training and Claude Code tutoring","Custom agentic system builds","Cybersecurity baked into every engagement"] },
  { num:"02", title:"Payment Processing", subtitle:"Immediate Savings", color:"var(--gold)",
    description:"We access processing at near-cost rates through our infrastructure partnership and pass those savings directly to you. We consistently undercut Stripe, Square, and PayPal. For a business processing $500K annually, that's thousands back in your pocket — starting day one, zero disruption.",
    features:["Rates well below Stripe's 2.9% + $0.30","No hidden fees, no long-term contracts","Same-day or next-day settlement","Simple onboarding, zero disruption"] },
  { num:"03", title:"Web & Brand", subtitle:"The Extension", color:"var(--data)",
    description:"Once we understand your business inside and out, the next question is obvious: does your digital presence match the operation we're building? If not, we fix it. Modern websites, clean branding, marketing that converts.",
    features:["Modern, responsive websites","Brand identity and refresh","SEO-optimized from day one","Digital presence that brings in customers"] },
];

window.Services = function Services() {
  return (
    <section id="services" style={{ position:"relative", padding:"144px clamp(24px,5vw,96px)" }}>
      <div style={{ margin:"0 auto", maxWidth:1200 }}>
        <window.SectionHeader num="01" eyebrow="What We Do" title="Three pillars. One partner." topLine={true}
          sub="AI systems are the business. Payments save you money. Web and brand complete the picture." />
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


/* ========== TECHNOLOGY — POLIS STACK ========== */
window.Technology = function Technology() {
  var components = [
    {
      name: "Logos",
      verb: "Verifies",
      color: "var(--gold)",
      description: "A post-quantum, formally verified programming language built for the post-AI-exploitation era. The classes of bugs that AI red-teamers exploit cannot exist in Logos by construction.",
      details: [
        "Elixir-feel syntax with AI-native design. Pattern matching, pipes, immutable by default, strong inferred types. AI generates correct code on the first pass.",
        "Unhackable by construction. No unsafe, no FFI without formal contracts, information-flow typing. Every known agent-exploit class is structurally eliminated.",
        "Quantum-proof. CRYSTALS-Kyber, Dilithium, SPHINCS+ as language primitives. RSA and ECC do not exist in the language."
      ],
      stat: "191/191 tests green",
      extra: "4 published DOIs"
    },
    {
      name: "Diogenes",
      verb: "Supervises",
      color: "var(--accent)",
      description: "An open-source secure agent runtime built on Logos. Agent failure modes like prompt injection, key exposure, tool escalation, and audit tampering become compile-time errors instead of runtime drift.",
      details: [
        "Tools layer with allowlist roots, symlink guards, HTTPS-only requests, RFC1918 rejection, and tool-hop loop caps.",
        "Signed audit chain. Dilithium-signed, hash-chained logs. Tampering any middle event fails verification instantly.",
        "Session sealing with Kyber KEM + AES-GCM + Dilithium signing. Swapping sealed blobs on disk fails to open."
      ],
      stat: "29/29 tests green",
      extra: "Pen-tested. 3 top-priority findings shipped."
    },
    {
      name: "Heraclitus",
      verb: "Reasons",
      color: "var(--data)",
      description: "A vertical AI agent for tax and accounting. Qwen3-30B-A3B base with 9 specialist QLoRA adapters, RAG over the Internal Revenue Code and CFR, wrapped in a deterministic verifier that re-derives every claim before the answer leaves the system.",
      details: [
        "Re-derivation, not retrieval. The verifier re-computes every claim from first principles: basis conservation, depreciation, IRC citations, entity elections, safe harbors.",
        "Audit-by-construction. Every reasoning step lands in a SHA-256 hash-chained Postgres ledger. The chain is demonstrable end-to-end.",
        "Per-tenant deployment. Client-site hardware holds raw data and runs local embedding. PII never leaves the firm. IRC §7216 compliant."
      ],
      stat: "589 tests green",
      extra: "Constitutional Judge live in runtime"
    }
  ];

  return (
    <section id="technology" style={{ position:"relative", padding:"144px clamp(24px,5vw,96px)" }}>
      <div style={{ margin:"0 auto", maxWidth:1200 }}>
        <window.SectionHeader num="02" eyebrow="Technology" title="The Polis Stack." topLine={true}
          sub="A verified, audited, reasoning runtime for AI agents. Three components. One polity. One audit truth." />

        <window.FadeIn delay={.1}>
          <div style={{ marginTop:40, background:"var(--bg-elevated)", border:"1px solid var(--border)", borderRadius:8, padding:"32px 36px", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:24 }}>
            <div>
              <span style={{ fontFamily:"var(--font-serif)", fontSize:32, color:"var(--accent)", fontStyle:"italic" }}>625</span>
              <span style={{ fontSize:14, color:"var(--text-muted)", marginLeft:10 }}>of 625 tests passing. Zero failures.</span>
            </div>
            <div style={{ display:"flex", gap:24 }}>
              <div style={{ textAlign:"center" }}>
                <span style={{ fontFamily:"var(--font-mono)", fontSize:11, color:"var(--gold)", display:"block" }}>Logos</span>
                <span style={{ fontFamily:"var(--font-mono)", fontSize:10, color:"rgba(157,180,216,.4)" }}>191/191</span>
              </div>
              <div style={{ textAlign:"center" }}>
                <span style={{ fontFamily:"var(--font-mono)", fontSize:11, color:"var(--accent)", display:"block" }}>Diogenes</span>
                <span style={{ fontFamily:"var(--font-mono)", fontSize:10, color:"rgba(157,180,216,.4)" }}>29/29</span>
              </div>
              <div style={{ textAlign:"center" }}>
                <span style={{ fontFamily:"var(--font-mono)", fontSize:11, color:"var(--data)", display:"block" }}>Heraclitus</span>
                <span style={{ fontFamily:"var(--font-mono)", fontSize:10, color:"rgba(157,180,216,.4)" }}>589 green</span>
              </div>
            </div>
          </div>
        </window.FadeIn>

        <div style={{ marginTop:24, display:"flex", flexDirection:"column", gap:20 }}>
          {components.map(function(c, i) { return (
            <window.FadeIn key={c.name} delay={.15 + i * .08}>
              <div style={{ background:"var(--bg-elevated)", border:"1px solid var(--border)", borderRadius:8, padding:"40px 36px", transition:"border-color .4s, transform .4s" }}
                onMouseEnter={function(e){ e.currentTarget.style.borderColor="var(--border-hover)"; e.currentTarget.style.transform="translateY(-2px)"; }}
                onMouseLeave={function(e){ e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.transform="translateY(0)"; }}>

                <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:20 }}>
                  <h3 style={{ fontFamily:"var(--font-serif)", fontWeight:400, fontSize:32, margin:0, color:c.color, letterSpacing:"-.01em" }}>{c.name}</h3>
                  <span style={{ fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:".2em", textTransform:"uppercase", color:"rgba(157,180,216,.5)" }}>{c.verb}</span>
                </div>

                <p style={{ fontSize:15, lineHeight:1.8, color:"var(--text-muted)", maxWidth:700 }}>{c.description}</p>

                <div style={{ marginTop:24, display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:16 }}>
                  {c.details.map(function(d, j) { return (
                    <div key={j} style={{ padding:"16px 20px", border:"1px solid var(--border)", borderRadius:8 }}>
                      <span style={{ fontSize:13, color:"rgba(245,239,224,.55)", lineHeight:1.6 }}>{d}</span>
                    </div>
                  ); })}
                </div>

                <div style={{ marginTop:20, display:"flex", gap:24, alignItems:"center" }}>
                  <span style={{ fontFamily:"var(--font-mono)", fontSize:12, color:c.color }}>{c.stat}</span>
                  <span style={{ fontSize:12, color:"rgba(157,180,216,.4)" }}>{c.extra}</span>
                </div>
              </div>
            </window.FadeIn>
          ); })}
        </div>

        <window.FadeIn delay={.4}>
          <div style={{ marginTop:32, padding:"24px 32px", border:"1px solid var(--border)", borderRadius:8 }}>
            <p style={{ fontSize:14, lineHeight:1.7, color:"var(--text-muted)" }}>
              <span style={{ fontFamily:"var(--font-serif)", fontStyle:"italic", color:"var(--gold)" }}>Why "Polis"?</span>{" "}
              Greek for city-state. The three components share a polity: one audit truth, one HMAC-signed envelope between components, one cross-language schema canonicalization. Logos verifies the language. Diogenes supervises the runtime. Heraclitus reasons in domain.
            </p>
          </div>
        </window.FadeIn>
      </div>
    </section>
  );
};

/* ========== WHAT WE BUILD ========== */
window.OurWork = function OurWork() {
  var builds = [
    { name:"AI Case Management", client:"PI Law Firms", color:"var(--accent)",
      desc:"Full AI case management for personal injury firms. Document analysis, demand letters, medical record parsing, automated client intake. Replaced 4 hours/week of paperwork with 30 minutes.",
      tech:["Document AI","Automated intake","Smart billing"], metric:"87% time saved" },
    { name:"Tax Automation Engine", client:"CPA Firm", color:"var(--gold)",
      desc:"AI-assisted tax prep for a CPA firm. Cloud DB migration, embedded AI chatbot, automated data extraction from receipts and statements, full security audit of legacy system.",
      tech:["Anthropic API","Data extraction","Security audit"], metric:"Shipping now" },
    { name:"eCommerce Agent", client:"Retail", color:"var(--data)",
      desc:"Fully automated eCommerce agent. End-to-end from listing generation to fulfillment routing. Product descriptions, pricing optimization, inventory sync, order management.",
      tech:["Multi-agent","Auto-fulfillment","Listing AI"], metric:"4-week build" },
    { name:"Custom CRM", client:"Wholesale Distribution", color:"var(--accent)",
      desc:"Custom CRM for wholesale distribution. Route planning, order tracking, pipeline management, automated follow-ups. Replaced spreadsheets with a system that works.",
      tech:["Custom CRM","Route planning","Pipeline tracking"], metric:"Internal tool" },
  ];
  var trust = [
    "Every system we build, we use ourselves first",
    "Phase 1 consulting proves value before you commit",
    "Cybersecurity baked in, not bolted on",
    "We stay embedded as partners, not vendors"
  ];
  return (
    <section id="our-work" style={{ position:"relative", padding:"144px clamp(24px,5vw,96px)" }}>
      <div style={{ margin:"0 auto", maxWidth:1200 }}>
        <window.SectionHeader num="03" eyebrow="Our Work" title="What we have built." topLine={true}
          sub="Real systems for real businesses. Every engagement starts with consulting and ends with a deployed system." />
        <window.FadeIn delay={.1}>
          <div style={{ marginTop:40, background:"var(--bg-elevated)", border:"1px solid var(--border)", borderRadius:8, padding:"28px 36px" }}>
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:20 }}>
              <div style={{ height:1, width:20, background:"rgba(255,42,193,.4)" }} />
              <span style={{ fontSize:10, letterSpacing:".25em", textTransform:"uppercase", color:"var(--text-muted)" }}>Why trust us</span>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
              {trust.map(function(item) { return (
                <div key={item} style={{ display:"flex", alignItems:"flex-start", gap:10 }}>
                  <span style={{ color:"var(--accent)", fontSize:13, flexShrink:0, marginTop:1 }}>✓</span>
                  <span style={{ fontSize:13, color:"rgba(245,239,224,.55)", lineHeight:1.5 }}>{item}</span>
                </div>
              ); })}
            </div>
          </div>
        </window.FadeIn>
        <div style={{ marginTop:20, display:"grid", gridTemplateColumns:"1fr 1fr", gap:20 }}>
          {builds.map(function(b, i) { return (
            <window.FadeIn key={b.name} delay={.15 + i * .08}>
              <div style={{ background:"var(--bg-elevated)", border:"1px solid var(--border)", borderRadius:8, padding:"32px 28px", height:"100%", display:"flex", flexDirection:"column", transition:"border-color .4s, transform .4s" }}
                onMouseEnter={function(e){ e.currentTarget.style.borderColor="var(--border-hover)"; e.currentTarget.style.transform="translateY(-3px)"; }}
                onMouseLeave={function(e){ e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.transform="translateY(0)"; }}>
                <div style={{ display:"flex", justifyContent:"space-between", marginBottom:14 }}>
                  <span style={{ fontSize:10, letterSpacing:".2em", textTransform:"uppercase", color:b.color, fontWeight:500 }}>{b.client}</span>
                  <span style={{ fontFamily:"var(--font-mono)", fontSize:11, color:b.color }}>{b.metric}</span>
                </div>
                <h3 style={{ fontFamily:"var(--font-serif)", fontWeight:400, fontSize:22, margin:0, color:"var(--cream)", letterSpacing:"-.01em" }}>{b.name}</h3>
                <p style={{ marginTop:14, fontSize:13, lineHeight:1.75, color:"var(--text-muted)", flex:1 }}>{b.desc}</p>
                <div style={{ marginTop:20, paddingTop:16, borderTop:"1px solid var(--border)", display:"flex", flexWrap:"wrap", gap:6 }}>
                  {b.tech.map(function(t) { return (
                    <span key={t} style={{ fontSize:10, color:"rgba(157,180,216,.4)", border:"1px solid var(--border)", padding:"3px 10px", borderRadius:6 }}>{t}</span>
                  ); })}
                </div>
              </div>
            </window.FadeIn>
          ); })}
        </div>
      </div>
    </section>
  );
};

/* ========== HOW WE WORK ========== */
const STEPS = [
  { num:"01", title:"Phase 1 — Consult & Diagnose", color:"var(--accent)", description:"We embed inside your business. We audit every operation — scheduling, invoicing, follow-ups, client intake, data entry — and map exactly where time and money are being wasted. We train your team on AI tools and show you what's possible. This is where trust gets built.", detail:"Consulting + AI training" },
  { num:"02", title:"Phase 2 — Build the System", color:"var(--accent)", description:"Once we know what to fix, we build it. Custom agentic systems — AI-powered automation that handles the repetitive work. Custom CRMs, automated pipelines, intelligent agents. This is where the V36 goes in.", detail:"Custom agentic system build" },
  { num:"03", title:"Payment Processing", color:"var(--gold)", description:"At any point in the engagement, we can switch your payment processing to our near-cost rates. Most clients save 30–50% compared to Stripe, Square, or PayPal. It's immediate savings with zero disruption — and it's often what gets the conversation started.", detail:"30–50% average savings" },
  { num:"04", title:"Ongoing Partnership", color:"var(--data)", description:"AI moves fast. We stay embedded as a partner, not a vendor. Monthly optimization, new capabilities as they emerge, continuous tuning. If your website or brand needs work, we handle that too. We grow with you.", detail:"Monthly retainer" },
];

window.HowWeWork = function HowWeWork() {
  return (
    <section id="how-we-work" style={{ position:"relative", padding:"144px clamp(24px,5vw,96px)" }}>
      <div style={{ margin:"0 auto", maxWidth:1200 }}>
        <window.SectionHeader num="" eyebrow="How We Work" title="Every contract has two phases."
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
    bio:"CTO and co-founder. Josh designs and ships the agentic systems that power Phase 2 engagements. Builds in Elixir/Phoenix and TypeScript/Next.js, with Claude and MCP for the intelligent bits. Drives client delivery across Southeast Florida." },
];
const VERTICALS = ["CPAs & Accounting","Construction","Law Firms","Healthcare","Dental","Real Estate","Retail","Professional Services"];

window.About = function About() {
  return (
    <section id="about" style={{ position:"relative", padding:"144px clamp(24px,5vw,96px)" }}>
      <div style={{ margin:"0 auto", maxWidth:1200 }}>
        <window.SectionHeader num="04" eyebrow="About" title="Two operators, one system." />
        <window.FadeIn delay={.1}>
          <p style={{ marginTop:24, maxWidth:760, fontSize:16, lineHeight:1.85, color:"var(--text-muted)" }}>
            Roan Co. is an agentic systems company. We saw the same thing everywhere: small businesses drowning in manual work while enterprise companies raced ahead with AI. We decided to close that gap — hands-on, embedded inside the business, building systems that actually run.
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
