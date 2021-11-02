import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCakt5iR2dvl3K51VWgnHTAA3Ll442-ll4",
  authDomain: "barberuts-firebase-1ceeb.firebaseapp.com",
  projectId: "barberuts-firebase-1ceeb",
  storageBucket: "barberuts-firebase-1ceeb.appspot.com",
  messagingSenderId: "396390675840",
  appId: "1:396390675840:web:e7a2c2750fc41ee31ffd65"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);


export default firebaseApp;