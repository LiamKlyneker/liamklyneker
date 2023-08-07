"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "../atoms";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const onMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-10 data-[active=true]:bg-black"
      data-active={isMobileMenuOpen}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 md:px-8 lg:px-10 pr-6 py-8 lg:py-12">
        <Logo />
        <button
          className="p-4 flex flex-col gap-3 [&>span]:hover:bg-lk-pink active:scale-95"
          onClick={onMobileMenuClick}
        >
          <span
            className="block relative h-[3px] w-8 lg:w-10 bg-white data-[active=true]:transform data-[active=true]:rotate-45 data-[active=true]:translate-y-[4px]"
            data-active={isMobileMenuOpen}
          />
          <span
            className="block relative h-[3px] w-8 lg:w-10 bg-white data-[active=true]:transform data-[active=true]:rotate-[-45deg] data-[active=true]:-translate-y-[16px]"
            data-active={isMobileMenuOpen}
          />
        </button>
      </div>
      {/* <nav className="hidden w-full justify-end px-8 py-16"> */}
      <nav
        className="hidden data-[active=true]:block"
        data-active={isMobileMenuOpen}
      >
        <ul className="flex flex-col gap-5 md:gap-7 xl:gap-12 justify-center items-end h-[calc(100vh-114px)] pb-32 pr-8 lg:pr-16 max-w-screen-xl mx-auto">
          <li>
            <Link
              href="/#projects"
              className="font-light text-4xl md:text-5xl xl:text-7xl pl-10 hover:underline hover:bg-lk-pink"
              onClickCapture={onMobileMenuClick}
            >
              _prøjects
            </Link>
          </li>
          <li>
            <Link
              href="/#contact"
              className="font-light text-4xl md:text-5xl xl:text-7xl pl-10 hover:underline hover:bg-lk-pink"
              onClickCapture={onMobileMenuClick}
            >
              _cøntact
            </Link>
          </li>
          <li>
            <Link
              href="/liam-klyneker-resume.pdf"
              target="_blank"
              rel="noreferrer"
              type="application/pdf"
              className="font-light text-4xl md:text-5xl xl:text-7xl pl-10 hover:underline hover:bg-lk-pink"
            >
              _resume//cv
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
