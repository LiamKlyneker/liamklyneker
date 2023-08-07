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
      p: "text-3xl md:text-5xl xl:text-7xl font-normal -tracking-wide text-slate-400",
      "p-sm": "text-2xl font-normal -tracking-wide leading-tight text-black",
      "p-xs": "text-base font-normal -tracking-wide text-slate-400",
      h1: "text-7xl md:text-8xl lg:text-[7rem] lg:leading-[6.8rem] xl:text-[132px] font-normal -tracking-wider xl:leading-[124px]",
      h2: "text-2xl md:text-4xl xl:text-6xl font-bold -tracking-wide text-black",
      h5: "text-xl lg:text-3xl font-bold -tracking-wide text-black",
      h6: "text-sm font-semibold tracking-wider text-slate-400",
      link: "text-lg md:text-2xl xl:text-3xl -tracking-wide text-black hover:underline hover:bg-lk-turquoise [&>svg]:hover:scale-[1.05] w-fit",
      small: "text-slate-400 text-lg lg:text-4xl font-normal",
    },
  },
});
