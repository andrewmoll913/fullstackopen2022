import { useState } from 'react'

const Header = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Data = ({ text, amount }) => <p>{text} {amount}</p>

const calculateAverage = (all, good, bad) => all === 0 ? 0 : (good - bad) / all


const calculatePostive = (all, good) => all === 0 ? "0 %" : `${(good / all) * 100} %`;

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const ratingHander = (rating, setRating) => () => {
    setRating(rating + 1) 
  }

  const handleGoodClicks = ratingHander(good, setGood)
  const handleNeutralClicks = ratingHander(neutral, setNeutral)
  const handleBadClicks = ratingHander(bad, setBad);

  return (
    <div>
      <Header text="give feedback" />
      <Button text="good" handleClick={handleGoodClicks} />
      <Button text="neutral" handleClick={handleNeutralClicks} />
      <Button text="bad" handleClick={handleBadClicks} />
      <Header text="statistics" />
      <Data text="good" amount={good} />
      <Data text="neutral" amount={neutral} />
      <Data text="bad" amount={bad} />
      <Data text="all" amount={good + neutral + bad} />
      <Data text="average" amount={calculateAverage(good + neutral + bad, good, bad)} />
      <Data text="positive" amount={calculatePostive(good + neutral + bad, good)} />
    </div>
  )
}

export default App
