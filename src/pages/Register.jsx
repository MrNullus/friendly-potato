import React, { useState } from 'react';

// Service - Firebase
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, storage } from '../services/firebase';
import { 
  ref, 
  uploadBytesResumable, 
  getDownloadURL 
} from "firebase/storage";

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
      
      const storageRef = ref(storage, 'images/rivers.jpg');
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed', 
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');

          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        }, 
        (error) => {
          
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
          });
        }
      );
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