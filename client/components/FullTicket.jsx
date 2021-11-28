import React, {useState} from 'react'
import '../styles/FullTicket.css'
import { updateDoc, doc } from 'firebase/firestore'
import { db } from '../firebase-config'



const FullTicket = ({fullIssueData, setViewPreview}) => {


   const [newComment, setNewComment] = useState('')

   const addComment = async (id ) => {
      const userDoc = doc(db, "bug-tracker", id);
      // const newFields = {comment: newComment};
      await updateDoc(userDoc, newComment)
   }




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
            <div className='ticket-comments'>
               <h4>Comments:</h4>
               {fullIssueData.Comments.map((coms) => {
                  return(
                     <p key={fullIssueData.Id}>{coms}</p>
                  )
               })}
            </div>
            <div className='ticket-add-comment'>
               <input 
                  type="text"
                  placeholder='New comment'
                  onChange={(event) => {setNewComment(event.target.value)}}
               />
               <button onClick={() => {addComment(fullIssueData.Id)}}>Add comment</button>
            </div>
         </div>
      </div>
   )
}

export default FullTicket