import { useState } from 'react'

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad
  if (total === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  } 
  else {

  const puntuation = props.good - props.bad
  const average = (puntuation / total)
  const positive = (props.good / total)*100

  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="Good:" value={props.good} />
          <StatisticLine text="Neutral:" value={props.neutral} />
          <StatisticLine text="Bad:" value={props.bad} />
          <StatisticLine text="Total:" value={total} />
          <StatisticLine text="Positive:" value={`${positive}%`} />
          <StatisticLine text="Average:" value={average} />
        </tbody>
      </table>
    </div>
  )
  }
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


const handleGoodClick = () => {
  setGood(good + 1)
}

const handleNeutralClick = () => {
  setNeutral(neutral + 1)
}

const handleBadClick = () => {
  setBad(bad + 1)
}
  return (
    <div>
      <h1>Give Feedback</h1>

      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handleBadClick} text="Bad" />

      <Statistics good={good} neutral={neutral} bad={bad}/>
          
    </div>
  )
}

export default App
