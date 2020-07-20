import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAhhte6UU1ID5KFu7mx8J4aNiEj105M1eg",
  authDomain: "fb-msgr-clone.firebaseapp.com",
  databaseURL: "https://fb-msgr-clone.firebaseio.com",
  projectId: "fb-msgr-clone",
  storageBucket: "fb-msgr-clone.appspot.com",
  messagingSenderId: "868422457029",
  appId: "1:868422457029:web:0e5b32f50ceac4939d42ac",
  measurementId: "G-3ERTHD97M4"
});

const db = firebaseApp.firestore();

export default db;