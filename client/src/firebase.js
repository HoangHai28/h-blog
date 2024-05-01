// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "h-blog-87e37.firebaseapp.com",
  projectId: "h-blog-87e37",
  storageBucket: "h-blog-87e37.appspot.com",
  messagingSenderId: "464784328133",
  appId: "1:464784328133:web:af1a7a9a380296556d77ac"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);