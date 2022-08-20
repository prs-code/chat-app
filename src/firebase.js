import firebase from 'firebase/compat/app';
import "firebase/compat/auth";

 export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDgqRqaiW_Zag9TnTAQ7qZOVTeNxkqGOiQ",
    authDomain: "chat-app-7fa41.firebaseapp.com",
    projectId: "chat-app-7fa41",
    storageBucket: "chat-app-7fa41.appspot.com",
    messagingSenderId: "860460382353",
    appId: "1:860460382353:web:40ffaf8be4d9a4f127a730"
  }).auth();