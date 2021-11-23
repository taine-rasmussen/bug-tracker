import React from 'react'
import '../styles/FullTicket.css'

const FullTicket = ({fullIssueData, setViewPreview}) => {
   return (
      <div className="ticket-container">
         <button onClick={() => setViewPreview(false)}>Close</button>
      </div>
   )
}

export default FullTicket