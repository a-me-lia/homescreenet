

import Link from "next/link";

import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Homescree.net | Matthew Guo",
  description: "Bing Chilling",
};

export default function Page() {

  return (
    <main className="min-h-screen bg-white mx-4  md:mx-auto md:w-[742px] mt-32 relative">
        <h1 className="font-bold text-2xl mb-2 ">home</h1>

          <ul className="flex flex-col">
          <li><Link href="/home/about">About me</Link></li>
          <li><Link href="/home/resume">Resume</Link></li>
          </ul>

    </main>
  );
}
