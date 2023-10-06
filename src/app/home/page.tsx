import { Metadata } from "next";

import Home from "./home";

export const metadata: Metadata = {
  title: "Homescree.net | Matthew Guo",
  description:
    "Matthew Guo's Internet Home | I am an avid web and electronics developer, pianist, and software engineer for Botbuit",
};

export default function Page() {
  return <Home></Home>;
}
