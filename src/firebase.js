import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyByZ-N4VIPmhh1-0gz2ouATPzZBHmq3cYI",
    authDomain: "solomates-5c8de.firebaseapp.com",
    projectId: "solomates-5c8de",
    storageBucket: "solomates-5c8de.appspot.com",
    messagingSenderId: "1015773706490",
    appId: "1:1015773706490:web:be4efec2fc98937d15f143"
  }).auth();