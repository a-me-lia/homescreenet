import { allBlogs, allAboutPages } from "@/../.contentlayer/generated";

export default async function sitemap() {
  const blogs = allBlogs.map((post) => ({
    url: `https://homescree.net/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }));  

  const about = allAboutPages.map((post) => ({
    url: `https://homescree.net/home/about/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const routes = ["", "/home", "/home/about", "/home/about/resume", "/blog", "/guestbook", "/contact"].map((route) => ({
    url: `https://homescree.net${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs, ...about];
}
