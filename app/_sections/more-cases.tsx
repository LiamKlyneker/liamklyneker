import Link from "next/link";
import { casesList } from "@/public/projects/neon-place/features-list";
import { Typography } from "@/ui/atoms";
import { IconOpenInNew } from "@/ui/atoms/icons";
import { RegularSection } from "@/ui/components";
import { CasesCarousel } from "@/ui/components/CasesCarousel";

export default function MoreCases() {
  return (
    <>
      <div className="text-right flex justify-end">
        <h2 className="text-white -tracking-wider break-words md:break-normal whitespace-nowrap w-fit text-[12vw] lg:text-[9vw]">
          more_cases
        </h2>
      </div>
      <CasesCarousel items={casesList} />
      <RegularSection>
        <div className="max-w-[800px] mb-12">
          <Typography>
            Also, on my <span className="!text-white">GitHub profile</span>, you
            can learn more about my{" "}
            <span className="!text-white">coding skills</span> through some of
            my pinned repositories, all of which have{" "}
            <span className="!text-white">live URLs</span>.
          </Typography>
        </div>
        <Link href="https://github.com/LiamKlyneker" target="_blank">
          <Typography variant="link">
            Go to Liam&apos;s Github
            <IconOpenInNew />
          </Typography>
        </Link>
      </RegularSection>
    </>
  );
}
