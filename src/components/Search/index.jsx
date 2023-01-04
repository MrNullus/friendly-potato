import React, { useContext, useState } from "react";

import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp
} from "firebase/firestore";
import { db } from '../../services/firebase';
import { AuthContext } from '../../context/AuthContext';

import './styles.scss';

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, 'users'), 
      where('displayName', '==', username)
    );

    try {
      const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        setUser(doc.data());
      });
    } catch (error) {
      alert(error);
      setErr(error);
    }
  };

  const handleKey = (e) => {
    e.code === 'Enter' && handleSearch();
  };

  const handleSelect = async () => {
    // checkar se o grupo (chats em firestore) existe, se não criado
    const combinedId = 
      currentUser.uid > user.uid 
        ? currentUser.uid + user.uid 
        : user.uid + currentUser.uid;
    
      try {
        const res = await getDocs(db, 'chats', combinedId);

        if (!res.exists()) {
          // criar um chat na coleção chats
          await setDoc(doc, db, 'chats', combinedId, { messages: [] });
          // criar user chats
          await updateDoc(doc(db, "userChats", currentUser.uid), {
              [combinedId+'.userInfo']: {
              uid: user.id,
              displayName: user.displayName,
              photoURL: user.photoURL
            },
            [combinedId+".date"]: serverTimestamp()
          });

          await updateDoc(doc(db, "userChats", currentUser.uid), 
            {
              [combinedId+'.userInfo']: {
              uid: user.id,
              displayName: user.displayName,
              photoURL: user.photoURL
            },
            [combinedId+".date"]: serverTimestamp()
          });

        }
      } catch (error) {
        setUser(null);
        setUsername("");
      }

    // criar user chats
  };

  return (
    <div className="search">
      <div className="searchForm">
        <input 
          type="text" 
          name="" 
          id="" 
          placeholder="Proucure um usuario..."
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>

      {
        err && <span>Usuario não encontrado... :(</span>
      }

      {
        user && ( 
          <div 
            className="userChat"
            onClick={handleSelect}
          >
            <img 
              src={user.photoURL}
              alt="" 
            />
            <div className="userChatInfo">
              <span>{user.displayName}</span>
            </div>
          </div>
        )
      }
    </div>
    
  );
};

export default Search;