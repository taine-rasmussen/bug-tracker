import React, { useState } from 'react'
import '../styles/AddProject.css'

const AddProject = ({setAddForm}) => {

   const [newProjectName, setNewProjectName] = useState('')
   const [newProjectIusse, setNewProjectIssue] = useState('')
   const [newProjetPriority, setNewProjectPriority] = useState('')


   return (
      <div className="addproject-container">
         <div className="addproject-form-container">
            <input 
               placeholder="Name..."
               onChange={(event) => {setNewProjectName(event.target.value)}}
            />
            <input 
               placeholder="Issue..."
               onChange={(event) => {setNewProjectIssue(event.target.value)}}
            />
            <input 
               placeholder="Priority..."
               onChange={(event) => {setNewProjectPriority(event.target.value)}}
            />
         </div>

         <div className="addproject-btns">
            <button>Add Project</button>
            <button onClick={() => {setAddForm(false)}}>Close form</button>
         </div>
      </div>
   )
}
 export default AddProject


 // build form for new bd project
   // Name: string, Issue: string, Completed: Boolean, Priority: string, comments: array

// React state to capture form data
// import firestore and link it to this component 
// Write func using addDoc to update firestore with new project
