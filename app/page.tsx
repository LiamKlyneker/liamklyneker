import Intro from "./_sections/intro";
import FirstThingsFirst from "./_sections/first-things-first";
import Skills from "./_sections/skills";
import HighlightedProject from "./_sections/highlighted-project";
import Contact from "./_sections/contact";
import JourneyModal from "./_sections/journey-modal";
import MoreCases from "./_sections/more-cases";

export default async function Home(props: PageProps<"/">) {
  const searchParams = await props.searchParams;

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
