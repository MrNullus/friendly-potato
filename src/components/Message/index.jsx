import React, { useContext, useEffect, useRef } from "react";

import { AuthContext } from '../../context/AuthContext';
import { ChatContext } from '../../context/ChatContext';

import './styles.scss';

const Message = ({ message }) => {
  const ref = useRef();

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div className={`message ${message.senderId === currentUser.uid && "owner"}`}>
      <div className="menssageInfo">
        <img 
          src={
          message.sendId === currentUser.id 
            ? currentUser.photoURL 
            : data.user.photoURL
          }
          alt=""
        />
        <span>coisa boa</span>
      </div>
      <div className="menssageContent">
        <p>
          {message.text}
        </p>
        {
          message.img &&
          <img 
            src={message.img}
            alt=""
          />
        }
      </div>
    </div>
  );
};

export default Message;