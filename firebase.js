// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps} from "firebase/app";
import  { getFireStore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,  //"twitter-v1-660bb.firebaseapp.com",
  projectId:  process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID, //"twitter-v1-660bb",
  storageBucket: process.env.NEXT_PBULIC_FIREBASE_STORAGE_BUCKET,  //"twitter-v1-660bb.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDER_ID , //"478207708636",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID   //"1:478207708636:web:ccb1a633a05f0dd90ed319"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp() ;
const db = getFireStore();
const storage = getStorage();

export { app, db, storage };