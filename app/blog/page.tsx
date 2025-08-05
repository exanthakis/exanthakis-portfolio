import { BlogPostsPagination } from "@/components/blog/blog-post-pagination";
import { BlogPosts } from "@/components/blog/posts";
import { getPosts } from "@/lib/utils";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

const Page = async (props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const searchParams = await props.searchParams;

  const page = searchParams.page ? parseInt(searchParams.page as string) : 1;

  const result = getPosts({ limit: 6, page });
  return (
    <section className="mx-auto max-w-5xl bg-black px-4 pt-24 text-left md:max-w-4xl md:px-10 md:py-16 lg:max-w-6xl">
      <h1 className="mb-8 text-2xl font-semibold">My Blog</h1>
      <BlogPosts posts={result.posts} />
      {(result.pagination.nextPage || result.pagination.prevPage) && (
        <BlogPostsPagination pagination={result.pagination} basePath={`/blog/?page=`} />
      )}
    </section>
  );
};

export default Page;
