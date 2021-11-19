import React, { useState } from 'react'
import '../styles/AddProject.css'
import { addDoc } from 'firebase/firestore'

const AddProject = ({setAddForm, addForm, projecetData, projectCollectionRef}) => {

   const [newProjectName, setNewProjectName] = useState('')
   const [newProjectComments, setNewProjectComments] = useState({id: 'test comment'})
   const [newProjetPriority, setNewProjectPriority] = useState('')
   const [newProjectIusse, setNewProjectIssue] = useState({title: '', comments: [newProjectComments]})


   // Updates firestore with new project populated with data from form
   const createProject = async () => {
      await addDoc(projectCollectionRef, 
         {  Name: newProjectName,
            Issue: newProjectIusse,
            Priority: newProjetPriority,
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
                  onChange={(event) => {newProjectIusse.title = event.target.value}}
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
