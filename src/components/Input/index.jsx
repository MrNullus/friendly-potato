import React from 'react';

import './styles.scss';

const Input = () => {
  return (
    <div className="input">
      <input 
        type="text"
        placeholder="Mande um byte..."
        name=""
        id=""
      />

      <div className="send">
        <img 
          src="" 
          alt="" 
        />

        <input 
          type="file" 
          className="sr-only" 
          name=""
          id=""
        />
        <label htmlFor="">
          <img 
            src="" 
            alt="" 
          />
        </label>
        
        <button>Enviar!</button>
      </div>
    </div>
  );
};

export default Input;