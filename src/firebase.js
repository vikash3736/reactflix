// import firebase from 'firebase';
// import { initializeApp } from "firebase/app";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWMsN8BL6xn8WtM_JNwharHRGLFYwmNIo",
  authDomain: "reactflix-831e2.firebaseapp.com",
  projectId: "reactflix-831e2",
  storageBucket: "reactflix-831e2.appspot.com",
  messagingSenderId: "917661518946",
  appId: "1:917661518946:web:c3ebd95c0f46088aef153b"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth,db };