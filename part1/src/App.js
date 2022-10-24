const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Total = (props) => {
  const total = props.parts[0].exercises
    + props.parts[1].exercises
    + props.parts[2].exercises
  return (
    <p>Number of exercises {total}</p>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.title} {props.excersises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part title={props.parts[0].name} excersises={props.parts[0].exercises} />
      <Part title={props.parts[1].name} excersises={props.parts[1].exercises} />
      <Part title={props.parts[2].name} excersises={props.parts[2].exercises} />
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App