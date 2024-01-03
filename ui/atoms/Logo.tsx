import Link from "next/link";
import { cx } from "class-variance-authority";

type LogoProps = {
  size?: "small" | "medium" | "large";
};
export function Logo(props: LogoProps) {
  const { size = "medium" } = props;

  return (
    <Link href="/">
      <figure>
        <p className={cx("glitch", sizes[size])} data-text="⏃⎑⎅▽">
          ⏃⎑⎅▽
        </p>
      </figure>
    </Link>
  );
}

const sizes = {
  small:
    "text-sm md:text-xl relative left-0.5 text-lk-text-secondary glitch-small",
  medium: "text-xl md:text-[28px]",
  large: "text-6xl",
};
