import Link from "next/link";
import H1 from "../components/h1";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homescree.net | Matthew Guo",
  description: "Matthew Guo's Internet Home | I am an avid web and electronics developer, pianist, and software engineer for Botbuit",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white mx-4  md:mx-auto md:w-[742px]  relative">
      <H1>home</H1>
      <ul className="flex flex-col">
        <li>
          <Link href="/home/about">About me</Link>
        </li>
        <li>
          <Link href="/home/resume">Resume</Link>
        </li>
      </ul>
    </main>
  );
}
