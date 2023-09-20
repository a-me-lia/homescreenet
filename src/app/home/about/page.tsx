import { allAboutPages } from "@/../.contentlayer/generated";

import Link from "next/link";
import H1 from "@/app/components/h1";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Matthew Guo",
  description: "Bing Chilling",
};


export default function Page() {

  return (
    <section className="min-h-screen bg-white flex flex-col md:mx-auto mx-4 md:w-[742px] ">
        <H1>about</H1>
        {allAboutPages
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/home/about/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900  tracking-tight">
                {post.title}
              </p>

              <div className="flex flex-row items-baseline ">
                {" "}
              </div>
            </div>
          </Link>
        ))}
    </section>
  );
}
