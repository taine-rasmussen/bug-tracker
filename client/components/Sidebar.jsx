import React from 'react'
import '../styles/Sidebar.css'

const Sidebar = ({projectData}) => {



   return (
      <div className='sidebar-container'>
         <div className='sidebar-header-container'>
            <h2>Tracker info</h2>
         </div>
         <div className='sidebar-body-container'>
            <div className='sidebar-summary'>
               <h4>Active projects: <span>{projectData.length}</span></h4>
            </div>
            <div className='sidebar-info'>
               {projectData.map((proj, index) => {
                  return(
                     <div key={index} className='sidebar-project-info'>
                        <h5>Name: <span>{proj.Name}</span></h5>
                        <h5>Active tickets: <span>{proj.Issues.length}</span></h5>
                     </div>
                  )
               })}

            </div>
         </div>
      </div>
   )
}
export default Sidebar