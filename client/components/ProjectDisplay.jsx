import React, { useState } from 'react'
import '../styles/ProjectDisplay.css'


// Components
import FullProject from './FullProject'

const ProjectDisplay = ({projectData}) => {


  const highPriorityStyle =  {
      'backgroundColor': '#ff5760',
      'borderBottom': '1px solid #ff5760',
      'borderRadius': '5px',
      'color': '#222b42',
      'fontSize': '1.5rem',
      'height': '75px',
      'padding': '0px 15px',
   }
      
   const lowPriorityStyle = {
         'backgroundColor': '#ffffff',
         'borderBottom': '1px solid #ffffff',
         'borderRadius': '5px',
         'color': '#222b42',
         'padding': '0px 16px',
         'fontSize': '1.5rem',
         'height': '75px',
   }
   

   // Projects should be collapsable to save space and not clog up page
   // Use same logic as the form from AddProject - create another component and pass props down to be mapped inside of there instead of this components
   // Only issue name and priority level should be visble without expanding 

   return (
      <div className="project-display-container">
         {projectData.map((proj, index) => {
            return(
               <div className="project-single-container" key={index}>
                  <div className="project-header">
                     <div className="project-name">
                        <h1>Project: <span>{proj.Name}</span></h1>
                     </div>

                     <div className="project-issue-preview">
                        {proj.Issues.map((issue, index) => {
                           return(
                              <div className="issue-preview-title" key={index}>
                                 <h4 className='preview-title'>{issue.Issue}</h4>
                                 <i className="arrow down"></i>
                              </div>
                           )
                        })}
                     </div>
                  </div>
               </div>
            )
         })}
      </div>
   )
}

export default ProjectDisplay






                                 

