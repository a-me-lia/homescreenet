"use client";
import { SignIn, SignOut } from "./buttons";
import Form from "./form";
import { useSession } from "next-auth/react";

import { app } from "@/lib/firebase";
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult, User } from 'firebase/auth'
import { sign } from "crypto";



let user:User | undefined, credential, token;
const gAuth = getAuth(app);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" });
provider.addScope('profile');
provider.addScope('email');

async function signInGoogle() {


  await signInWithRedirect(gAuth, provider);

  const result = await getRedirectResult(gAuth);


  if (result) {
     user = result.user;
     credential = GoogleAuthProvider.credentialFromResult(result);
     token = credential?.accessToken;
  }
}

export default function Client() {
  const { data: session } = useSession();
  let user = session?.user;

  return (
    <>
      {/* {`${typeof user != "undefined" ? "yes" : "no"}`} */}
      {user ? (
        <>
          <Form user={user} />
          <SignOut />
        </>
      ) : (
        <SignIn gFunc={async() => await signInGoogle()} />
      )}
    </>
  );
}
