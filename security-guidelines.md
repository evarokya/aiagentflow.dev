# Security Guidelines

## 1. Attack Surface Reduction
- **Static Export Only:** The site will be exported statically. Ensure no server-side secrets or sensitive environment variables are shipped to the client bundle. Only prefix public variables with `NEXT_PUBLIC_`.
- **No Backend:** Do not implement API routes unless absolutely required for external integrations (which should not be needed per `plan.md`).

## 2. Dependency Management
- Run `pnpm audit` regularly.
- Lock all dependencies in `pnpm-lock.yaml`. Do not use `^` or `~` carelessly if it risks breaking the build.
- Only use reputed, heavily vetted libraries (e.g., Framer Motion, Tailwind).

## 3. Client-Side Security
- **XSS Prevention:** Ensure any dynamic content rendered in React uses standard curly braces `{}` which automatically sanitizes output. NEVER use `dangerouslySetInnerHTML` unless parsing rigidly controlled Markdown.
- **Content Security Policy (CSP):** Set strong HTTP headers for CSP via Next.js metadata/headers if deploying on Vercel, to restrict image, script, and style sources.

## 4. Input Validation
- Since there are no forms (except maybe a newsletter at most, though not defined in plan.md), ensure any query parameters parsed on the client are strictly type-checked and sanitized.
