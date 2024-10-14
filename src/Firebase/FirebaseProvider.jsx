import {GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebaseConfig";
import PropTypes from 'prop-types';
import axios from "axios";
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

//update userProfile

const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };


//logout
const logOut = ()=>{
    signOut(auth); 
    setUser(null)  
 }

 const saveUser = async (user) => {
    const currentUser = {
          username: user?.displayName,
          email: user?.email,
          image: user?.photoUrl,
          role: "Employee",
          isVerified: false,
        };
       const {data} = await axios.post("https://employee-management-server-five.vercel.app/user", currentUser);
       return data;
  };



useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user)
      saveUser(user?.email)
      setLoading(false)
  });
  return ()=> unsubscribe()
},[])


const allValues = {
        user,
        createUser,
        signInUser,
        googleLogin,
        updateUserProfile,
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