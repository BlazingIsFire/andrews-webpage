import { onAuthStateChanged } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { auth } from '../firebase';

const AuthContext = React.createContext();
export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    const { pathname } = useLocation();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) =>{
            setCurrentUser(user);
            setLoading(false)
        })

        return unsubscribe;
    }, [pathname])

    const value = {
        currentUser
    }

  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}
