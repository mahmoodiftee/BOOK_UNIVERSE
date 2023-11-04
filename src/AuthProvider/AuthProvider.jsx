import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../FireBase/Firebase.Cofig";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider)
  }

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const LoginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      console.log('Observing Current User', currentUser);
    });
    return () => {
      unSubscribe();
    }
  }, [])

  const LogOut =()=>{
    return signOut(auth)
  }


  const authInfo = { googleLogin, createUser, LoginUser, githubLogin, LogOut, user }
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;