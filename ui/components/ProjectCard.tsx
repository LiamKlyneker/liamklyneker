import { cx } from "class-variance-authority";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "../atoms";

type ProjectCardProps = {
  /**
   * `featured` is full-width and image-led; `compact` is a card in the grid
   * flow. Column span is the grid's call — this only drives the card anatomy.
   */
  size?: "featured" | "compact";
  title: string;
  oneLiner: string;
  /** The real thing's URL. Baseline destination when `detailPath` is unset. */
  url: string;
  /** Optional internal detail route (#36). Wins over `url` when present. */
  detailPath?: string;
  /** Optional — skill cards carry no imagery. */
  image?: {
    src: string;
    alt: string;
  };
};

export function ProjectCard(props: ProjectCardProps) {
  const { size = "compact", title, oneLiner, url, detailPath, image } = props;
  const isFeatured = size === "featured";

  // One optional field, no special cases: the detail route wins when it exists,
  // otherwise the entry falls through to the real thing's URL. Whether the
  // destination opens in a new tab is read off the *resolved* href rather than
  // off which field it came from, so an entry whose baseline url is internal
  // still behaves correctly.
  const href = detailPath ?? url;
  const isExternal = /^[a-z]+:\/\//i.test(href);
  const externalLinkProps = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link href={href} {...externalLinkProps} className="group block h-full">
      <article
        className={cx(
          "h-full flex flex-col rounded-lg border border-lk-pink bg-black overflow-hidden transition-colors hover:bg-lk-pink",
          isFeatured ? "p-4 lg:p-6" : "p-6 lg:p-8"
        )}
      >
        {image && (
          // Fixed aspect ratio so a slow image never collapses the card.
          <div
            className={cx(
              "relative w-full overflow-hidden rounded-md bg-lk-blue",
              isFeatured
                ? "aspect-[16/10] mb-8 lg:mb-12"
                : "aspect-[16/10] mb-6"
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={
                isFeatured
                  ? "(min-width: 1024px) 1000px, 100vw"
                  : "(min-width: 1024px) 500px, 100vw"
              }
              className="object-cover"
            />
          </div>
        )}

        <div className={cx("flex flex-col", isFeatured && "px-2 lg:px-4")}>
          <Typography
            variant="h5"
            className={cx(
              "!text-white group-hover:!text-black transition-colors",
              isFeatured && "!text-4xl lg:!text-7xl !font-normal"
            )}
          >
            {title}
          </Typography>

          <Typography
            variant={isFeatured ? "p" : "p-xs"}
            className={cx(
              "mt-3 lg:mt-4 group-hover:!text-black transition-colors",
              isFeatured && "lg:!text-2xl"
            )}
          >
            {oneLiner}
          </Typography>

          <Typography
            variant="h6"
            className={cx(
              "mt-6 lg:mt-8 !text-lk-pink group-hover:!text-black transition-colors",
              isFeatured && "lg:mt-10"
            )}
          >
            {isExternal ? "⌿ VIEW IT LIVE ▶︎" : "⌿ SEE THE CASE ▶︎"}
          </Typography>
        </div>
      </article>
    </Link>
  );
}
