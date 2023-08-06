// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWPPE8LFzQPAXiP6UvoJmWYUJF1H7Je2A",
  authDomain: "project1-travel.firebaseapp.com",
  projectId: "project1-travel",
  storageBucket: "project1-travel.appspot.com",
  messagingSenderId: "348441420253",
  appId: "1:348441420253:web:3cbdf18018d84e36481634",
  measurementId: "G-ZKB1S40M3S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);