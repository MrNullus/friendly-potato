import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../services/firebase';


const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleSubmit = async ( e ) => {
    console.log("hello shit world")
    e.preventDefault();

    const user = {
      email: e.target[0].value,
      password: e.target[1].value,
    }

    try {
      await signInWithEmailAndPassword(auth, user.email, user.password);
      navigate('/');
    } catch (erro) {
      setError(true);
      alert(erro);
    }
  }

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <form onSubmit={handleSubmit}>
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

          <button>Sign In</button>
          {
            error && <span>Opps algo deu errado!</span>
          }
        </form>

        <p>
          Ainda não possui uma conta? 
          <Link to="/register">Registrar-se</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;