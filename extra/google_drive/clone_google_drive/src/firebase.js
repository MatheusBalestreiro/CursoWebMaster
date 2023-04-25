
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAeTYERW1Gywu6oxMJnOCJr5deABcyF7MQ",
  authDomain: "clone-d-a01fa.firebaseapp.com",
  projectId: "clone-d-a01fa",
  storageBucket: "clone-d-a01fa.appspot.com",
  messagingSenderId: "622202291864",
  appId: "1:622202291864:web:acb3d09a55ec283005b2ed"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider, db, storage};
