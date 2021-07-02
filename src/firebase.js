import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB2UqasUk5-a7fT2Mni5VmuxXLbPurp6Os",
    authDomain: "snapchat-app-b40fc.firebaseapp.com",
    projectId: "snapchat-app-b40fc",
    storageBucket: "snapchat-app-b40fc.appspot.com",
    messagingSenderId: "832185574609",
    appId: "1:832185574609:web:e4f7214f35f4fda72791f0"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider }