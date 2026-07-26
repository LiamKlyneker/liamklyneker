# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **pnpm** (`pnpm-lock.yaml`).

```bash
pnpm dev      # next dev — http://localhost:3000
pnpm build    # next build
pnpm start    # serve the production build
pnpm lint     # next lint (eslint-config-next/core-web-vitals)
```

There is no test suite, no test runner, and no typecheck script. Type errors surface via `pnpm build` or the editor.

Caveat: `app/page.tsx` imports `PageProps` from `@/.next/types/app/page` — a build-generated type. On a fresh clone, type resolution for that import only works after a `pnpm dev` or `pnpm build` has populated `.next/`.

## Git workflow

This is Liam's personal portfolio, managed solely by him. **Commit and push straight to `main`** when asked — no feature branch, no PR, no review ceremony.

## What this repo is

Two things in one repo (repo name matches the GitHub username):

1. The Next.js 13 App Router portfolio site at https://www.liamklyneker.com.
2. `README.md` is Liam's **GitHub profile README** — it is public-facing personal content, not project documentation. Don't rewrite it as a setup guide.

## Architecture

Single scrolling page. `app/layout.tsx` loads the Sora font and wraps everything in `Header` + `Footer`; `app/page.tsx` composes the sections in order: `Intro` + `FirstThingsFirst` (inside a shared wrapper div), `HighlightedProject`, `MoreCases`, `Contact`.

- **`app/_sections/`** — page sections. The `_` prefix keeps the folder out of routing. Sections are server components unless they need scroll/state, in which case they carry `"use client"`.
- **`ui/atoms/`** — primitives (`Typography`, `Button`, `ButtonIcon`, `Logo`) plus `ui/atoms/icons/`.
- **`ui/components/`** — composed pieces (`Header`, `Footer`, `StickySection`, `RegularSection`, `ImagesCarousel`, `SideModal`).
- Path alias `@/*` maps to the repo root, so imports look like `@/ui/atoms`, `@/public/journey-data`.

Barrel files (`ui/atoms/index.ts`, `ui/components/index.ts`) export most things, but `FancySectionTitle`, `CasesCarousel`, and `GlitchTitle` are **not** in the components barrel and are imported by full path. Adding a component means also adding it to the barrel if you want the short import.

`app/_sections/skills.tsx` exists but is not rendered by `page.tsx` — it's currently unused.

### Content data

Copy and lists live as TypeScript modules under `public/`, next to the images they reference: `public/journey-data.ts` (the journey timeline) and `public/projects/neon-place/features-list.ts` (exports both `featuresList` for the image carousel and `casesList` for the cases carousel). Editing site content usually means editing these files or the JSX in `_sections/`, not a CMS.

### The journey modal (URL-driven)

There is no modal state. `first-things-first.tsx` links to `?modal=journey` with `scroll={false}`; `page.tsx` reads `searchParams.modal` and renders `JourneyModal`. `SideModal` renders through `createPortal` into `document.body`, locks `body` overflow, listens for Escape, and closes with `router.back()` — so closing depends on the modal having been reached via a history push, not a direct visit.

### Scroll-driven background color (the fragile part)

`document.body.style.backgroundColor` is mutated imperatively from more than one place, and they interact:

- `first-things-first.tsx` uses an `IntersectionObserver` to set `#FF034F` (and add a `pink-background` body class), clearing it only when `scrollY < 500` or `scrollY > innerHeight * 3`.
- `FancySectionTitle` (a 300vh scroll-scrubbed title used by `HighlightedProject`) recomputes its own background alpha on every scroll event and also sets/clears the same body background at the 50% mark.
- `animations.css` reacts to the body class: `.pink-background .show-intro { transform: scale(0.96) }`.

Those scroll-position thresholds are hand-tuned to the current section order and heights. Reordering sections, changing section heights, or adding a new full-height section will break the background transitions and the sticky/z-index stacking (`StickySection` is `sticky top-0`; `FirstThingsFirst` sits in a `z-20` wrapper). Recent commit history is mostly fixes in exactly this area — verify scroll behavior visually after touching layout.

### Styling

Tailwind, with brand colors defined in `tailwind.config.js`: `lk-green` `#50F900`, `lk-pink` `#FF034F`, `lk-turquoise` `#12E5E5`, `lk-blue` `#060CFF`, `lk-text-secondary` `#475460`. Some of these hexes are duplicated literally in `app/globals.css` (carousel scrollbar, glitch pseudo-elements) — change both if you change a brand color.

- **All text styling goes through `Typography`**, a `class-variance-authority` component with `p | p-sm | p-xs | h1 | h2 | h5 | h6 | link | small` variants that also picks the rendered tag. Because the variant sets a color, call sites override with `!` important utilities (`!text-white`, `!text-2xl`). That's the established convention here, not a smell to clean up.
- `app/globals.css` holds base/body styles plus the glitch effect (`.glitch` uses a `data-text` attribute for its pseudo-element layers) and carousel scrollbar styling.
- `app/_sections/animations.css` holds the entrance/blink/modal keyframes and is imported once from `intro.tsx`, though its classes are used across several sections.

### Aesthetic conventions

The design intentionally uses cryptic Unicode glyphs (`⏃⎑⎅▽`, `✺`, `⎔`, `⌿`) and vowels swapped for `ø`/`ā`/`ł` in labels (`make_cøntact`, `Skiłłs`, `jøurney`). These are deliberate — preserve them when editing copy.
