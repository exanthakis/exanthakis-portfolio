import { BlogPosts } from "@/components/blog/posts";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section className="mx-auto max-w-5xl bg-black px-4 pt-24 text-left md:max-w-4xl md:px-10 md:py-16 lg:max-w-6xl">
      <h1 className="mb-8 text-2xl font-semibold">My Blog</h1>
      <BlogPosts />
    </section>
  );
}
