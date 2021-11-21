import React, {useState, useEffect} from 'react'
import '../styles/Dashboard.css'
import { db } from '../firebase-config'
import { collection, getDocs } from 'firebase/firestore'



// Components
import Nav from './Nav'
import AddProject from './AddProject'
import ProjectDisplay from './ProjectDisplay'
import Sidebar from './Sidebar'


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

            <div className='dashbaord-add-form'>
               {addForm ? <AddProject setAddForm={setAddForm} addForm={addForm} projectData={projectData} projectCollectionRef={projectCollectionRef}/> : null}
            </div>

            <div className='dashboard-project-display'>
               <ProjectDisplay projectData={projectData}/>
               <Sidebar projectData={projectData}/>
            </div>
      </div>
   )
}
export default Dashboard