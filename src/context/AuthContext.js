import { createContext } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = userState({});

  useEffect(() => {
    onAuthStateChanged(auth, ( user ) => {
      console.log(user);
      setcurrentUser(user);
    });
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