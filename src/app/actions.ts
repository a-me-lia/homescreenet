"use server";

import { queryBuilder } from "../lib/planetscale";

import { revalidatePath } from "next/cache";

import { Resend } from 'resend';

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



const resend = new Resend(process.env.RESEND_KEY);


export async function SendEmail(email:string, name:string, subject:string, content:string){
  try{
    const data = await resend.emails.send({
      from: 'matthew@homescree.net',
      to: email,
      subject: 'Your message has been sent!',
      html:
       `<div>
          <h3>Hi ${name}, your message: <strong>"${subject}"</strong> has been sent!</h3>
          <p>You wrote: "${content}"</p>
          <p>Stay tuned, you will hear back shortly :p</p>
        </div>`
    });
    console.log(data);
  } catch (error) {
    console.error(error);
  }

resend.emails.send({
  from: 'matthew@homescree.net',
  to: 'matthewguo.x86@gmail.com',
  subject: `From Homescree.net: ${subject}`,
  html: `
  <div>
  <h1>New form submission: <strong>${subject}</strong></h1>
  <p>${name} wrote: <br/> "${content}"</p>
</div>`
});
}