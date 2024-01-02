import { cx } from "class-variance-authority";
import { IconProps } from ".";

export function IconFavorite(props: IconProps) {
  const { size = "md" } = props;

  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      className={cx("inline-block", {
        "mx-1 w-5 h-5 lg:w-5 lg:h-5": size === "sm",
        "mx-2 w-8 h-8 lg:w-10 lg:h-10": size === "md",
      })}
    >
      <g clipPath="url(#clip0_230_5)">
        <path
          d="M20 35.5833L17.5833 33.3833C8.99998 25.6 3.33331 20.4667 3.33331 14.1667C3.33331 9.03333 7.36665 5 12.5 5C15.4 5 18.1833 6.35 20 8.48333C21.8166 6.35 24.6 5 27.5 5C32.6333 5 36.6666 9.03333 36.6666 14.1667C36.6666 20.4667 31 25.6 22.4166 33.4L20 35.5833Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_230_5">
          <rect width="40" height="40" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
}
