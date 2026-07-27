import { craftList } from "@/public/craft-list";
import { ProjectCard, RegularSection } from "@/ui/components";
import { FancySectionTitle } from "@/ui/components/FancySectionTitle";

export default function HighlightedProject() {
  return (
    <>
      {/* TODO(#28): placeholder section title. */}
      <FancySectionTitle title="crāft" />
      <RegularSection id="projects">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 pb-32 lg:pb-60">
          {craftList.map(({ id, columnSpan, ...card }) => (
            <li
              key={id}
              // `columnSpan` is layout and stops here; the card only ever sees
              // its own anatomy props.
              className={
                columnSpan === "full" ? "md:col-span-2 lg:col-span-3" : ""
              }
            >
              <ProjectCard {...card} />
            </li>
          ))}
        </ul>
      </RegularSection>
    </>
  );
}
