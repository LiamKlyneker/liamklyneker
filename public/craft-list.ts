/**
 * The crāft grid — every entry rendered by `ProjectCard` in `HighlightedProject`.
 *
 * Copy in here is placeholder; wording lands in #28. Detail routes land in #36,
 * so today every entry leaves `detailPath` unset and falls through to `url`.
 * That fallback is the card's job, not this file's — no entry special-cases it.
 *
 * Order is the tier gradient the grid reads top to bottom: the featured build,
 * then the shipped product, then the three flagship skills, then the two 2019
 * cases (billed as 2019 in their own copy, not dressed up as current), and
 * finally the index row pointing at the whole public skills repo.
 */
export type CraftEntry = {
  id: string;
  /**
   * Card anatomy. `featured` is image-led with oversized type; `compact` is the
   * ordinary card. This drives what the card looks like — **not** how wide it
   * is. Width is `columnSpan`, below.
   */
  size: "featured" | "compact";
  /**
   * Grid-only hint, read by `HighlightedProject` and never passed through to
   * the card: `"full"` makes the entry span every column. Kept separate from
   * `size` so tier and layout can move independently — the trailing index row
   * is full-width with `compact` anatomy.
   */
  columnSpan?: "full";
  title: string;
  /** TODO(#28): placeholder copy. */
  oneLiner: string;
  /**
   * The real thing's URL — always present. This is the baseline destination the
   * card falls back to while `detailPath` is unset.
   */
  url: string;
  /**
   * Optional internal detail route (#36). When present the card links here
   * instead of `url`, and does not open in a new tab.
   */
  detailPath?: string;
  /**
   * Optional affordance label. The card's default is derived from whether the
   * resolved href is external, which reads right for a live product and wrong
   * for a repo folder or a 2019 case study — those set it explicitly.
   */
  cta?: string;
  /** Optional — the skill and index cards carry no imagery. */
  image?: {
    src: string;
    alt: string;
  };
};

/** The public skills repo. Every skill card falls back to a folder under it. */
const skillsRepoUrl = "https://github.com/LiamKlyneker/skills";

export const craftList: CraftEntry[] = [
  {
    id: "craft-neon-place",
    size: "featured",
    columnSpan: "full",
    title: "Neøn.Plāce",
    // TODO(#28): placeholder one-liner.
    oneLiner:
      "A minimalist search tool for renting and buying places — designed and built end to end.",
    url: "https://neon.place/s?orderBy=RECENT&placeId=ChIJJTSjnhnIBZERahU6nG5i478&address=Miraflores%2C+Per%C3%BA&ne_lat=-12.1028419&ne_lng=-77.0009369&sw_lat=-12.1401909&sw_lng=-77.05662989999999",
    image: {
      src: "/projects/neon-place/feature-01.png",
      alt: "Neøn.Plāce listing search, map and results side by side",
    },
  },
  {
    id: "craft-reeckon",
    size: "compact",
    title: "Reeckon",
    // TODO(#28): placeholder one-liner.
    oneLiner: "A small tool for keeping shared numbers honest.",
    url: "https://reeckon.vercel.app/",
  },
  {
    id: "craft-skill-work-on-prd",
    size: "compact",
    title: "work-on-prd",
    // TODO(#28): placeholder one-liner.
    oneLiner:
      "Runs a whole PRD end to end — one issue per worker, one branch, one PR, verified before every commit.",
    url: `${skillsRepoUrl}/tree/main/work-on-prd`,
    cta: "⌿ READ THE SKILL ▶︎",
  },
  {
    id: "craft-skill-figma-to-spec",
    size: "compact",
    title: "figma-to-spec",
    // TODO(#28): placeholder one-liner.
    oneLiner:
      "Turns a Figma frame into a spec an implementer can build from without guessing at intent.",
    url: `${skillsRepoUrl}/tree/main/figma-to-spec`,
    cta: "⌿ READ THE SKILL ▶︎",
  },
  {
    id: "craft-skill-how-i-write",
    size: "compact",
    // TODO(#28): placeholder one-liner. #28 constraint: voice-as-spec — the
    // assist is in the finishing, the creativity and the message stay mine.
    // Do not reword this into "AI writes for me".
    title: "how-i-write",
    oneLiner:
      "My voice written down as a spec, so the assist lands on the finishing and the message stays mine.",
    url: `${skillsRepoUrl}/tree/main/how-i-write`,
    cta: "⌿ READ THE SKILL ▶︎",
  },
  {
    id: "craft-genius",
    size: "compact",
    title: "GENIUS",
    // TODO(#28): placeholder one-liner. Billed as 2019 on purpose.
    oneLiner:
      "2019 — a UX and UI redesign of Genius, from research through to the visual system.",
    url: "https://www.behance.net/gallery/83970697/Genius-Redesing",
    cta: "⌿ SEE THE 2019 CASE ▶︎",
  },
  {
    id: "craft-luar",
    size: "compact",
    title: "LUAR",
    // TODO(#28): placeholder one-liner. Billed as 2019 on purpose.
    oneLiner:
      "2019 — UX research and UI design for a roommates-and-rooms marketplace.",
    url: "https://www.behance.net/gallery/72673721/LUAR",
    cta: "⌿ SEE THE 2019 CASE ▶︎",
  },
  {
    id: "craft-all-skills",
    size: "compact",
    columnSpan: "full",
    title: "āll 12 skiłłs",
    // TODO(#28): placeholder one-liner. This card is an index, not a piece of
    // work — the full-width row is what buys it room to say what the repo is
    // rather than shipping an empty one-liner.
    oneLiner:
      "The three above are the flagships. The other nine are in the same public repo, written the same way.",
    url: skillsRepoUrl,
    cta: "⌿ BROWSE THE REPO ▶︎",
  },
];
