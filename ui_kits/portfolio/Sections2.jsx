const { useEffect, useRef, useState } = React;

const PAPERS = [
  { title:"Bandwidth Expansion", venue:"Zenodo", doi:"10.5281/zenodo.15179553",
    description:"On AI agent orchestration as cognitive bandwidth extension. Open-access working paper.", year:"2026" },
  { title:"Token-Efficient Multi-Turn Orchestration", venue:"Zenodo", doi:"10.5281/zenodo.15179570",
    description:"Notes on token budgets in multi-agent systems — context shaping and priority-weighted allocation. Open-access working paper.", year:"2026" },
  { title:"Cognitive Extension", venue:"Zenodo", doi:"10.5281/zenodo.15179604",
    description:"Extending the extended-mind framing to AI-human collaboration. Open-access working paper.", year:"2026" },
  { title:"Principal–Agent Dynamics in AI Orchestration", venue:"Zenodo", doi:"10.5281/zenodo.15179628",
    description:"Delegation, monitoring, and alignment incentives in multi-agent architectures. Open-access working paper.", year:"2026" },
];

window.Research = function Research() {
  return (
    <section id="research" style={{ position:"relative", padding:"144px clamp(24px,5vw,96px)" }}>
      <div style={{ margin:"0 auto", maxWidth:1200 }}>
        <window.SectionHeader num="03" eyebrow="Research" title="Published Work"
          sub="Four open-access working papers on Zenodo." />
        <div style={{ marginTop:56, display:"grid", gridTemplateColumns:"1fr 1fr", gap:20 }}>
          {PAPERS.map((p, i) => (
            <window.FadeIn key={p.doi} delay={.08 + i * .08}>
              <window.DashCard href={`https://doi.org/${p.doi}`}>
                {({ hov }) => (
                  <>
                    <div style={{ display:"flex", justifyContent:"space-between", marginBottom:16 }}>
                      <span style={{ fontSize:10, letterSpacing:".2em", textTransform:"uppercase", color:"rgba(255,42,193,.6)", fontWeight:500 }}>{p.venue}</span>
                      <span style={{ fontFamily:"var(--font-mono)", fontSize:10, color:"rgba(157,180,216,.3)" }}>{p.year}</span>
                    </div>
                    <h3 style={{ fontFamily:"var(--font-serif)", fontWeight:400, fontSize:20,
                      lineHeight:1.3, margin:0, color: hov ? "var(--accent)" : "var(--text)", transition:"color .3s" }}>{p.title}</h3>
                    <p style={{ marginTop:16, fontSize:14, lineHeight:1.7, color:"var(--text-muted)", flexGrow:1 }}>{p.description}</p>
                    <div style={{ marginTop:24, paddingTop:20, borderTop:"1px solid var(--border)",
                      display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                      <span style={{ fontFamily:"var(--font-mono)", fontSize:11, color:"rgba(255,42,193,.3)" }}>DOI: {p.doi.split("/").pop()}</span>
                      <window.ArrowOut show={hov} />
                    </div>
                  </>
                )}
              </window.DashCard>
            </window.FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

window.Contact = function Contact() {
  const links = [
    { l:"Email", h:"mailto:josh@roanco.law" },
    { l:"GitHub", h:"https://github.com/joshualangsam-a11y" },
    { l:"Upwork", h:"https://www.upwork.com/freelancers/joshualangsam" },
    { l:"LinkedIn", h:"https://www.linkedin.com/in/josh-langsam" },
  ];
  return (
    <section id="contact" style={{ position:"relative", padding:"176px clamp(24px,5vw,96px)" }}>
      <div style={{ height:1, background:"linear-gradient(90deg,transparent,var(--accent),transparent)", opacity:.15, marginBottom:80 }} />
      <div style={{ margin:"0 auto", maxWidth:1200 }}>
        <window.FadeIn>
          <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:32 }}>
            <div style={{ height:1, width:32, background:"var(--accent)" }} />
            <span style={{ fontSize:10, letterSpacing:".3em", textTransform:"uppercase", color:"var(--accent)", fontWeight:500 }}>
              <span style={{ fontFamily:"var(--font-mono)", color:"rgba(255,42,193,.3)", marginRight:8 }}>04</span>Contact
            </span>
          </div>
          <h2 style={{ fontFamily:"var(--font-serif)", fontWeight:400, margin:0,
            fontSize:"clamp(3.5rem,10vw,10rem)", lineHeight:.88, letterSpacing:"-.02em" }}>Let's build</h2>
        </window.FadeIn>
        <window.FadeIn delay={.1}>
          <h2 style={{ fontFamily:"var(--font-serif)", fontWeight:400, margin:0,
            fontSize:"clamp(3.5rem,10vw,10rem)", lineHeight:.88, letterSpacing:"-.02em", color:"var(--accent)" }}>something.</h2>
        </window.FadeIn>
        <window.FadeIn delay={.2}>
          <div style={{ marginTop:64, display:"flex", flexWrap:"wrap", gap:16 }}>
            {links.map(lk => (
              <a key={lk.l} href={lk.h} target="_blank" rel="noopener noreferrer"
                style={{ display:"inline-flex", alignItems:"center", gap:8,
                  border:"1px solid var(--border)", padding:"14px 28px", fontSize:12,
                  letterSpacing:".12em", textTransform:"uppercase", color:"var(--text-muted)",
                  borderRadius:8, textDecoration:"none", transition:"all .3s" }}
                onMouseEnter={e=>{ e.currentTarget.style.borderColor="var(--border-hover)"; e.currentTarget.style.color="var(--accent)"; }}
                onMouseLeave={e=>{ e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.color="var(--text-muted)"; }}>{lk.l}</a>
            ))}
          </div>
        </window.FadeIn>
      </div>
      <div style={{ margin:"112px auto 0", maxWidth:1200, borderTop:"1px solid var(--border)", paddingTop:32,
        display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:16 }}>
        <div>
          <span style={{ display:"block", fontSize:11, color:"rgba(157,180,216,.5)" }}>Joshua Langsam</span>
          <span style={{ display:"block", fontSize:11, color:"rgba(157,180,216,.3)", marginTop:4 }}>RoanCo © 2026</span>
        </div>
        <div style={{ textAlign:"right" }}>
          <span style={{ fontSize:11, color:"rgba(157,180,216,.3)" }}>Built in Jupiter, FL</span>
        </div>
      </div>
    </section>
  );
};

/* Custom cursor */
window.CursorRing = function CursorRing() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hov, setHov] = useState(false);
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const mv = (e) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e) => { if (e.target.closest("a,button,[role=button]")) setHov(true); };
    const out = (e) => { if (e.target.closest("a,button,[role=button]")) setHov(false); };
    window.addEventListener("mousemove", mv);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    return () => { window.removeEventListener("mousemove", mv);
      document.removeEventListener("mouseover", over); document.removeEventListener("mouseout", out); };
  }, []);
  return (
    <div style={{ position:"fixed", top:0, left:0, zIndex:9998, pointerEvents:"none",
      transform:`translate(${pos.x}px,${pos.y}px) translate(-50%,-50%)`,
      transition:"transform 120ms cubic-bezier(.25,.1,.25,1)" }}>
      <div style={{ width: hov ? 48 : 12, height: hov ? 48 : 12,
        border:`1px solid rgba(255,42,193,${hov ? .4 : .25})`, borderRadius:"50%",
        transition:"all 300ms cubic-bezier(.25,.1,.25,1)" }} />
    </div>
  );
};
