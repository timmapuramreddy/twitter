// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps} from "firebase/app";
import  { getFireStore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitter-v1-660bb.firebaseapp.com",
  projectId: "twitter-v1-660bb",
  storageBucket: "twitter-v1-660bb.appspot.com",
  messagingSenderId: "478207708636",
  appId: "1:478207708636:web:ccb1a633a05f0dd90ed319"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp() ;
const db = getFireStore();
const storage = getStorage();

export { app, db, storage };