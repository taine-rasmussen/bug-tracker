import React, { useState } from 'react'

const AddProject = () => {
   return (
      <div className="addproject-container">
         <input 
            type="text" 
            placeholder="Project name..."

         />
         <input 
            type="text" 
            placeholder="Issue..."
         />
         <input 
            type="text" 
            placeholder="Priority..."
         />
      </div>
   )
}
 export default AddProject


 // build form for new bd project
   // Name: string, Issue: string, Completed: Boolean, Priority: string, comments: array

// React state to capture form data
// import firestore and link it to this component 
// Write func using addDoc to update firestore with new project
