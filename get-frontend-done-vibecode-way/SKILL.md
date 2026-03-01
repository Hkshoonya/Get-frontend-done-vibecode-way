---
name: get-frontend-done-vibecode-way
description: Use when building or reviewing UI, choosing interface components, aligning to design systems, or implementing front-end patterns from canonical design-system references.
---

# Get frontend done — vibecode way

## Overview

This skill encodes [The Component Gallery](https://component.gallery/) (60 components, 95+ design systems, 2,676 examples) as the canonical reference for UI components and design systems. Follow a **feedback loop**: Select → Implement → Verify → Iterate. Use **Claude memory surgically** for project design-system and UI conventions. Use **/simplify** after implementing for code quality; use **/batch** for migrations or multi-file UI updates. Works standalone or with GSD (Get Shit Done) subagents.

## Attribution

**Special thanks** to [inbn/component-gallery](https://github.com/inbn/component-gallery) — the Astro + Airtable–based source for component.gallery. Use that repo when you need full context (structure, data model, build). This skill uses it as reference; implementation is process and reference only.

## When to use

- Building or refactoring UI (web or app) and need component semantics, naming, or patterns.
- Choosing which component or design system fits (e.g. Accordion vs Collapse, which library for React).
- Aligning implementation to design-system expectations (accessibility, code examples, usage guidelines).
- Reviewing existing UI for correctness (component type, ARIA, keyboard, focus).
- Migrating components or design system across files (use /batch where supported).

**When not to use:** Backend-only work; when the task has no UI/component aspect; when another skill is the primary trigger (use this as secondary reference if UI is involved).

## Feedback-loop workflow

1. **Select** — From [component.gallery](https://component.gallery/) or `references/components.md`, choose the component(s) and, if relevant, a design system (e.g. React + accessibility). Optionally **recall from Claude memory** (e.g. “this project uses Polaris”; “prefer Radix for accessibility”) — only facts that affect this task.
2. **Implement** — Build or refactor UI using the component definition and patterns (semantics, accessibility, naming). After implementation, **optionally run /simplify** to improve code quality (e.g. “implement Button then /simplify”). For **multi-file or migration work** (e.g. migrating components, design-system switch), use **/batch** to automate in parallel (e.g. “/batch migrate from Jest to Vitest” or “/batch replace old Button with design-system Button”).
3. **Verify** — Check: correct component type, accessibility (ARIA, keyboard, focus), alignment with referenced design systems. If quality is lacking, suggest or apply **/simplify** before iterating.
4. **Iterate** — If verification fails or the user requests changes, return to Select or Implement and repeat. Optionally **update Claude memory** surgically when a durable decision is made (e.g. “project design system: shadcn/ui”; “always use skip links for this app”).

Keep the loop concise; point to `references/` and component.gallery for full lists.

## Quick reference: Cursor commands

| Situation | Command | Purpose |
|-----------|---------|---------|
| After implementing or refactoring UI | /simplify | Improve code quality (cleaner, consistent). |
| Verify step flags verbose or inconsistent code | /simplify | Apply before iterating. |
| Multi-file or migration (components, design system, test runner) | /batch | Automate in parallel with clear scope. |

Use /simplify after Implement when the environment supports it; use /batch for “migrate components” or “align to design system across app” when supported.

## GSD integration (optional)

The skill works **standalone**. No required dependency on Cursor or GSD.

When running in an environment that supports **GSD** (e.g. Cursor with Task tool):

- **Planning UI work**: Use `gsd-phase-researcher` or `gsd-planner` to research or plan a UI phase; this skill is the reference for component and design-system choices.
- **Implementing**: Use `gsd-executor` (or equivalent) to implement; instruct the executor to follow this skill (component names, patterns, accessibility). Where the executor runs in Cursor, it can use **/simplify** after implement and **/batch** for migrations.
- **Verifying**: Use `gsd-verifier` or `gsd-integration-checker` to verify that implemented UI matches Component Gallery patterns and accessibility expectations from this skill.

If GSD tools are not available, follow the same Select → Implement → Verify → Iterate loop manually.

## Claude AI memory (surgical use)

- **When to recall**: At start of Select or Implement, recall memory only for facts that affect the current task — e.g. “project design system”, “preferred component library”, “accessibility requirements”, “naming conventions for this repo”.
- **When to store**: After a durable decision (e.g. user confirms design system, or a convention is adopted), update memory with one clear fact; avoid redundant or vague entries.
- **What to store**: Short, scoped keys (e.g. “Get-frontend-done – project design system: Polaris”; “Get-frontend-done – use skip links: yes”). Do not store full component lists or design-system docs; keep those in this skill and `references/`.

**Good memory entries:** “Project uses shadcn/ui for React components.” “Always include skip links in this app.”  
**Bad:** “Component Gallery has 60 components.” “Use design systems.” (too vague or already in the skill)

Weave recall into the Select step and memory update into the Iterate step.

## When to read references

- **`references/components.md`** — When you need the full list of 60 components (names, aliases, descriptions, example counts) or to pick a component by name/semantics. Snapshot header includes date and refresh instruction.
- **`references/design-systems.md`** — When you need to choose or align to a design system (name, org, tech, features). Same snapshot header. For the full list and filters, use [component.gallery/design-systems](https://component.gallery/design-systems).

## Component quick reference (compact)

| Component | Aliases (common) |
|-----------|------------------|
| Accordion | Collapse, Disclosure, Expandable |
| Alert | Notification, Banner, Callout |
| Badge | Tag, Label, Chip |
| Button group | Toolbar |
| Card | Tile |
| Carousel | Content slider |
| Combobox | Autocomplete, Autosuggest |
| Datepicker | Calendar, Datetime picker |
| Drawer | Tray, Flyout, Sheet |
| Modal | Dialog, Popup |
| Popover | — (click-triggered; can contain interactive content) |
| Progress bar | Progress |
| Progress indicator | Stepper, Steps, Timeline |
| Select | Dropdown, Select input |
| Separator | Divider |
| Skeleton | Skeleton loader |
| Toast | Snackbar |
| Toggle | Switch, Toggle button |
| Tooltip | Toggletip |
| Visually hidden | Screenreader only |

Full list with descriptions and example counts: `references/components.md` or [component.gallery/components](https://component.gallery/components).

## Install

This skill is **publishable** and **live for Codex, Claude, Antigravity, Gemini CLI, and other tools.** Repo: **Get-frontend-done-vibecode-way**.

- **Codex (OpenAI)** — Install into `$CODEX_HOME/skills` (default `~/.codex/skills`). From GitHub: `scripts/install-skill-from-github.py --repo <owner>/Get-frontend-done-vibecode-way --path skills/get-frontend-done-vibecode-way` (or the path where the skill lives in the repo).
- **Claude (Cursor / Claude Code)** — Copy the skill folder into `~/.agents/skills/` or `~/.claude/skills/`. Example: `cp -r get-frontend-done-vibecode-way ~/.agents/skills/`.
- **Generic / any model** — Copy the skill directory into the agent’s configured skills root; ensure the runtime loads `SKILL.md` by name/description.
- **Antigravity (Google)** — Global: `~/.gemini/antigravity/skills/` or project: `.agent/skills/` or `.gemini/skills/`. Example: `cp -r get-frontend-done-vibecode-way ~/.gemini/antigravity/skills/`. Optional symlink: `mkdir -p ~/.gemini/antigravity/skills && ln -s /path/to/get-frontend-done-vibecode-way ~/.gemini/antigravity/skills/get-frontend-done-vibecode-way`.
- **Gemini CLI** — User: `~/.gemini/skills/` or workspace: `.gemini/skills/`. Install from Git: `gemini skills install https://github.com/<owner>/Get-frontend-done-vibecode-way.git` (or `--path skills/get-frontend-done-vibecode-way` if in a subfolder). Link local: `gemini skills link <path/to/get-frontend-done-vibecode-way>`. List: `gemini skills list`; in interactive mode: `/skills enable` or `/skills disable`. Alternatively, copy the skill folder into `~/.gemini/skills/` or `.gemini/skills/`.
