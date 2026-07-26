# UI Manifest Gates (Token + Primitive)

Shared reference for design-task skills (`grill-me`, `figma-component`). Two manifests that catch the two halves of design-drift: improvised **components** and improvised **tokens**. Both are **HARD GATES** — the invoking skill is not done while any ⚠️/❌ row is unresolved.

How rows get resolved differs by consumer:

- `grill-me` — **interactively**, during the interview, one decision at a time.
- `figma-component` — **autonomously**; unresolvable rows batch into its single checkpoint.

Run both right after the variant table, before any engineering questions or code.

## UI Primitive Manifest

Build a manifest of **every** primitive the design needs. This prevents the recurring failure where a missing primitive gets **improvised inline** (e.g. a colored icon-badge rendered as ad-hoc utility classes instead of a shared component), causing the implementation to drift from the design.

Classify each primitive:

- ✅ **exists as-is** — a shared UI-lib primitive already matches.
- ⚠️ **drifts / needs an API change** — two cases: (a) the primitive exists but its API can't express the design (needs a new variant/state/prop); (b) **brownfield**: it exists *in feature code* as an inline/ad-hoc implementation that should be extracted into a shared primitive.
- ❌ **must be built** — no primitive exists.

For every ⚠️/❌ row, resolve:

- **Home** — pick by *earning the abstraction*, not by reflex:
  - `components/ui` (shadcn-style) — a standard primitive a registry offers; **install it, never hand-roll it**.
  - the project's shared UI lib — a genuinely reusable, **cross-feature** custom primitive. Only promote here once there's a real second consumer.
  - colocated `_components/` — single-consumer for now; hasn't earned shared status. Default new bespoke UI here.
  - a new dependency — last resort.
- **API surface** — props, variants, states, sizes.
- **Consumers** — which screens/cards use it.

Treat each ⚠️/❌ primitive as if it ships from a UI library — downstream, each becomes its own issue (see the `to-issues` exception). Present as a table:

| Primitive | Status | Home | API surface | Consumed by |
|-----------|--------|------|-------------|-------------|
| IconBadge | ❌ build | shared UI lib | color, icon, size | feature cards |
| Button | ⚠️ extend | components/ui/ | add solid variant | primary CTA |

## Token Manifest

Build a manifest of **every** Figma variable/token the design uses and resolve each to an **existing code token**:

- **Never improvise a token.** A Figma value with no code equivalent is a *finding to surface* — not a license to drop in a raw palette class (`gray-300`, `slate-500`, an arbitrary hex).
- Resolve via the project's **Figma → code map** (its ui-profile skill, or a `building-<x>-ui`-style project skill) and its token definitions (Tailwind config / `tokens.css`). Watch any traps the map documents (near-identical token names, gradient tokens that map to component variants).
- Any token that won't resolve gets a ⚠️ row with options: closest semantic token, mint a new token, or confirm an intentional one-off. Decide per the consumer's ask policy — never silently invent.

| Figma token | Code token | Status |
|-------------|-----------|--------|
| base/foreground | `foreground` | ✅ resolves |
| brand/gradient | `bg-brand-gradient` / Button `variant="gradient"` | ✅ resolves |
| gray-300 (raw) | — | ⚠️ no equivalent — flag, do not invent |
