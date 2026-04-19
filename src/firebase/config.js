// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwceJHHnGBWOAR0aaFDwCjRk1_aLFsGUY",
  authDomain: "curso-react-53a5a.firebaseapp.com",
  projectId: "curso-react-53a5a",
  storageBucket: "curso-react-53a5a.firebasestorage.app",
  messagingSenderId: "1095801769523",
  appId: "1:1095801769523:web:c3dc0bbaac2afe8e5c1d46",
  measurementId: "G-TF526JM24N"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(FirebaseApp);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
