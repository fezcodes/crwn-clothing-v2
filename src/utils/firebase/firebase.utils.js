// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

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
export const SignInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const firestoreDB = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionReference = collection(firestoreDB, collectionKey);
  const batch = writeBatch(firestoreDB);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionReference, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("Batch committed");
};

export const getCategoriesAndDocuments = async () => {
  const collectionReference = collection(firestoreDB, "categories");
  const q = query(collectionReference);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce(
    (accumulator, documentSnapshot) => {
      const { title, items } = documentSnapshot.data();
      accumulator[title.toLowerCase()] = items;
      return accumulator;
    },
    {}
  );

  return categoryMap;
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
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
        ...additionalInfo,
      });
    } catch (err) {
      console.error("Error creating user: ", err);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async ({
  email,
  password,
}) => {
  console.log("firebase", auth);
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signAuthUserWithEmailAndPassword = async ({ email, password }) => {
  if (!email || !password) return;

  const { user } = await signInWithEmailAndPassword(auth, email, password);
  console.log(user);
  return user;
};

export const signUserOut = () => {
  signOut(auth);
};

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};
