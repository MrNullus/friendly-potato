import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Service - Firebase
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../services/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

import ImgAdd from '../img/add.png';

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async ( e ) => {
    console.log("hello shit world!");
    e.preventDefault();

    const newUser = {
      displayName: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
      file: e.target[3].files[0]
    }

    try {
      const res = await createUserWithEmailAndPassword(
        auth, 
        newUser.email, 
        newUser.password
      );
      const storageRef = ref(storage, newUser.displayName);
      const uploadTask = uploadBytesResumable(storageRef, newUser.file);

      uploadTask.on(
        (erro) => {
          setError(true);
          alert(erro);
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
          .then(async (downloadURL) => {
            console.log('File available at', downloadURL);

            await updateProfile(res.user, {
              displayName: newUser.displayName,
              photoURL: downloadURL
            });

            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName: newUser.displayName,
              email: newUser.email,
              photoURL: downloadURL
            });

            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate('/');
          });
        }
      );
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
            type="text" 
            name="name"
            placeholder="Deixe seu lindo nome"
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

        <p>
          Você já possui uma conta? 
          <Link to="/register">Entrar</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;