# Portfolio Editing Guide (`docs/EDITING_GUIDE.md`)

This guide outlines where every piece of data, styling, layout, animation, and background effect is located in the codebase, and which exact file to edit when making updates.

---

## 1. Quick Reference: "I want to change..."

| What you want to change | File to edit |
|---|---|
| **Your Bio, Headline, Status, or Email/Discord** | [`src/content/content.js`](file:///c:/Users/mohni/Desktop/Portfolio/portfolio/src/content/content.js) (`personalInfo`, `socialLinks`) |
| **Featured Projects (SpikeSync, Spotify, etc.)** | [`src/content/content.js`](file:///c:/Users/mohni/Desktop/Portfolio/portfolio/src/content/content.js) (`featuredProjects`) |
| **Work Experience / Internships** | [`src/content/content.js`](file:///c:/Users/mohni/Desktop/Portfolio/portfolio/src/content/content.js) (`experienceData`) |
| **Competitive Milestones (Amazon MLSS, HackOn, etc.)** | [`src/content/content.js`](file:///c:/Users/mohni/Desktop/Portfolio/portfolio/src/content/content.js) (`competitiveMilestones`) |
| **Problem Solving Stats (Codeforces, LeetCode, CSES)** | [`src/content/content.js`](file:///c:/Users/mohni/Desktop/Portfolio/portfolio/src/content/content.js) (`problemSolvingData`) |
| **Technical Skills & Tools** | [`src/content/content.js`](file:///c:/Users/mohni/Desktop/Portfolio/portfolio/src/content/content.js) (`skillCategories`) |
| **Secondary Projects ("More Projects" section)** | [`src/content/content.js`](file:///c:/Users/mohni/Desktop/Portfolio/portfolio/src/content/content.js) (`moreProjects`) |
| **Community & Leadership Roles (GFG, CyberVault, etc.)** | [`src/content/content.js`](file:///c:/Users/mohni/Desktop/Portfolio/portfolio/src/content/content.js) (`leadershipData`) |
| **Contact Form Info / Availability details** | [`src/content/content.js`](file:///c:/Users/mohni/Desktop/Portfolio/portfolio/src/content/content.js) (`contactData`) |
| **Global Theme Colors & CSS Variables** | [`src/index.css`](file:///c:/Users/mohni/Desktop/Portfolio/portfolio/src/index.css) |
| **Hero Circuit Board Animation / Background** | [`src/Components/NetworkCanvas/NetworkCanvas.js`](file:///c:/Users/mohni/Desktop/Portfolio/portfolio/src/Components/NetworkCanvas/NetworkCanvas.js) |
| **SpikeSync Interactive Architecture Widget** | [`src/Components/FeaturedWork/SpikeSyncWidget.js`](file:///c:/Users/mohni/Desktop/Portfolio/portfolio/src/Components/FeaturedWork/SpikeSyncWidget.js) |
| **Scroll Animations & Motion Speed** | [`src/utils/motion.js`](file:///c:/Users/mohni/Desktop/Portfolio/portfolio/src/utils/motion.js) |
| **Navigation Bar Links & Resume link** | [`src/Components/Navbar/Navbar.js`](file:///c:/Users/mohni/Desktop/Portfolio/portfolio/src/Components/Navbar/Navbar.js) |

---

## 2. Content Source of Truth (`src/content/content.js`)

> **Golden Rule**: Never hardcode portfolio copy, text, links, or numbers inside React component files. All site content is centralized in [`src/content/content.js`](file:///c:/Users/mohni/Desktop/Portfolio/portfolio/src/content/content.js).

### Exported Content Objects

1. **`personalInfo`**:
   - `name`, `title`, `headline`, `tagline`
   - `status`: Live availability badge (e.g. "Available for Summer 2026/2027 SDE & Systems Internships")
   - `bio`: Paragraphs shown in the hero section
   - `metrics`: Quick statistics displayed as pills (e.g., Codeforces Pupil, 850+ problems, etc.)
   - `location`: Current base city/country

2. **`featuredProjects`**:
   - Array of flagship projects.
   - Keys: `id`, `kicker`, `title`, `tagline`, `scale`, `period`, `description`, `highlights`, `architecture`, `stack`, `github`, `demo`, `featured`.
   - *Note*: `id: "spikesync"` automatically mounts the interactive architecture widget.

3. **`experienceData`**:
   - Work experience & internships.
   - Keys: `role`, `company`, `period`, `location`, `badge`, `bullets`, `tech`.

4. **`competitiveMilestones`**:
   - Top-tier programs (e.g. Amazon ML Summer School, Amazon HackOn, HackWithInfy).
   - Keys: `year`, `title`, `organization`, `status`, `summary`, `bullets`, `takeaway`, `tags`.

5. **`problemSolvingData`**:
   - Competitive programming profiles and ratings:
     - `headline` & `metrics`
     - `profiles`: Codeforces, LeetCode, CodeChef, CSES ratings, max ratings, problem counts, and profile URLs.
     - `coreStrengths`: Topic badges (e.g., Graphs, Trees, DP, etc.).

6. **`skillCategories`**:
   - Technical capabilities grouping:
     - Categories: Languages, Systems & Backend, Networking & Infrastructure, Databases & Tools.
     - Each contains `skills: [{ name, level }]`.

7. **`moreProjects`**:
   - Secondary grid projects (HYDRA-LB, Portfolio v1, etc.).
   - Keys: `title`, `tagline`, `description`, `stack`, `github`, `status`.

8. **`leadershipData`**:
   - Community management, esports moderation, technical chapters.
   - Keys: `role`, `organization`, `period`, `scale`, `summary`, `highlights`.

9. **`contactData` & `socialLinks`**:
   - Direct links to GitHub, LinkedIn, X, Discord (`greenmario`), Steam, Monkeytype.

---

## 3. UI Component Directory (`src/Components/`)

Each section has its own directory with a React component (`.js`) and scoped stylesheet (`.css`):

| Section | Component File | Stylesheet | Description |
|---|---|---|---|
| **Navigation** | [`Navbar/Navbar.js`](file:///c:/Users/mohni/Desktop/Portfolio/portfolio/src/Components/Navbar/Navbar.js) | `Navbar/Navbar.css` | Sticky top navigation, mobile toggle, live system status dot |
| **Hero** | [`Hero/Hero.js`](file:///c:/Users/mohni/Desktop/Portfolio/portfolio/src/Components/Hero/Hero.js) | `Hero/Hero.css` | Headline, bio, metric pills, terminal status |
| **Background Canvas** | [`NetworkCanvas/NetworkCanvas.js`](file:///c:/Users/mohni/Desktop/Portfolio/portfolio/src/Components/NetworkCanvas/NetworkCanvas.js) | `NetworkCanvas/NetworkCanvas.css` | High-performance 2D Canvas circuit board simulation with 45° traces & packet bursts |
| **Featured Work** | [`FeaturedWork/FeaturedWork.js`](file:///c:/Users/mohni/Desktop/Portfolio/portfolio/src/Components/FeaturedWork/FeaturedWork.js) | `FeaturedWork/FeaturedWork.css` | Flagship project showcase cards |
| **SpikeSync Widget** | [`FeaturedWork/SpikeSyncWidget.js`](file:///c:/Users/mohni/Desktop/Portfolio/portfolio/src/Components/FeaturedWork/SpikeSyncWidget.js) | `FeaturedWork/SpikeSyncWidget.css` | Interactive tabs: Discord Embeds, Scraping/LRU Cache, Slash Engine |
| **Experience** | [`Experience/Experience.js`](file:///c:/Users/mohni/Desktop/Portfolio/portfolio/src/Components/Experience/Experience.js) | `Experience/Experience.css` | Work history cards |
| **Competitive Programs** | [`CompetitivePrograms/CompetitivePrograms.js`](file:///c:/Users/mohni/Desktop/Portfolio/portfolio/src/Components/CompetitivePrograms/CompetitivePrograms.js) | `CompetitivePrograms/CompetitivePrograms.css` | Amazon MLSS, HackOn, and HackWithInfy timeline |
| **Problem Solving** | [`ProblemSolving/ProblemSolving.js`](file:///c:/Users/mohni/Desktop/Portfolio/portfolio/src/Components/ProblemSolving/ProblemSolving.js) | `ProblemSolving/ProblemSolving.css` | Competitive programming cards with rank colors |
| **Technical Capabilities** | [`TechnicalCapabilities/TechnicalCapabilities.js`](file:///c:/Users/mohni/Desktop/Portfolio/portfolio/src/Components/TechnicalCapabilities/TechnicalCapabilities.js) | `TechnicalCapabilities/TechnicalCapabilities.css` | Categorized tech stack grid |
| **More Projects** | [`MoreProjects/MoreProjects.js`](file:///c:/Users/mohni/Desktop/Portfolio/portfolio/src/Components/MoreProjects/MoreProjects.js) | `MoreProjects/MoreProjects.css` | Secondary project cards |
| **Leadership** | [`Leadership/Leadership.js`](file:///c:/Users/mohni/Desktop/Portfolio/portfolio/src/Components/Leadership/Leadership.js) | `Leadership/Leadership.css` | Esports & community leadership cards |
| **Contact** | [`Contact/Contact.js`](file:///c:/Users/mohni/Desktop/Portfolio/portfolio/src/Components/Contact/Contact.js) | `Contact/Contact.css` | Interactive form & social link chips |
| **Footer** | [`Footer/Footer.js`](file:///c:/Users/mohni/Desktop/Portfolio/portfolio/src/Components/Footer/Footer.js) | `Footer/Footer.css` | Copyright, status check, quick links |

---

## 4. Styling & Theme Variables (`src/index.css`)

To alter global colors, typography, or spacing across the entire website, edit `:root` in [`src/index.css`](file:///c:/Users/mohni/Desktop/Portfolio/portfolio/src/index.css):

```css
:root {
  /* Colors */
  --bg-primary: #07090e;        /* Dark background */
  --bg-surface: #0c1017;        /* Cards / panels background */
  --signal-green: #00ff7f;      /* Primary accent / green pulse */
  --text-primary: #f0f4fc;      /* Main text */
  --text-secondary: #8b9bb4;    /* Subheadings / descriptions */
  --border-subtle: #1c2333;     /* Card borders */

  /* Fonts */
  --font-mono: 'Roboto Mono', monospace;
  --font-sans: 'Inter', -apple-system, sans-serif;
}
```

---

## 5. Motion & Animations (`src/utils/motion.js`)

All entrance animations and scroll triggers are managed with GSAP in [`src/utils/motion.js`](file:///c:/Users/mohni/Desktop/Portfolio/portfolio/src/utils/motion.js):
- **Hero entrance**: Timing, stagger delays, opacity transforms.
- **Scroll triggers**: Section headings, cards, and timelines fade-and-slide up on scroll.
- **Accessibility**: Automatically disables animations and resets element states when `prefers-reduced-motion: reduce` is detected.

---

## 6. HTML Metadata & SEO (`public/index.html`)

To edit:
- Webpage title (`<title>`)
- Meta description, OpenGraph tags, or Twitter card preview
- Preconnected Google Fonts (`Inter`, `Roboto Mono`, `Cinzel Decorative`)
- Favicons and manifest

Edit: [`public/index.html`](file:///c:/Users/mohni/Desktop/Portfolio/portfolio/public/index.html).

---

## 7. Build, Verification & Deployment Commands

Run these commands in PowerShell from the project root:

```powershell
# 1. Run local development server
npm start

# 2. Check for linting errors
npm run lint

# 3. Create production build
npm run build

# 4. Deploy to GitHub Pages (https://greenmarioh.github.io)
npm run deploy
```
