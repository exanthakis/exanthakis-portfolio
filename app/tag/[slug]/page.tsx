import { BlogPostsPagination } from "@/components/blog/blog-post-pagination";
import { PostPreview } from "@/components/blog/post-preview";
import { BlogPosts } from "@/components/blog/posts";
import Breadcrumb from "@/components/ui/breadcrumb";
import { getPosts } from "@/lib/utils";
import Link from "next/link";
import { TbCircleX, TbMathGreater } from "react-icons/tb";

interface Params {
  slug: string;
}

export async function generateMetadata(props: { params: Promise<Params> }) {
  const params = await props.params;

  const { slug } = params;

  return {
    title: `#${slug}`,
    description: `Posts tagged with #${slug}`,
  };
}

const Page = async (props: {
  params: Promise<Params>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const searchParams = await props.searchParams;
  const params = await props.params;

  const { slug } = params;

  const page = searchParams.page ? parseInt(searchParams.page as string) : 1;
  const result = getPosts({ limit: 6, tags: [slug], page });

  return (
    <section className="mx-auto max-w-5xl bg-black px-4 pt-16 text-left md:max-w-4xl md:px-10 lg:max-w-6xl">
      <Breadcrumb
        homeElement={"Home"}
        separator={<TbMathGreater className="size-2" />}
        activeClasses="!text-gray-300 hover:text-gray-100 pointer-events-none"
        containerClasses="flex py-5 items-center"
        listClasses="hover:text-gray-100 mx-2 font-bold text-gray-500 text-left text-sm "
        capitalizeLinks={true}
        articleTitle={slug}
      />
      <Link href="/tag">
        <div className="mb-8 inline-flex items-center rounded-full border border-transparent bg-white px-2 py-1 text-xs font-semibold text-black transition-colors hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-offset-2">
          <TbCircleX className="mr-2 inline-block h-4 w-4" />
          Posts tagged with <strong className="mx-2">#{slug}</strong>{" "}
        </div>
      </Link>

      <BlogPosts posts={result.posts} />
      {(result.pagination.nextPage || result.pagination.prevPage) && (
        <BlogPostsPagination pagination={result.pagination} basePath={`/tag/${slug}/?page=`} />
      )}
    </section>
  );
};

export default Page;
