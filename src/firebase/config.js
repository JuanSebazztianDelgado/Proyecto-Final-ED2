// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9r0CK9oXMkcIVNuKpQgEzl84MBcyFqaM",
  authDomain: "proyecto-final-ed2.firebaseapp.com",
  projectId: "proyecto-final-ed2",
  storageBucket: "proyecto-final-ed2.firebasestorage.app",
  messagingSenderId: "535973838763",
  appId: "1:535973838763:web:a249a33bd9b6b6b5f11cee",
  measurementId: "G-8VJSCEZ68R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
