import React from 'react';

import './styles.scss';

const Message = () => {
  return (
    <div className="message owner">
      <div className="menssageInfo">
        <img 
          src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/280dd4105648537.5f7dbf28b12f1.jpg"
          alt="" 
        />
        <span>coisa boa</span>
      </div>
      <div className="menssageContent">
        <p>hello from hellfire</p>
        <img 
          src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/280dd4105648537.5f7dbf28b12f1.jpg"
          alt="" 
        />
      </div>
    </div>
  );
};

export default Message;