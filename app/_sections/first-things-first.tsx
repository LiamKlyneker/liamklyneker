import Link from "next/link";
import { Typography } from "@/ui/atoms";
import { IconTrendingFlat } from "@/ui/atoms/icons";
import { StickySection } from "@/ui/components";

export default function FirstThingsFirst() {
  return (
    <StickySection className="flex flex-col justify-center">
      <Typography variant="h2" className="mb-8 lg:mb-10">
        First Things First
      </Typography>
      <Typography className="!mb-12 lg:!mb-20">
        Liam is a <span className="text-black">Front End Engineer</span> with{" "}
        <span className="text-black">Full Stack</span> and{" "}
        <span className="text-black">Design</span> skills with more than{" "}
        <span className="text-black">8 years</span> of experience in the
        industry.
      </Typography>

      <Link scroll={false} href="?modal=journey">
        <Typography variant="link">
          See jøurney <IconTrendingFlat />
        </Typography>
      </Link>
    </StickySection>
  );
}
