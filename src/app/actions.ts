"use server";

import { queryBuilder } from "../lib/planetscale";
import { signInGoogle } from "@/lib/auth";
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

export async function saveGuestbookEntry(formData: FormData) {
  const session = await signInGoogle();
  const email = session?.user?.email as string;
  const created_by = session?.user?.displayName as string;
  const entry = formData.get('entry')?.toString() || '';
  const body = entry.slice(0, 500);

  await queryBuilder
    .insertInto('guestbook')
    .values({ email, body, created_by })
    .execute();

  revalidatePath('/guestbook');

  const data = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_RESEND_SECRET}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'guestbook@homescree.net',
      to: 'me@homescree.net',
      subject: 'New Guestbook Entry',
      html: `<p>Email: ${email}</p><p>Message: ${body}</p>`,
    }),
  });

  const response = await data.json();
  console.log('Email sent', response);
}
