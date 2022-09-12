// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD13lwZia9RLto4fQV8O2Vs-bkPm2LkCOU",
  authDomain: "ema-john-simple-69aed.firebaseapp.com",
  projectId: "ema-john-simple-69aed",
  storageBucket: "ema-john-simple-69aed.appspot.com",
  messagingSenderId: "110146795604",
  appId: "1:110146795604:web:3b125efb086c203f1b95c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
export default auth;