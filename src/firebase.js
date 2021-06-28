import firebase from 'firebase'
require ('firebase/auth')
require ('firebase/firestore')
const firebaseConfig = {
   apiKey: "AIzaSyDgTLOXuGTajIh978gl2sJpWGe85KqUgTk",
   authDomain: "the-lively-stills.firebaseapp.com",
   projectId: "the-lively-stills",
   storageBucket: "the-lively-stills.appspot.com",
   messagingSenderId: "414774679786",
   appId: "1:414774679786:web:662db3311553e5382a5f93",
   measurementId: "G-LXTLHFWY8F"
 };
 
  var app = firebase.initializeApp(firebaseConfig);
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }
  firebase.analytics();
  export const firebaseauth = app.auth()
  export const firebasefirestore = app.firestore()
  
  