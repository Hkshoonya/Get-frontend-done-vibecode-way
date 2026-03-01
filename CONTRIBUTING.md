# Contributing to Get frontend done — vibecode way

We welcome **pull requests** and issues. This doc explains how to contribute so the skill stays consistent and useful for everyone.

## How to contribute

1. **Open an issue** — Bug or feature? Use [Issues](https://github.com/Hkshoonya/Get-frontend-done-vibecode-way/issues) and pick a template (bug report, feature request).
2. **Fork the repo** — Click *Fork* on GitHub, then clone your fork.
3. **Create a branch** — e.g. `git checkout -b fix/typo-in-skill` or `feature/add-more-design-systems`.
4. **Make your changes** — Follow the guidelines below.
5. **Open a PR** — From your branch to `main`. Fill in the PR template; link the issue if you have one.
6. **Review** — Maintainers will review. We may ask for small edits.

## Guidelines

### Skill content (SKILL.md, references/)

- **SKILL.md**  
  - Frontmatter: only `name` and `description`.  
  - Description must start with **“Use when…”** and describe *when* to use the skill (triggering conditions), not the full workflow.  
  - Keep the body under ~500 lines; put long lists in `references/`.

- **references/**  
  - Every reference file must have a **snapshot header**: date (e.g. “Snapshot as of YYYY-MM”), link to [component.gallery](https://component.gallery), and a one-line “how to refresh”.  
  - Data should match or sensibly extend [component.gallery](https://component.gallery) and [inbn/component-gallery](https://github.com/inbn/component-gallery).

### Agent metadata (agents/)

- Keep **display_name**, **short_description**, and **default_prompt** in sync across `openai.yaml`, `claude.yaml`, `cursor.yaml`, `gemini.yaml`, `antigravity.yaml` unless a tool needs something different.  
- See `agents/README.md` for which file is for which tool.

### Demo (demo/)

- Use components from `references/components.md` (Button, Card, Hero, Alert, etc.).  
- Use semantic HTML and accessibility (focus, ARIA where needed, skip link).  
- Update `demo/README.md` if you add or change components used.

### Code (scripts/)

- No new runtime dependencies unless necessary. Prefer Node built-ins or a single, documented dependency.  
- Scripts should be runnable with `node scripts/<name>.js` (or documented otherwise).

## What we’re especially happy to see

- **PRs that fix typos or clarify wording** in SKILL.md or README.
- **PRs that refresh references** (components or design systems) with an updated snapshot header.
- **PRs that add or fix agent metadata** for a new tool or correct an existing one.
- **PRs that improve the demo** (accessibility, new components from the reference, or a new demo page).
- **PRs that add tests or automation** (e.g. a small script to validate SKILL.md frontmatter or reference headers).

## Recognition

- Contributors are acknowledged in release notes or the README when we do a release.  
- The skill attributes [inbn/component-gallery](https://github.com/inbn/component-gallery); please keep that attribution when you extend the references.

Thank you for helping make this skill better and more visible.
