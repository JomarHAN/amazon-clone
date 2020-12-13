import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "API_KEY",
    authDomain: "clone-e08f0.firebaseapp.com",
    databaseURL: "https://clone-e08f0.firebaseio.com",
    projectId: "clone-e08f0",
    storageBucket: "clone-e08f0.appspot.com",
    messagingSenderId: "647812687976",
    appId: "1:647812687976:web:51bfc9b5c57813414a73dd",
    measurementId: "G-8L7S64QCBQ"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {
    db,
    auth,
    storage
};