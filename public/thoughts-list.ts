/**
 * The thøughts shelf — every entry rendered by `ThoughtRow` in `Thoughts`.
 *
 * Scope boundary agreed with #36: industry and idea pieces only. Project
 * narratives belong on the crāft detail pages, not here.
 *
 * Copy in here is placeholder; wording lands in #28. Further articles land in
 * #30 — they are upgrades to this list, not a dependency of it, so the section
 * is designed to read as a deliberate curation at one entry.
 */
export type ThoughtEntry = {
  id: string;
  title: string;
  /** TODO(#28): placeholder copy. */
  oneLiner: string;
  /**
   * The published article's URL. Always absolute and always off-site — every
   * row opens in a new tab, so there is no internal-route branch here (unlike
   * `CraftEntry`, which has to weigh a `detailPath` against its `url`).
   */
  url: string;
};

export const thoughtsList: ThoughtEntry[] = [
  {
    id: "thought-shared-ui-libraries-rsc-i",
    title:
      "Building Shared UI Libraries In The Server Components Era — Chapter I",
    // TODO(#28): placeholder one-liner.
    oneLiner:
      "What a shared component library has to give up once the server renders half of it.",
    url: "https://medium.com/@LiamKlyneker/building-shared-ui-libraries-in-the-server-components-era-chapter-i-e6538c7806e6",
  },
];

/** The escape hatch under the list — everything, not just the curated few. */
export const allThoughtsUrl = "https://medium.com/@LiamKlyneker";
