import { craftList } from "@/public/craft-list";
import { ProjectCard, RegularSection } from "@/ui/components";
import { FancySectionTitle } from "@/ui/components/FancySectionTitle";

export default function HighlightedProject() {
  return (
    <>
      {/* TODO(#28): placeholder section title. */}
      <FancySectionTitle title="crāft" />
      <RegularSection id="projects">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 pb-32 lg:pb-60">
          {craftList.map((entry) => (
            <li
              key={entry.id}
              className={entry.size === "featured" ? "lg:col-span-2" : ""}
            >
              <ProjectCard {...entry} />
            </li>
          ))}
        </ul>
      </RegularSection>
    </>
  );
}
