"use client";
import { useRef, useState } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

import { saveGuestbookEntry } from "../actions";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guestbook | Matthew Guo",
  description: "ya gotta prove you were here",
};

export default function Form(props: { user: any }) {
  const formRef = useRef<HTMLFormElement>(null);
  const { pending } = useFormStatus();
  const [message, setMessage] = useState("");

  return (
    <form
      style={{ opacity: !pending ? 1 : 0.7 }}
      className="relative max-w-[320px] md:max-w-[500px]"
      ref={formRef}
      action={async (formData) => {
        if (props.user)
          await saveGuestbookEntry(
            props.user.email!,
            message,
            props.user.name!,
            Date.UTC.toString(),
          );
        formRef.current?.reset();
      }}
    >
      <input
        aria-label="Your message"
        placeholder="Your message..."
        disabled={pending}
        onChange={(e) => setMessage(e.target.value)}
        name="entry"
        type="text"
        required
        className="pl-4 md: pr-32 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-neutral-300 rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
      />
      <button
        className="flex items-center justify-center absolute right-1 top-1 px-2 py-1 font-medium h-8 bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 rounded w-16"
        disabled={pending}
        type="submit"
      >
        Sign
      </button>
    </form>
  );
}
