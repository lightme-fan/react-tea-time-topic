import React from 'react'
import trash from '../../icons/trash.svg'

function PrevTopics(props) {
  return (
    <div className='prev-topic'>
      <div>
        <p className='desc-topic'>
          <span>{props.title}</span>
          <button className='button trashBtn' onClick={props.onClick} value={props.id}>
            Delete
          </button>
        </p>
          <div className='discussed'>Discussed on {props.date}</div>
      </div>
    </div>
  )
}

export default PrevTopics 