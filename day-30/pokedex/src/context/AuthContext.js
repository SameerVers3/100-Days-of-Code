import {useContext, createContext} from "react"
import { useState, useEffect } from "react"
import { 
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    signOut,
    onAuthStateChanged
} from "firebase/auth";

import {auth, db} from "../firebase"
import { collection, getDoc, doc, setDoc } from "firebase/firestore";

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [userData, setUserData] = useState({
        favorites: [],
        scores: {}
    });

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider()
        signInWithRedirect(auth, provider)
    }

    const logOut = () => {
        signOut(auth);
    }

    const addFavorite = async (id) => {
        if (user && user.uid && userData) {
          // Update the user's favorites array in the local state
          setUserData((prevData) => ({
            ...prevData,
            favorites: [...prevData.favorites, id],
          }));
      
          // Update the user's favorites array in the Firestore database
          const userCollectionRef = collection(db, "users");
          const userDocRef = doc(userCollectionRef, user.uid);
      
          await setDoc(userDocRef, {
            ...userData,
            favorites: [...userData.favorites, id],
          });
        }
      };

      const removeFromFavorites = async (id) => {
        if (user && user.uid && userData) {
          // Update the user's favorites array in the local state
          setUserData((prevData) => ({
            ...prevData,
            favorites: prevData.favorites.filter((favoriteId) => favoriteId !== id),
          }));
      
          // Update the user's favorites array in the Firestore database
          const userCollectionRef = collection(db, "users");
          const userDocRef = doc(userCollectionRef, user.uid);
      
          await setDoc(userDocRef, {
            ...userData,
            favorites: userData.favorites.filter((favoriteId) => favoriteId !== id),
          });
        }
      };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);

            if (currentUser) {
                // Update the user state when a user is authenticated

                // Create or update the user document in the "users" collection
                const userCollectionRef = collection(db, "users");
                const userDocRef = doc(userCollectionRef, currentUser.uid);

                // Check if the user document exists, and create it if not
                const data = await getDoc(userDocRef);
            if (!data.exists()) {
                await setDoc(userDocRef, {
                    favorites: [],
                    scores: {},
                });
            } else {
                setUserData(data.data());
            }
        }



        return () => {
            unsubscribe()
        }
        })
    }, [])

    return (
        <AuthContext.Provider value={{googleSignIn, logOut, user, addFavorite, removeFromFavorites, userData}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}