import {GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebaseConfig";
import PropTypes from 'prop-types';
const googleProvider = new GoogleAuthProvider()
export const AuthContext = createContext(null);

const FirebaseProvider = ({children}) => {
const [user,setUser] = useState(null)
const [loading,setLoading] = useState(true);
//Create users 
const createUser =(email,password,userName,photoURL)=>{
        return createUserWithEmailAndPassword(auth, email, password,userName,photoURL)
     }
//Sign in users    
const signInUser = (email,password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
    }   
//google login
const googleLogin = ()=>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
}

//logout
const logOut = ()=>{
    signOut(auth); 
    setUser(null)  
 }


useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user)
        setLoading(false)
  });
  return ()=> unsubscribe()
},[])


const allValues = {
        user,
        createUser,
        signInUser,
        googleLogin,
        logOut,
        loading
     }
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};
FirebaseProvider.propTypes = {
    children: PropTypes.object
}
export default FirebaseProvider;