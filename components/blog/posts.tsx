import { formatDate, getBlogPosts } from "@/lib/utils";
import Link from "next/link";
import { PostPreview } from "./post-preview";
import { motion } from "framer-motion";
import { Spotlight } from "../ui/spotlight";

export function BlogPosts() {
  let allBlogs = getBlogPosts();
  const preview = "list";

  return (
    <div
      className={`${preview === "list" ? "flex flex-col gap-2" : "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"}`}
    >
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          // <PostPreview
          //   key={post.slug}
          //   slug={post.slug}
          //   title={post.metadata.title}
          //   image={post.metadata.image}
          //   summary={post.metadata.summary}
          //   date={post.metadata.publishedAt}
          // />
          <Link
            key={post.slug}
            className="relative overflow-hidden rounded-2xl bg-zinc-600/30 p-[1px]"
            href={`/blog/${post.slug}`}
          >
            <Spotlight
              className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
              size={64}
            />
            <div className="relative flex h-full w-full flex-col space-x-0 rounded-[15px] bg-zinc-950 p-4 md:flex-row md:space-x-2">
              <p className="w-[100px] tabular-nums text-neutral-600 dark:text-neutral-400">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100">{post.metadata.title}</p>
            </div>
          </Link>
        ))}
    </div>
  );
}
