import React from 'react'
import '../styles/ProjectDisplay.css'

const ProjectDisplay = ({projectData}) => {



   return (
      <div className="project-display-container">
         {projectData.map((proj, index) => {
            return(
               <div className="project-single-container" key={index}>
                  <h2>Project Name: {proj.Name}</h2>
                  <h2>Issue: {proj.Issue.title}</h2>
                  <h2>Priority: {proj.Priority}</h2>
               </div>
            )
         })}
      </div>
   )
}

export default ProjectDisplay