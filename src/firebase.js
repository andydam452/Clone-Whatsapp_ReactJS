// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCmUflMqMIAiqIA-cgPloMHJ_yj4KtkElg",
    authDomain: "whats-app-clone-77c96.firebaseapp.com",
    projectId: "whats-app-clone-77c96",
    storageBucket: "whats-app-clone-77c96.appspot.com",
    messagingSenderId: "545681535944",
    appId: "1:545681535944:web:3329f8a02f86d6c13406fd",
    measurementId: "G-B22DD01CQF"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;