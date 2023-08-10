// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/compat/firestore"; // Import the firestore module separately
import "firebase/compat/storage"; // Import the storage module separately

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
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebase.firestore(app); // Access the firestore function directly
const storage = firebase.storage(); // Access the storage function directly

export { app, analytics, db, storage };