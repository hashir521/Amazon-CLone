// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import firebase from './firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBGbzje9ET0iz8VGDvL2X-dJObLQCVuObA",
    authDomain: "challenge-95c26.firebaseapp.com",
    projectId: "challenge-95c26",
    storageBucket: "challenge-95c26.appspot.com",
    messagingSenderId: "484127354021",
    appId: "1:484127354021:web:fac6ce89404d660d82b14c",
    measurementId: "G-52S5VJH4PX"
  };

   const firebaseApp = firebase.initializeApp(firebaseConfig);
    const db = firebaseApp.firestore();
    export const auth = firebase.auth();

  export default { db, auth};