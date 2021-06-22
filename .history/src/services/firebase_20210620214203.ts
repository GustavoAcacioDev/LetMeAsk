import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyDAyn00yGaSfwFvON92cBVXB5h9TJqKiXo",
  authDomain: "letmeask-65cc5.firebaseapp.com",
  databaseURL: "https://letmeask-65cc5-default-rtdb.firebaseio.com",
  projectId: "letmeask-65cc5",
  storageBucket: "letmeask-65cc5.appspot.com",
  messagingSenderId: "140860942529",
  appId: "1:140860942529:web:9b65213a70f69d09ed4c40"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig); 

export const auth = firebase.auth();
export const database = firebase.database();