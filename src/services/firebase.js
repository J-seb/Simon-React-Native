import firebase from "firebase/app";

import "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB32x_c-87fYfxVnm9R6GwfCRl0OFaRZqA",
  authDomain: "simon-game-4cbf3.firebaseapp.com",
  projectId: "simon-game-4cbf3",
  storageBucket: "simon-game-4cbf3.appspot.com",
  messagingSenderId: "218136715324",
  appId: "1:218136715324:web:e889aa9a751edc4cafe339",
  measurementId: "G-9LL18EMH6S",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
