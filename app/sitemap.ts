import { baseUrl } from "@/lib/data";
import { getBlogPosts, getTags } from "@/lib/utils";

export default async function sitemap() {
  const blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const tags = getTags().map((tag) => ({
    url: `${baseUrl}/tag/${tag}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  let routes = ["", "/blog", "/tag"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs, ...tags];
}
