// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGuw_KhpdoRKdGC-kMEB1VQmS9lLzy1PY",
  authDomain: "byte-chat-32151.firebaseapp.com",
  projectId: "byte-chat-32151",
  storageBucket: "byte-chat-32151.appspot.com",
  messagingSenderId: "887670254534",
  appId: "1:887670254534:web:f623f6cb536b02ada520c7",
  measurementId: "G-NKX8RN933F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage();
const db = getFirestore(); 

export { app, auth, storage, db };  