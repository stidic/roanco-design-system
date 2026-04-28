/* Nav + Hero + Projects + About + Research + Contact
   Loaded after Primitives.jsx; references window.* */
const { useEffect, useRef, useState } = React;

/* ========== NAV ========== */
window.Nav = function Nav() {
  const [scrolled, setScrolled] = useState(0);
  const [menu, setMenu] = useState(false);
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
    { n: "01", l: "Work", h: "#work" },
    { n: "02", l: "About", h: "#about" },
    { n: "03", l: "Research", h: "#research" },
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
          <a href="#" style={{ fontFamily:"var(--font-serif)", fontSize:20, color:"var(--text)", textDecoration:"none" }}>JL</a>
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
          <a href="mailto:josh@roanco.law" style={{
            fontSize:12, letterSpacing:".12em", textTransform:"uppercase",
            color:"var(--accent)", textDecoration:"none"
          }}>Get in touch</a>
        </div>
      </nav>
    </>
  );
};

/* ========== HERO — editorial w/ Miami DNA ==========
   Split serif lockup (cream / magenta), gentle parallax on the
   skyline behind it, single CTA pair, hairline meta strip below.
   Backdrop video, when present, lives under data-hero-video-host. */
window.Hero = function Hero() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const on = () => setY(window.scrollY);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const p = Math.min(1, y / Math.max(1, window.innerHeight));
  return (
    <section data-hero-video-host
      style={{ position:"relative", minHeight:"100vh", display:"flex",
        flexDirection:"column", justifyContent:"center",
        padding:"0 clamp(24px,5vw,96px)", overflow:"hidden" }}>
      {/* Subtle parallax shade so video / skyline feels integrated */}
      <div style={{ position:"absolute", inset:0, zIndex:1, pointerEvents:"none",
        background:"radial-gradient(ellipse 70% 50% at 50% 90%, rgba(255,42,193,.10), transparent 70%)",
        transform:`translateY(${p * 30}px)` }} />

      <div style={{ position:"relative", zIndex:2, margin:"0 auto",
        width:"100%", maxWidth:1200, opacity:1 - p * .9,
        transform:`translateY(${-p * 40}px)` }}>
        {/* Eyebrow rule */}
        <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:36 }}>
          <span style={{ display:"inline-block", width:42, height:1,
            background:"rgba(244,208,111,.6)" }} />
          <span style={{ fontFamily:"var(--font-mono)", fontSize:11,
            letterSpacing:".28em", textTransform:"uppercase",
            color:"rgba(245,239,224,.65)" }}>
            Co-founder & CTO · RoanCo · Jupiter, FL
          </span>
        </div>

        {/* Split display lockup — Josh in cream, Langsam in magenta */}
        <h1 style={{ fontFamily:"var(--font-serif)", fontWeight:400,
          fontSize:"clamp(4rem,11.5vw,11rem)", lineHeight:.86,
          letterSpacing:"-.025em", margin:0, color:"var(--cream)",
          WebkitTextFillColor:"var(--cream)" }}>Josh</h1>
        <h1 style={{ fontFamily:"var(--font-serif)", fontWeight:400, fontStyle:"italic",
          fontSize:"clamp(4rem,11.5vw,11rem)", lineHeight:.86,
          letterSpacing:"-.025em", margin:0, color:"var(--accent)",
          WebkitTextFillColor:"var(--accent)" }}>Langsam.</h1>

        {/* Subhead */}
        <p style={{ marginTop:40, maxWidth:560, fontSize:18, lineHeight:1.6,
          color:"rgba(245,239,224,.78)" }}>
          I ship AI systems for industries that still run on spreadsheets.{" "}
          <span style={{ fontFamily:"var(--font-serif)", fontStyle:"italic",
            color:"var(--gold)" }}>
            It's not if, it's when.
          </span>
        </p>

        {/* CTA pair — primary magenta, secondary ghost */}
        <div style={{ marginTop:40, display:"flex", flexWrap:"wrap", gap:14 }}>
          <a href="mailto:josh@roanco.law"
            style={{ display:"inline-flex", alignItems:"center", gap:10,
              padding:"14px 26px", fontFamily:"var(--font-mono)", fontSize:11,
              letterSpacing:".22em", textTransform:"uppercase",
              background:"var(--accent)", color:"var(--ink)",
              borderRadius:4, transition:"transform .25s, box-shadow .25s" }}
            onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-1px)";
              e.currentTarget.style.boxShadow="0 8px 24px rgba(255,42,193,.25)"; }}
            onMouseLeave={e=>{ e.currentTarget.style.transform="translateY(0)";
              e.currentTarget.style.boxShadow="none"; }}>
            Get in touch →
          </a>
          <a href="#work"
            style={{ display:"inline-flex", alignItems:"center", gap:10,
              padding:"14px 26px", fontFamily:"var(--font-mono)", fontSize:11,
              letterSpacing:".22em", textTransform:"uppercase",
              color:"var(--cream)", border:"1px solid rgba(245,239,224,.25)",
              borderRadius:4, transition:"border-color .25s, color .25s" }}
            onMouseEnter={e=>{ e.currentTarget.style.borderColor="var(--gold)";
              e.currentTarget.style.color="var(--gold)"; }}
            onMouseLeave={e=>{ e.currentTarget.style.borderColor="rgba(245,239,224,.25)";
              e.currentTarget.style.color="var(--cream)"; }}>
            Selected work ↓
          </a>
        </div>
      </div>

      {/* Bottom hairline meta */}
      <div style={{ position:"absolute", left:"clamp(24px,5vw,96px)",
        right:"clamp(24px,5vw,96px)", bottom:32, zIndex:2,
        display:"flex", justifyContent:"space-between",
        fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:".24em",
        textTransform:"uppercase", color:"rgba(245,239,224,.45)" }}>
        <span>26.93°N · 80.10°W</span>
        <span>2026 / index 01</span>
      </div>
    </section>
  );
};

/* ========== PROJECTS ========== */
const PROJECTS = [
  { name:"Logos", category:"Language · Post-Quantum", featured:true,
    description:"Post-quantum programming language with cryptographic primitives built into the type system. Reached general-purpose capability April 2026.",
    url:"#", metrics:"General-purpose · Apr 2026",
    tech:["Type system","Post-quantum","Cryptographic primitives"] },
  { name:"Diogenes", category:"AI Runtime",
    description:"Secure AI agent runtime built on Logos. Cryptographically-audited tool execution, capability-scoped permissions, deterministic replay.",
    metrics:"~50% shipped", tech:["Logos","Capability types","Deterministic replay"] },
  { name:"Litigation Juris", category:"Legal Tech",
    description:"AI case management for PI law firms. Document analysis, demand letter generation, medical record parsing. Full-stack Elixir/Phoenix with Claude.",
    url:"https://app.roanco.law", metrics:"Live · app.roanco.law",
    tech:["Elixir","Phoenix","Claude","Supabase"] },
  { name:"Tax Robot", category:"Client · Lerro & Sarbey CPA",
    description:"AI-assisted tax workflow engine for a Boca Raton CPA firm. Cloud DB migration, embedded Anthropic API chatbot, security audit of the legacy codebase.",
    metrics:"Shipping Apr 24, 2026", tech:["Anthropic API","Next.js","Supabase"] },
  { name:"Alphazone Market", category:"Client · Ohio",
    description:"Fully-automated eCommerce agent. End-to-end from listing generation to fulfillment routing. Four-week build.",
    metrics:"Kickoff Apr 20, 2026", tech:["TypeScript","Next.js","Claude","MCP"] },
  { name:"FuelOps", category:"SaaS · Gas Stations",
    description:"Back-office SaaS for independent gas stations. Inventory, compliance, shift reconciliation — replacing clipboards.",
    metrics:"$199/mo · founder tier $150/mo", tech:["Next.js","Supabase","Stripe"] },
  { name:"VapeOps", category:"SaaS · Smoke Shops",
    description:"Back-office SaaS for smoke shops. Age-verification flows, regulated-inventory reporting, multi-location rollups.",
    metrics:"$299/mo", tech:["Next.js","Supabase","Stripe"] },
  { name:"SushiLab", category:"Client · Tel Aviv",
    description:"GTM automation for a growth-stage team. Outbound enrichment and sequencing rigged to a live CRM.",
    metrics:"Shipped · first client", tech:["TypeScript","Claude","MCP"] },
  { name:"Hemp Route CRM", category:"Internal Ops",
    description:"Wholesale distribution CRM used internally. Route planning, order state, pipeline tracking.",
    metrics:"Internal tool", tech:["Next.js","Supabase"] },
];

window.Projects = function Projects() {
  const featured = PROJECTS[0], rest = PROJECTS.slice(1);
  return (
    <section id="work" style={{ position:"relative", padding:"144px clamp(24px,5vw,96px)" }}>
      <div style={{ margin:"0 auto", maxWidth:1200 }}>
        <window.SectionHeader num="01" eyebrow="Selected Work" title="What I've built" topLine={false} />
        {/* Featured */}
        <div style={{ marginTop:56 }}>
          <window.FadeIn delay={.1}>
            <window.DashCard href={featured.url}>
              {({ hov }) => (
                <div style={{ display:"grid", gridTemplateColumns:"3fr 2fr", gap:48 }}>
                  <div>
                    <div style={{ display:"flex", gap:12, marginBottom:16 }}>
                      <span style={{ fontSize:10, letterSpacing:".2em", textTransform:"uppercase", color:"rgba(255,42,193,.6)", fontWeight:500 }}>Featured</span>
                      <span style={{ fontSize:10, letterSpacing:".2em", textTransform:"uppercase", color:"rgba(157,180,216,.4)" }}>{featured.category}</span>
                    </div>
                    <h3 style={{ fontFamily:"var(--font-serif)", fontWeight:400, fontSize:32,
                      letterSpacing:"-.01em", margin:0, color: hov ? "var(--accent)" : "var(--text)",
                      transition:"color .3s" }}>{featured.name}</h3>
                    <p style={{ marginTop:16, fontSize:14, lineHeight:1.8, color:"var(--text-muted)", maxWidth:440 }}>{featured.description}</p>
                    <div style={{ marginTop:24, display:"flex", flexWrap:"wrap", gap:8 }}>
                      {featured.tech.map(t => (
                        <span key={t} style={{ fontSize:10, color:"rgba(157,180,216,.5)",
                          border:"1px solid var(--border)", padding:"4px 10px", borderRadius:6 }}>{t}</span>
                      ))}
                    </div>
                    <div style={{ marginTop:24, display:"flex", alignItems:"center", gap:12 }}>
                      <span style={{ fontFamily:"var(--font-mono)", fontSize:12, color:"rgba(255,42,193,.6)" }}>{featured.metrics}</span>
                      <window.ArrowOut show={hov} />
                    </div>
                  </div>
                  <div style={{ display:"flex", alignItems:"center" }}>
                    <div style={{ width:"100%", aspectRatio:"4/3", borderRadius:8,
                      background:"var(--bg)", border:"1px solid rgba(255,255,255,.04)",
                      display:"flex", alignItems:"center", justifyContent:"center" }}>
                      <div style={{ textAlign:"center" }}>
                        <span style={{ fontFamily:"var(--font-mono)", fontSize:12, color:"rgba(255,42,193,.2)" }}>app.roanco.law</span>
                        <span style={{ display:"block", marginTop:4, fontSize:10, color:"rgba(157,180,216,.2)" }}>Live product</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </window.DashCard>
          </window.FadeIn>
        </div>
        {/* Horizontal rail — drag, wheel, or arrow through the rest */}
        <window.ProjectRail items={rest} />
      </div>
    </section>
  );
};

/* ========== ABOUT ========== */
const STACK = ["Elixir / Phoenix","TypeScript","Next.js","React","Python","PostgreSQL","Claude API","Tailwind","Supabase","Stripe","Fly.io","Vercel"];
window.About = function About() {
  return (
    <section id="about" style={{ position:"relative", padding:"144px clamp(24px,5vw,96px)" }}>
      <div style={{ margin:"0 auto", maxWidth:1200 }}>
        <window.SectionHeader num="02" eyebrow="About" />
        <div style={{ marginTop:24, display:"grid", gridTemplateColumns:"3fr 2fr", gap:80 }}>
          <div>
            <window.FadeIn delay={.1}>
              <h2 style={{ fontFamily:"var(--font-serif)", fontWeight:400, margin:0,
                fontSize:"clamp(2rem,4.5vw,3.5rem)", lineHeight:1.1, letterSpacing:"-.01em" }}>
                I build AI systems for industries that move slow.
              </h2>
            </window.FadeIn>
            <window.FadeIn delay={.18}>
              <p style={{ marginTop:40, fontSize:16, lineHeight:1.85, color:"var(--text-muted)" }}>
                I'm 21, studying at FAU Jupiter, and I ship. Co-founder and CTO of
                {" "}<span style={{ color:"var(--accent)", fontWeight:500 }}>RoanCo</span>{" "}
                with Stiles. I didn't learn to code in a classroom — I learned by shipping things
                people pay for, breaking them, and fixing them before anyone noticed.
              </p>
              <p style={{ marginTop:24, fontSize:16, lineHeight:1.85, color:"var(--text-muted)" }}>
                Greenfield work goes in Elixir/Phoenix; existing work stays in TypeScript/Next.js.
                Supabase for data, Fly.io for deploys, Claude + MCP for the intelligent bits.
                Four papers live on Zenodo. Applying to Anthropic Fellows this cycle.
              </p>
              {/* Inline counter demo */}
              <div style={{ marginTop:40, display:"flex", gap:48, flexWrap:"wrap" }}>
                {[
                  { n:4, l:"Papers on Zenodo" },
                  { n:3, l:"Clients shipping" },
                  { n:21, l:"Years old" },
                ].map(x => (
                  <div key={x.l}>
                    <div style={{ fontFamily:"var(--font-serif)", fontSize:56, color:"var(--accent)", lineHeight:1, letterSpacing:"-.03em" }}>
                      <window.AnimatedCounter target={x.n} />
                    </div>
                    <div style={{ marginTop:8, fontSize:11, color:"var(--text-muted)", textTransform:"uppercase", letterSpacing:".2em" }}>{x.l}</div>
                  </div>
                ))}
              </div>
            </window.FadeIn>
          </div>
          <div>
            <window.FadeIn delay={.25}>
              <div style={{ background:"var(--bg-elevated)", border:"1px solid var(--border)", borderRadius:8, padding:32 }}>
                <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:24 }}>
                  <div style={{ height:1, width:20, background:"rgba(255,42,193,.4)" }} />
                  <span style={{ fontSize:10, letterSpacing:".25em", textTransform:"uppercase", color:"var(--text-muted)" }}>Stack</span>
                </div>
                <div style={{ display:"flex", flexWrap:"wrap", gap:10 }}>
                  {STACK.map(t => (
                    <span key={t} style={{ border:"1px solid var(--border)", padding:"10px 16px",
                      fontSize:12, color:"var(--text-muted)", borderRadius:8, cursor:"default",
                      transition:"all .3s" }}
                      onMouseEnter={e=>{ e.currentTarget.style.borderColor="var(--border-hover)"; e.currentTarget.style.color="var(--accent)"; }}
                      onMouseLeave={e=>{ e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.color="var(--text-muted)"; }}>{t}</span>
                  ))}
                </div>
              </div>
            </window.FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
