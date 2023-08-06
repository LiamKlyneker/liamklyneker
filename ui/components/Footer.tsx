import Image from "next/image";
import { IconFavorite } from "../atoms/icons";

export function Footer() {
  return (
    <footer className="bg-lk-turquoise text-white">
      <div className="max-w-screen-xl mx-auto py-16 px-4 lg:px-10 pr-20">
        <Image
          src="/hieroglyphs-black.svg"
          alt="hieroglyphs"
          width={224}
          height={80}
          className="max-w-[75px] lg:max-w-[100px] mb-2 lg:mb-4"
        />
        <p className="text-base lg:text-xl text-black -tracking-wide">
          Pørtfolio designed and coded by me with a lot of{" "}
          <span className="relative -top-1">
            <IconFavorite size="sm" />
          </span>{" "}
          in some part of planet Earth.
        </p>
      </div>
    </footer>
  );
}
