import Link from "next/link";
import { Typography } from "../atoms";

type ThoughtRowProps = {
  title: string;
  oneLiner: string;
  /**
   * The article's URL. Always off-site, so the row is unconditionally a
   * new-tab link — there is no internal-route case to resolve here.
   */
  url: string;
};

/**
 * One published piece: title, one-liner, external href. That is the whole
 * anatomy — deliberately no date, no read-time and no stat badge, so a shelf
 * of one row reads the same as a shelf of three.
 */
export function ThoughtRow(props: ThoughtRowProps) {
  const { title, oneLiner, url } = props;

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-12 border-b border-lk-pink/40 px-4 py-8 lg:px-6 lg:py-10 transition-colors hover:bg-lk-pink"
    >
      <div className="flex flex-col lg:max-w-[70%]">
        <Typography
          variant="h5"
          className="!text-white group-hover:!text-black transition-colors"
        >
          {title}
        </Typography>
        <Typography
          variant="p-xs"
          className="mt-3 group-hover:!text-black transition-colors"
        >
          {oneLiner}
        </Typography>
      </div>

      <Typography
        variant="h6"
        className="shrink-0 !text-lk-pink group-hover:!text-black transition-colors"
      >
        ⌿ READ ON MEDIUM ▶︎
      </Typography>
    </Link>
  );
}
