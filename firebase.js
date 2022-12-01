import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCaHz5ib81VZzPCtMJyFBdYbyZ3wPSNl-c",
  authDomain: "whatsapp-b53f3.firebaseapp.com",
  projectId: "whatsapp-b53f3",
  storageBucket: "whatsapp-b53f3.appspot.com",
  messagingSenderId: "612902584236",
  appId: "1:612902584236:web:66d8e3f72173021c304409"
};

const app = !firebase.apps.length 
? firebase.initializeApp(firebaseConfig)
: firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export {db, auth, provider}