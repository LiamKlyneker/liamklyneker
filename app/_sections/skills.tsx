import { Typography } from "@/ui/atoms";
import { IconOpenInNew } from "@/ui/atoms/icons";
import { RegularSection, StickySection } from "@/ui/components";
import Link from "next/link";

export default function Skills() {
  return (
    <RegularSection bgColor="bg-lk-green">
      <Typography variant="h2" className="mb-10 lg:mb-24">
        Skiłłs
      </Typography>

      <ul className="mb-16 lg:mb-28 flex flex-col gap-3 lg:gap-6">
        <li>
          <Typography className="!text-black">
            Javascript <Typography variant="small">/ 9 years</Typography>
          </Typography>
        </li>
        <li>
          <Typography className="!text-black">
            React <Typography variant="small">/ 6 years</Typography>
          </Typography>
        </li>
        <li>
          <Typography className="!text-black">
            NextJS <Typography variant="small">/ 6 years</Typography>
          </Typography>
        </li>
        <li>
          <Typography className="!text-black">
            Typescript <Typography variant="small">/ 4 years</Typography>
          </Typography>
        </li>
        <li>
          <Typography className="!text-black">
            Server-less Techs <Typography variant="small">/ 3 years</Typography>
          </Typography>
        </li>
        <li>
          <Typography className="!text-black">
            UI/UX Design <Typography variant="small">/ 5 years</Typography>
          </Typography>
        </li>
      </ul>

      <Typography className="mb-8 lg:mb-16">
        In Liam&apos;s <span className="text-black">Github profile</span> you
        will know more about <span className="text-black">his skills</span> and
        what <span className="text-black">he can do</span> in some of his{" "}
        <span className="text-black">pinned repos</span>, all of them with{" "}
        <span className="text-black">live urls</span>.
      </Typography>

      <Link href="https://github.com/LiamKlyneker" target="_blank">
        <Typography variant="link">
          Go to Liam&apos;s Github
          <IconOpenInNew />
        </Typography>
      </Link>

      <Typography className="mt-16 lg:mt-40 lg:mb-20">
        But, his <span className="text-black">best work</span> till today is the
        following <span className="text-black">Highlighted Project</span>.
      </Typography>
    </RegularSection>
  );
}
