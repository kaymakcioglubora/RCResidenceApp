// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS8MMYhsBGIf9WQRVAJYJQpbuGX-Np3B4",
  authDomain: "rcresidenceapp.firebaseapp.com",
  projectId: "rcresidenceapp",
  storageBucket: "rcresidenceapp.appspot.com",
  messagingSenderId: "72486660450",
  appId: "1:72486660450:web:cb6e03b14dac777a7a243b"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);