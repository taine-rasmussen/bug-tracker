import React from 'react'
import '../styles/ProjectDisplay.css'

const ProjectDisplay = ({projectData}) => {



   return (
      <div className="project-display-container">
         {projectData.map((proj, index) => {
            return(
               <div className="project-single-container" key={index}>

                  <div className="project-header-container">
                     <div className='project-name'>
                        <h2>Project Name: {proj.Name}</h2>
                     </div>
                     <div className='project-priority'>
                        <h2>Priority: {proj.Priority}</h2>
                     </div>
                  
                  
                  
                  </div>
                  {/* <h2>Issue: {proj.Issue.title}</h2> */}
               </div>
            )
         })}
      </div>
   )
}

export default ProjectDisplay