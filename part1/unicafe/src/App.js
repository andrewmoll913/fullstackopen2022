import { useState } from 'react'

const Header = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Rating =({text, amount}) => <p>{text} {amount}</p>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClicks = () => setGood(good + 1);
  const handleNeutralClicks = () => setNeutral(neutral + 1);
  const handleBadClicks = () => setBad(bad + 1);

  return (
    <div>
      <Header text="give feedback" />
      <Button text="good" handleClick={handleGoodClicks} />
      <Button text="neutral" handleClick={handleNeutralClicks} />
      <Button text="bad" handleClick={handleBadClicks} />
      <Header text="statistics" />
      <Rating text="good" amount={good} />
      <Rating text="neutral" amount={neutral} />
      <Rating text="bad" amount={bad} />
    </div>
  )
}

export default App
