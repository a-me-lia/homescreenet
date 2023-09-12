import { app } from "./firebase";
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult, User } from 'firebase/auth'


let user: User, credential, token;
const auth = getAuth(app);



const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" });
provider.addScope('profile');
provider.addScope('email');



export async function signInGoogle() {
    "use server";

  
    await signInWithRedirect(auth, provider);
    
    const result = await getRedirectResult(auth);
  
  
    if (result) {
       user = result.user;
       credential = GoogleAuthProvider.credentialFromResult(result);
       token = credential?.accessToken;
    }
}

export function getUser(){
    return user
}










