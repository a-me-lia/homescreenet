import { Metadata } from "next";
import H1 from "../components/h1";
import { Resend } from "resend";
import Form from "./form";

export const metadata: Metadata = {
  title: "Contact | Matthew Guo",
  description: "Bing Chilling",
};

const resend = new Resend('re_bLUskV2G_HWZNuRsKD1o5x5HUoiV3DmKQ');

function SendEmail(){
  resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'marinkitagawa.x86@gmail.com',
    subject: 'Hello World',
    html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
  });
  }

export default function Page() {
  return (
    <section className="min-h-screen bg-white mx-4  md:mx-auto md:w-[742px]  relative">
      <H1>contact ^-^</H1>
      <Form></Form>
    </section>
  );
}
