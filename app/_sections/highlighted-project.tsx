import { featuresList } from "@/public/projects/neon-place/features-list";
import { Typography } from "@/ui/atoms";
import { IconOpenInNew } from "@/ui/atoms/icons";
import { ImagesCarousel, RegularSection } from "@/ui/components";
import { FancySectionTitle } from "@/ui/components/FancySectionTitle";
import Image from "next/image";
import Link from "next/link";

export default function HighlightedProject() {
  return (
    <>
      <FancySectionTitle title="highlighted_prøject" />
      <RegularSection id="projects">
        <Image
          src="/neon-place-logo.svg"
          alt="Neøn.Plāce"
          height={60}
          width={600}
          className="max-w-[250px] lg:max-w-[400px] mb-20"
        />

        <div className="lg:w-[75%] max-w-[700px] mb-8 lg:mb-16">
          <Typography>
            Neøn.Plāce is a{" "}
            <span className="text-white">minimalist app/tool</span> for{" "}
            <span className="text-white">searching places</span> to rent or buy,
            such as <span className="text-white">apartments</span>,{" "}
            <span className="text-white">offices</span>, and{" "}
            <span className="text-white">houses</span>.
          </Typography>
        </div>

        <Typography variant="link" className="text-white">
          <Link href={NEON_PLACE_URL} target="_blank">
            View site live
            <IconOpenInNew />
          </Link>
        </Typography>
      </RegularSection>

      <ImagesCarousel items={featuresList} />

      <RegularSection>
        <Typography variant="h2" className="text-white mb-3">
          Role
        </Typography>
        <Typography className="mb-12">
          UX/UI Designer &<br /> Full Stack Developer
        </Typography>

        <Typography variant="h2" className="text-white mb-4">
          Stack
        </Typography>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 mb-16">
          <ul className="flex flex-col gap-2">
            <li>
              <Typography>✺ NextJS</Typography>
            </li>
            <li>
              <Typography>✺ Typescript</Typography>
            </li>
            <li>
              <Typography>✺ Tailwind</Typography>
            </li>
            <li>
              <Typography>✺ RadixUI</Typography>
            </li>
            <li>
              <Typography>✺ Apollo React</Typography>
            </li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li>
              <Typography>✺ FaunaDB (GraphQL Client)</Typography>
            </li>
            <li>
              <Typography>✺ Auth0</Typography>
            </li>
            <li>
              <Typography>✺ Postmark Email Integration</Typography>
            </li>
            <li>
              <Typography>✺ Vercel</Typography>
            </li>
          </ul>
        </div>

        <Typography variant="h2" className="!text-white mb-4">
          Some Features
        </Typography>
        <ul className="flex flex-col gap-2 mb-40">
          <li>
            <Typography>⎔ Live mode listings creator.</Typography>
          </li>
          <li>
            <Typography>
              ⎔ GoogleMap integration to search properties.
            </Typography>
          </li>
          <li>
            <Typography>⎔ Auth0 integration.</Typography>
          </li>
          <li>
            <Typography>⎔ Email notifications with Postmark.</Typography>
          </li>
          <li>
            <Typography>
              ⎔ Easy and fast navigation between listings (SSR & ISR).
            </Typography>
          </li>
          <li>
            <Typography>
              ⎔ Listings table mode view for a better comparison.
            </Typography>
          </li>
          <li>
            <Typography>⎔ And more...</Typography>
          </li>
        </ul>

        <div className="pb-32 lg:pb-60 max-w-[75%]">
          <Typography>
            Full <span className="text-white">project showcase</span> with all
            the <span className="text-white">details</span> of its creation{" "}
            <span className="text-white">søøn</span>...
          </Typography>
        </div>
      </RegularSection>
    </>
  );
}

const NEON_PLACE_URL =
  "https://neon.place/s?orderBy=RECENT&placeId=ChIJJTSjnhnIBZERahU6nG5i478&address=Miraflores%2C+Per%C3%BA&ne_lat=-12.1028419&ne_lng=-77.0009369&sw_lat=-12.1401909&sw_lng=-77.05662989999999";
