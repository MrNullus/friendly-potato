import React, { useContext, useEffect, useState } from "react";

import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

import { ChatContext } from '../context/ChatContext';
import Message from '../Message';

const Messages = () => {
  const [ messages, setMessages ] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, 'chats', data.dataId), (doc) => {
      doc.exists() && setMessages(docs.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  return (
    <div className="messages">
      {
        messages.map(( msg ) => {
          <Message 
            key={msg.id}
            message={msg}
          />
        })
      }
    </div>
  );
};

export default Messages;
