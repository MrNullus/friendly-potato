import { useState, useEffect, createContext } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = userState({});

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