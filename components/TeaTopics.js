import React, { useEffect, useState} from 'react'
import UndiscussedTopic from './displayTopics/undiscussedTopics'
import PrevTopics from './displayTopics/PrevTopics'
import Form from './Form'

const apiUrl = 'https://gist.githubusercontent.com/Pinois/93afbc4a061352a0c70331ca4a16bb99/raw/6da767327041de13693181c2cb09459b0a3657a1/topics.json'

export default function TeaTopics() {
    const [topics, setTopics] = useState([])
    const [ voteCount, setVoteCount ] = useState(0)

    // Fetching Data
    useEffect(async () => {
        const res = await fetch(apiUrl)
        const data = await res.json()
        setTopics(data)
      }, [])

    // New Topic
    const [ newTopic, setNewTopic ] = useState({
        discussedOn: "",
        downvotes: 0,
        id: Date.now().toString(),
        title: '',
        upvotes: 0,
        key: Date.now()
    })
    
    // Handle change
    const handleChange = (e) => {
        setNewTopic({
          ...newTopic,
          [e.target.name]: e.target.value
        })
    }

    // Handle Submit
    const handleSubmit = (e) => {
        e.preventDefault()
        setTopics([...topics, newTopic])
        console.log(topics);
    }

    //   Increament Upvotes
    const increamentUpVotes = (e) => {
        const id = e.target.value;
        const addedLike = topics.find(topic => topic.id === id);
        setVoteCount(addedLike.upvotes++)
    }

    //   Increament Downvotes
    const increamentDownVotes = (e) => {
        const id = e.target.value;
        const addedDislike = topics.find(topic => topic.id === id);
        setVoteCount(addedDislike.downvotes++)
    }

    //   Archive Function
    const archiveFunction = (e) => {
        const archive = e.target.value
        const archiveTopic = topics.find(topic => topic.id === archive)
        setTopics([...topics, archiveTopic.dissussedOn = Date.now()]);
        console.log(archiveTopic);
    }

    // Delete Functiom
    const handleRemoveItem = (e) => {
        const discussed = e.target.value
        const deletedTopics = topics.filter(topics => topics.id !== discussed);
        setTopics(deletedTopics)
    };

    return (
        <>
            <Form onSubmit={handleSubmit} onChange={handleChange}/>
            <div>
            {topics
            .filter(topic => topic.discussedOn === '')
            .sort((a, b) => {
                const ratioA = a.upvotes - a.downvotes;
                const ratioB = b.upvotes - b.downvotes;
                return ratioB - ratioA;
            })
            .map(topic => 
                <UndiscussedTopic 
                    key={topic.id} 
                    upvotes={voteCount + topic.upvotes}
                    downvotes={voteCount + topic.downvotes}
                    votesOnClick={increamentUpVotes}
                    downVotesOnclick={increamentDownVotes}
                    archiveOnClick={archiveFunction}
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

            return ( 
                <PrevTopics 
                    key={topic.id} 
                    date={date}
                    onClick={handleRemoveItem} 
                    {...topic} 
                />
            )
          })
        }
      </div>
    </>
    )
}