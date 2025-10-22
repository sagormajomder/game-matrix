import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, use, useEffect, useState } from "react";
import auth from "./../firebase/firebase.config";

const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  console.log(user);

  // User Registration
  function createUser(email, password) {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function updateUserProfile(updateInfo) {
    return updateProfile(auth.currentUser, updateInfo);
  }

  // SignIn with Google
  function signInWithGoogle() {
    return signInWithPopup(auth, googleProvider);
  }

  // SignIn and Signout User
  function signInUser(email, password) {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  function signOutUser() {
    setIsLoading(true);
    return signOut(auth);
  }

  // Password Reset
  function resetPasswordBySendEmail(email) {
    auth.useDeviceLanguage();
    return sendPasswordResetEmail(auth, email);
  }
  // Observer to get current logged User
  useEffect(function () {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext
      value={{
        createUser,
        updateUserProfile,
        signInUser,
        resetPasswordBySendEmail,
        signInWithGoogle,
        signOutUser,
        user,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AuthContext>
  );
}

function useAuth() {
  const context = use(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside of AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
