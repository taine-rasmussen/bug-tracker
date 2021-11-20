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
         'padding': '0px 16px'

   }
   





   return (
      <div className="project-display-container">
         {projectData.map((proj, index) => {
            return(
               <div className="project-single-container" key={index}>
                  <div className="project-header">
                     <h1>Project: {proj.Name}</h1>
                  </div>
               
                  <div className='project-issues-container'>
                     {proj.Issues.map((issue, index) => {
                        return(
                           <div className='project-single-issue' key={index}>
                              <h4>{issue.Issue}</h4>
                              <div 
                                 className="project-priority" 
                                 style={issue.Priority === 'High' ? 
                                 highPriorityStyle : lowPriorityStyle}
                              >
                                 <h4>{issue.Priority}</h4>
                              </div>

                           </div>
                        )
                     })}
                  </div>


                  {console.log(proj)}
               </div>
            )
         })}
      </div>
   )
}

export default ProjectDisplay





