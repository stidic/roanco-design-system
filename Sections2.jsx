const { useEffect, useRef, useState } = React;

/* ========== CONTACT ========== */
window.Contact = function Contact() {
  const contacts = [
    { l:"Email Stiles", h:"mailto:stiles.dichter@gmail.com" },
    { l:"Email Josh", h:"mailto:joshualangsam@gmail.com" },
    { l:"Call (772) 801-9021", h:"tel:7728019021" },
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
            fontSize:"clamp(3.5rem,10vw,10rem)", lineHeight:.88, letterSpacing:"-.02em" }}>Let's save you</h2>
        </window.FadeIn>
        <window.FadeIn delay={.1}>
          <h2 style={{ fontFamily:"var(--font-serif)", fontWeight:400, margin:0,
            fontSize:"clamp(3.5rem,10vw,10rem)", lineHeight:.88, letterSpacing:"-.02em", color:"var(--accent)" }}>money.</h2>
        </window.FadeIn>

        <window.FadeIn delay={.15}>
          <p style={{ marginTop:40, maxWidth:520, fontSize:16, lineHeight:1.7, color:"var(--text-muted)" }}>
            Start with a free payment processing comparison — we'll show you exactly what you'd save.
            Then let's talk about where AI can give you your time back.
          </p>
        </window.FadeIn>

        <window.FadeIn delay={.2}>
          <div style={{ marginTop:48, display:"grid", gridTemplateColumns:"1fr 1fr", gap:20 }}>
            {[
              { name:"Stiles Dichter", role:"CEO", loc:"Salt Lake City, UT", email:"stiles.dichter@gmail.com", phone:"(772) 801-9021" },
              { name:"Josh Langsam", role:"CTO", loc:"Jupiter, FL", email:"joshualangsam@gmail.com" },
            ].map(c => (
              <div key={c.name} style={{ background:"var(--bg-elevated)", border:"1px solid var(--border)", borderRadius:8, padding:"32px 28px", transition:"border-color .4s, transform .4s" }}
                onMouseEnter={e=>{ e.currentTarget.style.borderColor="var(--border-hover)"; e.currentTarget.style.transform="translateY(-2px)"; }}
                onMouseLeave={e=>{ e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.transform="translateY(0)"; }}>
                <div style={{ height:2, width:40, borderRadius:2, background:"rgba(255,42,193,.5)", marginBottom:20 }} />
                <h3 style={{ fontFamily:"var(--font-serif)", fontWeight:400, fontSize:20, margin:0, color:"var(--cream)" }}>{c.name}</h3>
                <p style={{ fontSize:12, color:"var(--text-muted)", marginTop:4 }}>{c.role} — {c.loc}</p>
                <div style={{ marginTop:20 }}>
                  <a href={`mailto:${c.email}`} style={{ display:"block", fontSize:14, color:"var(--text-muted)", textDecoration:"none", marginBottom:6, transition:"color .3s" }}
                    onMouseEnter={e=>e.currentTarget.style.color="var(--accent)"} onMouseLeave={e=>e.currentTarget.style.color="var(--text-muted)"}>{c.email}</a>
                  {c.phone && <span style={{ fontSize:14, color:"var(--text-muted)" }}>{c.phone}</span>}
                </div>
              </div>
            ))}
          </div>
        </window.FadeIn>

        <window.FadeIn delay={.25}>
          <div style={{ marginTop:36, display:"flex", flexWrap:"wrap", gap:14 }}>
            <a href="mailto:stiles.dichter@gmail.com" style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"14px 26px", fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:".22em", textTransform:"uppercase", background:"var(--accent)", color:"var(--ink)", borderRadius:4, textDecoration:"none", transition:"transform .25s, box-shadow .25s" }}
              onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-1px)"; e.currentTarget.style.boxShadow="0 8px 24px rgba(255,42,193,.25)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="none"; }}>Email us →</a>
            <a href="tel:7728019021" style={{ display:"inline-flex", alignItems:"center", gap:8, border:"1px solid var(--border)", padding:"14px 26px", fontSize:12, letterSpacing:".12em", textTransform:"uppercase", color:"var(--text-muted)", borderRadius:4, textDecoration:"none", transition:"all .3s" }}
              onMouseEnter={e=>{ e.currentTarget.style.borderColor="var(--border-hover)"; e.currentTarget.style.color="var(--accent)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.color="var(--text-muted)"; }}>Call now</a>
          </div>
        </window.FadeIn>
      </div>

      {/* Footer */}
      <div style={{ margin:"112px auto 0", maxWidth:1200, borderTop:"1px solid var(--border)", paddingTop:32,
        display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:16 }}>
        <div>
          <span style={{ display:"block", fontSize:11, color:"rgba(157,180,216,.6)", letterSpacing:".08em" }}>Roan Co.</span>
          <span style={{ display:"block", fontSize:11, color:"rgba(157,180,216,.35)", marginTop:4 }}>Payments · AI Systems · Web & Brand</span>
          <span style={{ display:"block", fontSize:11, color:"rgba(157,180,216,.35)", marginTop:2 }}>Dichter · Langsam · © 2026</span>
        </div>
        <div style={{ textAlign:"right" }}>
          <span style={{ display:"block", fontSize:11, color:"rgba(157,180,216,.35)" }}>Delaware C-Corp</span>
          <span style={{ display:"block", fontSize:11, color:"rgba(157,180,216,.25)", marginTop:4, fontFamily:"var(--font-serif)", fontStyle:"italic" }}>It's not if, it's when.</span>
        </div>
      </div>
    </section>
  );
};

/* ========== CURSOR ========== */
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
