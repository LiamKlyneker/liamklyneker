"use client";

import { useEffect, useState } from "react";

type GlitchTitleProps = {
  title: string;
};
export function GlitchTitle(props: GlitchTitleProps) {
  const { title } = props;
  const [titleToGlitch, setTitleToGlitch] = useState(title);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * title.length);
      const randomCharacter = title[randomIndex];
      const newTitle = title.replace(
        randomCharacter,
        crypticCharacters[Math.floor(Math.random() * crypticCharacters.length)]
      );
      setTitleToGlitch(newTitle);
    }, 900);
    return () => clearInterval(interval);
  }, [titleToGlitch]);

  return (
    <h2 className="text-white -tracking-wider break-words md:break-normal whitespace-nowrap w-fit text-[12vw] lg:text-[9vw]">
      {titleToGlitch}
    </h2>
  );
}

const crypticCharacters = ["⎍", "⎎", "⎒", "⌭", "⌿", "⍅", "⍆", "⌿", "⌶"];
