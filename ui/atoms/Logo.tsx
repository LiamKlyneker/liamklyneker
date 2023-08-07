import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <figure>
        <p className="line-through text-2xl md:text-3xl">[⏃⎑⎅▽]</p>
      </figure>
    </Link>
  );
}
