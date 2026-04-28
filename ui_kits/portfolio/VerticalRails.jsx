/* Vertical moving-parts: left scroll-progress rail, right metrics ticker,
   vertical marquee strip between sections. Exports to window. */
const { useEffect, useRef, useState } = React;

/* 1. LEFT RAIL — progress bar + section markers, fixed left edge */
window.SideProgress = function SideProgress() {
  const [p, setP] = useState(0);
  const [active, setActive] = useState(0);
  const sections = [
    { id: 'work', label: 'Work', n: '01' },
    { id: 'trajectory', label: 'Trajectory', n: '02' },
    { id: 'about', label: 'About', n: '03' },
    { id: 'research', label: 'Research', n: '04' },
    { id: 'contact', label: 'Contact', n: '05' },
  ];
  useEffect(() => {
    const on = () => {
      const doc = document.documentElement;
      const pp = doc.scrollTop / Math.max(1, doc.scrollHeight - doc.clientHeight);
      setP(pp);
      // active section
      let a = 0;
      sections.forEach((s, i) => {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.5) a = i;
      });
      setActive(a);
    };
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <div style={{
      position:'fixed', left:18, top:'50%', transform:'translateY(-50%)', zIndex:45,
      display:'flex', flexDirection:'column', alignItems:'center', gap:0,
      fontFamily:'var(--font-mono)'
    }}>
      {/* top cap */}
      <div style={{ width:1, height:60, background:'linear-gradient(180deg, transparent, rgba(157,180,216,.3))' }} />
      {/* track */}
      <div style={{ position:'relative', width:2, height:260, background:'rgba(157,180,216,.1)' }}>
        <div style={{ position:'absolute', left:-1, top:0, width:4, height:`${p*100}%`,
          background:'linear-gradient(180deg, #FF2AC1, #FF8C42, #F4D06F)', transition:'height 80ms linear' }} />
        {sections.map((s, i) => (
          <a key={s.id} href={'#'+s.id} style={{
            position:'absolute', left:-26, top:`${(i/(sections.length-1))*100}%`,
            transform:'translate(-100%, -50%)',
            display:'flex', alignItems:'center', gap:10, textDecoration:'none',
            opacity: active === i ? 1 : .45, transition:'opacity .3s'
          }}>
            <span style={{ fontSize:9, letterSpacing:'.2em', color: active===i ? '#F4D06F' : 'rgba(157,180,216,.55)', textTransform:'uppercase', whiteSpace:'nowrap' }}>{s.label}</span>
            <span style={{ fontSize:9, color: active===i ? '#FF6FB5' : 'rgba(255,42,193,.4)' }}>{s.n}</span>
            <span style={{ width:14, height:1, background: active===i ? '#FF2AC1' : 'rgba(157,180,216,.25)' }} />
            <span style={{ width: active===i?9:5, height: active===i?9:5, background: active===i ? '#F4D06F' : '#0B132B', border:'1px solid '+(active===i?'#FF2AC1':'rgba(157,180,216,.35)'), borderRadius:'50%', transition:'all .3s' }} />
          </a>
        ))}
      </div>
      {/* bottom cap */}
      <div style={{ width:1, height:60, background:'linear-gradient(180deg, rgba(157,180,216,.3), transparent)' }} />
      {/* pct */}
      <div style={{ marginTop:10, fontSize:10, letterSpacing:'.16em', color:'rgba(244,208,111,.75)' }}>{String(Math.round(p*100)).padStart(2,'0')}%</div>
    </div>
  );
};

/* 2. RIGHT RAIL — vertical ticker scrolling UP with live stats */
window.SideTicker = function SideTicker() {
  const items = [
    { k:'STATUS', v:'OPEN FOR WORK' },
    { k:'ROLE', v:'CO-FOUNDER/CTO' },
    { k:'COMPANY', v:'ROANCO' },
    { k:'STACK · A', v:'ELIXIR/PHOENIX' },
    { k:'STACK · B', v:'TS/NEXT.JS' },
    { k:'DB', v:'SUPABASE' },
    { k:'DEPLOY', v:'FLY.IO' },
    { k:'AI', v:'CLAUDE · MCP' },
    { k:'PAPERS', v:'4 · ZENODO' },
    { k:'REGION', v:'JUPITER · FL' },
  ];
  const row = (k) => items.map((it, i) => (
    <div key={k+i} style={{ display:'flex', flexDirection:'column', alignItems:'flex-end', gap:2, marginBottom:28 }}>
      <span style={{ fontFamily:'var(--font-mono)', fontSize:8.5, letterSpacing:'.25em', color:'rgba(157,180,216,.55)' }}>{it.k}</span>
      <span style={{ fontFamily:'var(--font-mono)', fontSize:11.5, color: i % 3 === 0 ? '#09FBD3' : i % 3 === 1 ? '#FF6FB5' : '#F4D06F', letterSpacing:'.04em' }}>{it.v}</span>
    </div>
  ));
  return (
    <div style={{
      position:'fixed', right:14, top:0, bottom:0, zIndex:44, width:90,
      display:'flex', flexDirection:'column', alignItems:'flex-end', justifyContent:'center',
      pointerEvents:'none'
    }}>
      <div style={{
        position:'relative', height:'70vh', overflow:'hidden',
        maskImage:'linear-gradient(180deg, transparent, #000 12%, #000 88%, transparent)',
        WebkitMaskImage:'linear-gradient(180deg, transparent, #000 12%, #000 88%, transparent)',
        borderLeft:'1px solid rgba(157,180,216,.12)', paddingLeft:12
      }}>
        <div style={{ animation:'rk-vtick 38s linear infinite', willChange:'transform' }}>
          {row('a')}{row('b')}
        </div>
      </div>
      <style>{`@keyframes rk-vtick { from{transform:translateY(0)} to{transform:translateY(-50%)} }`}</style>
    </div>
  );
};

/* 3. Vertical marquee section — a tall strip with text scrolling UP
   between sections. Single-axis counterpoint to horizontal bands. */
window.VerticalMarquee = function VerticalMarquee({ items, speed = 24, accent = '#FF2AC1', label }) {
  const list = (k) => items.map((it, i) => (
    <div key={k+i} style={{
      display:'flex', alignItems:'center', gap:18, padding:'22px 0',
      fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize:'clamp(28px,3.6vw,44px)',
      color: i % 2 === 0 ? '#F4D06F' : '#FF6FB5', letterSpacing:'-.01em', lineHeight:1,
      borderBottom:'1px solid rgba(157,180,216,.08)'
    }}>
      <span style={{ width:8, height:8, background:accent, flex:'none' }} />
      {it}
    </div>
  ));
  return (
    <section style={{
      position:'relative', height:'48vh', minHeight:360, overflow:'hidden',
      background:'rgba(11,19,43,.7)', borderTop:'1px solid rgba(255,42,193,.2)', borderBottom:'1px solid rgba(255,42,193,.2)',
      display:'grid', gridTemplateColumns:'auto 1fr', alignItems:'stretch'
    }}>
      <div style={{ padding:'28px 28px', borderRight:'1px solid rgba(157,180,216,.1)', display:'flex', flexDirection:'column', justifyContent:'space-between', minWidth:200 }}>
        <div>
          <div style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'.3em', color:'rgba(9,251,211,.8)' }}>§ {label}</div>
          <div style={{ marginTop:8, height:1, width:40, background:accent }} />
        </div>
        <div style={{ fontFamily:'var(--font-mono)', fontSize:9, letterSpacing:'.22em', color:'rgba(157,180,216,.45)', textTransform:'uppercase' }}>scroll ↑</div>
      </div>
      <div style={{ position:'relative', overflow:'hidden',
        maskImage:'linear-gradient(180deg, transparent, #000 10%, #000 90%, transparent)',
        WebkitMaskImage:'linear-gradient(180deg, transparent, #000 10%, #000 90%, transparent)' }}>
        <div style={{ animation:`rk-vmq ${speed}s linear infinite`, willChange:'transform', padding:'0 40px' }}>
          {list('a')}{list('b')}
        </div>
      </div>
      <style>{`@keyframes rk-vmq { from{transform:translateY(0)} to{transform:translateY(-50%)} }`}</style>
    </section>
  );
};

/* 4. Parallax column — three vertical streams moving at different speeds
   Behind-the-sections decorative layer. */
window.ParallaxStreams = function ParallaxStreams() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const on = () => setY(window.scrollY);
    window.addEventListener('scroll', on, { passive:true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  const col = (translate, items, color) => (
    <div style={{
      flex:1, display:'flex', flexDirection:'column', gap:26,
      transform:`translateY(${translate}px)`, transition:'transform 40ms linear',
      fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'.18em', textTransform:'uppercase', color
    }}>
      {items.concat(items).map((t, i) => <span key={i}>{t}</span>)}
    </div>
  );
  return (
    <div style={{ position:'absolute', inset:0, pointerEvents:'none', overflow:'hidden', opacity:.35, display:'flex', gap:40, padding:'0 clamp(24px,5vw,96px)', zIndex:0 }}>
      {col(-y * 0.35, ['◇ ZENODO · 4 DOIs','◇ ROANCO LABS','◇ JUPITER · FL','◇ FAU JUPITER','◇ ANTHROPIC FELLOWS','◇ OPEN RESEARCH','◇ 26.87°N'], 'rgba(9,251,211,.5)')}
      {col(-y * 0.18, ['— LOGOS','— DIOGENES','— LITIGATION JURIS','— TAX ROBOT','— FUELOPS','— VAPEOPS','— ALPHAZONE'], 'rgba(255,111,181,.5)')}
      {col(-y * 0.48, ['✦ ELIXIR / PHOENIX','✦ TYPESCRIPT / NEXT','✦ SUPABASE','✦ FLY.IO','✦ CLAUDE · MCP','✦ POST-QUANTUM','✦ JUPITER FL'], 'rgba(244,208,111,.5)')}
    </div>
  );
};
