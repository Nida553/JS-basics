import firebase from 'firebase'
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAWB2AHQ9Ex9NWfEm0mn5--ja1N4M5vuOY",
  authDomain: "fir-emu-84ce2.firebaseapp.com",
  projectId: "fir-emu-84ce2",
  storageBucket: "fir-emu-84ce2.appspot.com",
  messagingSenderId: "475292520668",
  appId: "1:475292520668:web:77c7e7ff15f7cd02476419"
};
  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
// const auth = firebase.auth;

// // eslint-disable-next-line no-restricted-globals
// if (location.hostname === 'localhost') {
//   db.useEmulator('localhost', 8080);
//   auth().useEmulator('http://localhost:9099/', { disableWarnings: true });
// }

// // export default firebase;
export { db };
export default fire;
