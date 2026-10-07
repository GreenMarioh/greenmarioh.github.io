# AGENTS.md — Portfolio (GreenMario)

Read `docs/BRIEF.md` fully before planning. It is the source of truth for concept, content and acceptance criteria.

## Stack (do not swap without asking)
- Next.js (App Router) + TypeScript, Tailwind for layout only
- three + @react-three/fiber + @react-three/drei (one persistent Canvas)
- GSAP + ScrollTrigger for scroll choreography, Lenis for smooth scroll
- No UI kits. No template code. No stock 3D models.

## Non-negotiable rules
1. Every visual or motion effect must express the concept in BRIEF.md ("the portfolio is a live network"). If you cannot say what it reinforces, cut it.
2. All real content (text, links, project info) lives in `src/content/content.ts` and renders as semantic HTML. WebGL is an enhancement layer, never the only carrier of information.
3. One WebGL scene only, persistent across sections. No per-section canvases.
4. Respect `prefers-reduced-motion`: static, fully readable fallback with no scroll-jacking.
5. WebGL failure or low-end device => automatic 2D/SVG fallback of the same idea. Never a blank page.
6. Performance budget: 60fps on a mid laptop, <= 250 KB JS gzipped for first load excluding the lazy-loaded 3D chunk, LCP < 2.5s, DPR capped at 1.75, pause rendering when the tab or canvas is offscreen.
7. Keyboard navigable, visible focus states, AA contrast, real anchor links, correct heading order.
8. Do not invent facts, metrics or project claims. Use only BRIEF.md content. Mark gaps with `TODO(content)`.
9. No lorem ipsum, no emoji in UI, no generic gradient blobs, no particle-sphere "hero".

## Workflow
- Plan first, produce an implementation plan artifact, wait for approval on each phase.
- Work phase by phase (see BRIEF.md). After each phase: run `npm run lint`, `npm run build`, verify in the browser (desktop + 390px mobile), attach screenshots, summarize deviations.
- Small, reviewable commits with clear messages.

## Terminal
Windows / PowerShell syntax only.
