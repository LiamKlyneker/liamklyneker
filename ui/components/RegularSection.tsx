import { cx } from "class-variance-authority";
import { PropsWithChildren } from "react";

type RegularSectionProps = PropsWithChildren<{
  bgColor?: string;
  lineColor?: string;
  id?: string;
}>;

export function RegularSection(props: RegularSectionProps) {
  const {
    children,
    bgColor = "bg-black",
    lineColor = "bg-lk-pink",
    id,
  } = props;

  return (
    <section
      className={cx("relative flex flex-col justify-center", bgColor)}
      id={id}
    >
      <span
        className={cx(
          "absolute top-0 bottom-0 right-12 md:right-24 lg:right-28 xl:right-52 w-1 h-full",
          lineColor
        )}
      />
      <div className="w-full max-w-screen-xl mx-auto pl-4 lg:pl-8 pr-20 md:pr-32 lg:pr-40 pb-20 pt-32">
        {children}
      </div>
    </section>
  );
}
