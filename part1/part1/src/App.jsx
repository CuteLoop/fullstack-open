const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const total= exercises1 + exercises2 + exercises3
  
  const parts={part1, part2, part3}
  const excersises = {exercises1, exercises2, exercises3}

  const Header = (props) => {
    
    return( 
      <>
      <h1>{props.course}</h1>
      </>
    )
  }


  const Part = (props) => {
    return( 
      <p>
        {props.part} {props.exercises}
      </p>
    )
  }

  const Content = (props) => {
    //console.log(props)
    //console.log("aqui")
    //console.log(props.exercise)

    return( 
      <>
      <Part part={props.part.part1} exercises={props.exercise.exercises1} />
      <Part part={props.part.part2} exercises={props.exercise.exercises2} /> 
      <Part part={props.part.part3} exercises={props.exercise.exercises3} /> 
      </>
    )
  }



  const Total = (props) => {
    
    return( 
      <>
      <p>
      Number of exercises {props.total}
      </p>
      </>
    )
  }

  return (
    <div>
      <Header course={course}/>
      <Content part={parts} exercise={excersises}/>  
      <Total total = {total}/>
    </div>
  )

}
export default App