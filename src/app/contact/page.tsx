import { Metadata } from "next";
import H1 from "../components/h1";

export const metadata: Metadata = {
  title: "Contact | Matthew Guo",
  description: "Bing Chilling",
};

export default function Page() {
  return (
    <section className="min-h-screen bg-white mx-4  md:mx-auto md:w-[742px]  relative">
      <H1>contact ^-^</H1>
    </section>
  );
}
