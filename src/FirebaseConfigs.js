// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcRH43_V1dPpViDs5xDlec0yukU5qF9Dw",
  authDomain: "hustlers-heaven-webstore.firebaseapp.com",
  projectId: "hustlers-heaven-webstore",
  storageBucket: "hustlers-heaven-webstore.appspot.com",
  messagingSenderId: "808093424362",
  appId: "1:808093424362:web:7b2a45cf7d0ccc7991d593",
  measurementId: "G-K60228V1ZX"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

// export default firebaseConfig;
