import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "react-curd-firebase-4871d.firebaseapp.com",
  projectId: "react-curd-firebase-4871d",
  storageBucket: "react-curd-firebase-4871d.appspot.com",
  messagingSenderId: "955276129626",
  appId: "1:955276129626:web:b1570fe0e8b0b02daeef63",
  measurementId: "G-B215DLMTF5"
};
const app = initializeApp(firebaseConfig);
export  const auth = getAuth()
export const db = getFirestore(app);
export const storage = getStorage(app);