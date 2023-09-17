import type { Metadata } from "next";
import { getViewsCount } from "../../lib/metrics";

import Client from "./client";

export const metadata: Metadata = {
  title: "Blog | Matthew Guo",
  description: "Bing Chilling",
};


export default async function BlogPage() {
  const allViews = await getViewsCount();
  let bing = new URLSearchParams()

  return (
    <>
    <Client allViews={allViews} ></Client>
    </>
  );
}
