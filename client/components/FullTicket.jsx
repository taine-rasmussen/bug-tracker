import React from 'react'
import '../styles/FullTicket.css'

const FullTicket = ({fullIssueData, setViewPreview}) => {
   return (
      <div className="ticket-container">
         <div className="ticket-header">
            <h2>{fullIssueData.Issue}:</h2>
            <button onClick={() => setViewPreview(false)}>Close</button>
         </div>
         <div className="ticket-body">
            <div className='ticket-description'>
               <h4>Description:</h4>
               <p>{fullIssueData.Description}</p>
            </div>
            <div className='ticket-priority'>
               {fullIssueData.Priority}
            </div>
         </div>
         <div className='ticket-footer'>
            <h4>Comments:</h4>
            {fullIssueData.Comments.map((coms) => {
               return(
                  <p key={fullIssueData.Id}>{coms}</p>
               )
            })}

         </div>
         
      </div>
   )
}

export default FullTicket