---
title: "Agent Roles"
description: "Understanding the Architect, Coder, Reviewer, and Judge agents."
date: "2026-02-28"
---

# Agent Roles

AI Agent Flow uses a multi-agent "Chain of Thought" approach to ensure high-quality, reliable output. Each agent has a specific specialized role in the process.

<div class="doc-callout doc-callout-tip">
    <strong>Developer Insight:</strong> This multi-agent separation prevents "hallucination cascade" — where a single model might ignore its own errors. Each agent acts as a check on the previous one.
</div>

## 🏛️ The Architect
The Architect is the first agent to act. Its job is to:
- Analyze the user request.
- Read relevant files from the codebase.
- Draft a step-by-step implementation plan.
- Identify potential edge cases.

## 💻 The Coder
The Coder follows the Architect's plan. It:
- Writes the actual code changes.
- Ensures syntax correctness.
- Implements the logic specified in the plan.

## 🔍 The Reviewer
The Reviewer acts as a second pair of eyes. It looks for:
- Logic bugs.
- Security vulnerabilities.
- Style guide violations.
- Inefficiencies or anti-patterns.

## ⚖️ The Judge
The Judge performs final validation. It:
- Runs tests (if available).
- Cross-references the output with the original user request.
- Decides whether to `PASS` the task or send it back for another iteration.
