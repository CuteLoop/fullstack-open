const App = () => {
  
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

 
  const parts = [part1, part2, part3]

  //console.log(part1.exercises+part2.exercises+part3.exercises)

  const total = part1.exercises+ part2.exercises+ part3.exercises
  


  const Header = (props) => {    
    return( 
      <>
      <h1>{props.course}</h1>
      </>
    )
  }


  const Part = (props) => {
  //  console.log(props)
    return( 
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    )
  }

  const Content = (props) => {
    // console.log(props)
    return( 
      <>
      <Part part={props.parts[0]}/>
      <Part part={props.parts[1]}/>
      <Part part={props.parts[2]}/>
      </>
    )
  }



  const Total = (props) => {
    // console.log(props)
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
      <Content parts={parts}/>  
      <Total total = {total}/>
    </div>
  )


}


export default App