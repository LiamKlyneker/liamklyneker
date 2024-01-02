import Intro from "./_sections/intro";
import FirstThingsFirst from "./_sections/first-things-first";
import Skills from "./_sections/skills";
import HighlightedProject from "./_sections/highlighted-project";
import Contact from "./_sections/contact";
import { PageProps } from "@/.next/types/app/page";
import JourneyModal from "./_sections/journey-modal";
import MoreCases from "./_sections/more-cases";

export default function Home(props: PageProps) {
  const { searchParams } = props;

  return (
    <main>
      <div>
        <Intro />
        <FirstThingsFirst />
      </div>
      <HighlightedProject />
      <MoreCases />
      <Contact />

      {searchParams?.modal === "journey" && <JourneyModal />}
    </main>
  );
}
