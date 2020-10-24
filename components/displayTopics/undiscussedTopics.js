import React, { useState } from 'react'
import archive from '../../icons/archive.svg'
import dislike from '../../icons/dislike.svg'
import like from '../../icons/like.svg'
import trash from '../../icons/trash.svg'


function UndiscussedTopic(props) {
  // const [ count, setCount ] = useState(0)
  // const increament = () => 
  return (
    <div className='next-topic'>
      <div className='description-topic'>
        <span>{props.title}</span>
        <button className='button archiveBtn' value={props.id} onClick={props.archiveOnClick}>
            Archive
        </button>
      </div>
      <div className='voteBtn'>
        <div className='first-btn'>
          <button className='button upvote' onClick={props.votesOnClick} value={props.id}>Upvote</button>
          <span>{props.upvotes}</span>
        </div>
          <div className='second-btn'>
            <button className='button downvote' onClick={props.downVotesOnclick} value={props.id}>DownVote</button>
            <span>{props.downvotes}</span>
          </div>
      </div>
    </div>

  )
}

export default UndiscussedTopic 