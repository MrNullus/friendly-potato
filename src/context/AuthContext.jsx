import { useState, useEffect, createContext } from 'react';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebase'

const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, ( user ) => {
      console.log(user);
      setCurrentUser(user);
    });

    return () => {
      unsub();      
    }
  }, [])
  
  return (
    <AuthContext.Provider value={{
      currentUser
    }}>
      { children }
    </AuthContext.Provider>
  );
}


export { AuthContext, AuthContextProvider };