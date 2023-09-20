

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
        <Link href="/home/about/beingHuman" className="hover:underline mt-6">
          Being human - My cultural experiences{" "}
        </Link>
    </section>
  );
}
