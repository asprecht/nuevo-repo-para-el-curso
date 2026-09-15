import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0, 0])
  
  
  const mayor = Math.max(...votes)
  const indicemayor = votes.indexOf(mayor)

  const handleselected = () => {
    const randomanecdote = Math.floor(Math.random()*anecdotes.length)
    setSelected (randomanecdote)
  } 

  const handlevote = () => {
   const copy = [...votes]
   copy[selected] += 1
   setVotes(copy)
  }


  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <br />
      <p>esta anecdota tiene:  {votes[selected]} votos </p>
      <br />
      <button onClick={handleselected}>
        Next Anecdote </button>
      <button onClick = {handlevote}> vote </button>
      
      <h1>"anecdota mas votada con" {votes[indicemayor]} votos </h1>
     <p>{anecdotes[indicemayor]}</p> 
    </div>
  )
}

export default App