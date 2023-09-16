import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {

  apiKey: "AIzaSyAhBrpYdI3ix2tPHH7_nkC0fTuSt3coA0o",
  authDomain: "netflix-clone-b382f.firebaseapp.com",
  projectId: "netflix-clone-b382f",
  storageBucket: "netflix-clone-b382f.appspot.com",
  messagingSenderId: "89441814639",
  appId: "1:89441814639:web:a8c0f953c683d14743e59a"
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { auth };
export default db;

