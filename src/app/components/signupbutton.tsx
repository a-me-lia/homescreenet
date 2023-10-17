"use client";

import { useEffect, useState } from "react";

import { SendNews } from "../actions";

export default function SignUpButton() {
  const [active, setActive] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    function validateEmail(email: string) {
      return emailRegex.test(email);
    }
    setSubmit(validateEmail(email));
  }, [email]);

  return (
    <div>
      <div className="p-1 border-2 border-white md:flex flex-row h-16  hidden">
        <button
          onClick={() => {
            if (success) {
              setSuccess(false);
            } else {
              setActive(!active);
            }
          }}
          className={`hover:bg-transparent transition-all duration-500 w-56 pt-3 pb-2 text-[16px] hover:text-white  ${
            success ? " text-green-400 " : active ? "text-white" : "text-black"
          }  ${active ? "bg-transparent" : "bg-white"} font-semibold`}
        >{`${
          active
            ? "No spam, ever :p"
            : success
            ? "Success ^w^"
            : "Sign up for updates!"
        }`}</button>
        <div
          className={` transition-all overflow-hidden duration-500 ${
            active ? "w-0.5" : "w-0"
          } h-full bg-white`}
        ></div>
        <form
          id="form"
          action={async () => {
            await SendNews(email);
            (document.getElementById("form") as HTMLFormElement).reset();
            setEmail("");
            setActive(false);
            setSuccess(true);
          }}
          className={` md:text-[20px] text-[16px] transition-all overflow-hidden max-h-full duration-700 ${
            active ? "w-80" : "w-0"
          } pt-1`}
        >
          <label htmlFor="">
            <input
              placeholder={`${success ? "success!" : "ikura@yoaso.bi"}`}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className={`h-full pr-2 w-72  pl-6 bg-transparent  focus:outline-none text-white`}
              type="email"
            />
          </label>
          <button
            disabled={!submit}
            className="h-6 w-6   p-0.5 border-2 border-white"
            type="submit"
          >
            <div
              className={`w-full transition-opacity duration-300 h-full bg-white ${
                submit ? "opacity-100 hover:opacity-70" : "opacity-0"
              }`}
            ></div>
          </button>
        </form>
      </div>
      <div className="p-1 border-2 border-white md:hidden flex-col h-max  block">
        <button
          onClick={() => {
            if (success) {
              setSuccess(false);
            } else {
              setActive(!active);
            }
          }}
          className={`hover:bg-transparent transition-all duration-500 w-64 pt-3 pb-2 md:text-[20px] text-[16px] hover:text-white ${
            success ? " text-green-400 " : active ? "text-white" : "text-black"
          }   ${active ? "bg-transparent" : "bg-white"} font-semibold`}
        >{`${
          active
            ? "No spam, ever :p"
            : success
            ? "Success ^w^"
            : "Sign up for updates!"
        }`}</button>
        <div
          className={` transition-all overflow-hidden duration-500 ${
            active ? "h-[2px] opacity-50" : "h-0"
          } w-full bg-white`}
        ></div>
        <form
          id="form"
          action={async () => {
            await SendNews(email);
            (document.getElementById("form") as HTMLFormElement).reset();
            setEmail("");
            setActive(false);
            setSuccess(true);
          }}
          className={` flex flex-row justify-between md:text-[20px] text-[16px] transition-all overflow-hidden w-64 duration-700 ${
            active ? "mt-2 h-7" : "h-0"
          } `}
        >
          <label htmlFor="">
            <input
              placeholder={`${success ? "success!" : "ikura@yoaso.bi"}`}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className={`w-full pr-1  pl-2  bg-transparent  focus:outline-none text-white`}
              type="email"
            />
          </label>
          <button
            disabled={!submit}
            className="h-6 w-6 mr-1 p-0.5 border-2 border-white"
            type="submit"
          >
            <div
              className={`w-full transition-opacity duration-300 h-full bg-white ${
                submit ? "opacity-100" : "opacity-0"
              }`}
            ></div>
          </button>
        </form>
      </div>
    </div>
  );
}
