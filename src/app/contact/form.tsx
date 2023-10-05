"use client";

import { useState, useEffect } from "react";
import { SendEmail } from "../actions";

export default function Form() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [canSubmit, setCanSubmit] = useState(false);

  const [state, setState] = useState<string>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    function validateEmail(email: string) {
      return emailRegex.test(email);
    }
    let temp = false;
    temp = name != "" && text != "" && validateEmail(email);
    setCanSubmit(temp);
  }, [name, text, email]);

  function displayWhyCantSubmit() {
    setState("");
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    function validateEmail(email: string) {
      return emailRegex.test(email);
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email!");
      return;
    }
    if (name == "") {
      setError("Name is required");
      return;
    }
    if (text == "") {
      setError("A message is required!");
      return;
    }
  }

  return (
    <section>
      <form
        action={async () => {
          if (!canSubmit) return;

          const res = await SendEmail(email, name, subject, text);
          setState(res);
          console.log(res);
          (document.getElementById("form") as HTMLFormElement).reset();
          setEmail("");
          setName("");
          setSubject("");
          setText("");
          setError("");
          setState("Form submitted!");
        }}
        className="flex flex-col space-y-4 md:w-1/2 mt-6"
        id="form"
      >
        <label className="flex flex-col space-y-2">
          <p>
            Email: <span className="text-red-500">*</span>
          </p>
          <input
            placeholder="marin@homescreen.net"
            className="border-2 px-2 py-0.5"
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="flex flex-col space-y-2">
          <p>
            Name: <span className="text-red-500">*</span>
          </p>
          <input
            placeholder="Marin Kitagawa"
            className="border-2 px-2 py-0.5"
            name="name"
            onChange={(e) => setName(e.target.value)}
          ></input>
        </label>
        <label className="flex flex-col space-y-2">
          <p>Subject: (recommended)</p>
          <input
            placeholder="A great project..."
            className="border-2 px-2 py-0.5"
            name="name"
            onChange={(e) => setSubject(e.target.value)}
          ></input>
        </label>

        <label className="flex flex-col space-y-2">
          <p>
            Message: <span className="text-red-500 py-0.5">*</span>
          </p>
          <textarea
            placeholder="Lets create something fantasic..."
            className="border-2 px-2"
            name="message"
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </label>
        <button
          onClick={() => {
            if (canSubmit) return;
            displayWhyCantSubmit();
          }}
          type="submit"
          className={`${
            canSubmit
              ? "bg-black text-white border-white hover:bg-slate-700"
              : "bg-gray-200 text-gray-600"
          } border-2 py-2`}
        >
          Send
        </button>
      </form>
      {error != "" && <p className="mt-1 text-[14px] text-red-500">{error}</p>}
      {state != "" && (
        <p className="mt-1 text-[14px] text-green-500">{state}</p>
      )}
    </section>
  );
}
