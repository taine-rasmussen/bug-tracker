import React, {useState} from 'react'
import { getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import { auth } from '../firebase-config'
import { Link } from 'react-router-dom'
import '../styles/Nav.css'
import { ImExit } from 'react-icons/im';


const Nav = () => {

   const [user, setUser] = useState({});
   const userAuth = getAuth();
   const activeUser = userAuth.currentUser;

   // Gets user data
   onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
   });
  

   // Handles user logging out
   const logout = async () => {
      await signOut(auth);
   };

   // console.log(user)

   return (
         <div className="nav-container">
            <div className="nav-user">
               <h1>Welcome, {activeUser?.displayName}</h1> 
            </div>
            <div className="nav-signout">
               <Link to='/'>
                  <button onClick={logout}>Sign Out</button>
               </Link>
            </div>
         </div>
   )
}
export default Nav