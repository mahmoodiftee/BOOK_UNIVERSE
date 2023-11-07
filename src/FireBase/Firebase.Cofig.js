import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBY_cxhsxnL7c5sibVI_XWxe85WWC9x0Lk",
  authDomain: "book-universe-4b8f7.firebaseapp.com",
  projectId: "book-universe-4b8f7",
  storageBucket: "book-universe-4b8f7.appspot.com",
  messagingSenderId: "615543521462",
  appId: "1:615543521462:web:607cbe614b247d47966617"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;


