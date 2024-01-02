import { Typography } from "@/ui/atoms";
import { RegularSection } from "@/ui/components";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <div id="contact" className="pt-40 text-right flex justify-end">
        <h2 className="text-white -tracking-wider break-words md:break-normal whitespace-nowrap w-fit text-[12vw] lg:text-[9vw]">
          make_cøntact
        </h2>
      </div>
      <RegularSection lineColor="bg-black">
        <Typography variant="h6" className="mb-2 lg:mb-6">
          SEND ME AN EMAIL TO
        </Typography>
        <Typography className="!text-white mb-8 lg:mb-16 !text-2xl lg:!text-5xl">
          liamklyneker@gmail.com
        </Typography>

        <Typography variant="h6" className="mb-2 lg:mb-4">
          ALSO FIND ME ON
        </Typography>
        <div className="flex gap-2 mb-2">
          <Link href="https://linkedin.com/in/liamklyneker" target="_blank">
            <Typography className="!text-white hover:underline hover:bg-lk-turquoise">
              LinkedIn
            </Typography>
          </Link>
          <Typography className="!text-white">{" / "}</Typography>
          <Link href="https://github.com/liamklyneker" target="_blank">
            <Typography className="!text-white hover:underline hover:bg-lk-turquoise">
              Github
            </Typography>
          </Link>
        </div>

        <div className="flex flex-wrap gap-x-1">
          <Link href="https://dribbble.com/liamklyneker" target="_blank">
            <Typography variant="link">Dribbble</Typography>
          </Link>
          <Typography variant="h5">{" / "}</Typography>
          <Link href="https://behance.com/liamklyneker" target="_blank">
            <Typography variant="link">Behance</Typography>
          </Link>
          <Typography variant="h5">{" / "}</Typography>
          <Link href="https://medium.com/@liamklyneker" target="_blank">
            <Typography variant="link">Medium</Typography>
          </Link>
          <Typography variant="h5">{" / "}</Typography>
          <Link href="https://instagram.com/liamklyneker" target="_blank">
            <Typography variant="link">Instagram</Typography>
          </Link>
        </div>
      </RegularSection>
    </>
  );
}
