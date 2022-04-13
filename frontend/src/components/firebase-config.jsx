// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
import {getStorage} from '@firebase/storage'
// import firebase from 'firebase';

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//google account = witssdteam@gmail.com
//password = witssdteam9

const firebaseConfig = {
  apiKey: "AIzaSyDOTpuBX6XHkTzmVEWkO3RszUO3Fo52g80",
  authDomain: "website-18d47.firebaseapp.com",
  projectId: "website-18d47",
  storageBucket: "website-18d47.appspot.com",
  messagingSenderId: "591881543071",
  appId: "1:591881543071:web:53850160b191b3b51bb1aa",
  measurementId: "G-X1JVCZW47F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// firebase.initializeApp(firebaseConfig);
// storage = firebase.storage();
  
// export default storage;