import React from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCKRAx704JUXgRydX6QORpYG73vf1Fedk4",
    authDomain: "insta-clone-9d5fe.firebaseapp.com",
    projectId: "insta-clone-9d5fe",
    storageBucket: "insta-clone-9d5fe.appspot.com",
    messagingSenderId: "439288179447",
    appId: "1:439288179447:web:b0a99e407ad984f70f81f2"
  };
  
  // Initialize Firebaseconst firebaseApp = firebase.initializeApp(firebaseConfig)
const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const storage = firebase.storage()
const db = firebaseApp.firestore()
export { auth, db, storage }
