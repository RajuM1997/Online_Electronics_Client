import {
  getAuth,
  updateProfile,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import initializeAuthentication from "../../Pages/Login/Firebase/firebase.init";
import { addUserAuth, handleLoading } from "../../redux/slices/serviceSlice";

initializeAuthentication();
const auth = getAuth();
const GoogleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const googleSignIn = () => {
    return signInWithPopup(auth, GoogleProvider);
  };
  const logOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(addUserAuth([]));
      })
      .catch((error) => {});
  };
  const createAccount = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };
  const emailLogin = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUserAuth(user));
        dispatch(handleLoading(false));
      } else {
        dispatch(addUserAuth([]));
        dispatch(handleLoading(false));
      }
    });
  }, [dispatch]);

  return {
    googleSignIn,
    logOut,
    createAccount,
    emailLogin,
    updateProfile,
    auth,
  };
};

export default useFirebase;
