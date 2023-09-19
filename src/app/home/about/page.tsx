"use client";
import Image from "next/image";
import { comma } from "postcss/lib/list";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Page() {
  const [scroll, setScroll] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(function () {
    if (typeof window !== "undefined") setHeight(window.innerHeight);
  }, []);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", (event) => {
      let scroll = scrollY;
      //console.log(scroll)
      setScroll(scroll);
    });
    window.addEventListener("resize", (event) => {
      let height = innerHeight;
      //console.log(scroll)
      setHeight(height);
    });
  }

  useEffect(
    function () {
      for (let i = 0; i < document.getElementsByTagName("div").length; i++) {
        let element = document.getElementsByTagName("div")[i];
        if (element.className.search("fancy") != -1) {
          if (
            element.className.search("opacity-100 ") == -1 &&
            element.className.search("opacity-10 ") == -1
          )
            element.className = element.className + " opacity-10 ";
          if (height - element.getBoundingClientRect().top > 128) {
            element.className = element.className.replace(
              "opacity-10 ",
              "opacity-100 ",
            );
          } else {
            element.className = element.className.replace(
              "opacity-100 ",
              "opacity-10 ",
            );
          }

        }
      }
    },
    [height, scroll],
  );

  return (
    <section className="min-h-screen bg-white flex flex-col">
      <div className="md:mx-auto mx-4 md:w-[742px] mt-32 mb-24 text-[16px] space-y-12 font-mono ">
        <h1 className="text-[#ff0000] text-[32px]">
          Caroline is allergic to shrimp
        </h1>
        <Link href="/home/about/beingHuman" className="hover:underline mt-6">
          Being human - My cultural experiences{" "}
        </Link>
      </div>
    </section>
  );
}
