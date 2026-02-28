# Development Guidelines

## Tech Stack Rules
1. **Next.js App Router only:** Use `app/` directory. No `pages/` directory.
2. **Server Components by Default:** Only add `'use client'` when React hooks (useState, useEffect) or event listeners (onClick) are strictly required (e.g., Framer Motion animations, interactive demos).
3. **TypeScript Strictly:** No `any`. Define interfaces for all component props. Use exact types.
4. **Tailwind CSS:** No custom CSS unless absolutely necessary in `globals.css`. Use utility classes. No Tailwind CSS outside of `className`.

## File Structure & Naming
- Components: PascalCase `ComponentName.tsx`
- Folders/Routes: kebab-case `route-name`
- Utilities/Hooks: camelCase `useHook.ts`
- Constants: UPPER_SNAKE_CASE `SITE_CONFIG`

## Component Architecture
- Separate logical components. If a component grows past 150 lines, split it.
- Keep components focused on a Single Responsibility.
- Place reusable UI components in `components/ui/` and section components in `components/sections/` (or directly in `components/` as per `plan.md`).

## State Management
- Minimal client state. This is a static landing page. 
- Use URL state or standard React useState where interactivity is required.
