import { getTags } from "@/lib/utils";
import Link from "next/link";

export async function generateMetadata() {
  return {
    title: "Tags",
    description: "Different blog post categories",
    openGraph: {
      title: "Tags",
      description: "Different blog post categories",
      images: [
        // signOgImageUrl({
        //   title: "Blog Post Categories",
        //   brand: config.blog.name,
        // }),
      ],
    },
  };
}

export default async function Page() {
  const result = getTags();

  return (
    <section className="mx-auto max-w-5xl bg-black px-4 pt-24 text-left md:max-w-4xl md:px-10 md:py-16 lg:max-w-6xl">
      <div className="mb-12 mt-20 text-center">
        <h1 className="mb-2 text-5xl font-bold">Tags</h1>
        <p className="text-lg opacity-50">List of all tags</p>
      </div>
      <div className="my-10 mb-48 max-w-6xl text-balance text-center text-xl">
        {result.map((tag, idx) => (
          <Link
            key={idx}
            href={`/tag/${tag}`}
            className="mb-8 mr-3 inline-flex items-center rounded-full border border-transparent bg-white px-2 py-1 text-base font-semibold text-black transition-colors hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            #{tag}
          </Link>
        ))}
      </div>
    </section>
  );
}
