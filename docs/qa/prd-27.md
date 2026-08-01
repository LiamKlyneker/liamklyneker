# QA — PRD #27: Portfolio Content Renovation

Branch `prd/27-portfolio-content-renovation` · PR #42 · five issues: #37, #38, #39, #40, #41.

Run this start-to-finish before merging. `pnpm dev` → http://localhost:3000. Nothing here is covered by an automated test — `pnpm lint && pnpm build` is the only machine gate this repo has, and it cannot see any of the behaviour below.

## Before you start

Two things will make you think you found a bug when you haven't:

- **`globals.css` puts `transition: background-color 0.5s ease` on `body`.** If you inspect the body colour in DevTools right after scrolling, you'll catch a mid-interpolation value. Wait half a second, or read the inline `style` attribute rather than the computed value.
- **A hydration warning about `cz-shortcut-listen` on `<body>`** is a browser extension (ColorZilla or similar) writing to the DOM. It is not from this branch.

The whole-page scroll pass in §1 is the single most important check on this branch — the background transition has no automated coverage at all, and four of the five issues moved something it depends on.

---

## 1. The scroll-driven background (#37)

**What shipped:** `FirstThingsFirst` — the second section, its `IntersectionObserver`, its `pink-background` body class, and the `See jøurney` link — is deleted. `FancySectionTitle` is now the **sole** writer of `document.body.style.backgroundColor` and also owns clearing it. `Intro` lost its `sticky top-0` (with the shared wrapper gone, the sticky had no room to travel and was pinning the hero over the entire page). `journey-modal.tsx` and `SideModal.tsx` stay on disk, unrendered. `/` is statically prerendered again.

**How to test:**

1. Hard-refresh at desktop width. The hero must be **white/grey-on-black**, with a pink strip visible only at the very bottom edge. **Any pink behind the hero text at first paint is a failure.**
2. Scroll down slowly. As the hero's last line leaves the top of the viewport, the whole screen goes pink `#FF034F` and the giant `crāft` title is at max size. The hero must not remain visible behind it.
3. Keep scrolling. Roughly one viewport later the background flips to black and the pink title block fades out as the title shrinks. The flip should be a clean switch, not a flicker.
4. Continue through the grid, thøughts, contact, footer. Background stays black the whole way — and the `⏃⎑⎅▽` logo from the hero must **never** appear floating over those sections.
5. Scroll all the way back up slowly. Pink returns at the same point it left, then **the hero must land on black**. A pink hero at the top is the exact regression #37 fixed — check it explicitly.
6. Repeat 1–5 at a narrow viewport (≤500px). The transition points shift with viewport height; the sequence must be identical.
7. Stress test: from the footer, press `Home` / `cmd+↑` to jump straight to the top. Background must be black on arrival.

**Edge cases flagged:** `FancySectionTitle` is now the only background writer *and* owns the reset. A second instance anywhere on the page would fight itself — each clearing the other's background when out of its own band. If one is ever needed, ownership has to move to a shared coordinator first. Likewise, inserting a full-height section between `Intro` and `HighlightedProject` breaks the coincidence that the pink band starts exactly at the hero's bottom edge.

---

## 2. Hero role label (#38)

**What shipped:** `GlitchTitle` gained a word-cycle mode alongside its existing character-glitch mode. The hero role label runs through it; the bespoke `setTimeout` loop in `dynamic-title.tsx` is gone. `Typography` gained an optional `aria-label` passthrough.

**How to test:**

1. **Keep the tab focused** — Chrome buckets background-tab timers to 1s and the dwells will read long if you tab away.
2. On first paint the hero reads **Design Engineer**. Watch ~30s. Expected loop: `Design Engineer` (~5.2s) → cryptic flash (~0.1s) → `Frontend Engineer` (~2.2s) → flash → `Design Engineer` → flash → `UX/UI Designer` → flash → `Design Engineer` → flash → `Creative Ghost` → flash → `Design Engineer` → repeat. The resting beat should be visibly ~2.5× longer than the others.
3. Ignore timing weirdness in the **first ~10 seconds after load** — React StrictMode double-mounts effects in dev. `pnpm build && pnpm start` does not.
4. Right-click the hero label → Inspect. Expect `<h1 … aria-label="Design Engineer"><span aria-hidden="true">…</span></h1>`. Switch to the **Accessibility** pane: the computed name must be `Design Engineer` even while the span shows `⎍⎎⎒⌭ ⌿⎎⌿⍅⍆⎎⌿⌶`.
5. Reduced motion — **DevTools is the reliable route**: Cmd+Shift+P → "Emulate CSS prefers-reduced-motion: reduce", then hard-reload. The label must sit frozen on `Design Engineer` indefinitely. Scroll down while emulated: `make_cøntact` must also sit frozen on its clean spelling.
6. Turn it back off, hard-reload, scroll to `make_cøntact`. It must still swap one character for a cryptic glyph roughly once per second, as before.

**Edge cases flagged:** Reduced motion is handled **only** for `GlitchTitle`. `animations.css` (entrance, `randomBlink`, modal keyframes) and the scroll-scrubbed `FancySectionTitle` still animate under `reduce`. If site-wide reduced-motion support is ever claimed, that CSS is the remaining surface. The cryptic flash is visually loud at hero size — ~110ms, a single `FLASH_DURATION` constant, if #28 wants it shorter.

---

## 3. The crāft grid (#39 + #40)

**What shipped:** A new `ProjectCard` primitive (`size: featured | compact`, optional image, `detailPath ?? url` href rule, optional `cta` label, optional `columnSpan`) and a `public/craft-list.ts` content module. `HighlightedProject` is retitled `crāft` and its body — the Role / Stack / Some Features lists, the "søøn…" paragraph, the Neøn.Plāce masthead, and the `ImagesCarousel` of 13 generic feature images — is replaced by an eight-card grid. `MoreCases`, `CasesCarousel`, and `casesList` are deleted.

**How to test:**

1. Scroll into the grid. Confirm **eight** cards: Neøn.Plāce full-width with its image, then Reeckon / work-on-prd / figma-to-spec on one row, how-i-write / GENIUS / LUAR on the next, and `āll 12 skiłłs` full-width last. **No ragged half-empty row.**
2. The featured Neøn.Plāce card must read as obviously dominant over the compacts — roughly 9× the area, image-led vs text-only.
3. Read the two 2019 cards. GENIUS and LUAR must both open their one-liner with `2019`, and their link label must read `⌿ SEE THE 2019 CASE ▶︎` — not "VIEW IT LIVE".
4. Hover any card — it fills `lk-pink` with the text flipping to black.
5. Click all eight. Each opens in a **new tab** on a real page: neon.place · reeckon.vercel.app · three `github.com/LiamKlyneker/skills/tree/main/<skill>` folders · two Behance galleries · the skills repo root. The portfolio tab must never navigate away. All eight returned HTTP 200 at time of writing.
6. Confirm the removals: **no** `more_cases` glitch title, **no** green-bordered horizontal carousel, **no** paragraph about "GitHub profile / coding skills / pinned repositories" anywhere on the page. The gap before `thøughts` should look like the ordinary gap between any two sections — no double spacing where MoreCases was.
7. Narrow to ~390px. All eight cards stack single-column full-width, no horizontal scrollbar.
8. DevTools → Network → Slow 3G, hard reload, scroll to the grid. The featured card's image area must hold a solid blue box at its final height while loading — text below it must not jump when the image arrives.
9. Copy check: every one-liner is a placeholder marked `TODO(#28)`. No AI stack or model names appear on any card.

**Edge cases flagged:**

- **The Reeckon one-liner is invented.** Nothing in the repo describes what Reeckon does, so the worker guessed: *"A small tool for keeping shared numbers honest."* Replace it in #28 — do not ship it as-is.
- **The 3-up grid is sensitive to card count.** Six compacts is exactly two full rows at `lg`, three at `md`. Adding or removing one leaves a ragged last row.
- **`feature-01.png` is 781×585 (4:3) rendering into a 16:10 box at ~1038px** — upscaled and cropped. Fine at a glance, but it's the strongest argument for the real AI-module screenshots that were deferred.
- The `⎍⎎⎒⌭ ⌿⎎⌿⍅⍆⎎⌿⌶` / EXPERIMENTS Dribbble entry was dropped per the PRD. Its URL survives in the `features-list.ts` comment and the #40 commit message if it needs recovering.
- `RegularSection`'s asymmetric padding (`pr-20 md:pr-32 lg:pr-40`, reserving room for the decorative vertical line) means the grid is inset from the right edge. The featured card is full-width *within the section*, not edge-to-edge. Pre-existing — flagging only in case a true bleed was the intent for `crāft`.

---

## 4. thøughts (#41)

**What shipped:** A `ThoughtRow` primitive (title + one-liner + external href — no dates, no stats, no read-time), `public/thoughts-list.ts`, and a `thøughts` section between crāft and make_cøntact, seeded with one Medium article plus a "See all on Medium" escape hatch.

**How to test:**

1. Scroll past the crāft grid. `thøughts` appears immediately before `make_cøntact` — right-aligned glitching heading, same treatment the old `more_cases` had.
2. Below the heading: a small eyebrow line, a short framing paragraph, then a single bordered row — "Building Shared UI Libraries In The Server Components Era — Chapter I".
3. **Judge the one-row state honestly.** Does it read as a deliberately short shelf, or as an empty one? The framing paragraph and the "See all on Medium" link are what carry that. This is the AC that can only be judged by eye.
4. Hover the row — pink fill, text flips to black, same as the crāft cards.
5. Click the row → opens the Medium article **in a new tab**. Click "See all on Medium" → opens `medium.com/@LiamKlyneker` **in a new tab**.
6. At ~390px the row stacks: title, one-liner, then `⌿ READ ON MEDIUM ▶︎` underneath. The hairlines still close above and below the list.
7. Optional growth check: add two dummy entries to `public/thoughts-list.ts`, confirm the rhythm holds at 2 and 3 rows, then remove them.

**Edge cases flagged:** The section is designed for 1–3 entries. Beyond ~5 it needs a real curated-subset cut rather than rendering the whole list (#30's problem). On very wide screens there's a large horizontal gap between the one-liner and the right-aligned CTA — a list-row convention rather than a defect; it disappears at ≤1024px. The heading carries an unused `#thoughts` anchor id, ready if nav is ever added.

---

## Copy that is placeholder — the #28 work-list

Every string below is `TODO(#28)` in the code. Two of them are the assistant's words in Liam's voice and should be treated with suspicion, not just polish:

| Where | Current placeholder |
|---|---|
| Hero cycle list | `Frontend Engineer` · `UX/UI Designer` · `Creative Ghost` (resting: `Design Engineer`) |
| Neøn.Plāce | "A minimalist search tool for renting and buying places — designed and built end to end." |
| Reeckon | "A small tool for keeping shared numbers honest." **← invented, verify against the real product** |
| work-on-prd | "Runs a whole PRD end to end — one issue per worker, one branch, one PR, verified before every commit." |
| figma-to-spec | "Turns a Figma frame into a spec an implementer can build from without guessing at intent." |
| how-i-write | "My voice written down as a spec, so the assist lands on the finishing and the message stays mine." |
| GENIUS | "2019 — a UX and UI redesign of Genius, from research through to the visual system." |
| LUAR | "2019 — UX research and UI design for a roommates-and-rooms marketplace." |
| āll 12 skiłłs | "The three above are the flagships. The other nine are in the same public repo, written the same way." |
| thøughts eyebrow | "⎔ ON THE INDUSTRY AND THE IDEAS UNDER IT" |
| thøughts framing | "A short shelf, kept short on purpose. I only write one up once the idea has survived a few months of actually building with it." **← the assistant's phrasing, not Liam's** |
| Chapter I one-liner | "What a shared component library has to give up once the server renders half of it." |

Also for #28: `contact.tsx` line 46 links to `medium.com/@liamklyneker` (lowercase handle) with **no `rel`** on a `target="_blank"` — pre-existing, worth a one-line fix when that file's copy is revisited.

---

## Orphaned after this branch — reported, not deleted

Nothing here was removed speculatively. Cleanup is #36's open question.

- `featuresList` in `public/projects/neon-place/features-list.ts` — zero consumers
- `ui/components/ImagesCarousel.tsx` — zero consumers, still exported from the barrel
- `public/projects/neon-place/feature-02.png` … `feature-13.png` — 12 unused images (only `feature-01.png` is referenced)
- `public/neon-place-logo.svg` — unreferenced since the masthead was removed
- `ui/atoms/icons/TrendingFlat.tsx` (`IconTrendingFlat`) — its only consumer was `first-things-first.tsx`
- `ui/components/StickySection.tsx` — only used by the unrendered `skills.tsx`
- `app/_sections/skills.tsx` — unrendered, pre-existing
- `app/_sections/journey-modal.tsx` + `SideModal` + `public/journey-data.ts` — unrendered, **deliberately kept** for the future journey subpage
