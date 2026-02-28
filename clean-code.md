# Clean Code Standards

## 1. Explicit Over Implicit
- Name variables based on context and type. Avoid single-letter variables except in simple loops.
- `handleClick` instead of `click`. `isMenuOpen` instead of `menuState`.
- Return types for all utility functions should be explicitly typed, even if inferred.

## 2. DRY (Don't Repeat Yourself)
- Extract repeated Tailwind class strings into constants or reusable components, e.g., `const buttonBaseClasses = "..."`.
- Abstract duplicate logic into small, testable utility functions.

## 3. Comments and Documentation
- Write purpose-driven JSDoc/TSDoc comments for complex functions or non-obvious logic.
- Do not document the obvious. E.g., `// Adds 1 to x` above `x = x + 1`.
- Provide top-level comments for files identifying the Component's purpose in the broader architecture.

## 4. Error Handling
- Fail gracefully. If an interactive component (e.g., terminal demo) fails to load state, show a fallback UI instead of crashing the page.

## 5. Review & Refactor Checklist
- Are all types defined?
- Is there any dead code or unused imports?
- Does it adhere to the architecture in `plan.md`?
- Are the prop interfaces exported?
