import Link from "next/link";
import CoverImage from "./cover-image";
import { formatDate } from "@/lib/utils";

type PostCardProps = {
  title: string;
  summary: string;
  image: string;
  date: string;
  slug: string;
};

export function PostPreview({ title, summary, image, date, slug }: PostCardProps) {
  return (
    <div className="card-shadow flex h-full flex-col rounded-md">
      <div className="relative flex">
        <CoverImage slug={slug} title={title} src={image} />
      </div>
      <div className="flex flex-1 flex-col justify-start p-4">
        <h3 className="mb-3 text-lg leading-snug text-white">
          <Link href={`/blog/${slug}`} className="font-semibold hover:underline">
            {title}
          </Link>
        </h3>
        <div className="flex h-full flex-col gap-4 text-sm text-[#888]">
          <p>{summary}</p>
          <p className="mt-auto">{formatDate(date)}</p>
        </div>
      </div>
    </div>
  );
}
