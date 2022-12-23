import React from 'react';

import ImgAdd from '../img/add.png';

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <form>
          <input 
            type="text" 
            name="name"
            placeholder="Deixe seu lindo nome registrado"
          />
          <input 
            type="email" 
            name="email"
            placeholder="Email"
          />
          <input 
            type="password" 
            name="password"
            placeholder="Senha"
          />
          <input 
            className="sr-only"
            type="file" 
            name="file"
            id="file"
          />
          <label htmlFor="file">
            <img src={ImgAdd} alt="Add" />
            <span>Add an avatar</span>
          </label>

          <button>Sign Up</button>
        </form>

        <p>Você já possui uma conta? Entrar</p>
      </div>
    </div>
  );
};

export default Register;