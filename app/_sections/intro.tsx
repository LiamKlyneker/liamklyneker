import { Typography } from "@/ui/atoms";
import Image from "next/image";

export default function Intro() {
  return (
    <section className="min-h-[90vh] max-w-screen-xl mx-auto p-4 lg:p-8 sticky top-0 flex flex-col justify-center pt-20 lg:pt-32">
      <Typography variant="h1" className="!text-white mb-6">
        Hey there{" "}
        <span className="whitespace-nowrap">
          [x-n]<span className="text-lk-green">{"//"}</span>
        </span>{" "}
        <br /> I&apos;m Liam Klyneker P<span className="text-lk-pink">ø</span>
        rtfolio
      </Typography>
      <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-12">
        <Image
          src="/hieroglyphs.svg"
          alt="hieroglyphs"
          width={224}
          height={80}
          className="max-w-[100px] lg:max-w-none"
        />
        <Typography className="!text-white">
          Scro<span className="text-lk-turquoise">łł</span> to see what&apos;s
          the guy up to these days...
        </Typography>
      </div>
    </section>
  );
}
