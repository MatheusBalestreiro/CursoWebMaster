import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB8feYiJGslMkIRH9yIwtBS-UYV-IPCkLY",
  authDomain: "instagram-clone-curso-39473.firebaseapp.com",
  projectId: "instagram-clone-curso-39473",
  storageBucket: "instagram-clone-curso-39473.appspot.com",
  messagingSenderId: "683723025513",
  appId: "1:683723025513:web:ee7e60e7f727d8c9ee46f8",
  measurementId: "G-RN86PL49V1"
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

export {db,auth,storage,functions};