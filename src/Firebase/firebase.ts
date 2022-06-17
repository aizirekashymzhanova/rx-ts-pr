// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
firebase.initializeApp({
  apiKey: "AIzaSyAXayh2itGAHupg2GwkAfMX6lWSNvSS23c",
  authDomain: "rx-ts-project.firebaseapp.com",
  projectId: "rx-ts-project",
  storageBucket: "rx-ts-project.appspot.com",
  messagingSenderId: "568434016784",
  appId: "1:568434016784:web:6fc3531f4bb4fb814a4095",
  measurementId: "G-HZ69XJGQJ7",
});
const db = firebase.firestore();
const auth = firebase.auth();
export { db, auth, firebase };
