"use server"
import { queryBuilder } from '../../lib/planetscale';
import { onAuthStateChanged, getAuth, GoogleAuthProvider, getRedirectResult, signInWithRedirect, User } from "firebase/auth";
import { app } from "../../lib/firebase";

import { useContext, createContext, createServerContext } from "react";


import { SignIn, SignOut } from './buttons';
import Form from './form';




async function getGuestbook() {
    const data = await queryBuilder
      .selectFrom('guestbook')
      .select(['id', 'body', 'created_by', 'updated_at'])
      .orderBy('updated_at', 'desc')
      .limit(255)
      .execute();
  
    return data;
  }

  let user: User, credential, token;
  const auth = getAuth(app);
  
  
  
  const provider = new GoogleAuthProvider()
  provider.setCustomParameters({ prompt: "select_account" });
  provider.addScope('profile');
  provider.addScope('email');
  

 async function signInGoogle() {
  "use server";
  
  await signInWithRedirect(auth, provider);
  
  const result = await getRedirectResult(auth);


  if (result) {
     user = result.user;
     credential = GoogleAuthProvider.credentialFromResult(result);
     token = credential?.accessToken;
  }
  }

export default async function Page(){


    let entries;
  
    try {
      const [guestbookRes] = await Promise.allSettled([
        getGuestbook(),
      ]);
  
      if (guestbookRes.status === 'fulfilled' && guestbookRes.value[0]) {
        entries = guestbookRes.value;
      } else {
        console.error(guestbookRes);
      }
  
    } catch (error) {
      console.error(error);
    }
  
  
    return (
      <section className='min-h-screen bg-white mx-4 w-full md:mx-auto md:w-[742px] mt-32 relative'>
        <h1 className="font-bold text-2xl mb-8 tracking-tighter mt-48">
          sign my guestbook
        </h1>
        {user ? (
          <>
            <Form user={user}/>
            <SignOut />
            HIII
          </>
        ) : (
          <SignIn func={signInGoogle} /> 
        )}
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