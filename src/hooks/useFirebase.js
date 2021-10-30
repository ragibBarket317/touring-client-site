import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import firebaseInitialize from '../firebase/firebase.initialize';
import { useState } from 'react';
import { useEffect } from 'react';

//Call Firebase Initialization
firebaseInitialize();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    // Google Authentication
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);

    }

    // State Change Authentication
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
        });
        return () => unsubscribed;
    }, []);

    const logOut = () => {
        signOut(auth)
            .then(() => { })

    }

    return {
        user,
        signInUsingGoogle,
        logOut,
    }
};

export default useFirebase;