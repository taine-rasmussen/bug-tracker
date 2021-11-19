import React, { useState } from 'react'
import '../styles/AddProject.css'
import { addDoc } from 'firebase/firestore'

const AddProject = ({setAddForm, addForm, projecetData, projectCollectionRef}) => {

   const [newProjectName, setNewProjectName] = useState('')
   const [newProjectIusse, setNewProjectIssue] = useState('')
   const [newProjetPriority, setNewProjectPriority] = useState('')
   const [newProjectComments, setNewProjectComments] = useState([])



   const createProject = async () => {

      await addDoc(projectCollectionRef, 
         {  Name: newProjectName,
            Issue: newProjectIusse,
            Priority: newProjetPriority,
            Comments: newProjectComments,
         })
      }

   return (
      <div className="addproject-container">
         <div className="addproject-form-container">
            <form onSubmit={(e) => handleSubmit(e)}>
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
            </form>
         </div>

         <div className="addproject-btns">
            <button onClick={createProject}>Add Project</button>
            <button onClick={() => {setAddForm(!addForm)}}>Close form</button>
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
