import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';

import firebaseApp from './firebaseConfig';


const db = firebase.firestore();

export default {
    loginGoogle: async () => {
        const provider = new firebase.auth().GoogleAuthProvider();
        let result = await firebase.auth().signInWithPopup(provider);
        return result;
    }
}
