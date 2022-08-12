import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzawhYeYb_l4u1DO_9Z8g_mv4MGFpWqP4",
  authDomain: "linkedin-clone-cd00a.firebaseapp.com",
  projectId: "linkedin-clone-cd00a",
  storageBucket: "linkedin-clone-cd00a.appspot.com",
  messagingSenderId: "717260948188",
  appId: "1:717260948188:web:6be54ab0844b0ced55aa19",
  measurementId: "G-1MWKTT3CMF",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { db, auth };
