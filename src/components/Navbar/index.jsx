import { useContext } from "react";

import { signOut } from 'firebase/auth';
import { auth } from '../../services/firebase';

import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const currentUser = useContext(AuthContext);

  return (
    <div className="navbar">
      <span className="logo">
        Friendly Potato
      </span>

      <div className="user">
        <img 
          src={currentUser.photoURL}
          alt={currentUser.displayName}
        />    
        <span>
          {currentUser.displayName}
        </span>
        <button onClick={() => signOut(auth)}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;