import React, {useState, useEffect} from 'react'
import { db } from '../firebase-config'
import { collection, getDocs } from 'firebase/firestore'
import '../styles/Dashboard.css'


// Components
import Nav from './Nav'
import AddProject from './AddProject'


const Dashboard = () => {

   const [projectData, setProjectData] = useState([])
   const [addForm, setAddForm] = useState(false)
   const projectCollectionRef = collection(db, 'bug-tracker')

   // GETs data from firestore and updates state with info
   useEffect(() => {
      const getProjects = async () => {
         const data = await getDocs(projectCollectionRef)
         setProjectData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
      }
      getProjects()
      
   }, [])
   
   // Logs db data
   projectData[0] ? console.log(projectData) :null


   const addProjectForm = () => {
      setAddForm(!addForm)
   }

   return (
      <div className='dashboard-container'>
         <Nav />
         <div className='dashboard-add'>
            <button onClick={addProjectForm}>Add Project</button>
         </div>

         {addForm ? <AddProject setAddForm={setAddForm} addForm={addForm} /> : null}
      </div>
   )
}
export default Dashboard