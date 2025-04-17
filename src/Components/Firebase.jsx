// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_ht5Pc7jBPX7vtLxcjLqaGi-yFpZhaHg",
  authDomain: "login-abm-2897e.firebaseapp.com",
  projectId: "login-abm-2897e",
  storageBucket: "login-abm-2897e.firebasestorage.app",
  messagingSenderId: "228667979940",
  appId: "1:228667979940:web:00a4ed6110f35bf4f70e31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;