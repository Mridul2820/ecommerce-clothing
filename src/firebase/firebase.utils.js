import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBs82gDIYK72VhUs_Ab34iqHlrRQ9eUr98",
    authDomain: "crwn-db-78359.firebaseapp.com",
    databaseURL: "https://crwn-db-78359.firebaseio.com",
    projectId: "crwn-db-78359",
    storageBucket: "crwn-db-78359.appspot.com",
    messagingSenderId: "450292698518",
    appId: "1:450292698518:web:1b8d33ac2f8468bf2361b7",
    measurementId: "G-GLRE5ZXJGC"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;