import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import firebaseInitialize from '../firebase/firebase.initialize';
import { useState } from 'react';
import { useEffect } from 'react';

//Call Firebase Initialization
firebaseInitialize();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    // Google Authentication
    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);

    }

    // State Change Authentication
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            setIsLoading(true);
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));

    }

    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut,
    }
};

export default useFirebase;