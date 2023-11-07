import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../FireBase/Firebase.Cofig.js";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true);

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const LoginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      console.log('Observing Current User', currentUser);
      setLoading(false); 
    });
    return () => {
      unSubscribe();
    }
  }, [])

  const LogOut = () => {
    setLoading(true);
    return signOut(auth)
  }


  const authInfo = { googleLogin, createUser, LoginUser, LogOut, user, loading }
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;