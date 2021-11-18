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
         console.log(data)
      }
      getProjects()
   }, [])

   return (
      <div className='dashboard-container'>
         <Nav />

      </div>
   )
}
export default Dashboard