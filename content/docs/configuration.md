---
title: "Provider Configuration"
description: "How to configure Anthropic, OpenAI, and Ollama with AI Agent Flow."
date: "2026-02-28"
---

# Provider Configuration

AI Agent Flow supports both cloud-based and local LLM providers. Configuration is handled via environment variables or a `.aiagentflow` config file in your home directory.

## Anthropic (Recommended)

Anthropic's Claude 3.5 Sonnet is the recommended model for architecture and coding tasks due to its superior reasoning capabilities.

**Environment Variable:**
```bash
export ANTHROPIC_API_KEY="your-api-key"
```

## OpenAI

Compatible with GPT-4o and GPT-4-turbo.

**Environment Variable:**
```bash
export OPENAI_API_KEY="your-api-key"
```

## Ollama (Local First)

For maximum privacy, you can run AI Agent Flow with local models using Ollama.

1.  [Install Ollama](https://ollama.com/)
2.  Pull a supported model:
    ```bash
    ollama pull llama3
    ```
3.  Configure AI Agent Flow:
    ```bash
    export AI_PROVIDER="ollama"
    export OLLAMA_MODEL="llama3"
    ```

## Setting the Default Provider

You can switch the default provider globally in your `~/.aiagentflow/config.json`:

```json
{
  "default_provider": "anthropic",
  "temperature": 0.2
}
```
