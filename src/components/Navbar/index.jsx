import React from 'react';

import { signOut } from 'firebase/auth';
import { auth } from '../../services/firebase';

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">
        Byte Chat
      </span>

      <div className="user">
        <img 
          src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/280dd4105648537.5f7dbf28b12f1.jpg" 
          alt=""
        />    
        <span>Klateia</span>
        <button onClick={() => signOut(auth)}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;