import { getPostCountByTag } from "@/lib/utils";
import Link from "next/link";
interface Props {
  text: string;
}

const Tag = ({ text }: Props) => {
  const numOfTags = getPostCountByTag(text);
  return (
    <Link
      href={`/tag/${text}`}
      className="mr-3 text-sm font-bold uppercase tracking-wide"
      aria-label={`View posts tagged ${text}`}
    >
      <span className="text-primary hover:opacity-70">{text.split(" ").join("-")} </span>{" "}
      <span className="text-sm font-semibold uppercase text-gray-600 dark:text-gray-300">{` (${numOfTags})`}</span>
    </Link>
  );
};

export default Tag;
