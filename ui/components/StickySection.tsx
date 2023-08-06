import { cx } from "class-variance-authority";
import { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren & {
  className?: string;
};

export function StickySection(props: SectionProps) {
  const { children, className } = props;

  return (
    <section className="min-h-screen p-4 lg:p-8 flex flex-col sticky top-0">
      <span className="absolute top-0 bottom-0 right-12 lg:right-40 w-1 lg:w-3 h-full bg-lk-pink" />
      <div className={cx("flex-1 rounded-xl bg-white", className)}>
        <div className="w-full max-w-screen-xl mx-auto pr-10 lg:pr-24 pl-4 lg:pl-8 pt-16 lg:pt-24 pb-32">
          {children}
        </div>
      </div>
    </section>
  );
}
