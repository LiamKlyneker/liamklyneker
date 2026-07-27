import Link from "next/link";
import { allThoughtsUrl, thoughtsList } from "@/public/thoughts-list";
import { Typography } from "@/ui/atoms";
import { IconOpenInNew } from "@/ui/atoms/icons";
import { RegularSection, ThoughtRow } from "@/ui/components";
import { GlitchTitle } from "@/ui/components/GlitchTitle";

/**
 * The thøughts shelf. It ships with a single seeded entry, so the section is
 * built to read as a curated subset rather than an empty one: a framing block
 * above the list carries the weight, the list draws closed hairlines at both
 * edges whatever its length, and the "see all on Medium" escape hatch below it
 * says out loud that this is a selection.
 */
export default function Thoughts() {
  return (
    <>
      <div id="thoughts" className="text-right flex justify-end pt-32">
        <GlitchTitle title="thøughts" />
      </div>
      <RegularSection>
        {/* TODO(#28): placeholder framing copy. */}
        <Typography variant="h6" className="mb-4 lg:mb-6">
          ⎔ ON THE INDUSTRY AND THE IDEAS UNDER IT
        </Typography>
        <Typography className="max-w-[800px] mb-10 lg:mb-16">
          A short shelf, kept short on purpose. I only write one up once the
          idea has survived a few months of actually building with it.
        </Typography>

        <ul className="border-t border-lk-pink/40">
          {thoughtsList.map((entry) => (
            <li key={entry.id}>
              <ThoughtRow {...entry} />
            </li>
          ))}
        </ul>

        <Typography variant="link" className="mt-10 lg:mt-14">
          <Link
            href={allThoughtsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            See all on Medium
            <IconOpenInNew />
          </Link>
        </Typography>
      </RegularSection>
    </>
  );
}
