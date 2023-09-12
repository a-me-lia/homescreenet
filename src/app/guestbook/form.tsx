'use client';
import { use, useContext, useRef, useState } from 'react';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

import { queryBuilder } from "../../lib/planetscale";

import { revalidatePath } from "next/cache";
import { AuthContext } from '@/lib/authcontext';
import { User } from 'firebase/auth';




export async function saveGuestbookEntry(email:string, body: string, created_by:string) {
    await queryBuilder
      .insertInto('guestbook')
      .values({ email, body, created_by })
      .execute();
  
    revalidatePath('/guestbook');
  }

export default function Form(props:{user:User}) {

  const formRef = useRef<HTMLFormElement>(null);
  const { pending } = useFormStatus();
  const [message, setMessage] = useState('')

  return (
    <form
      style={{ opacity: !pending ? 1 : 0.7 }}
      className="relative max-w-[500px]"
      ref={formRef}
      action={async (formData) => {
        if(props.user)await saveGuestbookEntry(props.user.email!, message, props.user.displayName!);
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
        className="pl-4 pr-32 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-neutral-300 rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
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
