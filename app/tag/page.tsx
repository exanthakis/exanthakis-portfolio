import Tag from "@/components/ui/tag";
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

export default async function TagsPage() {
  const result = getTags();

  return (
    <section className="mx-auto max-w-5xl bg-black px-4 pt-24 text-left md:max-w-4xl md:px-10 md:py-16 lg:max-w-6xl">
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0 dark:divide-gray-700">
        <div className="space-x-2 pb-8 pt-6 md:space-y-5">
          <h1 className="md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl dark:text-gray-100">
            Tags
          </h1>
        </div>
        <div className="flex max-w-lg flex-wrap">
          {result.length === 0 && "No tags found."}
          {result.map((tag) => {
            return (
              <div key={tag} className="mb-2 mr-5 mt-2">
                <Tag text={tag} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
