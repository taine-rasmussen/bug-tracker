import React, { useState } from 'react'
import '../styles/ProjectDisplay.css'


// Components
import FullProject from './FullProject'

const ProjectDisplay = ({projectData}) => {

   const [viewPreview, setViewPreview] = useState(false)
   const [fullProjectData, setFullProjectData] = useState()



   

   // Projects should be collapsable to save space and not clog up page
   // Use same logic as the form from AddProject - create another component and pass props down to be mapped inside of there instead of this components
   // Only issue name and priority level should be visble without expanding 


   const toogleIssuePreview = (id) => {
      setViewPreview(!viewPreview)

         const data = [...projectData.map((item) => {
            item.Issues.forEach((issue) => {
               console.log(id)
               if (issue.Id === id){
                  console.log('filtered data:', issue)
                  setFullProjectData(issue)
               }
            })
         })]
         return data
   }

   return (
      <div className="project-display-container">
         {projectData.map((proj, index) => {
         // {console.log('proj:', proj)}
            return(
               <div className="project-single-container" key={index}>
                  <div className="project-header">
                     <div className="project-name">
                        <h1>Project: <span>{proj.Name}</span></h1>
                     </div>
                     <div className="project-issue-preview">
                        {proj.Issues.map((issue) => {
                           return(
                              <div className="issue-container"  key={issue.Id}>
                                 <div className="issue-preview-title">
                                    <h4 className='preview-title'>{issue.Issue}</h4>
                                    <i onClick={() => toogleIssuePreview(issue.Id)} className="arrow down"></i>
                                 </div> 
                                 <div className="full-issue-container">
                                    
                                 </div>
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
 // To Change where FullProject is rendered you need to change where its placed





                                 

