/* global React */
const { useEffect, useRef, useState } = React;

/* ---------- FadeIn — IntersectionObserver version ---------- */
window.FadeIn = function FadeIn({ children, delay = 0, y = 40, className = "" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } },
      { rootMargin: "-80px" }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity 600ms cubic-bezier(.25,.1,.25,1) ${delay}s, transform 900ms cubic-bezier(.25,.1,.25,1) ${delay}s`,
        willChange: "opacity, transform",
      }}
    >{children}</div>
  );
};

/* ---------- Card w/ signature dash ---------- */
window.DashCard = function DashCard({ href, children, onClick }) {
  const [hov, setHov] = useState(false);
  const Tag = href ? "a" : "div";
  return (
    <Tag
      href={href || undefined}
      target={href && href.startsWith("http") ? "_blank" : undefined}
      rel={href && href.startsWith("http") ? "noopener noreferrer" : undefined}
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="rk-card"
      style={{
        display: "flex", flexDirection: "column", height: "100%",
        background: "var(--bg-elevated)",
        border: `1px solid ${hov ? "var(--border-hover)" : "var(--border)"}`,
        borderRadius: 8, padding: 32, textDecoration: "none", color: "inherit",
        transform: hov ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hov ? "0 24px 48px -12px rgba(255,42,193,.06)" : "none",
        transition: "all 400ms ease", cursor: href || onClick ? "pointer" : "default"
      }}
    >
      <div style={{
        height: 2, width: hov ? 96 : 48,
        background: hov ? "var(--accent)" : "rgba(255,42,193,.4)",
        borderRadius: 2, marginBottom: 28, transition: "all 500ms ease"
      }} />
      {typeof children === "function" ? children({ hov }) : children}
    </Tag>
  );
};

/* ---------- Arrow out ---------- */
window.ArrowOut = ({ show = true }) => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"
    style={{ color: "var(--accent)", opacity: show ? 1 : 0, transition: "opacity 300ms" }}>
    <path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);
window.ArrowDown = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

/* ---------- Section header (accent-line + eyebrow + h2) ---------- */
window.SectionHeader = function SectionHeader({ num, eyebrow, title, sub, topLine = true }) {
  return (
    <>
      {topLine && <div style={{
        height: 1,
        background: "linear-gradient(90deg,transparent,var(--accent),transparent)",
        opacity: .15, marginBottom: 80
      }} />}
      <window.FadeIn>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
          <div style={{ height: 1, width: 32, background: "var(--accent)" }} />
          <span style={{
            fontSize: 10, letterSpacing: ".3em", textTransform: "uppercase",
            color: "var(--accent)", fontWeight: 500
          }}>
            <span style={{ fontFamily: "var(--font-mono)", color: "rgba(255,42,193,.3)", marginRight: 8 }}>
              {num}
            </span>
            {eyebrow}
          </span>
        </div>
        {title && <h2 style={{
          fontFamily: "var(--font-serif)", fontWeight: 400, margin: 0,
          fontSize: "clamp(2.2rem,5vw,4rem)", letterSpacing: "-.02em", lineHeight: 1.05
        }}>{title}</h2>}
        {sub && <p style={{
          marginTop: 20, maxWidth: 520, color: "var(--text-muted)",
          fontSize: 16, lineHeight: 1.7
        }}>{sub}</p>}
      </window.FadeIn>
    </>
  );
};

/* ---------- AnimatedCounter ---------- */
window.AnimatedCounter = function AnimatedCounter({ target, suffix = "", prefix = "" }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now(), dur = 2000;
      const tick = (now) => {
        const t = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - t, 3);
        setN(Math.round(eased * target));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { rootMargin: "-100px" });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [target]);
  return <span ref={ref}>{prefix}{n}{suffix}</span>;
};
