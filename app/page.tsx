import Intro from "./_sections/intro";
import HighlightedProject from "./_sections/highlighted-project";
import Contact from "./_sections/contact";
import MoreCases from "./_sections/more-cases";
import Thoughts from "./_sections/thoughts";

export default function Home() {
  return (
    <main>
      <Intro />
      <HighlightedProject />
      <MoreCases />
      <Thoughts />
      <Contact />
    </main>
  );
}
