import React from 'react'
import '../styles/ProjectDisplay.css'

const ProjectDisplay = ({projectData}) => {


  const highPriorityStyle =  {
      'backgroundColor': '#ff5760',
      'borderBottom': '1px solid #ff5760',
      'borderRadius': '5px',
      'color': '#222b42',
      'padding': '0px 15px'
   }
      
   const lowPriorityStyle = {
         'backgroundColor': '#ffffff',
         'borderBottom': '1px solid #ffffff',
         'borderRadius': '5px',
         'color': '#222b42',
         'padding': '0px 15px'

   }
   





   return (
      <div className="project-display-container">
         {projectData.map((proj, index) => {
            return(
               <div className="project-single-container" key={index}>
                  <div className="project-header">
                     <h2>Project Name: {proj.Name}</h2>


                     <div 
                        className="project-priority" 
                        style={proj.Priority === 'High' ? 
                        highPriorityStyle : lowPriorityStyle}
                     >
                        <h2>{proj.Priority}</h2>
                     </div>
                  </div>




               </div>
            )
         })}
      </div>
   )
}

export default ProjectDisplay