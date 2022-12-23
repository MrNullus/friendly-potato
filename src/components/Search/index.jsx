import React from 'react';

import './styles.scss';

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input 
          type="text" 
          name="" 
          id="" 
          placeholder="Proucure um usuario..."
        />
      </div>

      <div className="userChat">
        <img 
          src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/280dd4105648537.5f7dbf28b12f1.jpg"  
          alt="" 
        />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
};

export default Search;