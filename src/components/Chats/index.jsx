import React, { useState, useEffect, useContext } from 'react';

import { AuthContext } from '../../context/AuthContext';
import { ChatContext } from '../../context/ChatContext';

import { doc, onSnapshot } from "firebase/firestore";
import { db } from '../../services/firebase';

const Chats = () => {
  const currentUser = useContext(AuthContext);
  const { dispath } = useContext(ChatContext);
  const [ chats, setChats ] = useState([]);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });
  
      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid])

  console.log('====================================');
  console.log(chats);
  console.log('====================================');
  console.log(Object.entries(chats));
  console.log('====================================');

  const handleSelect = (user) => {
    dispath({ type: 'CHANGE_USER', payload: user })
  };

  return (
    <div className="userChat">
    {
      Object.entries(chats)?.sort(
        (a, b) => a[1].date - b[1].date
      ).map((chat) => (
        <div 
          key={chat[0]} 
          className="userChat" 
          onClik={() => handleSelect(chat[1].userInfo)}
        >
          <img 
            src={chats[1].userInfo.photoURL}
            alt={chats[1].userInfo.displayName} 
          />
          <div className="userChatInfo">
            <span>{chats[1].userInfo.displayName}</span>
            <p>{chat[1].userInfo.lastMessage?.text}</p>
          </div>
        </div>
      ))
    }
    </div>
  );
};

export default Chats;