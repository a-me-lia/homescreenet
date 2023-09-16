import type { Metadata } from "next";
import { getViewsCount } from "../../lib/metrics";

import Client from "./client";

export const metadata: Metadata = {
  title: "Blog | Matthew Guo",
  description: "Bing Chilling",
};

const catagories = [
  'electronics',
  'dev',
  'shrimp',
  'music',
  'life',
  'other',
]

export default async function BlogPage() {
  const allViews = await getViewsCount();

  return (
    <Client allViews={allViews}></Client>
  );
}
