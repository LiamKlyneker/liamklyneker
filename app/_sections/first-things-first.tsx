"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { Typography } from "@/ui/atoms";
import { IconTrendingFlat } from "@/ui/atoms/icons";
import { StickySection } from "@/ui/components";

export default function FirstThingsFirst() {
  const containerRef = useRef<HTMLDivElement>(null);

  const titleObserverCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        window.document.body.classList.add("pink-background");
        window.document.body.style.backgroundColor = "#FF034F";
      } else if (
        window.scrollY < 500 ||
        window.scrollY > window.innerHeight * 3
      ) {
        window.document.body.style.backgroundColor = "";
        window.document.body.classList.remove("pink-background");
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(titleObserverCallback, {
      threshold: 0.3,
    });
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef.current]);

  return (
    <div ref={containerRef} className="relative z-20 showFirstThingsFirst">
      <StickySection className="flex flex-col justify-end">
        <div className="lg:w-[75%] max-w-[700px]">
          <Typography className="mb-8">
            With more than <span className="text-white">9 years</span> of
            experience in the industry, I possess a special{" "}
            <span className="text-white">set of skills to design and code</span>{" "}
            software for start-ups and large enterprises in a{" "}
            <span className="text-white">fast and scalable way</span>.
          </Typography>
          <Typography className="mb-12">
            Some of the companies I have collaborated with and worked for across
            the world include <span className="text-white">Schmiede.one</span>,{" "}
            <span className="text-white">Bejamas</span>,{" "}
            <span className="text-white">Amazon</span>, and{" "}
            <span className="text-white">Keller Williams</span>.
          </Typography>
        </div>

        <Typography variant="link">
          <Link scroll={false} href="?modal=journey">
            See jøurney <IconTrendingFlat />
          </Link>
        </Typography>
      </StickySection>
    </div>
  );
}
