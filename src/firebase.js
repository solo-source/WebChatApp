import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwbXabo_Xkequ-YFlBh14brOZ4WfqCgGw",
  authDomain: "temp-8c0af.firebaseapp.com",
  projectId: "temp-8c0af",
  storageBucket: "temp-8c0af.appspot.com",
  messagingSenderId: "806932741246",
  appId: "1:806932741246:web:24f545df0ea21990feac2f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
