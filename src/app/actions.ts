"use server";

import { queryBuilder } from "../lib/planetscale";

import { revalidatePath } from "next/cache";

export async function increment(slug: string) {
  const data = await queryBuilder
    .selectFrom("views")
    .where("slug", "=", slug)
    .select(["count"])
    .execute();

  const views = !data.length ? 0 : Number(data[0].count);

  await queryBuilder
    .insertInto("views")
    .values({ slug, count: 1 })
    .onDuplicateKeyUpdate({ count: views + 1 })
    .execute();
  return;
}

export async function saveGuestbookEntry(
  email: string,
  body: string,
  created_by: string,
  updated_at: string,
) {
  await queryBuilder
    .insertInto("guestbook")
    .values({ email, body, created_by, updated_at })
    .execute();

  revalidatePath("/guestbook");
}
