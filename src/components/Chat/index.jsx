import React from 'react';

import { ChatContext } from '../../context/ChatContext';

import ImgCam from '../../img/cam.png';
import ImgAdd from '../../img/add.png';
import ImgMore from '../../img/more.png';

import Message from '../Message';
import Input from '../Input';

import './styles.scss';

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <main className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>

        <div className="chatIcons">
          <img src={ImgCam} alt="Cam" />
          <img src={ImgAdd} alt="Add" />
          <img src={ImgMore} alt="More" />
        </div>
      </div>

      <Message />
      <Input />
    </main>
  );
};

export default Chat;