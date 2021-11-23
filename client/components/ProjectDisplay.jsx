import React, { useState } from 'react'
import '../styles/ProjectDisplay.css'


// Components
import FullTicket from './FullTicket'

const ProjectDisplay = ({projectData}) => {

   const [viewPreview, setViewPreview] = useState(false)
   const [fullIssueData, setFullIssueData] = useState()


   // Gets data for issue user clicks on and makes it available in state
   const toogleTicketPreview = (id) => {
      setViewPreview(!viewPreview)
         const data = [...projectData.map((item) => {
            item.Issues.forEach((issue) => {
               console.log(id)
               if (issue.Id === id){
                  console.log('filtered data:', issue)
                  setFullIssueData(issue)
               }
            })
         })]
         return data
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
                        {proj.Issues.map((issue) => {
                           return(
                              <div className="issue-container"  key={issue.Id}>
                                 <div className="issue-preview-title">
                                    <h4 className='preview-title'>{issue.Issue}</h4>
                                    <button onClick={() => toogleTicketPreview(issue.Id)} >Open</button>
                                 </div> 
                                 <div className="full-issue-container">
                                    {viewPreview ? <FullTicket fullIssueData={fullIssueData} /> : null}
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





                                 

