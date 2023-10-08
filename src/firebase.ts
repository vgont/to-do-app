import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlrKWd38A-lLc1hhmOtzUBVC-ivLN8Y7E",
  authDomain: "todo-list-46ecc.firebaseapp.com",
  projectId: "todo-list-46ecc",
  storageBucket: "todo-list-46ecc.appspot.com",
  messagingSenderId: "373379564867",
  appId: "1:373379564867:web:fc850d5f481724b55e9bf6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };