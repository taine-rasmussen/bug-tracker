import React, {useState, useEffect} from 'react'
import { db } from '../firebase-config'
import { collection, getDocs } from 'firebase/firestore'

// Components
import Nav from './Nav'


const Dashboard = () => {

   const [projectData, setProjectData] = useState([])
   const projectCollectionRef = collection(db, 'projects')


   useEffect(() => {
      const getProjects = async () => {
         const data = await getDocs(projectCollectionRef)
         setProjectData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
      }
      getProjects()
   }, [])


   const test = () => {
      console.log(projectData[0])
   }


   return (
      <div className='dashboard-container'>
         <Nav />
            <button onClick={test}>test</button>
            <h1>{projectData[0]?.name}</h1>
            <h1>{projectData[0]?.id}</h1>
            <h1>{projectData[0]?.issue}</h1>
            <h1>{projectData[0]?.priority}</h1>
            
      </div>
   )
}
export default Dashboard