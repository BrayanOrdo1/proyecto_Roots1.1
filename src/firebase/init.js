import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDBHWWYGWOkzVMWbtqxhk6prrQKfeowNII",
  authDomain: "roots-df341.firebaseapp.com",
  projectId: "roots-df341",
  storageBucket: "roots-df341.appspot.com",
  messagingSenderId: "270244163078",
  appId: "1:270244163078:web:3ed90f18891557199d9d87"

};


initializeApp(firebaseConfig);
const db = getFirestore();
export default db
