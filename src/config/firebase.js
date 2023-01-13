// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAroWT_DHWkK40MO7lJcv-EFYHpyLIQFvs",
  authDomain: "social-media-firebase-df352.firebaseapp.com",
  projectId: "social-media-firebase-df352",
  storageBucket: "social-media-firebase-df352.appspot.com",
  messagingSenderId: "460833745202",
  appId: "1:460833745202:web:6570c4d6874bce27af8f2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =getAuth(app);
export const provider=new GoogleAuthProvider();