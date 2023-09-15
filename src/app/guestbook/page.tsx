"use server";
import { queryBuilder } from "../../lib/planetscale";
import Client from "./client";

import { app } from "@/lib/firebase";
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult, User } from 'firebase/auth'


async function getGuestbook() {
  const data = await queryBuilder
    .selectFrom("guestbook")
    .select(["id", "body", "created_by", "updated_at"])
    .orderBy("updated_at", "desc")
    .limit(255)
    .execute();

  return data.reverse();
}

let user:User | undefined, credential, token;
const gAuth = getAuth(app);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" });
provider.addScope('profile');
provider.addScope('email');

export async function signInGoogle() {
  "use server";


  await signInWithRedirect(gAuth, provider);

  const result = await getRedirectResult(gAuth);


  if (result) {
     user = result.user;
     credential = GoogleAuthProvider.credentialFromResult(result);
     token = credential?.accessToken;
  }
}


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
    <section className="min-h-screen bg-white mx-4 w-full md:mx-auto md:w-[742px] mt-32 relative">
      <h1 className="font-bold font-mono text-2xl mb-8 mt-32">guestbook :p</h1>
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
