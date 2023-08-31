import Home from "./home/home";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homescree.net | Matthew Guo",
  description: "Bing Chilling",
};

export default function Page() {
  return <Home></Home>;
}
