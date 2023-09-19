import { defineDocumentType, makeSource } from "contentlayer/source-files";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) =>
      doc._raw.flattenedPath.slice(doc._raw.flattenedPath.indexOf("/") + 1),
  },
  structuredData: {
    type: "object",
    resolve: (doc) => ({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: doc.title,
      datePublished: doc.publishedAt,
      dateModified: doc.publishedAt,
      description: doc.summary,
      image: doc.image
        ? `https://homescree.net/${doc.image}`
        : `https://homescree.net/og?title=${doc.title}`,
      tags: doc.tags,
      url: `https://homescree.net/blog/${doc._raw.flattenedPath}`,
      author: {
        "@type": "Person",
        name: "Matthew Guo",
      },
    }),
  },
};

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    publishedAt: {
      type: "string",
      required: true,
    },
    summary: {
      type: "string",
      required: true,
    },
    image: {
      type: "string",
    },
    tags: {
      type: "string",
      required: true,
    },
  },
  computedFields,
}));

export const AboutPage = defineDocumentType(() => ({
  name: "AboutPage",
  filePathPattern: `about.**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    publishedAt: {
      type: "string",
      required: true,
    },
    summary: {
      type: "string",
    },
    image: {
      type: "string",
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Blog, AboutPage],
});
