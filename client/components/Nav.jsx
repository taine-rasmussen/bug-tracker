import React, {useState} from 'react'
import { getAuth, onAuthStateChanged} from "firebase/auth";
import { auth } from '../firebase-config'


const Nav = () => {

  const [user, setUser] = useState({});

   onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

   const authh = getAuth();
   const newUser = authh.currentUser;

   console.log(user)
   return (
      <div className="nav-container">
         Welcome, {newUser?.displayName}
      </div>
   )
}
export default Nav