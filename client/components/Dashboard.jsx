import React, {useState, useEffect} from 'react'
import { db } from '../firebase-config'
import { collection, getDocs } from 'firebase/firestore'

// Components
import Nav from './Nav'


const Dashboard = () => {

   const [projectData, setProjectData] = useState([])
   const projectCollectionRef = collection(db, 'projects')

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

   return (
      <div className='dashboard-container'>
         <Nav />
            


      </div>
   )
}
export default Dashboard