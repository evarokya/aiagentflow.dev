# INITIAL AI AGENT MUST READ

Welcome! If you are an AI Agent picking up this repository, YOU MUST READ THIS FILE BEFORE PROCEEDING to ensure zero deviation from the established architecture and plans.

## Project Context
This is a landing page for **AI Agent Flow**, an open-source CLI tool for orchestrating multi-agent AI workflows.
Reference `plan.md` as the absolute source of truth for design, structure, and features. 

## Architectural Constraints (from plan.md)
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript (Strictly typed)
- **Styling:** Tailwind CSS (Dark theme default) + Framer Motion
- **Package Manager:** pnpm
- **Environment:** Pure static site (no CMS, DB, Auth). Built with `next build && next export`.

## Required Reading
Before writing any code, review:
1. `plan.md` - Core features, sections, SEO properties, and layout constraints.
2. `development-guidelines.md` - Rules for component structure, conventions, and state.
3. `security-guidelines.md` - Content Security Policy, dependency constraints.
4. `clean-code.md` - Naming conventions and maintainability patterns.

## Development Mandate
1. Check `task.md` (or the equivalent status tracker) to see current progress.
2. Only write code that strictly adheres to the architecture. NO deviations.
3. If requirements conflict with `plan.md`, STOP and request clarification.
