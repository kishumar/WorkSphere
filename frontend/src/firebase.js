// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "worksphere-7a1c6.firebaseapp.com",
  projectId: "worksphere-7a1c6",
  storageBucket: "worksphere-7a1c6.firebasestorage.app",
  messagingSenderId: "495008133043",
  appId: "1:495008133043:web:132b390d9eff3fe13fa5c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth, provider}