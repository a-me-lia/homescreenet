import { allAboutPages } from "@/../.contentlayer/generated";

import Link from "next/link";
import H1 from "@/app/components/h1";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Matthew Guo",
  description: `About me | "What did you eat today? What book do you love? Whenever you go out for fun, tell me, where do you go?"`,
};

export default function Page() {
  return (
    <section className="min-h-screen bg-white mx-4  md:mx-auto md:w-[742px]  relative">
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
              <p className="text-neutral-900  tracking-tight">{post.title}</p>

              <div className="flex flex-row items-baseline "> </div>
            </div>
          </Link>
        ))}
      <div className="relative w-full h-48">
        <div className=" z-50 text-white absolute top-0 bottom-0 left-0 right-0 mx-auto">
          TEXT GOES HERE
        </div>
        <Image
          src="/osu.png"
          fill
          alt=""
          className="object-cover rounded-xl"
        ></Image>
      </div>
    </section>
  );
}
