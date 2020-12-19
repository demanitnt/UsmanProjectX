import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyDLp1JZ7J2-RrrS6ltCkod7hOj9vpHJ-iE",
    authDomain: "gujjar-x.firebaseapp.com",
    databaseURL: "https://gujjar-x-default-rtdb.europe-west1.firebasedatabase.app"
  };
  firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();