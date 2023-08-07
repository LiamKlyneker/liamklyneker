import { Typography } from "@/ui/atoms";
import { IconDownload } from "@/ui/atoms/icons";
import { RegularSection } from "@/ui/components";
import Link from "next/link";

export default function Contact() {
  return (
    <RegularSection id="contact" bgColor="bg-white" lineColor="bg-lk-turquoise">
      <Typography variant="h2" className="mb-20">
        Make Cøntact
      </Typography>

      <Typography className="break-words !text-black mb-8">
        liamklyneker
        <br className="sm:hidden" />
        @gmail.com
      </Typography>
      <div className="flex gap-2 mb-2">
        <Link href="https://linkedin.com/in/liamklyneker" target="_blank">
          <Typography className="!font-bold !text-black hover:underline hover:bg-lk-turquoise">
            LinkedIn
          </Typography>
        </Link>
        <Typography className="!font-bold !text-black">{" / "}</Typography>
        <Link href="https://github.com/liamklyneker" target="_blank">
          <Typography className="!font-bold !text-black hover:underline hover:bg-lk-turquoise">
            Github
          </Typography>
        </Link>
      </div>

      <div className="flex flex-wrap gap-x-2 mb-20">
        <Link href="https://dribbble.com/liamklyneker" target="_blank">
          <Typography variant="link" className="font-bold">
            Dribbble
          </Typography>
        </Link>
        <Typography variant="h5">{" / "}</Typography>
        <Link href="https://behance.com/liamklyneker" target="_blank">
          <Typography variant="link" className="font-bold">
            Behance
          </Typography>
        </Link>
        <Typography variant="h5">{" / "}</Typography>
        <Link href="https://medium.com/@liamklyneker" target="_blank">
          <Typography variant="link" className="font-bold">
            Medium
          </Typography>
        </Link>
        <Typography variant="h5">{" / "}</Typography>
        <Link href="https://instagram.com/liamklyneker" target="_blank">
          <Typography variant="link" className="font-bold">
            Instagram
          </Typography>
        </Link>
      </div>

      <Link
        href="/liam-klyneker-resume.pdf"
        target="_blank"
        rel="noreferrer"
        type="application/pdf"
      >
        <Typography variant="link">
          Download Resume/CV
          <IconDownload />
        </Typography>
      </Link>
    </RegularSection>
  );
}
