import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBYxqSM5TdRItDbBV3BcaXtLsJsQ96hX6Q",
  authDomain: "autoform-a6f3b.firebaseapp.com",
  databaseURL: "https://autoform-a6f3b-default-rtdb.firebaseio.com",
  projectId: "autoform-a6f3b",
  storageBucket: "autoform-a6f3b.appspot.com",
  messagingSenderId: "924908023838",
  appId: "1:924908023838:web:952c5b42b5f8bf290abe0f",
  measurementId: "G-XJH83Y4W42"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();