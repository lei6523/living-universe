# LIVUNIS — Official Website

> **A universe that remembers.**

Official website of **LIVUNIS（活宇宙）** — the brand entry of the Living Universe framework: a persistent narrative civilization where fiction becomes history, and history reshapes the world.

Live: **https://livunis.com**

## Repository Layout（仓库结构）

The website lives in the **`LIVUNIS`** repository — one repo, two lanes:

```
LIVUNIS (github.com/lei6523/LIVUNIS)
├── main           → framework documentation (README / MANIFESTO / docs / atlas)
└── LIVUNIS-web    → this website (production branch for Cloudflare Pages)
```

## Tech Stack（技术栈）

| | |
| --- | --- |
| Framework | Vite 7 + React 19 + TypeScript (strict) |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`, design tokens in `src/index.css` `@theme`) |
| Animation | Zero dependencies — canvas starfield, `IntersectionObserver` reveals, CSS transitions (respects `prefers-reduced-motion`) |
| i18n | EN / 中文 switch (typed dictionaries in `src/content/`, persisted in `localStorage`, browser-language auto-detect) |

## Design Concept（设计概念）

**A cosmic archive terminal — the entrance to a universe that remembers.**

Deep-space black with civilisation-grade cold light, archive-system UI language (REC/SYS indexes, boot sequence, system readouts), a living constellation starfield behind every section, and a scroll progress rail. Not a SaaS template, not generic cyberpunk — a future civilization's canon-archive interface. Full bilingual (EN / 中文) copy, ready for more locales.

## Page Structure

```
00 BOOT SEQUENCE      system initialization overlay (skippable, repeat-visit aware)
01 HERO               starfield constellation · "A universe that remembers."
02 THE CONCEPT        "Stories end. Worlds should not." + REC-001…003
03 SYSTEM STRUCTURE   SVG node network: World · Canon · History · Creators · Agents · Evolution
04 THE UNIVERSE REMEMBERS   memory timeline REC-0001…0006
05 THE MANIFESTO      principle quote + links to the framework docs
    FOOTER            framework / documents / system links, SYSTEM ONLINE status
```

## Run（运行）

```bash
git clone https://github.com/lei6523/LIVUNIS.git
git checkout LIVUNIS-web
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check (tsc --noEmit) + production build → dist/
npm run preview    # serve the production build locally
```

Requires **Node.js ≥ 20.19** (`package.json` `engines`).

## Project Structure

```
├── index.html                 # SEO/OG meta, canonical https://livunis.com, fonts, favicon
├── vite.config.ts             # react + tailwind plugins
├── tsconfig.json
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── _redirects             # SPA fallback: /* → /index.html 200 (Cloudflare Pages)
└── src/
    ├── main.tsx / App.tsx     # boot state + page assembly
    ├── index.css              # design tokens (@theme), scanlines, keyframes
    ├── lib/links.ts           # canonical links to framework docs + website repo
    ├── content/               # i18n dictionaries: types.ts / en.ts / zh.ts / index.ts
    ├── context/               # LanguageContext (useLang)
    ├── hooks/                 # useParallax (scroll parallax for decor layers)
    └── components/            # AmbientBackdrop · ScrollRail · BootSequence · Hero ·
                               # Concept · SystemStructure · Archive · Manifesto ·
                               # Footer · SectionHeader · CornerFrame · Reveal · Starfield
```

## Deployment（部署）

**Architecture:** `Local/Agent → GitHub → Cloudflare Pages → livunis.com`

The **`LIVUNIS-web`** branch is the production branch for the website. Every push to `LIVUNIS-web` is built and published automatically by Cloudflare Pages — no manual uploads, no tokens in the repository. Framework docs on `main` are untouched by deployments.

### Cloudflare Pages configuration（需在 Dashboard 填写）

| Setting | Value |
| --- | --- |
| Framework preset | Vite |
| Production branch | **`LIVUNIS-web`** |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | (empty — repository root) |
| Node.js version | **22** (Build settings → Node.js version, or env var `NODE_VERSION=22`) |
| Environment variables | none required |

### Git workflow（Git 工作流）

```
website:  feature/*  →  pull request (to LIVUNIS-web)  →  review  →  merge  →  automatic deployment
docs:     main       →  unchanged by website deployments
```

- `LIVUNIS-web` = website production（自动部署）
- 大型更新：`feature/*` 分支 → PR → review → merge → 自动上线
- 禁止 force push `main`

## Future Pages（后续可扩展）

- `/manifesto` — framework manifesto as a canon document
- `/framework` — browsable architecture atlas (System Landscape / Creation Pipeline / Historical Layers / World Data Graph / Canon Engine / Governance)
- `/worlds` — active reference universes with live canon state
- `/status` — world-status dashboard (canon index, memory layers, engine state)
- More locales: add `src/content/<lang>.ts` implementing the same `Dict` interface
