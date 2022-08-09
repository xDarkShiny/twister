import firebase from 'firebase/app';
import { auth } from 'firebase/auth';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyAYcWj7OqoMHKwFdmw8w4XlrhNlGxvEA6c",
    authDomain: "twister-69429.firebaseapp.com",
    projectId: "twister-69429",
    storageBucket: "twister-69429.appspot.com",
    messagingSenderId: "1019422610693",
    appId: "1:1019422610693:web:63c18abc9bc691a65b536c",
    measurementId: "G-ZH8H4E98HC"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();