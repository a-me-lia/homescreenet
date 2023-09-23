"use client"

import { useState, useEffect } from "react"
import { SendEmail } from "../actions"



export default function Form(){

    const[email, setEmail] = useState('')
    const[name, setName] = useState('')
    const[subject, setSubject] = useState('')
    const[text, setText] = useState('')
    const[canSubmit, setCanSubmit] = useState(false)



useEffect(()=>{
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;


    function validateEmail(email:string) {

        return emailRegex.test(email);
      }

    let temp = false
    temp = (name != '' && text != '' && validateEmail(email))
    
    setCanSubmit(temp)


}, [name, text, email])


    return(


        <form
        action={()=>{
        
            SendEmail(email, name, subject, text);
            (document.getElementById("form") as HTMLFormElement).reset()
            setEmail('')
            setName('')
            setSubject('')
            setText('')
        }}
        className="flex flex-col space-y-4 md:w-1/2 mt-6"
        id='form'
      >
        <label className="flex flex-col space-y-2">
          <p>Email: <span className="text-red-500">*</span></p>
          <input placeholder="marin@homescreen.net" className="border-2 px-2 py-0.5" type="email" name="email"  onChange={(e)=>setEmail(e.target.value)}/>
        </label>
        <label className="flex flex-col space-y-2">
        <p>Name: <span className="text-red-500">*</span></p>
          <input placeholder="Marin Kitagawa" className="border-2 px-2 py-0.5" name="name" onChange={(e)=>setName(e.target.value)}></input>
        </label>
        <label className="flex flex-col space-y-2">
        <p>Subject: (recommended)</p>
          <input placeholder="A great project..." className="border-2 px-2 py-0.5" name="name" onChange={(e)=>setSubject(e.target.value)}></input>
        </label>
        
        <label className="flex flex-col space-y-2">
        <p>Message: <span className="text-red-500 py-0.5">*</span></p>
          <textarea placeholder="Lets create something fantasic..." className="border-2 px-2" name="message" onChange={(e)=>setText(e.target.value)}></textarea>
        </label>
        <button  disabled={!canSubmit} type="submit" className={`${canSubmit?'bg-black text-white border-white hover:bg-slate-700' : 'bg-gray-200 text-gray-600'} border-2 py-2`}>Send</button>
      </form>

    )
}