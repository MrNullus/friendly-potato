import React, { useState } from 'react';

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../services/firebase';

import ImgAdd from '../img/add.png';

const Register = () => {
  const [error, setError] = useState(false);

  const handleSubmit = ( e ) => {
    console.log("hello shit world")
    e.preventDefault();

    const newUser = {
      displayName: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
      file: e.target[3].files[0]
    }

    try {

      const res = createUserWithEmailAndPassword(auth, newUser.email, newUser.password);
    } catch (error) {
      setError(true);
    }
  }


  return (
    <div className="formContainer">
      <div className="formWrapper">
        <form onSubmit={handleSubmit}>
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
          {
            error && <span>Opps algo deu errado!</span>
          }
        </form>

        <p>Você já possui uma conta? Entrar</p>
      </div>
    </div>
  );
};

export default Register;