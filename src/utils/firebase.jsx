// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1SrFmw_P4nRWaENcjZc0muD0olUIdh0U",
  authDomain: "netflixgpt-ca4ab.firebaseapp.com",
  projectId: "netflixgpt-ca4ab",
  storageBucket: "netflixgpt-ca4ab.firebasestorage.app",
  messagingSenderId: "43638643634",
  appId: "1:43638643634:web:ec252d94b6bb2839b3a2ab",
  measurementId: "G-6RYFLMBJCF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
n;
