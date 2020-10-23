import React from 'react'
import archive from '../../icons/archive.svg'
import dislike from '../../icons/dislike.svg'
import like from '../../icons/like.svg'
import trash from '../../icons/trash.svg'


function UndiscussedTopic(props) {
  return (
    <div>
      <div>
        <span>{props.title}</span>
        <button>
            Archive
        </button>
      </div>
      <div>
        <div>
          <button onClick={props.upvotes}>Upvote</button>
          <span>{props.like}</span>
        </div>
          <div>
            <button onClick={props.downVote}>DownVote</button>
            <span>{props.dislike}</span>
          </div>
      </div>
    </div>
  )
}

export default UndiscussedTopic 