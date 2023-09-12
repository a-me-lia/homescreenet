"use client"
import { onAuthStateChanged, getAuth, GoogleAuthProvider, getRedirectResult, signInWithRedirect, User } from "firebase/auth";
import { app } from "./firebase";

import { useContext, createContext, createServerContext } from "react";




type authContextType = User | undefined;
export const AuthContext = createContext<authContextType>(undefined);

let user: User, credential, token;
const auth = getAuth(app);



const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" });
provider.addScope('profile');
provider.addScope('email');



export const signInGoogle = async() => {

await signInWithRedirect(auth, provider);

const result = await getRedirectResult(auth);
if (result) {
   user = result.user;
   credential = GoogleAuthProvider.credentialFromResult(result);
   token = credential?.accessToken;
}


}

export const AuthContextProvider = ({ children }:{children:React.ReactNode}) => {

return(
    <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
)

}
