import React from 'react'
import trash from '../../icons/trash.svg'

function PrevTopics(props) {
  return (
    <div>
      <div>
        <p>
          <span>{props.title}</span>
          <button>
            Delete
          </button>
        </p>
          <div>Discussed on {props.date}</div>
      </div>
    </div>
  )
}

export default PrevTopics 