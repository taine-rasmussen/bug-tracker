import React, { useState } from 'react'
import '../styles/AddProject.css'
import { addDoc } from 'firebase/firestore'

const AddProject = ({setAddForm, addForm, projecetData, projectCollectionRef}) => {

   const [newProjectName, setNewProjectName] = useState('')
   const [newProjectDescription, setNewProjectDescription] = useState('')
   const [newProjetPriority, setNewProjectPriority] = useState('')
   const [newProjectIssue, setNewProjectIssue] = useState({ Issue: newProjectIssue,
                                                            Comments: [],
                                                            Priority: newProjetPriority,
                                                            Description: newProjectDescription,
                                                         })
   // Updates firestore with new project populated with data from form
   const createProject = async () => {
      await addDoc(projectCollectionRef, 
         {  Name: newProjectName,
            Issues: [newProjectIssue],
         })
      }

   return (
      <div className="addproject-container">
         <div className="addproject-form-container">
            <form onSubmit={(e) => handleSubmit(e)}>
               <input 
                  placeholder="Project name..."
                  onChange={(event) => {setNewProjectName(event.target.value)}}
               />
               <input 
                  placeholder="Issue..."
                  onChange={(event) => {newProjectIssue.Issue = event.target.value}}
               />
               <input 
                    placeholder="Issue description..."
                    onChange={(event) => {newProjectIssue.Description = (event.target.value)}}
               />
               <input 
                  placeholder="Priority..."
                  onChange={(event) => {newProjectIssue.Priority = (event.target.value)}}
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
