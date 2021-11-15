import React from 'react'
import { getAuth } from "firebase/auth";


const Nav = () => {

   const auth = getAuth();
   const user = auth.currentUser;

   let name = '';

   const updateName = () => {
      if (user !== null) {
         user.providerData.forEach((profile) => {
            name = profile.displayName
         });
      }
   }
   updateName()

   return (
      <div className="nav-container">
         Welcome, {name}
      </div>
   )
}
export default Nav