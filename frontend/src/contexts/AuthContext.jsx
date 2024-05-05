import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { getDatabase } from "firebase/database";

const AuthContext = createContext();

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "your-stock-e5280.firebaseapp.com",
  databaseURL: "https://your-stock-e5280-default-rtdb.firebaseio.com",
  projectId: "your-stock-e5280",
  storageBucket: "your-stock-e5280.appspot.com",
  messagingSenderId: "935535742165",
  appId: "1:935535742165:web:c8b376a41090a6427f265c",
};

// firebase, GoogleAuth 初期設定
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) => {
  const [loginUser, setLoginUser] = useState();
  const [userID, setUserID] = useState();

  useEffect(() => {
    // auth 初期化時にログインユーザ設定
    auth.onAuthStateChanged((user) => setLoginUser(user));
  }, [loginUser]);

  const login = async () => {
    const result = await signInWithPopup(auth, provider);
    setLoginUser(result.user);
    result.user.getIdToken().then((token) => setUserID(token));
  };

  const logout = async () => {
    await signOut(auth);
    setLoginUser(null);
    setUserID(null);
  };

  // ログイン情報設定したProvider
  return (
    <AuthContext.Provider
      value={{
        loginUser,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const AuthContextConsumer = () => {
  return useContext(AuthContext);
};

export const db = getDatabase(app);
