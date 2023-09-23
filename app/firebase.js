// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2D0hvG9CnD30cR4p_tmeT-0vDuVbBaOQ",
  authDomain: "uni-trading.firebaseapp.com",
  projectId: "uni-trading",
  storageBucket: "uni-trading.appspot.com",
  messagingSenderId: "447459518433",
  appId: "1:447459518433:web:dde873b52446d47ebc14a0",
  measurementId: "G-0WFE7SGFVN",
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app)

export const auth = getAuth(app);
export const db = getFirestore(app)