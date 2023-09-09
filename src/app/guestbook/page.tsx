import { Metadata } from "next";
import Guestbook from "./guestbook";


export const metadata: Metadata = {
  title: "Guestbook | Matthew Guo",
  description: "Bing Chilling",
};

export default function Page() {
  return <Guestbook></Guestbook>;
}
