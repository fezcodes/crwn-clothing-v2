// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdAEWX8MA5jW55Xn5iT2mbyo-GxHhB4ao",
  authDomain: "crwn-db-b760f.firebaseapp.com",
  projectId: "crwn-db-b760f",
  storageBucket: "crwn-db-b760f.appspot.com",
  messagingSenderId: "16373578758",
  appId: "1:16373578758:web:6e51cb2d4b6d74091dd787",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

export const firestoreDB = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(firestoreDB, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.error("Error creating user: ", err);
    }
  }
  return userDocRef;
};
