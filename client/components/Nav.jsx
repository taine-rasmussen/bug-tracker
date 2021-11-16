import React, {useState} from 'react'
import { getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import { auth } from '../firebase-config'


const Nav = () => {

   const [user, setUser] = useState({});
   const authh = getAuth();
   const activeUser = authh.currentUser;

   onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
   });
  

   // Handles user logging out
   const logout = async () => {
      await signOut(auth);
   };
  console.log(user)


   return (
      <div className="nav-container">
         <div className="nav-user">
            <h2>Welcome, {activeUser?.displayName}</h2> 
         </div>
         <div className="nav-signout">
            <button onClick={logout}> Sign Out </button>
         </div>
      </div>
   )
}
export default Nav