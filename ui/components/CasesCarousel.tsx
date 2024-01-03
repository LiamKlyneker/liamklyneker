"use client";

import Image from "next/image";
import { Typography } from "../atoms";
import Link from "next/link";

type CasesCarouselProps = {
  items: {
    id: string;
    imageSrc: string;
    name?: string;
    type: string;
    url: string;
  }[];
};

export function CasesCarousel(props: CasesCarouselProps) {
  const { items } = props;

  return (
    <section
      className="flex py-8 px-4 lg:px-16 lg:py-16 gap-6 overflow-x-scroll w-screen relative snap-x snap-mandatory scroll-pl-4 lg:scroll-pl-8 xl:scroll-pl-16 carousel carousel--green"
      dir="ltr"
    >
      {items.map((item) => (
        <Link
          href={item.url}
          target="_blank"
          key={item.id}
          className="snap-center"
        >
          <article className="bg-black h-[220px] min-w-[300px] md:h-[400px] md:min-w-[500px] lg:h-[600px] lg:min-w-[900px] snap-start rounded-lg overflow-hidden relative border border-lk-green grid place-items-center hover:bg-lk-green transition-all group">
            {/* <picture>
            <Image
              src={item.imageSrc}
              alt={item.name}
              width={900}
              height={600}
              sizes="(min-width: 1024px) 900px, 300px"
              className="w-full h-full object-contain hidden"
            />
          </picture> */}
            <div className="text-center grid gap-4 p-4 group-hover:scale-105 transition-all">
              {item.name && (
                <Typography
                  variant="h6"
                  className="!text-white group-hover:!text-black"
                >
                  {item.name}
                </Typography>
              )}
              <Typography
                variant="h6"
                className="!text-white group-hover:!text-black"
              >
                {item.type}
              </Typography>
            </div>
            <Typography
              variant="h6"
              className="!text-black absolute w-full bottom-8 text-center"
            >
              ⎶ SEE FULL CASE ▶︎
            </Typography>
          </article>
        </Link>
      ))}
    </section>
  );
}
