# Portfolio UI Kit

A high-fidelity recreation of [`joshualangsam-a11y/portfolio`](https://github.com/joshualangsam-a11y/portfolio) as a single-page, scroll-driven HTML prototype. Loads React + Babel via CDN; no build step.

## Files

- `index.html` — mount point. Grain overlay, custom scrollbar, cursor.
- `Primitives.jsx` — `FadeIn`, `DashCard` (the signature hoverable card), `SectionHeader`, arrow icons, `AnimatedCounter`.
- `Sections.jsx` — `Nav`, `Hero`, `Projects`, `About` with stack card + counters.
- `Sections2.jsx` — `Research`, `Contact`, `CursorRing`.

## Notes

- **Hero video** is a placeholder SVG (`assets/hero-backdrop.svg`) — flat color-grade mock of the F-22 / B-2 formation brief. Swap for real footage when licensed.
- **Lenis smooth scroll** is not loaded in the prototype; the browser's native scroll is used. The scroll-linked parallax on the hero name still works via a plain `scroll` listener.
- **Sonic details** preserved from the source: scroll-progress bar (2px accent, top of viewport), nav-blur that fades in after 100px of scroll, `01 / 02 / 03 / 04` numbered sections, accent dash that expands on card hover, custom cursor ring, grain.
- Click any project or research card — they open in a new tab.

## Known simplifications (vs source)

- No `<Loader>` curtain on initial mount.
- `<Float>` section parallax omitted — visual motion already rich; starter pass.
- `<SocialProof>` / `<Marquee>` / `<AgentShowcase>` / `<CaseStudies>` sections excluded from the main page flow (they're not on the live home page per `app/page.tsx`). If you want them back, they live in `/components/` imported from the repo.
