# Demo — using the skill

This folder is a **test-and-use** demo of the get-frontend-done-vibecode-way skill.

## How it was built (skill workflow)

1. **Select** — From `references/components.md`: Button (triggers an action), Card (container for a single entity), Skip link (keyboard users).
2. **Implement** — Minimal HTML with semantic `<button>`, `<article>` as Card, skip link, ARIA where needed, focus styles.
3. **Verify** — Correct component types, keyboard/focus, alignment with skill references.

## Run the demo

Open `index.html` in a browser (file:// or any static server).

```bash
# From repo root
cd get-frontend-done-vibecode-way/demo
# Windows
start index.html
# macOS
open index.html
```

## What to check

- **Skip link**: Tab once; "Skip to main content" should receive focus and be visible when focused.
- **Buttons**: Focus ring on Tab; click triggers action.
- **Cards**: Each is an `<article>` with a heading; `aria-labelledby` links title to content.
