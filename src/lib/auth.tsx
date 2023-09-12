import { app } from "./firebase";
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult, User } from 'firebase/auth'


let user:User | undefined, credential, token;
const auth = getAuth(app);



const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" });
provider.addScope('profile');
provider.addScope('email');



export async function signInGoogle() {


  
    await signInWithRedirect(auth, provider);
    console.log('gfsnjdkbhf')
    
    const result = await getRedirectResult(auth);
  
    if (result) {
        console.log('ehhe')
       user = result.user;
       credential = GoogleAuthProvider.credentialFromResult(result);
       token = credential?.accessToken;
    }else(        console.log('uihffy'))
}

export function getUser(){
    return user
}










