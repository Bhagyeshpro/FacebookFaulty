// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase  from "./firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDYtpHnIzR9U5PgtNh_S9uG2_uBhL9Z8ic",
    authDomain: "facebook-clone-a0c7b.firebaseapp.com",
    projectId: "facebook-clone-a0c7b",
    storageBucket: "facebook-clone-a0c7b.appspot.com",
    messagingSenderId: "362477974642",
    appId: "1:362477974642:web:f5ac081c7be087b2157eeb",
    measurementId: "G-B08656VTC7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;