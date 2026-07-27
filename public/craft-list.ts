/**
 * The crāft grid — every entry rendered by `ProjectCard` in `HighlightedProject`.
 *
 * Copy in here is placeholder; wording lands in #28. Detail routes land in #36,
 * so today every entry leaves `detailPath` unset and falls through to `url`.
 * That fallback is the card's job, not this file's — no entry special-cases it.
 */
export type CraftEntry = {
  id: string;
  /**
   * Grid tier. `featured` is full-width and image-led; `compact` sits in the
   * grid flow. The grid reads this to decide column span; the card reads it to
   * decide its own anatomy.
   */
  size: "featured" | "compact";
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
  /** Optional — the skill cards in the next slice carry no imagery. */
  image?: {
    src: string;
    alt: string;
  };
};

export const craftList: CraftEntry[] = [
  {
    id: "craft-neon-place",
    size: "featured",
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
    // TODO(#28): placeholder one-liner.
    title: "Reeckon",
    oneLiner: "A small tool for keeping shared numbers honest.",
    url: "https://reeckon.vercel.app/",
  },
];
