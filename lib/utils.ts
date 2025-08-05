import fs from "fs";
import path from "path";
import { GetPostsOptions, Metadata, PaginationResult, Post } from "./types";

export const validateString = (value: unknown, maxLength: number): value is string => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, "").trim();
  let frontMatterLines = frontMatterBlock.trim().split("\n");
  let metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMDXData(dir: string): Post[] {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "app", "blog", "posts"));
}

export function getPosts({ limit = 10, tags, page = 1 }: GetPostsOptions = {}): PaginationResult {
  const allPosts = getBlogPosts();

  let filtered = allPosts.filter((post) => {
    if (!tags) return true;

    const postTags = post.metadata.tags || "";
    const parsedTags: string[] = postTags ? JSON.parse(postTags) : [];
    const postTagSlugs = parsedTags.map((tag: string) => tag.toLowerCase().replace(/\s+/g, "-"));

    return tags.some((tag) => postTagSlugs.includes(tag));
  });

  const total = filtered.length;
  const totalPages = Math.ceil(total / limit);

  const start = (page - 1) * limit;
  const paginatedPosts = filtered.slice(start, start + limit);

  return {
    posts: paginatedPosts,
    pagination: {
      total,
      page,
      totalPages,
      limit,
      nextPage: page < totalPages ? page + 1 : null,
      prevPage: page - 1 <= totalPages && page - 1 != 0 ? page - 1 : null,
    },
  };
}

export function getTags(): string[] {
  const posts = getBlogPosts();

  const tagSet = new Set<string>();

  posts.forEach((post) => {
    const tags = post.metadata.tags || "";
    const parsedTags: string[] = tags ? JSON.parse(tags) : [];
    parsedTags.forEach((tag: string) => tagSet.add(tag));
  });

  return Array.from(tagSet);
}

export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date();
  if (!date?.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  let fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
