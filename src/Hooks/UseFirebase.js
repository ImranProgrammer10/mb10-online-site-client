import {  signInWithPopup,   signOut, onAuthStateChanged, GoogleAuthProvider, getAuth } from "firebase/auth";
import { useState, useEffect } from 'react';
 
import initializeAuthentication from "../components/Login/FireBase/FireBase.init";
 
 

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    
    // const signInUsingGoogle = (location, navigate) => {
       
    //     setIsLoading(true);
    //     signInWithPopup(auth, GoogleAuthProvider)
    //         .then((result) => {
    //             const user = result.user;
    //             setUser(user.email, user.displayName, 'PUT');
    //             setAuthError('');
    //             const destination = location?.state?.from || '/';
    //             Navigate(destination);
    //         }).catch((error) => {
    //             setAuthError(error.message);
    //         }).finally(() => setIsLoading(false));
    // }


    const signInUsingGoogle = (location, navigate) => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                sessionStorage.setItem("email",result.user.email);
                setAuthError('');
                const destination = location?.state?.from || '/';
                navigate(destination);
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }


    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

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
        logOut
    }
}

export default useFirebase;