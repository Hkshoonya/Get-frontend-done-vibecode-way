# Demo — Private gym trainer website

A **descriptive demo** of the get-frontend-done-vibecode-way skill: a single-page website for a **private gym trainer** (Peak Form). Built using the skill workflow: **Select** components from `references/components.md` → **Implement** with semantics and accessibility → **Verify**.

## Components used (from Component Gallery reference)

| Component | Usage on the page |
|-----------|-------------------|
| **Skip link** | “Skip to main content” for keyboard users; visible on focus. |
| **Header** | Site name (logo) and main navigation (Services, About, Contact). |
| **Navigation** | In-page links to #services, #about, #contact. |
| **Hero** (Jumbotron, Banner) | Large top section: headline, tagline, primary and secondary buttons. |
| **Button** | “Book a free intro session”, “View services”, “Book session”, “Email me”. |
| **Button group** | Hero CTAs grouped. |
| **Alert** (Banner, Callout) | New client offer: first session free. |
| **Card** (Tile) | Three service cards: 1-on-1 training, Small group classes, Nutrition coaching. |
| **Quote** (Pull quote) | Client testimonial with attribution. |
| **Footer** | Copyright and links (skill repo, component.gallery, inbn/component-gallery). |

## Run the demo

Open `index.html` in a browser (double-click or from a static server).

```bash
# From this folder
start index.html   # Windows
open index.html    # macOS
```

## What to check (Verify step)

- **Skip link**: Tab once; “Skip to main content” appears and moves focus to main.
- **Navigation**: All links focusable; focus outline visible; in-page scroll to sections.
- **Buttons**: Focus ring on Tab; primary (orange) and secondary (outline) styles.
- **Cards**: Each is an `<article>` with a heading and `aria-labelledby`.
- **Alert**: Announced as status; clear “New client offer” message.
- **Quote**: Semantic `<blockquote>` and `<cite>`.

## Skill workflow applied

1. **Select** — Picked Hero, Alert, Card, Button, Button group, Navigation, Header, Footer, Quote, Skip link from `references/components.md`.
2. **Implement** — Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<blockquote>`), ARIA where needed (`aria-labelledby`, `aria-label`, `role="status"`), focus styles, dark theme for a gym feel.
3. **Verify** — Component types and accessibility checked as above.
