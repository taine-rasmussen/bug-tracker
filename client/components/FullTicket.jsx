import React from 'react'
import '../styles/FullTicket.css'

const FullTicket = ({fullIssueData}) => {
   return (
      <div className="ticket-container">
         {fullIssueData.Id}
      </div>
   )
}

export default FullTicket