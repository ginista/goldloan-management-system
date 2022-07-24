// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth"
import { getFirestore} from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXwE9MefhG09ijhERqas2WeOoAxknwjdY",
  authDomain: "goldloan-57ca6.firebaseapp.com",
  projectId: "goldloan-57ca6",
  storageBucket: "goldloan-57ca6.appspot.com",
  messagingSenderId: "63075689633",
  appId: "1:63075689633:web:1413d30f070defd1b3bce0",
  measurementId: "G-QG8M8DM359"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)


export default app;