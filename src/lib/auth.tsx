import { app } from "./firebase";
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from 'firebase/auth'


const auth = getAuth(app)
const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" });
provider.addScope('profile');
provider.addScope('email');

export const signInGoogle = async() => {
await signInWithRedirect(auth, provider);

const result = await getRedirectResult(auth);
if (result) {
  const user = result.user;
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential?.accessToken;
  return {user, token}
}
}



