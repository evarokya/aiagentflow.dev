# aiagentflow.dev — Landing Page Plan

> Plan for the marketing/landing page website at aiagentflow.dev
> Another agent should read this file and build the site from scratch.

---

## Overview

A single-page landing site for **AI Agent Flow** — an open-source CLI tool that orchestrates multi-agent AI workflows for software development. The site should be visually striking, developer-focused, and optimized for conversions (GitHub stars, npm installs).

---

## Tech Stack

| Tool | Why |
|------|-----|
| **Next.js 14+ (App Router)** | SSR/SSG, great Vercel integration |
| **TypeScript** | Consistency with the main project |
| **Tailwind CSS** | Rapid styling, dark mode support |
| **Framer Motion** | Smooth scroll animations, section transitions |
| **pnpm** | Package manager (matches main repo) |

No CMS, no database, no auth. Pure static site.

---

## Deployment

- **Host:** Vercel (connect `aiagentflow/aiagentflow.dev` repo)
- **Domain:** `aiagentflow.dev` (point DNS to Vercel)
- **Build:** `next build && next export` (static)

---

## Design Direction

- **Theme:** Dark mode default (developer tool aesthetic)
- **Colors:** Deep navy/black background, electric blue (#3B82F6) and cyan (#06B6D4) accents, white text
- **Font:** Inter or Geist Sans (clean, modern, developer-friendly)
- **Monospace font:** JetBrains Mono or Fira Code (for code blocks and terminal demos)
- **Style:** Minimal, spacious, smooth animations on scroll

---

## Logo

- Text-based logo: "AI Agent Flow" or "aiagentflow"
- Optional icon: abstract flow/pipeline diagram (nodes connected by arrows)
- SVG format, works on dark and light backgrounds
- Favicon: simplified version of the icon (16x16, 32x32, and SVG)

---

## Page Sections (Single Page, Top to Bottom)

### 1. Hero Section
- **Headline:** "Your AI Engineering Team, Running Locally"
- **Subheadline:** "Orchestrate specialized AI agents — architect, coder, reviewer, tester — in a structured workflow. No cloud lock-in. Your code stays on your machine."
- **CTA buttons:**
  - "Get Started" → scrolls to install section
  - "View on GitHub" → `https://github.com/aiagentflow/aiagentflow`
- **Visual:** Animated terminal showing the CLI in action (typewriter effect)
  ```
  $ ai-agent-flow run "Build a REST API for user auth"
  ✔ Architect complete (1,204 tokens)
  ✔ Coder complete (3,891 tokens)
  ✔ Reviewer complete (987 tokens)
  ✔ Tester complete (2,103 tokens)
  ✔ Judge — PASS
  Task completed successfully!
  ```

### 2. How It Works (Pipeline Visual)
- **Heading:** "A Structured Engineering Loop"
- Interactive horizontal pipeline diagram with animated flow:
  ```
  Task → Architect → Coder → Reviewer → Tester → Fixer → Ship
  ```
- Each node is clickable/hoverable — shows a tooltip or expanding card with:
  - What the agent does
  - Example output snippet
- Animate the flow with a pulse/particle moving through the pipeline

### 3. Features Grid
- **Heading:** "Built for Developers"
- 2x3 or 3x2 grid of feature cards with icons:
  1. **Multi-Agent Workflow** — Each agent has a specific role and expertise
  2. **Local-First** — Runs entirely on your machine, no code leaves your system
  3. **Provider-Agnostic** — Anthropic (Claude), Ollama (local models), more coming
  4. **Configurable** — Tune models, temperature, and iteration limits per agent
  5. **Git-Native** — Auto-creates branches and generates PR descriptions
  6. **Human-in-the-Loop** — Approve or override at any stage

### 4. Interactive Demo / Code Example
- **Heading:** "See It in Action"
- Tabbed code blocks showing:
  - Tab 1: "Install" — npm install command
  - Tab 2: "Initialize" — `ai-agent-flow init` wizard output
  - Tab 3: "Run" — `ai-agent-flow run "task"` full output
- Use syntax-highlighted code blocks with copy buttons
- Optional: embedded asciinema recording or GIF

### 5. Quick Start / Install
- **Heading:** "Get Started in 60 Seconds"
- Numbered steps with code blocks:
  ```bash
  # 1. Install globally
  npm install -g ai-agent-flow

  # 2. Initialize in your project
  cd your-project
  ai-agent-flow init

  # 3. Verify setup
  ai-agent-flow doctor

  # 4. Run your first task
  ai-agent-flow run "Build a login page with form validation"
  ```
- Copy-to-clipboard button on each code block

### 6. Supported Providers
- **Heading:** "Bring Your Own AI"
- Two cards side by side:
  - **Anthropic (Claude)** — Cloud API, requires API key
  - **Ollama** — Local models, free, private
- "More providers coming soon" note
- Link to docs on adding custom providers

### 7. Open Source CTA
- **Heading:** "Open Source. MIT Licensed."
- GitHub stars badge (live count)
- npm downloads badge
- "Star on GitHub" button
- "Contribute" button → CONTRIBUTING section in repo

### 8. Footer
- Logo + tagline
- Links: GitHub, npm, Documentation (future)
- "Built with Next.js. Deployed on Vercel."
- Copyright: "2026 AI Agent Flow contributors"

---

## Meta Properties / SEO

```html
<title>AI Agent Flow — Multi-Agent AI Workflow Orchestrator</title>
<meta name="description" content="Open-source CLI tool that orchestrates multi-agent AI workflows for software development. Architect, code, review, test, and ship — automatically." />
<meta name="keywords" content="ai agent, workflow, multi-agent, cli, code review, testing, automation, open source, local-first" />

<!-- Open Graph -->
<meta property="og:title" content="AI Agent Flow — Your AI Engineering Team" />
<meta property="og:description" content="Orchestrate specialized AI agents in a structured workflow. No cloud lock-in. Your code stays on your machine." />
<meta property="og:image" content="https://aiagentflow.dev/og-image.png" />
<meta property="og:url" content="https://aiagentflow.dev" />
<meta property="og:type" content="website" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="AI Agent Flow — Multi-Agent AI Workflow Orchestrator" />
<meta name="twitter:description" content="Open-source CLI tool that orchestrates multi-agent AI workflows for software development." />
<meta name="twitter:image" content="https://aiagentflow.dev/og-image.png" />
```

### OG Image (og-image.png)
- 1200x630px
- Dark background with logo, headline, and pipeline diagram
- Generate using `@vercel/og` or design in Figma

---

## File Structure

```
aiagentflow.dev/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Landing page (all sections)
│   └── globals.css         # Tailwind base + custom styles
├── components/
│   ├── Hero.tsx
│   ├── Pipeline.tsx        # Interactive pipeline diagram
│   ├── Features.tsx        # Feature grid
│   ├── Demo.tsx            # Code tabs / terminal demo
│   ├── QuickStart.tsx      # Install steps
│   ├── Providers.tsx       # Provider cards
│   ├── OpenSource.tsx      # GitHub CTA section
│   ├── Footer.tsx
│   ├── Logo.tsx            # SVG logo component
│   ├── TerminalAnimation.tsx  # Typewriter terminal effect
│   └── CodeBlock.tsx       # Syntax-highlighted code with copy
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── og-image.png
│   └── logo.svg
├── tailwind.config.ts
├── next.config.js
├── package.json
├── tsconfig.json
└── README.md
```

---

## Performance Targets

- Lighthouse score: 95+ across all categories
- First Contentful Paint: < 1s
- Total page weight: < 500KB (excluding fonts)
- No JavaScript required for core content (SSG)

---

## What NOT to Build (Out of Scope)

- No documentation site (that comes later, maybe with Nextra)
- No blog
- No auth or user accounts
- No analytics dashboard (just add Vercel Analytics)
- No pricing page (it's free/open-source)
