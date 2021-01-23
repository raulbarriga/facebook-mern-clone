import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC7XDE5vpVRuSaklKNKJz7Ddpoz9CFHVzc",
  authDomain: "facebook-mern-ed4dc.firebaseapp.com",
  projectId: "facebook-mern-ed4dc",
  storageBucket: "facebook-mern-ed4dc.appspot.com",
  messagingSenderId: "1093880324192",
  appId: "1:1093880324192:web:816f3c25fc865fdfa86305"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.FacebookAuthProvider();
const db = firebase.firestore();

export { auth, provider };
export default db;
