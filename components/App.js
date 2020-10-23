import React, { useEffect, useState } from 'react'
import Header from './Header'
import Form from './Form'
import UndiscussedTopic from './displayTopics/undiscussedTopics'
import PrevTopics from './displayTopics/PrevTopics'

const apiUrl = 'https://gist.githubusercontent.com/Pinois/93afbc4a061352a0c70331ca4a16bb99/raw/6da767327041de13693181c2cb09459b0a3657a1/topics.json'

function App() {
  const [topics, setTopics] = useState([])
  const [ count, setCount ] = useState(0)

  useEffect(async () => {
    const res = await fetch(apiUrl)
    const data = await res.json()
    setTopics(data)
    console.log(data);
  }, [])

  return (
    <article>
      <Header />
      <Form />
      <div>
        {topics
          .filter(topic => topic.discussedOn === '')
          .sort((a, b) => {
            const ratioA = a.upvotes - a.downvotes;
            const ratioB = b.upvotes - b.downvotes;
            return ratioB - ratioA;
          })
          .map(topic => <UndiscussedTopic 
            key={topic.id}
            like={count + topic.upvotes}
            upvotes={() => setCount(count + 1)}
            dislike={count + topic.downvotes}
            downVotes={() => setCount(count + 1)} 
            {...topic} 
          />)
        }
      </div>

      <div>
        {topics
          .filter(topic => topic.discussedOn)
          .map(topic => {
            const dissussedDate = topic.discussedOn;
            const convertToNumber = Number(dissussedDate);
            const convertToNormalDate = new Date(convertToNumber);
            const date = convertToNormalDate.toLocaleDateString();

            return <PrevTopics key={topic.id} date={date} {...topic} />
          })
        }
      </div>
    </article>
  )
}

export default App 