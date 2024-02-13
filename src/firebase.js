import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAUgtFs6rQdHI-ppCmz8mZKA4bmiyQED7I",
  authDomain: "netflix-clone-1-5680e.firebaseapp.com",
  projectId: "netflix-clone-1-5680e",
  storageBucket: "netflix-clone-1-5680e.appspot.com",
  messagingSenderId: "622830455633",
  appId: "1:622830455633:web:619a1eb3ffcea6ed01e170"
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { auth };
export default db;

