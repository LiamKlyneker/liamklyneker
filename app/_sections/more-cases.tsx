import Link from "next/link";
import { casesList } from "@/public/projects/neon-place/features-list";
import { Typography } from "@/ui/atoms";
import { IconOpenInNew } from "@/ui/atoms/icons";
import { RegularSection } from "@/ui/components";
import { CasesCarousel } from "@/ui/components/CasesCarousel";
import { GlitchTitle } from "@/ui/components/GlitchTitle";

export default function MoreCases() {
  return (
    <>
      <div className="text-right flex justify-end pt-32">
        <GlitchTitle title="more_cases" />
      </div>
      <CasesCarousel items={casesList} />
      <RegularSection lineColor="to-black">
        <div className="max-w-[800px] mb-12 pt-16 pb-32">
          <Typography className="mb-12">
            Also, on my <span className="!text-white">GitHub profile</span>, you
            can learn more about my{" "}
            <span className="!text-white">coding skills</span> through some of
            my pinned repositories, all of which have{" "}
            <span className="!text-white">live URLs</span>.
          </Typography>
          <Typography variant="link">
            <Link href="https://github.com/LiamKlyneker" target="_blank">
              Go to my Github Profile
              <IconOpenInNew />
            </Link>
          </Typography>
        </div>
      </RegularSection>
    </>
  );
}
