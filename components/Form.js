import React from 'react'

function App(props) {
    return (
        <form className='addForm' onSubmit={props.onSubmit}>
            <label className='input-form'>
                Add a topic <br />
                <input onChange={props.onChange} value={props.value} placeholder='Write a new topic' name='title'/>
            </label>
            <button className='submit-form' type='submit'>Submit</button>
        </form>
    )
}

export default App 