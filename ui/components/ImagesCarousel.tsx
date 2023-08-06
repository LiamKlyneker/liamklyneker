"use client";

import Image from "next/image";

type ImagesCarouselProps = {
  items: {
    id: string;
    imageSrc: string;
    label: string;
  }[];
};

export function ImagesCarousel(props: ImagesCarouselProps) {
  const { items } = props;

  return (
    <section className="relative">
      <span className="absolute top-0 bottom-0 right-12 lg:right-40 w-1 lg:w-3 h-full bg-lk-pink" />
      <div
        className="flex py-8 px-4 lg:px-16 gap-6 overflow-x-scroll w-screen relative snap-x snap-mandatory scroll-pl-4 lg:scroll-pl-16 carousel"
        dir="ltr"
      >
        {items.map((item) => (
          <article
            key={item.id}
            className="bg-lk-blue h-[220px] min-w-[300px] lg:h-[600px] lg:min-w-[900px] snap-start rounded-lg overflow-hidden relative"
          >
            <picture>
              <Image
                src={item.imageSrc}
                alt={item.label}
                width={900}
                height={600}
                sizes="(min-width: 1024px) 900px, 300px"
                className="w-full h-full object-contain"
              />
            </picture>
          </article>
        ))}
      </div>
    </section>
  );
}
