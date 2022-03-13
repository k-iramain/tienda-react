// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB96rCc7AFEERDdfcDsTfJgP7mPr85WkM",
  authDomain: "tienda-react-388e2.firebaseapp.com",
  projectId: "tienda-react-388e2",
  storageBucket: "tienda-react-388e2.appspot.com",
  messagingSenderId: "704091131909",
  appId: "1:704091131909:web:57d96c9292881c70a24c6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);