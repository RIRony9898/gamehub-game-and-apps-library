import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //   create user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   sign in user with email and password
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   sign in user with google
  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  // sign out user
  const signOutUser = () => {
    return signOut(auth);
  };

  //update user profile
  const updateUserProfile = (name, photoURL = null) => {
    const updates = { displayName: name };
    if (photoURL) {
      updates.photoURL = photoURL;
    }
    return updateProfile(auth.currentUser, updates);
  };

  //update password
  const changePassword = async (newPassword) => {
    return updatePassword(auth.currentUser, newPassword);
  };

  // reset password
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    signInUser,
    signInWithGoogle,
    signOutUser,
    updateUserProfile,
    changePassword,
    resetPassword,
    user,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
