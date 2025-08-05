import { notFound } from "next/navigation";
import { baseUrl } from "@/app/sitemap";
import { CustomMDX } from "@/components/mdx";
import { formatDate, getBlogPosts } from "@/lib/utils";
import Breadcrumb from "@/components/ui/breadcrumb";
import { TbMathGreater } from "react-icons/tb";
import CoverImage from "@/components/blog/cover-image";
import Link from "next/link";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: BlogPageProps) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let { title, publishedAt: publishedTime, summary: description, image } = post.metadata;
  let ogImage = image ? image : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Blog({ params }: BlogPageProps) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const parsedTags: string[] = post.metadata.tags ? JSON.parse(post.metadata.tags) : [];

  return (
    <section className="mx-auto max-w-5xl bg-black px-4 pt-16 text-left md:max-w-4xl md:px-10 lg:max-w-6xl">
      <Breadcrumb
        homeElement={"Home"}
        separator={<TbMathGreater className="size-2" />}
        activeClasses="!text-gray-300 hover:text-gray-100 pointer-events-none"
        containerClasses="flex py-5 items-center"
        listClasses="hover:text-gray-100 mx-2 font-bold text-gray-500 text-left text-sm "
        capitalizeLinks={true}
        articleTitle={post.metadata.title}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "My Portfolio",
            },
          }),
        }}
      />
      <h1 className="title text-2xl font-semibold">{post.metadata.title}</h1>
      <div className="mb-8 mt-2 flex items-center justify-between text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      {post.metadata.image && <CoverImage src={post.metadata.image} title={post.metadata.title} />}
      <article className="prose leading-6">
        <CustomMDX source={post.content} />
      </article>
      {parsedTags?.map((tag, idx) => (
        <div key={idx} className="mr-2 inline-block text-gray-500 underline">
          <Link href={`/tag/${tag}`}>#{tag}</Link>
        </div>
      ))}
    </section>
  );
}
