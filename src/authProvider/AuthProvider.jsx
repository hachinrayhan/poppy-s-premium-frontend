import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [dbUser, setDbUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => signInWithPopup(auth, googleProvider);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = async () => {
    await signOut(auth);
    setUser(null);
    setDbUser(null);
  };

  const updateDbUser = (updatedUser) => {
    setDbUser(updatedUser);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        try {
          const response = await fetch(
            `https://poppys-premium-backend.vercel.app/users/email/${currentUser.email}`
          );
          const data = await response.json();
          setDbUser(data);
        } catch (error) {
          console.error("Error fetching dbUser:", error);
          setDbUser(null);
        } finally {
          setLoading(false);
        }
      } else {
        setDbUser(null);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    dbUser,
    updateDbUser,
    loading,
    googleLogin,
    createUser,
    signIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
