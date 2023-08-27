// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwwnAZTstlqtGfjNl1IaEpNY9-YFNRmcs",
  authDomain: "ur-turn-13697.firebaseapp.com",
  projectId: "ur-turn-13697",
  storageBucket: "ur-turn-13697.appspot.com",
  messagingSenderId: "868512659735",
  appId: "1:868512659735:web:94257c1344ec37b9631f52",
  measurementId: "G-S0XNGHV1LE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);