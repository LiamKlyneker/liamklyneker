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
        window.document.body.style.backgroundColor = "#FF034F";
      } else if (window.scrollY < 200) {
        window.document.body.style.backgroundColor = "";
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
    <div ref={containerRef}>
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
            Some of the companies I have collaborated and worked with across the
            world are <span className="text-white">Schmiede.one</span>,{" "}
            <span className="text-white">Bejamas</span>,{" "}
            <span className="text-white">Amazon</span>, and{" "}
            <span className="text-white">Keller Williams</span>.
          </Typography>
        </div>

        <Link scroll={false} href="?modal=journey">
          <Typography variant="link">
            See jøurney <IconTrendingFlat />
          </Typography>
        </Link>
      </StickySection>
    </div>
  );
}
