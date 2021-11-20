import React from 'react'

const FullProject = () => {
   return (
     <div className='project-issues-container'>
                     {proj.Issues.map((issue, index) => {
                        return(
                           <div className='project-single-issue' key={index}>
                              <div className='single-issue-header'>
                                 <h4 className='issue-title'>{issue.Issue}</h4>
                              </div>
                              <div className='project-body'>
                                 <div className='issue-description'>
                                    <h3 className='description-title'><span>Description:</span></h3> <p>{issue.Description}</p>
                                    <h3><span>Comments:</span> {issue.Comments.length}</h3>
                                 </div>
                                  <div 
                                    className="project-priority" 
                                    style={issue.Priority === 'High' ? 
                                    highPriorityStyle : lowPriorityStyle}
                                 >
                                    <h4>{issue.Priority}</h4>
                                 </div>
                              </div>
                           </div>
                        )
                     })}
      </div>
   )
}

export default FullProject