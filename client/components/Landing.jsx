import React, { useState } from 'react'
import { auth } from "../firebase-config";
import { Link } from 'react-router-dom'
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

  // Handles user logging out
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="landing-container">
      <div className='landing-register-container'>
        <h3> Register User </h3>
        <input
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          type='password'
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />

        <button onClick={register}> Create User</button>
      </div>

      <div className='landing-login-container'>
        <h3> Login </h3>
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
          <button onClick={login}> Login</button>
        </Link>
      </div>

      <div className='landing-info-container'>
         <h4> User Logged In: {user?.displayName}</h4>
         <button onClick={logout}> Sign Out </button>
      </div>
    </div>
  );
}


export default Landing