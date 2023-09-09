"use client"

import { signInGoogle } from "@/lib/auth";
import useState from 'react'

export default function Guestbook(){

    function signIn(){
        let {user, token} = signInGoogle()
    }





    return(
        <div onClick={()=> } className="md:mx-auto md:w-[742px] mt-28">sign in</div>
    )
}