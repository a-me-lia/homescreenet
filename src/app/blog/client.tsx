"use client";
import Link from "next/link";
import { allBlogs } from "@/../.contentlayer/generated";
import ViewCounter from "./view-counter";

import Tag from "./tag";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const catagories = ["electronics", "dev", "shrimp", "music", "life", "other"];

export default function Client(props: any) {
  const [activeTagIndices, setActiveTagIndices] = useState<string[]>([]);
  const searchParams = useSearchParams();

  const router = useRouter();

  function updateParams(tags: string) {
    router.replace(`/blog?tags=${tags}`, { scroll: false });
  }

  return (
    <section className="md:mx-auto md:w-[742px] mt-32 ">
      <h1 className="font-bold text-2xl mb-2 ">blog :w:</h1>
      <h2 className=" text-lg mb-8 ">
        {searchParams.get("tags")}
        read about the world. and sometimes shrimp.
      </h2>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .filter((post) => {
          let arr = String(post.tags).split(",");
          const filteredArray = activeTagIndices.filter((value) =>
            arr.includes(value),
          );
          return activeTagIndices[0] ? filteredArray.length > 0 : true;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.title}
              </p>

              <div className="flex flex-row items-baseline">
                {" "}
                <ViewCounter
                  allViews={props.allViews}
                  slug={post.slug}
                  trackView={false}
                />
                <Tag
                  tags={post.tags}
                  setActive={setActiveTagIndices}
                  冰淇淋={activeTagIndices}
                ></Tag>
              </div>
            </div>
          </Link>
        ))}
    </section>
  );
}
