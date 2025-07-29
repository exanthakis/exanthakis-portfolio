import { BlogPosts } from "@/components/blog/posts";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section className="mx-auto max-w-5xl px-0 pt-10 text-left md:max-w-4xl md:px-10 lg:max-w-6xl">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">My Blog</h1>
      <BlogPosts />
    </section>
  );
}
