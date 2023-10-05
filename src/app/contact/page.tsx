import { Metadata } from "next";
import H1 from "../components/h1";
import { Resend } from "resend";
import Form from "./form";

export const metadata: Metadata = {
  title: "Contact | Matthew Guo",
  description:
    "Reach Matthew Guo for projects, inquiries and other cool stuff.",
};
export default function Page() {
  return (
    <section className="min-h-screen bg-white mx-2  md:mx-auto md:w-[742px]  relative">
      <H1>contact ^-^</H1>
      <Form></Form>
    </section>
  );
}
