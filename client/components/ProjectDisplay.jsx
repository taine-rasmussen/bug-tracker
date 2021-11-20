import React from 'react'
import '../styles/ProjectDisplay.css'

const ProjectDisplay = ({projectData}) => {


  const highPriorityStyle =  {
      'backgroundColor': '#ff5760',
      'borderBottom': '1px solid #ff5760',
      'borderRadius': '5px',
      'color': '#222b42',
      'padding': '0px 15px',
      'font-size': '1.5rem'
   }
      
   const lowPriorityStyle = {
         'backgroundColor': '#ffffff',
         'borderBottom': '1px solid #ffffff',
         'borderRadius': '5px',
         'color': '#222b42',
         'padding': '0px 16px',
         'font-size': '1.5rem'
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
                              <div className='single-issue-header'>
                                 <h4 className='issue-title'>{issue.Issue}</h4>
                              </div>

                              <div className='issue-description'>
                                 <h3 className='description-title'><span>Description:</span></h3> <p>{issue.Description}</p>
                                 <h3><span>Comments:</span> {issue.Comments.length}</h3>
                              </div>
                           </div>
                        )
                     })}
                  </div>
               </div>
            )
         })}
      </div>
   )
}

export default ProjectDisplay




                                 // <div 
                                 //    className="project-priority" 
                                 //    style={issue.Priority === 'High' ? 
                                 //    highPriorityStyle : lowPriorityStyle}
                                 // >
                                 //    <h4>{issue.Priority}</h4>
                                 // </div>

