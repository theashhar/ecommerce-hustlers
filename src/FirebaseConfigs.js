// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// import firebase from 'firebase';  

// import firebase from "firebase/compat/app";
// import "firebase/compat/auth"
// import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDTHHBBnKYLAe54VuzKCXeXh6LyAn6S8Gs",
  authDomain: "hustlers-heaven-firebase.firebaseapp.com",
  projectId: "hustlers-heaven-firebase",
  storageBucket: "hustlers-heaven-firebase.appspot.com",
  messagingSenderId: "44510784655",
  appId: "1:44510784655:web:c5ccc4b9fbd0b2dfeed4fa",
  measurementId: "G-Z3ZGC1BXES"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

// export default firebaseConfig;
