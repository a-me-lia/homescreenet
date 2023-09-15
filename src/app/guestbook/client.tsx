"use client";
import { SignIn, SignOut } from "./buttons";
import Form from "./form";
import { useSession } from "next-auth/react";

import { app } from "@/lib/firebase"



export default function Client() {
  let user: undefined | {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
} = undefined;



  const { data: session } = useSession(); 
  user = session?.user



  return (
    <>
      {/* {`${typeof user != "undefined" ? "yes" : "no"}`} */}
      {user ? (
        <>
          <Form user={user} />
          <SignOut />
        </>
      ) : (
        <SignIn />
      )}
    </>
  );
}
