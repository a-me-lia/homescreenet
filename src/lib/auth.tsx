// import { app } from "./firebase";
// import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult, User } from 'firebase/auth'

// let user:User | undefined, credential, token;
// const auth = getAuth(app);

// const provider = new GoogleAuthProvider()
// provider.setCustomParameters({ prompt: "select_account" });
// provider.addScope('profile');
// provider.addScope('email');

import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const {
  handlers: { GET, POST },
  auth,
  CSRF_experimental,
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_OAUTH_CLIENT_KEY as string,
      clientSecret: process.env.GITHUB_OAUTH_CLIENT_SECRET as string,
    }),
  ],
});
