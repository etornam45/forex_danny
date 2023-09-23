import { useContext, createContext, useState, useEffect } from "react";
import { auth, db } from "../firebase";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  const GoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
    await setDoc(
      doc(db, "users", result.user.uid),
      {
        name: result.user.displayName,
        email: result.user.email,
        photoURL: result.user.photoURL,
      },
      { merge: true }
    );
  };

  const signUpWithPassword = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {

        const tempUser = userCredential.user
        tempUser.displayName = name
        tempUser.photoURL = `https://api.dicebear.com/7.x/avataaars/svg?seed=${name.split(" ").join("")}`

         setUser( tempUser);
        // ...
        await setDoc(
          doc(db, "users", userCredential.user.uid),
          {
            name: name,
            email: userCredential.user.email,
            photoURL: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name.split(" ").join("")}`,
          },
          { merge: true }
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const signInWithPassword = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const LogOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      localStorage.setItem('userId', currentUser.uid)
    });

    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider
      value={{ user, setUser, GoogleSignIn, LogOut, signUpWithPassword, signInWithPassword }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
