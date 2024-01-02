"use client";
import { useEffect, useRef, useState } from "react";

type FancySectionTitleProps = {
  title: string;
};

export function FancySectionTitle(props: FancySectionTitleProps) {
  const { title } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const [percentScrolled, setPercentScrolled] = useState<number>(0);

  const handleAnimationOnScroll = () => {
    const offsetTop = containerRef.current?.offsetTop;
    const offsetHeight = containerRef.current?.offsetHeight;
    if (
      offsetTop &&
      offsetHeight &&
      window.scrollY > offsetTop &&
      window.scrollY < offsetTop + offsetHeight
    ) {
      const percentScrolled =
        (window.scrollY - offsetTop) / (offsetHeight - window.innerHeight);
      setPercentScrolled(percentScrolled);
      if (percentScrolled > 0.5) {
        window.document.body.style.backgroundColor = "";
      } else {
        window.document.body.style.backgroundColor = "#FF034F";
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleAnimationOnScroll);
    return () => {
      window.removeEventListener("scroll", handleAnimationOnScroll);
    };
  }, []);

  const fontSizeCalc = (1 - percentScrolled) * 90;

  return (
    <div
      className="h-[300vh] pt-[100vh]"
      style={{ backgroundColor: `rgba(255, 3, 79, ${1 - percentScrolled})` }}
      ref={containerRef}
    >
      <div className="sticky top-[50vh] transform -translate-y-1/2 w-screen flex justify-end">
        <h2
          className="text-white -tracking-wider break-words md:break-normal whitespace-nowrap w-fit"
          style={{
            fontSize: `${fontSizeCalc >= 9 ? fontSizeCalc : 9}vw`,
          }}
        >
          {title}
        </h2>
      </div>
    </div>
  );
}
