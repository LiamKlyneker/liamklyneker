import { cx } from "class-variance-authority";
import { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren & {
  className?: string;
};

export function StickySection(props: SectionProps) {
  const { children, className } = props;

  return (
    <section className="min-h-screen p-4 lg:p-6 flex flex-col sticky top-0">
      <div
        className={cx(
          "flex-1 rounded-xl border-t-2 border-lk-text-secondary bg-black",
          className
        )}
      >
        <div className="w-full max-w-screen-xl mx-auto pr-10 md:pr-28 lg:pr-40 pl-4 lg:pl-8 pt-16 lg:pt-32 pb-24">
          {children}
        </div>
      </div>
    </section>
  );
}
