/* global React */
(function () {
  const { useEffect, useRef, useState } = React;

  const railBtnStyle = {
    width: 36, height: 36, borderRadius: 18,
    border: '1px solid var(--border)', background: 'transparent', color: 'var(--text-muted)',
    cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 16 16' fill='none'><path d='M10 4L6 8l4 4' stroke='%23888' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>\")",
    backgroundRepeat: 'no-repeat', backgroundPosition: 'center', transition: 'border-color 250ms'
  };

  window.ProjectRail = function ProjectRail({ items = [] }) {
    const track = useRef(null);
    const [active, setActive] = useState(0);
    const [progress, setProgress] = useState(0);
    const drag = useRef({ down: false, startX: 0, startScroll: 0, moved: 0 });

    const onScroll = () => {
      const el = track.current; if (!el) return;
      const max = el.scrollWidth - el.clientWidth;
      setProgress(max > 0 ? el.scrollLeft / max : 0);
      const cards = el.querySelectorAll('[data-card]');
      let best = 0, bestD = Infinity;
      const mid = el.scrollLeft + el.clientWidth / 2;
      cards.forEach((c, i) => {
        const cMid = c.offsetLeft + c.offsetWidth / 2;
        const d = Math.abs(cMid - mid);
        if (d < bestD) { bestD = d; best = i; }
      });
      setActive(best);
    };
    useEffect(() => { onScroll(); }, []);

    // vertical-wheel → horizontal-scroll when pointer over rail
    useEffect(() => {
      const el = track.current; if (!el) return;
      const wheel = (e) => {
        if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
        const max = el.scrollWidth - el.clientWidth;
        if (max <= 2) return;
        const atStart = el.scrollLeft <= 0 && e.deltaY < 0;
        const atEnd = el.scrollLeft >= max - 1 && e.deltaY > 0;
        if (atStart || atEnd) return;
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      };
      el.addEventListener('wheel', wheel, { passive: false });
      return () => el.removeEventListener('wheel', wheel);
    }, []);

    const down = (e) => {
      const el = track.current; if (!el) return;
      drag.current = { down: true, startX: e.clientX, startScroll: el.scrollLeft, moved: 0 };
      el.setPointerCapture && el.setPointerCapture(e.pointerId);
      el.style.cursor = 'grabbing';
      el.style.scrollSnapType = 'none';
    };
    const move = (e) => {
      const d = drag.current; if (!d.down) return;
      const el = track.current;
      const dx = e.clientX - d.startX;
      d.moved = Math.max(d.moved, Math.abs(dx));
      el.scrollLeft = d.startScroll - dx;
    };
    const up = () => {
      const d = drag.current; if (!d.down) return;
      d.down = false;
      const el = track.current;
      el.style.cursor = 'grab';
      el.style.scrollSnapType = 'x mandatory';
      if (d.moved > 6) {
        const stop = (ev) => { ev.preventDefault(); ev.stopPropagation(); el.removeEventListener('click', stop, true); };
        el.addEventListener('click', stop, true);
      }
    };

    const to = (i) => {
      const el = track.current; if (!el) return;
      const card = el.querySelectorAll('[data-card]')[i];
      if (!card) return;
      el.scrollTo({ left: card.offsetLeft - 32, behavior: 'smooth' });
    };
    const nudge = (dir) => {
      const el = track.current; if (!el) return;
      const step = Math.min(el.clientWidth * 0.7, 480);
      el.scrollBy({ left: dir * step, behavior: 'smooth' });
    };

    return (
      <div style={{ marginTop: 40, position: 'relative' }}>
        {/* Header row — live counter + controls */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)' }}>
              {String(active + 1).padStart(2, '0')}
            </span>
            <span style={{ height: 1, width: 32, background: 'var(--border)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'rgba(157,180,216,.45)' }}>
              {String(items.length).padStart(2, '0')}
            </span>
            <span style={{ fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(157,180,216,.5)', marginLeft: 16 }}>
              Drag · scroll · arrow
            </span>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={() => nudge(-1)} aria-label="Previous" style={railBtnStyle} />
            <button onClick={() => nudge(1)} aria-label="Next" style={{ ...railBtnStyle, transform: 'rotate(180deg)' }} />
          </div>
        </div>

        {/* Rail */}
        <div
          ref={track}
          onScroll={onScroll}
          onPointerDown={down}
          onPointerMove={move}
          onPointerUp={up}
          onPointerCancel={up}
          className="rk-rail"
          style={{
            display: 'flex', gap: 20, overflowX: 'auto', overflowY: 'hidden',
            scrollSnapType: 'x mandatory', scrollBehavior: 'auto',
            cursor: 'grab', margin: '0 -24px', padding: '4px 24px 24px',
            touchAction: 'pan-y', perspective: '1400px'
          }}
        >
          {items.map((p, i) => {
            const tilt = (i - active) * -2.5;
            return (
              <div key={p.name} data-card
                style={{
                  scrollSnapAlign: 'start', flex: '0 0 clamp(280px, 34vw, 420px)',
                  transform: 'rotateY(' + tilt + 'deg)', transformOrigin: 'center',
                  transition: 'transform 400ms ease'
                }}>
                <window.DashCard href={p.url}>
                  {({ hov }) => (
                    <>
                      <span style={{ fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(157,180,216,.6)', marginBottom: 16, display: 'block' }}>{p.category}</span>
                      <h3 style={{
                        fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 22, letterSpacing: '-.01em', margin: 0,
                        color: hov ? 'var(--accent)' : 'var(--text)', transition: 'color .3s'
                      }}>{p.name}</h3>
                      <p style={{ marginTop: 12, fontSize: 14, lineHeight: 1.7, color: 'var(--text-muted)', flexGrow: 1 }}>{p.description}</p>
                      <div style={{ marginTop: 24, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {p.tech.map(t => (
                          <span key={t} style={{
                            fontSize: 10, color: 'rgba(157,180,216,.5)',
                            border: '1px solid var(--border)', padding: '4px 10px', borderRadius: 6
                          }}>{t}</span>
                        ))}
                      </div>
                      {p.metrics && (
                        <div style={{
                          marginTop: 20, paddingTop: 20, borderTop: '1px solid var(--border)',
                          display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                        }}>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'rgba(255,42,193,.6)' }}>{p.metrics}</span>
                          {p.url && <window.ArrowOut show={hov} />}
                        </div>
                      )}
                    </>
                  )}
                </window.DashCard>
              </div>
            );
          })}
        </div>

        {/* Progress bar + index dots */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems: 'center' }}>
          <div style={{ height: 1, background: 'var(--border)', position: 'relative' }}>
            <div style={{
              position: 'absolute', inset: 0,
              width: Math.round(progress * 100) + '%',
              background: 'var(--accent)', transition: 'width 120ms linear'
            }} />
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            {items.map((_, i) => (
              <button key={i} onClick={() => to(i)} aria-label={'Go to ' + (i + 1)}
                style={{
                  width: i === active ? 18 : 6, height: 6, borderRadius: 3, border: 'none',
                  background: i === active ? 'var(--accent)' : 'rgba(157,180,216,.3)',
                  padding: 0, cursor: 'pointer', transition: 'all 300ms ease'
                }} />
            ))}
          </div>
        </div>
      </div>
    );
  };
})();
