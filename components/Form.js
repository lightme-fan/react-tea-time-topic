import React from 'react'

function App(props) {
    return (
        <form>
            <label>
                Add a topic <br />
                <input value={props.value} placeholder='Write a new topic'/>
            </label>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default App 