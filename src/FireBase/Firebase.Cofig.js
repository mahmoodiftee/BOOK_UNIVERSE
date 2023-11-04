import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDahMHFZZnRlf34P0n8TJ6obBwi2KA99wY",
  authDomain: "glass-world.firebaseapp.com",
  projectId: "glass-world",
  storageBucket: "glass-world.appspot.com",
  messagingSenderId: "725994245433",
  appId: "1:725994245433:web:ffff4577b68c7ef33bece8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;


