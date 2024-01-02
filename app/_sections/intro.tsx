import { Typography } from "@/ui/atoms";
import Link from "next/link";

export default function Intro() {
  return (
    <section className="min-h-[88vh] max-w-screen-xl mx-auto px-8 md:px-10 sticky top-0 flex flex-col justify-end pt-20 pb-20">
      <Typography variant="small">⏃⎑⎅▽</Typography>
      <Typography className="mb-2 lg:mb-4 !text-2xl lg:!text-4xl !font-normal">
        LiamKlyneker
      </Typography>
      <div className="flex flex-col md:flex-row md:items-end gap-8 lg:gap-8 xl:gap-12 md:justify-between">
        <Typography
          variant="h1"
          className="!text-white -ml-2 max-w-[450px] lg:!text-[120px]"
        >
          Design Engineer
        </Typography>
        <div className="flex gap-3 pb-1">
          <Typography className="!text-lk-pink">✺</Typography>
          <Typography className="max-w-[460px]">
            I translate pixels and code into software for humans.
            <Link href="/#contact" className="block">
              <Typography
                variant="small"
                className="hover:underline !font-light"
              >
                make_cøntact
              </Typography>
            </Link>
          </Typography>
        </div>
      </div>
    </section>
  );
}
