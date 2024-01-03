import { PropsWithChildren } from "react";
import { cva, VariantProps } from "class-variance-authority";

type TypographyProps = PropsWithChildren &
  VariantProps<typeof typographyStyles> & {
    variant?:
      | "p"
      | "p-sm"
      | "p-xs"
      | "h1"
      | "h2"
      | "h5"
      | "h6"
      | "link"
      | "small";
    className?: string;
  };

export function Typography(props: TypographyProps) {
  const { variant = "p", children, className } = props;
  const classNames = typographyStyles({ variant, class: className });

  if (variant === "h1") return <h1 className={classNames}>{children}</h1>;
  if (variant === "h2") return <h2 className={classNames}>{children}</h2>;
  if (variant === "h5") return <h5 className={classNames}>{children}</h5>;
  if (variant === "h6") return <h6 className={classNames}>{children}</h6>;
  if (variant === "small")
    return <small className={classNames}>{children}</small>;

  return <p className={classNames}>{children}</p>;
}

const typographyStyles = cva("[text-wrap:balance]", {
  variants: {
    variant: {
      p: "text-lg lg:text-3xl lg:leading-snug font-light -tracking-wide text-lk-text-secondary text-balance",
      "p-sm": "text-2xl font-normal -tracking-wide leading-tight text-black",
      "p-xs": "text-base font-normal -tracking-wide text-lk-text-secondary",
      h1: "text-7xl lg:text-8xl font-normal -tracking-wider",
      h2: "text-2xl font-bold -tracking-wide text-black",
      h5: "text-xl lg:text-3xl font-light -tracking-wide text-white",
      h6: "text-[10px] lg:text-xs font-normal tracking-[2px] lg:tracking-[4px] text-lk-text-secondary",
      link: "text-lg lg:text-2xl font-light -tracking-wide text-white underline hover:bg-lk-turquoise [&>svg]:hover:scale-[1.05] w-fit",
      small: "text-lk-text-secondary text-lg lg:text-2xl font-normal",
    },
  },
});
