// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

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