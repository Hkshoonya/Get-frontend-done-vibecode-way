# Agent metadata (per-tool)

This folder holds **product-specific** UI metadata so the skill can be listed and invoked correctly in each ecosystem. The canonical skill content is always **SKILL.md**; these files are for display names, short descriptions, and default prompts in each tool’s UI.

| File | For | Purpose |
|------|-----|---------|
| **openai.yaml** | Codex (OpenAI) | Skill lists and chips in Codex UI. |
| **claude.yaml** | Claude Code, Anthropic runtimes | Discovery and invocation in Claude Code and compatible agents. |
| **cursor.yaml** | Cursor | Skill lists and default prompt when using Cursor with this skill. |
| **gemini.yaml** | Gemini CLI | Skill lists and default prompt when using `gemini skills`. |
| **antigravity.yaml** | Antigravity (Google) | Skill discovery and display in Antigravity. |

All files share the same core fields: `display_name`, `short_description`, `default_prompt`. Tool-specific fields (e.g. `compatibility` in claude.yaml) are optional and used when that tool supports them.

**Install locations (reminder):**

- **Codex:** `$CODEX_HOME/skills` → uses `openai.yaml`
- **Claude / Cursor:** `~/.agents/skills/` or `~/.claude/skills/` → use `claude.yaml` / `cursor.yaml`
- **Gemini CLI:** `~/.gemini/skills/` or `.gemini/skills/` → uses `gemini.yaml`
- **Antigravity:** `~/.gemini/antigravity/skills/` or `.agent/skills/` → uses `antigravity.yaml`
