"use client";

import { Typography } from "@/ui/atoms";
import { ComponentProps, useEffect, useState, useSyncExternalStore } from "react";

export type GlitchCycleTitle = {
  /** The text that gets painted while this entry is on screen. */
  text: string;
  /** How long this entry holds before the label rests again, in ms. */
  dwell: number;
};

type GlitchTitleProps = {
  /**
   * The resting title. In single-title mode it is the string whose characters
   * glitch; in word-cycle mode it paints first, holds `restingDwell`, and the
   * cycle returns to it between every other title. Either way it is the
   * accessible name, whatever happens to be on screen.
   */
  title: string;
  /**
   * Word-cycle mode. The titles rotated through between rests — the label goes
   * `title` → `titles[0]` → `title` → `titles[1]` → … Omit for single-title
   * character-glitch mode.
   */
  titles?: readonly GlitchCycleTitle[];
  /** How long the resting title holds, in ms. Word-cycle mode only. */
  restingDwell?: number;
  /**
   * Render through `Typography` with this variant instead of the default
   * section-title `h2`.
   */
  variant?: ComponentProps<typeof Typography>["variant"];
  /** Extra classes. Only read on the `Typography` path. */
  className?: string;
};

export function GlitchTitle(props: GlitchTitleProps) {
  const {
    title,
    titles,
    restingDwell = DEFAULT_RESTING_DWELL,
    variant,
    className,
  } = props;
  const [glitchedTitle, setGlitchedTitle] = useState(title);
  const prefersReducedMotion = usePrefersReducedMotion();
  const isWordCycle = Boolean(titles?.length);

  // Single-title mode: swap one character for a cryptic glyph on a loop.
  useEffect(() => {
    if (isWordCycle || prefersReducedMotion) return;

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * title.length);
      const randomCharacter = title[randomIndex];
      setGlitchedTitle(
        title.replace(
          randomCharacter,
          crypticCharacters[Math.floor(Math.random() * crypticCharacters.length)]
        )
      );
    }, GLITCH_INTERVAL);
    return () => clearInterval(interval);
  }, [isWordCycle, prefersReducedMotion, title]);

  // Word-cycle mode: rest, flash, next title, flash, rest, …
  useEffect(() => {
    if (!titles?.length || prefersReducedMotion) return;

    // Even steps are the resting title, odd steps walk the `titles` list.
    let step = 0;
    let flashTimer: ReturnType<typeof setTimeout> | undefined;
    let dwellTimer: ReturnType<typeof setTimeout> | undefined;

    const entryFor = (at: number) => titles[((at - 1) / 2) % titles.length];
    const textFor = (at: number) => (at % 2 === 0 ? title : entryFor(at).text);
    const dwellFor = (at: number) =>
      at % 2 === 0 ? restingDwell : entryFor(at).dwell;

    const advance = () => {
      step += 1;
      setGlitchedTitle(crypticFlash);
      flashTimer = setTimeout(() => {
        setGlitchedTitle(textFor(step));
        dwellTimer = setTimeout(advance, dwellFor(step));
      }, FLASH_DURATION);
    };

    dwellTimer = setTimeout(advance, restingDwell);
    return () => {
      clearTimeout(flashTimer);
      clearTimeout(dwellTimer);
    };
  }, [prefersReducedMotion, restingDwell, title, titles]);

  // Reduced motion freezes the label on the resting title without unmounting
  // anything, so the effects above never have to write state to recover.
  const visibleTitle = prefersReducedMotion ? title : glitchedTitle;

  // The visible text churns; the accessible name never does. `aria-label` wins
  // the name computation outright, and `aria-hidden` keeps the churning glyphs
  // out of the tree entirely — a screen reader never reaches them either way.
  const content = <span aria-hidden="true">{visibleTitle}</span>;

  if (variant) {
    return (
      <Typography variant={variant} className={className} aria-label={title}>
        {content}
      </Typography>
    );
  }

  return (
    <h2
      aria-label={title}
      className="text-white -tracking-wider break-words md:break-normal whitespace-nowrap w-fit text-[12vw] lg:text-[9vw]"
    >
      {content}
    </h2>
  );
}

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(onStoreChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION_QUERY);
  query.addEventListener("change", onStoreChange);
  return () => query.removeEventListener("change", onStoreChange);
}

/**
 * `useSyncExternalStore` rather than `useState` + `useEffect` because
 * `react-hooks/set-state-in-effect` rejects the latter, and because the server
 * snapshot has to be a definite `false` — SSR has no `window.matchMedia`.
 */
function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false
  );
}

const GLITCH_INTERVAL = 900;
const FLASH_DURATION = 110;
const DEFAULT_RESTING_DWELL = 6000;
const crypticCharacters = ["⎍", "⎎", "⎒", "⌭", "⌿", "⍅", "⍆", "⌿", "⌶"];
const crypticFlash = "⎍⎎⎒⌭ ⌿⎎⌿⍅⍆⎎⌿⌶";
