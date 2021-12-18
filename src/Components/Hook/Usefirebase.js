import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../../Pages/Login/Firebase/firebase.init";
initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const auth = getAuth();

  //user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);

  //sign in with google accout
  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  //sign up with email and password
  const createAccountWithGoogle = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //log in with email and password
  const loginWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //handle user name
  const createUserName = (email, name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      // email: email,
    })
      .then(() => {
        const newUser = { ...user, displayName: name };
        setUser(newUser);
        console.log(email, name);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //user log out functionalti
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return {
    user,
    admin,
    error,
    setError,
    setUser,
    signInWithGoogle,
    createAccountWithGoogle,
    loginWithEmailAndPassword,
    isLoading,
    setIsLoading,
    handleLogOut,
    createUserName,
  };
};

export default useFirebase;
