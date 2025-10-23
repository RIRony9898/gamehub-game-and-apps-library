// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA06ZKGzuPishzgErkuw6iRBJYQpZdSf_Q",
  authDomain: "best-store-project-f9e93.firebaseapp.com",
  projectId: "best-store-project-f9e93",
  storageBucket: "best-store-project-f9e93.firebasestorage.app",
  messagingSenderId: "659679116401",
  appId: "1:659679116401:web:579a540fea8491524a2fd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);