import React from 'react';

const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img 
          src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/280dd4105648537.5f7dbf28b12f1.jpg"  
          alt="" 
        />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello Hell</p>
        </div>
      </div>
      <div className="userChat">
        <img 
          src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/280dd4105648537.5f7dbf28b12f1.jpg"  
          alt="" 
        />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello Hell</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;