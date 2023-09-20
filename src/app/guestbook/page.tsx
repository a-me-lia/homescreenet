
import { queryBuilder } from "../../lib/planetscale";
import Client from "./client";
import H1 from "../components/h1";
import { Metadata } from "next";

async function getGuestbook() {
  const data = await queryBuilder
    .selectFrom("guestbook")
    .select(["id", "body", "created_by", "updated_at"])
    .orderBy("updated_at", "desc")
    .limit(255)
    .execute();

  return data.reverse();
}

export const metadata: Metadata = {
  title: "Guestbook | Matthew Guo",
  description: "Bing Chilling",
};


export default async function Page() {
  let entries;

  try {
    const [guestbookRes] = await Promise.allSettled([getGuestbook()]);

    if (guestbookRes.status === "fulfilled" && guestbookRes.value[0]) {
      entries = guestbookRes.value;
    } else {
      console.error(guestbookRes);
    }
  } catch (error) {
    console.error(error);
  }

  return (
    <section className="min-h-screen bg-white mx-4  md:mx-auto md:w-[742px]   relative">
      <H1>guestbook :p</H1>
      <Client></Client>
      {entries?.map((entry) => (
        <div key={entry.id} className="flex flex-col space-y-1 mb-4">
          <div className="w-full text-sm break-words">
            <span className="text-neutral-600 dark:text-neutral-400 mr-1">
              {entry.created_by}:
            </span>
            {entry.body}
          </div>
        </div>
      ))}
    </section>
  );
}
