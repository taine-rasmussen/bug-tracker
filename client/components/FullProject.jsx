import React, {useState} from 'react'

const FullProject = ({proj}) => {

   const [singleProjectData, setSingleProjectData] = useState(null)

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
   


//  min-height: 0px;
//   height: 0px;
//   overflow: hidden;
   

   const getProjectData = (id) => {
      const showData = proj.Issues.filter((item) => item.Issue.Id !== id)
      // console.log('ShowData:', showData)
   }

   getProjectData()
   return (
     <div className='project-issues-container' >
         {proj.Issues.map((issue, index) => {
            return(
               <div className='project-body' key={index}>
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


