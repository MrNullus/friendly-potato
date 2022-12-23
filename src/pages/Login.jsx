import React from 'react';

import ImgAdd from '../img/add.png';

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <form>
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
        </form>

        <p>Ainda não possui uma conta? Registrar-se</p>
      </div>
    </div>
  );
};

export default Login;