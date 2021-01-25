import firebase from "firebase";

const firebaseConfig = {
  //from your project's config at the firebase website
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.FacebookAuthProvider();
const db = firebase.firestore();

export { auth, provider };
export default db;