// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVEOzlX4ogbSMfKV8LG6Byrd7LE5-LDC4",
    authDomain: "homescree-net-guestbook.firebaseapp.com",
    projectId: "homescree-net-guestbook",
    storageBucket: "homescree-net-guestbook.appspot.com",
    messagingSenderId: "643279288487",
    appId: "1:643279288487:web:16ba080f816658bb908382",
    measurementId: "G-PLSCX26VG5"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
