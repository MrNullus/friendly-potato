import React from 'react';

import ImgCam from '../../img/cam.png';
import ImgAdd from '../../img/add.png';
import ImgMore from '../../img/more.png';

import Message from '../Message';
import './styles.scss';

const Chat = () => {
  return (
    <main className="chat">
      <div className="chatInfo">
        <span>Jane</span>

        <div className="chatIcons">
          <img src={ImgCam} alt="" />
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