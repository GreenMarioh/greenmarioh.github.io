# Portfolio Redesign Brief

## 1. Who this is for
Mohnish (handle: GreenMario / GreenMarioh). B.Tech CSE at KIIT Bhubaneswar, CCNA certified. Works across systems programming (C/C++ primary), ML and networking, with a creative-video background (Premiere, After Effects). Audience: recruiters and engineers (internships, SDE/ML/network roles) who skim for 60-90 seconds, plus engineers who will dig deeper.

## 2. Core idea (the thing every effect must serve)
**"The portfolio is a live network."**
His signature project is a proactive SDN load balancer: it forecasts controller load (Attention Bi-LSTM) and migrates switches *before* a controller saturates. The site makes that idea the interface:

- The persistent WebGL scene is a small topology: controller nodes, switch nodes, and traffic flowing along links.
- Each page section is a node/controller. Scrolling = a packet travelling through the network.
- The visitor's cursor/scroll velocity injects load. The network reacts: a forecast ring grows around a node, and switches migrate *ahead of* saturation. The visitor experiences the project's thesis before reading about it.
- Creative-suite background shows up as craft: editorial pacing, easing, colour grading, timing. Not as extra effects.

Tone: precise, calm, engineered. Confident understatement. Dark base, one signal colour (a green, nodding to the handle), one warning colour used only for "load".

## 3. Sections / scenes
1. **Hero** — Network idle at low load. Name, one-line identity ("Systems, ML and networks. Built to anticipate load, not react to it." — refine copy, keep it this short). Moving the cursor adds traffic; a visible forecast overlay appears. 5-second payoff, no loading screen longer than ~1s.
2. **Flagship: Proactive SDN Load Balancer** — The scene focuses on this. Scroll scrubs a timeline: load rising -> forecast crossing threshold -> migration before saturation. Beside it, a real HTML explainer: what it does, stack, repo link. Add a simple "reactive vs proactive" comparison toggle.
3. **Other projects** — Each project is a node you travel to; selecting expands a clean HTML panel. Projects to include (confirm details, do not invent): AI Hospital Management Assistant, SpikeSync (Valorant esports Discord bot), LightRec (Windows C++ system-tray clip recorder), Redrob Ranker (parallel JSONL candidate-ranking pipeline), Resume Optimizer (Next.js + Gemini). `TODO(content)` for descriptions, stacks, links.
4. **Skills** — Not logo soup. Render the table below as a legible grid; C/C++ is visually primary. Optional: skills as link-weights in the topology, but the plain grid must exist.
5. **Competitive programming** — Three numbers as "telemetry": LeetCode 1656 (600+ solved), Codeforces max 1366 (Pupil), CodeChef max 1519 (2-star, Div 3). Understated live-counter feel, links out.
6. **Contact** — Network settles to idle. Clear links: GitHub, LeetCode, Codeforces, CodeChef, email `TODO(content)`, resume PDF `TODO(content)`.

## 4. Content (source of truth)

### Flagship project
- Tagline: Proactive load balancer for Software-Defined Networks using Attention-Enhanced Bi-LSTM.
- Forecasts controller load in advance using an Attention-based Bidirectional LSTM neural network.
- Proactively triggers OpenFlow switch migrations before controller bottleneck saturation occurs.
- Tech: Deep Learning (Bi-LSTM, Attention), Python, PyTorch / TensorFlow, OpenFlow, SDN Controllers
- Repo: https://github.com/GreenMarioh/load-balancer

### Skills
| Category | Skills & Tools |
|---|---|
| Programming Languages | C/C++ (primary / special), JavaScript, Python, Java, TypeScript |
| Web Technologies | HTML5, CSS3, React.js, Node.js |
| Databases | MySQL, PostgreSQL, Prisma ORM |
| Cybersecurity & Tools | Kali Linux, Nmap, Metasploit, Burp Suite |
| Developer Tools & Misc | Git / GitHub, Linux (Bash / CLI), LaTeX, Regular Expressions |
| Creative Suite | Adobe Premiere Pro, After Effects, Photoshop, Lightroom |

### Coding profiles
- LeetCode: GreenMario — 600+ solved, rating 1656
- Codeforces: greenmario — max 1366 (Pupil)
- CodeChef: green_mario — max 1519 (2-star, Division 3)

### Education
KIIT, Bhubaneswar — B.Tech Computer Science & Engineering, 2023 intake, CGPA 8.56/10. CCNA certified.

> The source PDF only covered sections 3-5 of the original document. Anything marked `TODO(content)` must be filled by the owner. Never fabricate.

## 5. Visual & motion direction
- Type: one characterful display face + one clean sans + one mono for telemetry/numbers. Self-host via `next/font`.
- Colour: near-black base, off-white text, single green signal, single amber for load/warning. Use CSS variables.
- Motion principles: purposeful, eased (no linear), slight overshoot only on migrations. Scroll drives a single GSAP master timeline tied to the R3F scene via a shared progress value. Motion should feel edited, like a cut sequence, not a screensaver.
- WebGL: instanced meshes for nodes, line geometry/shader for links, a small custom shader for traffic pulses and the forecast ring. Subtle bloom at most. No heavy post-processing stack.
- Typographic layer stays crisp HTML over the canvas.

## 6. Anti-goals
No loading-screen theatrics, no floating-geometry hero, no scroll-jacking that traps the user, no cursor-follower gimmicks unrelated to load, no effect that exists to show off Three.js.

## 7. Phases (stop for approval after each)
1. **Foundation** — scaffold, fonts, tokens, content.ts, semantic static layout of all sections, responsive, no WebGL. Must already be a good portfolio.
2. **Scene** — persistent R3F canvas, topology, traffic, idle state, perf guards, fallback.
3. **Interaction model** — load injection, forecast ring, proactive migration logic (simple deterministic simulation, not real ML), reactive-vs-proactive toggle.
4. **Scroll choreography** — Lenis + GSAP master timeline binding sections to scene states.
5. **Polish & hardening** — reduced motion, a11y pass, Lighthouse, mobile tuning, OG image, metadata, deploy config (Vercel).

## 8. Acceptance criteria
- Lighthouse (mobile): Performance >= 85, Accessibility >= 95, SEO >= 95.
- Site is fully usable with JS-disabled WebGL, reduced motion, keyboard only, and at 390px width.
- A first-time visitor can state "systems/ML/networking, strong C++, built a predictive SDN load balancer" within 30 seconds.
- Every animated element can be justified in one sentence tied to Section 2.
