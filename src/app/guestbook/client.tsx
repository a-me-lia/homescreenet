"use client"
import { SignIn, SignOut } from './buttons';
import Form from './form';
import { useSession, signIn, signOut } from "next-auth/react"
import { User } from 'next-auth';





export default function Client(){

    const {data:session} = useSession()
    let user = session?.user

    return(
        <>
        {`${typeof user != 'undefined' ? 'yes' : 'no'}`}
        {user ? (
          <>
            <Form user={user}/>
            <SignOut />

          </>
        ) : (
          <SignIn /> 
        )}
        </>
    )
}
