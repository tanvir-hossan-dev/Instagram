// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDjDmCrOPg09nmsyWjPOtgASZDwlfxIOHY",
  authDomain: "instagram-58ed6.firebaseapp.com",
  projectId: "instagram-58ed6",
  storageBucket: "instagram-58ed6.appspot.com",
  messagingSenderId: "295913494536",
  appId: "1:295913494536:web:9c5c53f30643210a4b99bd",
  measurementId: "G-HY8S20HSEF",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default { app, db, storage };
