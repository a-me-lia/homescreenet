"use client";
import { useCallback, useEffect, useState } from "react";

import Link from "next/link";

export default function Home() {
  const [scroll, setScroll] = useState(0);

  const [elements, setElements] = useState<number[]>([0, 1, 2, 3, 4]);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", (event) => {
      let scroll = scrollY;
      //console.log(scroll)
      setScroll(scroll);
    });
  }

  return (
    <main className="min-h-screen bg-white">
      <div
        id="style-1"
        className="mx-4 w-full md:mx-auto md:w-[742px] mt-32 relative "
      >
        <h1 className="font-bold text-2xl mb-2 ">home</h1>
        <div
          className="w-full h-[800px]"
          ref={(el) => {
            if (!el) return;
            let temp = elements;
            temp[0] = el.getBoundingClientRect().top;
            setElements(temp);
            // console.log(elements.toString());
          }}
          id="home"
        >
          <Link href="/about">About me</Link>
        </div>
      </div>
    </main>
  );
}
