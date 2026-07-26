# Model & Effort Heuristics

Shared reference for issue-pickup skills (`next-prd-issue`, `work-on-issue`). At pickup time, recommend whether to keep the default or go lighter, plus plan-mode y/n. The call is made **at point-of-use, never frozen into issue bodies** — the model lineup churns, and the right call depends on what the files actually look like when you open them.

## Framing: this is a downgrade detector

The operator's default is **Opus-class + high effort**. So do not "pick a model from scratch." Flag **loudly when it's safe to drop** to Sonnet-class / lower effort; otherwise quietly confirm staying on the default. The value is catching the cases where the default is overkill.

Model can't be switched mid-session, so the recommendation must print **before** any plan-mode / session commit, giving the operator a chance to switch first.

**Do not hardcode versioned model names here.** The lineup is volatile (e.g. Opus and Fable versions move). Speak in tiers (Opus-class / Sonnet-class). When exact model ids are needed, defer to the `claude-api` skill.

## Orchestrated mode (`work-on-prd`) — the default flips

Human sessions default Opus-class·high, so this file detects downgrades. Orchestrated workers are the opposite: they **default Sonnet-class · medium** and *upgrade* to Opus-class·high when any "Heavier" signal below matches. Same signals, opposite direction. The orchestrator announces the call (tier + matched signals) before spawning; plan mode doesn't apply (workers get `## Worker context` instead).

## Two outputs, two confidence levels

- **Plan mode** (high confidence) — derive from scope alone. Non-trivial / multi-file / any risk signal → yes.
- **Model + effort** (lower confidence) — derive from the signals below. Hedge when borderline and defer to the operator; never assert a fuzzy call as fact.

## Signals

**Heavier — keep Opus-class, high effort:**
- Cross-module orchestration, schema change, migration / expand-contract
- Money / billing / auth / concurrency / security
- New shared-primitive API design (the UI-primitive-exception issues from `to-issues`)
- Net-new architecture (not following an existing pattern)
- Many files / multiple modules or packages touched
- Ambiguous AC or unresolved decisions in the issue

**Lighter — drop to Sonnet-class, medium effort:**
- Copy / config / constants changes
- Single file, single layer
- Follows an established in-repo pattern with a clear example to copy
- Mechanical refactor / rename
- Tests for already-written logic

## Tiers (signals → recommendation)

- **Light** — only lighter signals → Sonnet-class · medium. Plan mode optional.
- **Standard** — mixed, or one non-risk heavier signal → call it: Opus-class · medium *or* Sonnet-class · high. Favor staying on Opus-class if any risk-bearing signal is present. Plan mode: yes.
- **Heavy** — any money / auth / migration / concurrency / new-primitive / architecture signal, or many files → Opus-class · high. Plan mode: yes.

## Output — show matched signals, not a score

No "complexity: 7/10". Name the signals that drove the call.

```
Model/effort: Sonnet · medium   (downgrade from default)
  Why: single-file copy change, follows an existing pattern. No risk signals.
Plan mode: optional — one file, no decisions.
```

```
Model/effort: Opus · high   (stay on default)
  Why: cross-table billing write + expand/contract migration.
Plan mode: yes — 3 files across 2 modules.
```

Borderline → hedge: `Model/effort: Sonnet · high (borderline — billing-adjacent; your call).`
