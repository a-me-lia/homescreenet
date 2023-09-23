import H1 from "@/app/components/h1";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Matthew Guo",
  description: "Bing Chilling",
};

export default function Page() {
  return (
    <section className="min-h-screen bg-white mx-4  md:mx-auto md:w-[742px]  relative ">
      <H1>resume</H1>
    </section>
  );
}
