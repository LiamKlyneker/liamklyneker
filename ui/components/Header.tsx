"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "../atoms";

export function Header() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > window.innerHeight - 125) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 opacity-0 data-[active=true]:opacity-100 transition-all duration-300 ease-in-out"
      data-active={showHeader}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-8 py-8 lg:py-16 font-light">
        <Logo />
        <Link
          href="/#contact"
          className="hover:underline hover:bg-lk-pink text-sm lg:text-base"
        >
          make_cøntact
        </Link>
      </div>
    </header>
  );
}
