import React, { useState } from 'react'
import { auth } from "../firebase-config";
import { Link } from 'react-router-dom'
import '../styles/Landing.css'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";

const Landing = () => {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [name, setName] = useState("");
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      )
         updateProfile(auth.currentUser, {
         displayName: name
      })
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
      };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };


  return (
    <div className="landing-container">


        <h1>Bug Tracker</h1>


      <div className="landing-form">
      <div className='landing-sub-container'>
        <div className='sub-header'>
          <h3>Register User</h3>
        </div>

        <div className='sub-input-container'>
          <input
            placeholder="Name..."
            onChange={(event) => { setName(event.target.value)}}
          />
          <input
            placeholder="Email..."
            onChange={(event) => { setRegisterEmail(event.target.value)}}
          />
          <input
            placeholder="Create password..."
            type='password'
            onChange={(event) => {setRegisterPassword(event.target.value)}}
          />
          <p>Password must be at least 7 characters long.</p>
          
          <button onClick={register}> Create User</button>
        </div>
      </div>
      <div className='landing-sub-container'>
        <div className='sub-header'>
          <h3>Login</h3>
        </div>
        <div className='sub-input-container'>
          <input
            placeholder="Email..."
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
          <input
            placeholder="Password..."
            type='password'
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />
          <Link to='dashboard'>
            <button onClick={login} className='sub-login-btn'> Login</button>
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
}


export default Landing