"use client";
import { SignIn, SignOut } from "./buttons";
import Form from "./form";
import { useSession } from "next-auth/react";

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
        <SignIn />
      )}
    </>
  );
}
