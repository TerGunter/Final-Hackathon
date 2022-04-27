import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhTPC7VBA9ugg9a8cwlnZh8lYCSWappw0",
  authDomain: "bromarket-25980.firebaseapp.com",
  projectId: "bromarket-25980",
  storageBucket: "bromarket-25980.appspot.com",
  messagingSenderId: "594079952372",
  appId: "1:594079952372:web:71300c36f4a23f7543dda1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
