import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCq8mLomTwW9iZSHPAduBpPO75nN_mjG1g",
  authDomain: "clone-e525d.firebaseapp.com",
  projectId: "clone-e525d",
  storageBucket: "clone-e525d.appspot.com",
  messagingSenderId: "965825170345",
  appId: "1:965825170345:web:71ce76b47864e41ff752b8",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
