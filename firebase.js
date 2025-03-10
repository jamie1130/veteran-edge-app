// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFunctions } from "firebase/functions";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC19bXF7ETM1exthcCIL-gf0UNUQR4aAs",
  authDomain: "veteran-edge-app.firebaseapp.com",
  projectId: "veteran-edge-app",
  storageBucket: "veteran-edge-app.firebasestorage.app",
  messagingSenderId: "358447493365",
  appId: "1:358447493365:web:392a7aa5bf548644c7d5bc",
  measurementId: "G-3KZLV6SWSF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const functions = getFunctions(app);
export const analytics = getAnalytics(app);

export default app;
