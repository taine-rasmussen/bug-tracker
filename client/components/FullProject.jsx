import React from 'react'

const FullProject = ({proj}) => {


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
   

   // To only dispaly to component info we want we will need to loop over id's and where id = id is true display that info
   console.log('id: ',proj.id)

   return (
     <div className='project-issues-container'>
         {proj.Issues.map((issue, index) => {
            return(
               <div className='project-body' index={index}>
                  <div className='issue-description'>
                     <h3 className='description-title'><span>Description:</span></h3>
                      <p>{issue.Description}</p>
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
            )
         })}
      </div>
   )
}

export default FullProject