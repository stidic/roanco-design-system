"use client";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useState, useEffect } from "react";

const links = [
  { num: "01", label: "Services", href: "#services" },
  { num: "02", label: "Process", href: "#process" },
  { num: "03", label: "About", href: "#about" },
  { num: "04", label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { scrollY, scrollYProgress } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-accent origin-left z-[60]" style={{ scaleX: scrollYProgress }} />

      <motion.nav className="fixed top-[2px] left-0 right-0 z-50 px-6 md:px-16 lg:px-24">
        <motion.div className="absolute inset-0 nav-blur" style={{ opacity: bgOpacity }} />
        <div className="relative mx-auto max-w-[1200px] flex items-center justify-between h-16 md:h-20">
          <a href="#" className="font-serif text-xl tracking-tight text-text hover:text-accent transition-colors">
            Roan Co.
          </a>

          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a key={link.label} href={link.href}
                className="group text-xs tracking-[0.12em] uppercase text-text-muted hover:text-accent transition-colors duration-300">
                <span className="font-mono text-accent/30 mr-1.5 group-hover:text-accent/60 transition-colors duration-300">{link.num}</span>
                {link.label}
              </a>
            ))}
          </div>

          <a href="#contact" className="hidden md:block text-xs tracking-[0.12em] uppercase text-accent hover:text-text transition-colors duration-300">
            Get started
          </a>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden relative z-[60] w-8 h-8 flex flex-col justify-center items-center gap-1.5" aria-label="Toggle menu">
            <motion.span className="block w-5 h-px bg-text" animate={menuOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }} transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }} />
            <motion.span className="block w-5 h-px bg-text" animate={menuOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }} transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div className="fixed inset-0 z-40 bg-bg flex flex-col justify-center items-center gap-10"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            {links.map((link, i) => (
              <motion.a key={link.label} href={link.href} onClick={() => setMenuOpen(false)} className="flex items-baseline gap-3"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ delay: i * 0.06, duration: 0.4 }}>
                <span className="font-mono text-sm text-accent/40">{link.num}</span>
                <span className="font-serif text-4xl text-text hover:text-accent transition-colors">{link.label}</span>
              </motion.a>
            ))}
            <motion.a href="#contact" onClick={() => setMenuOpen(false)}
              className="mt-4 inline-flex items-center bg-accent px-7 py-3.5 text-xs tracking-[0.12em] uppercase text-bg font-medium rounded-[8px]"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ delay: 0.24, duration: 0.4 }}>
              Get started
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
