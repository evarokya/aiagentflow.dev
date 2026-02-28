---
title: "Getting Started"
description: "How to install and run your first AI Agent Flow task."
date: "2026-02-28"
---



AI Agent Flow is a local-first, multi-agent orchestration framework designed for software engineering. This guide will help you install the CLI and run your first autonomous task.

<div class="doc-callout doc-callout-tip">
    <strong>Pro Tip:</strong> For the best results, use <strong>Claude 3.5 Sonnet</strong> or <strong>GPT-4o</strong>. These models have superior reasoning capabilities for architecture and complex code generation.
</div>

## Prerequisites

- **Node.js**: Version 18 or higher.
- **LLM API Key**: You'll need an API key from a supported provider (Anthropic, OpenAI) or a local Ollama instance.

<div class="doc-callout doc-callout-warning">
    <strong>Security Note:</strong> Always keep your API keys private. Use environment variables or global config instead of hardcoding them in requests.
</div>

## Installation

Install the package globally via npm:

```bash
npm install -g @aiagentflow/cli
```

Verify the installation:

```bash
aiagentflow --version
```

## Running Your First Task

Navigate to your project directory and run:

```bash
aiagentflow run "Add a unit test for the authentication middleware"
```

The CLI will:
1.  **Analyze**: Look at your codebase and the request.
2.  **Plan**: The Architect agent will draft an implementation plan.
3.  **Code**: The Coder agent will write the test file.
4.  **Verify**: The Reviewer and Judge agents will ensure the code meets the requirements.

## Next Steps

Check out our [Configuration Guide](/docs/configuration) to learn how to set up your preferred AI providers.
