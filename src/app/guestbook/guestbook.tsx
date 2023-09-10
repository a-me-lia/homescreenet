
import { AuthContextProvider } from '@/lib/authcontext';
import { AuthContext } from '@/lib/authcontext';
import { queryBuilder } from '../../lib/planetscale';

import { SignIn, SignOut } from './buttons';
import Form from './form';
import { useContext } from 'react';

async function getGuestbook() {
    const data = await queryBuilder
      .selectFrom('guestbook')
      .select(['id', 'body', 'created_by', 'updated_at'])
      .orderBy('updated_at', 'desc')
      .limit(100)
      .execute();
  
    return data;
  }

export default async function Guestbook(){

    let entries;
    let user = useContext(AuthContext)
  
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
      <AuthContextProvider>
            <section>
        <h1 className="font-bold text-2xl mb-8 tracking-tighter">
          sign my guestbook
        </h1>
        {user ? (
          <>
            <Form />
            <SignOut />
          </>
        ) : (
          <SignIn />
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
      </AuthContextProvider>
    );
}