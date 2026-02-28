---
title: "Welcome to AI Agent Flow"
description: "Discover how AI Agent Flow orchestrates full engineering teams on your local machine."
date: "2026-02-28"
author: "AI Agent Flow Team"
---

# Welcome to AI Agent Flow

Building software is complex. It involves much more than just writing code—you need to architect systems, review PRs, write tests, and hunt down elusive bugs. 

**AI Agent Flow** solves this by putting a specialized team of AI agents directly on your local machine.

## How it works

When you run `ai-agent-flow run "Build a login system"`, you aren't just sending a prompt to an LLM. You are kicking off a structured, multi-agent workflow:

1. **The Architect** breaks down the task into modules and writes technical specs.
2. **The Coder** writes the code.
3. **The Reviewer** checks the code for anti-patterns and vulnerabilities.
4. **The Tester** writes unit and integration tests.
5. **The Judge** runs `npm test` and sends errors back to the Coder if needed.

No cloud lock-in. No sending your proprietary code to a closed platform. It all runs on your machine, integrating directly with your local Git repository.

## Get Started

Install AI Agent Flow today:

```bash
npm install -g ai-agent-flow
```

Stay tuned for more updates on how to build custom agents and integrate local LLMs like Ollama into your workflows!
