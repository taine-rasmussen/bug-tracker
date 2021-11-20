import React, { useState } from 'react'
import '../styles/ProjectDisplay.css'


// Components
import FullProject from './FullProject'

const ProjectDisplay = ({projectData}) => {

   const [viewPreview, setViewPreview] = useState(false)


   

   // Projects should be collapsable to save space and not clog up page
   // Use same logic as the form from AddProject - create another component and pass props down to be mapped inside of there instead of this components
   // Only issue name and priority level should be visble without expanding 

   const toogleIssuePreview = () => {
      setViewPreview(!viewPreview)
   }

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
                                 <i onClick={toogleIssuePreview} className="arrow down"></i>
                              </div>
                           )
                        })}
                        <div className="full-issue-container">
                           {viewPreview ? <FullProject proj={proj} /> : null}
                        </div>
                     </div>
                  </div>
               </div>
            )
         })}
      </div>
   )
}

export default ProjectDisplay






                                 

