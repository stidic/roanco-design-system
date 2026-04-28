/* global React */
/* Horizontal bands — ticker, marquees, timeline rail, mini project strip.
   All components export to window so Sections can compose with them. */
const { useEffect, useRef, useState } = React;

/* ---------- 1. NavTicker — live metrics ticker that scrolls under the nav ---------- */
window.NavTicker = function NavTicker() {
  const items = [
    { k: 'ROLE', v: 'CO-FOUNDER · CTO', c: '#09FBD3' },
    { k: 'COMPANY', v: 'ROANCO', c: '#FF6FB5' },
    { k: 'STACK · GREENFIELD', v: 'ELIXIR / PHOENIX', c: '#09FBD3' },
    { k: 'STACK · EXISTING', v: 'TYPESCRIPT / NEXT', c: '#F4D06F' },
    { k: 'DATABASE', v: 'SUPABASE', c: '#FF6FB5' },
    { k: 'DEPLOY', v: 'FLY.IO', c: '#09FBD3' },
    { k: 'AI', v: 'CLAUDE · MCP', c: '#FF2AC1' },
    { k: 'PAPERS', v: '4 · ZENODO', c: '#09FBD3' },
    { k: 'REGION', v: 'JUPITER · FL', c: '#F4D06F' },
    { k: 'STATUS', v: 'OPEN FOR SELECT WORK', c: '#FF6FB5' },
  ];
  const row = (keyPrefix) => items.map((it, i) => (
    <span key={keyPrefix + i} style={{ display:'inline-flex', alignItems:'center', gap:10, marginRight:48 }}>
      <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'.22em', color:'rgba(157,180,216,.55)' }}>{it.k}</span>
      <span style={{ fontFamily:'var(--font-mono)', fontSize:11, color:it.c, letterSpacing:'.04em' }}>{it.v}</span>
      <span style={{ width:4, height:4, background:'#FF2AC1', display:'inline-block', opacity:.6 }} />
    </span>
  ));
  return (
    <div style={{
      position:'fixed', top:66, left:0, right:0, zIndex:49,
      height:30, overflow:'hidden',
      background:'rgba(11,19,43,.82)', backdropFilter:'blur(14px)', WebkitBackdropFilter:'blur(14px)',
      borderBottom:'1px solid rgba(255,42,193,.22)', borderTop:'1px solid rgba(255,42,193,.12)',
      display:'flex', alignItems:'center'
    }}>
      <div style={{
        display:'inline-flex', whiteSpace:'nowrap', willChange:'transform',
        animation:'rk-ticker 48s linear infinite'
      }}>
        {row('a')}{row('b')}{row('c')}
      </div>
      <style>{`@keyframes rk-ticker { from{transform:translateX(0)} to{transform:translateX(-50%)} }`}</style>
    </div>
  );
};

/* ---------- 2. Marquee — infinite scrolling chip strip ---------- */
window.Marquee = function Marquee({ items, speed = 36, dir = 'left', accent = '#FF2AC1', label }) {
  const list = (k) => items.map((it, i) => (
    <span key={k+i} style={{ display:'inline-flex', alignItems:'center', gap:14, marginRight:44 }}>
      <span style={{ fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize:22, color:'rgba(244,208,111,.85)', letterSpacing:'-.01em' }}>{it}</span>
      <span style={{ width:4, height:4, background:'rgba(157,180,216,.4)', borderRadius:'50%', display:'inline-block' }} />
    </span>
  ));
  return (
    <div style={{
      position:'relative', width:'100%', overflow:'hidden',
      padding:'22px 0', borderTop:'1px solid rgba(157,180,216,.12)', borderBottom:'1px solid rgba(157,180,216,.12)',
      background:'rgba(11,19,43,.55)'
    }}>
      {label && (
        <div style={{
          position:'absolute', left:24, top:-10, background:'#0B132B',
          fontFamily:'var(--font-mono)', fontSize:9, letterSpacing:'.25em', color:accent,
          padding:'4px 10px', textTransform:'uppercase', border:`1px solid ${accent}55`
        }}>{label}</div>
      )}
      <div style={{
        display:'inline-flex', whiteSpace:'nowrap', willChange:'transform',
        animation:`rk-mq-${dir} ${speed}s linear infinite`
      }}>
        {list('a')}{list('b')}
      </div>
      <style>{`
        @keyframes rk-mq-left  { from{transform:translateX(0)}    to{transform:translateX(-50%)} }
        @keyframes rk-mq-right { from{transform:translateX(-50%)} to{transform:translateX(0)}    }
      `}</style>
    </div>
  );
};

/* ---------- 3. Timeline Rail — horizontal scroll with pinned years ---------- */
window.TimelineRail = function TimelineRail() {
  const ref = useRef(null);
  const [p, setP] = useState(0);
  const events = [
    { y: '2023', t: 'RoanCo', d: 'Co-founded with Stiles (CEO). AI-augmented tools for slow industries.' },
    { y: '2024', t: 'Litigation Juris', d: 'app.roanco.law — PI case management · demand letters · record parsing.' },
    { y: '2025', t: 'Research', d: 'Four working papers posted on Zenodo.' },
    { y: '2026', t: 'Logos', d: 'Post-quantum programming language reaches general-purpose · April.' },
    { y: '2026', t: 'Diogenes', d: 'Secure AI agent runtime on Logos · ~50% shipped.' },
    { y: '2026', t: 'Clients shipping', d: 'SushiLab · Lerro & Sarbey · Alphazone Market.' },
    { y: '2026', t: 'Now', d: 'Building in Jupiter, FL. Applying to Anthropic Fellows.' },
  ];

  useEffect(() => {
    const el = ref.current; if (!el) return;
    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      setP(max > 0 ? el.scrollLeft / max : 0);
    };
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section style={{ padding:'96px 0 80px', position:'relative', background:'rgba(11,19,43,.55)', borderTop:'1px solid rgba(255,42,193,.18)', borderBottom:'1px solid rgba(255,42,193,.18)' }}>
      <div style={{ padding:'0 clamp(24px,5vw,96px)', display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom:32 }}>
        <div style={{ display:'flex', alignItems:'center', gap:16 }}>
          <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'.3em', color:'rgba(9,251,211,.75)' }}>§ · TRAJECTORY</span>
          <span style={{ height:1, width:32, background:'rgba(255,42,193,.5)' }} />
          <span style={{ fontFamily:'var(--font-serif)', fontSize:28, color:'#F4D06F', letterSpacing:'-.01em' }}>It's not if, <em style={{ fontStyle:'italic', color:'#FF6FB5' }}>it's when</em></span>
        </div>
        <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'.2em', textTransform:'uppercase', color:'rgba(157,180,216,.5)' }}>drag · scroll ↔</span>
      </div>

      <div ref={ref} style={{
        display:'flex', gap:0, overflowX:'auto', overflowY:'hidden', scrollSnapType:'x mandatory',
        padding:'0 clamp(24px,5vw,96px)', scrollbarWidth:'none', cursor:'grab'
      }} onMouseDown={e => {
        const el = ref.current; if (!el) return;
        el.style.cursor = 'grabbing';
        const sx = e.clientX, sl = el.scrollLeft;
        const mv = (ev) => { el.scrollLeft = sl - (ev.clientX - sx); };
        const up = () => { el.style.cursor = 'grab'; window.removeEventListener('mousemove', mv); window.removeEventListener('mouseup', up); };
        window.addEventListener('mousemove', mv); window.addEventListener('mouseup', up);
      }}>
        <style>{`section > div::-webkit-scrollbar{display:none}`}</style>
        {events.map((e, i) => (
          <div key={i} style={{
            flex:'0 0 auto', width:'min(340px, 70vw)', scrollSnapAlign:'start',
            borderLeft: i === 0 ? 'none' : '1px dashed rgba(157,180,216,.18)',
            padding:'12px 28px 0 28px', display:'flex', flexDirection:'column', gap:14
          }}>
            <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between' }}>
              <span style={{ fontFamily:'var(--font-mono)', fontSize:11, color:'#09FBD3', letterSpacing:'.18em' }}>{e.y}</span>
              <span style={{ fontFamily:'var(--font-mono)', fontSize:9, color:'rgba(157,180,216,.4)', letterSpacing:'.18em' }}>{String(i+1).padStart(2,'0')} / {String(events.length).padStart(2,'0')}</span>
            </div>
            <div style={{ height:1, background:'linear-gradient(90deg, #FF2AC1, transparent)' }} />
            <h4 style={{ fontFamily:'var(--font-serif)', fontWeight:400, fontSize:24, letterSpacing:'-.01em', margin:0, color:'#F4D06F' }}>{e.t}</h4>
            <p style={{ fontSize:13, lineHeight:1.6, color:'#9db4d8', margin:0 }}>{e.d}</p>
          </div>
        ))}
        <div style={{ flex:'0 0 clamp(24px,5vw,96px)' }} />
      </div>

      {/* progress */}
      <div style={{ margin:'36px clamp(24px,5vw,96px) 0', height:1, background:'rgba(157,180,216,.12)', position:'relative' }}>
        <div style={{ position:'absolute', left:0, top:-1, height:3, width:`${p*100}%`, background:'linear-gradient(90deg, #FF2AC1, #FF8C42, #F4D06F)', transition:'width 80ms linear' }} />
      </div>
    </section>
  );
};

/* ---------- 4. Horizontal Sector Strip — 3-axis band that cross-scrolls on vertical scroll ---------- */
window.SectorStrip = function SectorStrip() {
  const [x, setX] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById('rk-sector');
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // map when element is in viewport (0..1)
      const p = 1 - (rect.top + rect.height) / (vh + rect.height);
      setX(Math.max(0, Math.min(1, p)));
    };
    window.addEventListener('scroll', onScroll, { passive:true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const sectors = ['LEGAL TECH','AI AGENTS','MULTI-AGENT','FULL-STACK','SAAS','ELIXIR','CLAUDE','NEXT.JS','LLM ORCHESTRATION','SIGNAL PROCESSING','FINTECH','DEV TOOLS'];
  return (
    <div id="rk-sector" style={{
      position:'relative', padding:'64px 0', overflow:'hidden',
      borderTop:'1px solid rgba(157,180,216,.1)', borderBottom:'1px solid rgba(157,180,216,.1)',
      background:'#0B132B'
    }}>
      <div style={{
        display:'inline-flex', whiteSpace:'nowrap', willChange:'transform',
        transform:`translateX(${-x * 40}%)`, transition:'transform 120ms linear'
      }}>
        {sectors.concat(sectors).map((s, i) => (
          <span key={i} style={{
            display:'inline-flex', alignItems:'center', gap:24, marginRight:56,
            fontFamily:'var(--font-serif)', fontSize:'clamp(48px, 8vw, 96px)', lineHeight:1,
            color: i % 3 === 0 ? '#F4D06F' : i % 3 === 1 ? '#FF6FB5' : '#09FBD3',
            letterSpacing:'-.02em',
            WebkitTextStroke: i % 2 === 0 ? '0' : '1px #F4D06F',
            WebkitTextFillColor: i % 2 === 0 ? 'currentColor' : 'transparent'
          }}>
            {s}
            <span style={{ width:12, height:12, background:'#FF2AC1', display:'inline-block' }} />
          </span>
        ))}
      </div>
    </div>
  );
};
