// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACtfvq_owH--QSG8qog-cNVq5ryFukzx0",
  authDomain: "blogify-cd9bd.firebaseapp.com",
  databaseURL: "https://blogify-cd9bd-default-rtdb.firebaseio.com",
  projectId: "blogify-cd9bd",
  storageBucket: "blogify-cd9bd.appspot.com",
  messagingSenderId: "814570502156",
  appId: "1:814570502156:web:99df38ff2d36915944d629",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export default db;
