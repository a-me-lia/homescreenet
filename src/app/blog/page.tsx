import type { Metadata } from "next";
import { getViewsCount } from "../../lib/metrics";
import { Suspense } from "react";

import Client from "./client";

export const metadata: Metadata = {
  title: "Blog | Matthew Guo",
  description: "A place where I put things I love or find interesting",
};

export default async function BlogPage() {
  const allViews = await getViewsCount();

  return (
    <>
      <Suspense><Client allViews={allViews}></Client></Suspense>
    </>
  );
}
