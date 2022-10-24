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

const Statistics = (props) => {
  if(props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return <p>No feedback given</p>
  }
  const all = props.good + props.neutral + props.bad;
  return (
    <div>
      <Header text="statistics" />
      <Data text="good" amount={props.good} />
      <Data text="neutral" amount={props.neutral} />
      <Data text="bad" amount={props.bad} />
      <Data text="all" amount={all} />
      <Data text="average" amount={calculateAverage(all, props.good, props.bad)} />
      <Data text="positive" amount={calculatePostive(all, props.good)} />
    </div>
  )
}

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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
