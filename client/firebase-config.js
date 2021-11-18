import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsm3MOhV0FcK4_shyRJkJMHBHxwXR32yc",
  authDomain: "bug-tracker-66294.firebaseapp.com",
  projectId: "bug-tracker-66294",
  storageBucket: "bug-tracker-66294.appspot.com",
  messagingSenderId: "36423460663",
  appId: "1:36423460663:web:c11ec41a761a40946f9cb2"
};

const fire = initializeApp(firebaseConfig);

export const db = getFirestore(fire)
export const auth = getAuth(fire);