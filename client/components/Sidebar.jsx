import React from 'react'
import '../styles/Sidebar.css'

const Sidebar = ({projectData}) => {



   return (
      <div className='sidebar-container'>
         <div className='sidebar-header-container'>
            <h2>Tracker info</h2>
         </div>
         <div className='sidebar-body-container'>
            <div className='sidebar-info'>
               <h4>Active projects: <span>{projectData.length}</span></h4>
            </div>
         </div>
      </div>
   )
}
export default Sidebar