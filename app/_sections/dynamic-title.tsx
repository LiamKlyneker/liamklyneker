import { GlitchTitle, type GlitchCycleTitle } from "@/ui/components/GlitchTitle";

export function DynamicTitle() {
  return (
    <GlitchTitle
      title={restingTitle}
      titles={cycledTitles}
      restingDwell={5200}
      variant="h1"
      className="!text-white -ml-2 max-w-[450px] lg:!text-[120px] showTitle"
    />
  );
}

/** Paints first, holds the longest, and the cycle always comes back to it. */
const restingTitle = "Design Engineer";

// TODO(#28): placeholder wording — the final role list is #28's call.
const cycledTitles: readonly GlitchCycleTitle[] = [
  { text: "Frontend Engineer", dwell: 2200 },
  { text: "UX/UI Designer", dwell: 2200 },
  { text: "Creative Ghost", dwell: 2200 },
];
