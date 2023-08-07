import { featuresList } from "@/public/projects/neon-place/features-list";
import { Typography } from "@/ui/atoms";
import { IconOpenInNew } from "@/ui/atoms/icons";
import { ImagesCarousel, RegularSection } from "@/ui/components";
import Image from "next/image";
import Link from "next/link";

export default function HighlightedProject() {
  return (
    <>
      <RegularSection id="projects">
        <div className="py-40 lg:py-60 mb-16">
          <Typography
            variant="h1"
            className="!text-white break-words md:break-normal xl:whitespace-nowrap"
          >
            Highlighted Prøject
          </Typography>
        </div>

        <Image
          src="/neon-place-logo.svg"
          alt="Neøn.Plāce"
          height={60}
          width={600}
          className="max-w-[250px] lg:max-w-[600px] mb-20"
        />

        <Typography className="mb-8 lg:mb-16">
          Neøn.Plāce is a{" "}
          <span className="text-white">minimalist app/tool</span> for{" "}
          <span className="text-white">searching places</span> to rent or buy,
          such as <span className="text-white">apartments</span>,{" "}
          <span className="text-white">offices</span>, and{" "}
          <span className="text-white">houses</span>.
        </Typography>

        <Link href={NEON_PLACE_URL} target="_blank">
          <Typography variant="link" className="text-white">
            View site live
            <IconOpenInNew />
          </Typography>
        </Link>

        <Typography
          variant="h2"
          className="text-white mt-16 lg:mt-28 mb-3 lg:mb-8"
        >
          Role
        </Typography>
        <Typography className="mb-12 lg:mb-28">
          UX/UI Designer &<br /> Full Stack Developer
        </Typography>

        <Typography variant="h2" className="text-white mb-4 lg:mb-12">
          Stack
        </Typography>
        <ul className="mb-4 lg:mb-12 flex flex-col gap-2 lg:gap-6">
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
        <ul className=" flex flex-col gap-2 lg:gap-6">
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
      </RegularSection>

      <ImagesCarousel items={featuresList} />

      <RegularSection>
        <Typography variant="h2" className="!text-white mb-4 lg:mb-12">
          Some Features
        </Typography>
        <ul className="flex flex-col gap-2 lg:gap-8 mb-48">
          <li>
            <Typography>Live mode listings creator.</Typography>
          </li>
          <li>
            <Typography>GoogleMap integration to search properties.</Typography>
          </li>
          <li>
            <Typography>Auth0 integration.</Typography>
          </li>
          <li>
            <Typography>Email notifications with Postmark.</Typography>
          </li>
          <li>
            <Typography>
              Easy and fast navigation between listings (SSR & ISR).
            </Typography>
          </li>
          <li>
            <Typography>
              Listings table mode view for a better comparison.
            </Typography>
          </li>
          <li>
            <Typography>And more...</Typography>
          </li>
        </ul>

        {/* <div className="py-6 lg:py-24 border-lk-blue border-t-4 lg:border-t-8 border-b-4 lg:border-b-8 mb-8 lg:mb-16">
          <Typography
            variant="h2"
            className="!text-white opacity-50 mb-3 lg:mb-16"
          >
            From Liam
          </Typography>
          <p className="text-lg lg:text-5xl font-light text-slate-400 opacity-50 lg:leading-snug -tracking-wide">
            The back-end part of this project was really challenging as I
            don&#39;t consider myself a full-stack developer or at least this
            was the first project where I perform that role. However, I am a
            fast learner and I am willing to figure out a way to solve a problem
            if I don&#39;t know something. For this project I spent my time
            learning FQL, FaunaDB&#39;s language for fine-tuning my GraphQL
            queries. This allowed me to fetch items inside specific map
            coordinates and also allowed me to add filters, order data, and
            more. On top of that, the integration with Auth0 and Postmark gave
            me a full picture of how all the gears of an app work together. It
            was amazing!.
            <br />
            <br /> When things are difficult in life and stuff, I feel
            encouraged by the fact that I managed to figure out the back-end
            challenges of this project and make it to work properly.
          </p>
        </div> */}

        <div className="pb-32 lg:pb-60">
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
