import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA77vpui1Jwehe7Efucdu7Ri4lX4O1vRFU",
  authDomain: "twitter-clone-8f3ff.firebaseapp.com",
  projectId: "twitter-clone-8f3ff",
  storageBucket: "twitter-clone-8f3ff.appspot.com",
  messagingSenderId: "853009299803",
  appId: "1:853009299803:web:75c685738ac6a37e8c027e",
  measurementId: "G-4BNV485C6B"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db;