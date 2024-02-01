const App = () => {
  
  const course = {
    name: 'Half Stack application development',
    parts: [{
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
 
  const total = course.parts[0].exercises + course.parts[1].exercises +course.parts[2].exercises 


  const Header = (props) => {    
    return( 
      <>
      <h1>{props.name}</h1>
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
      <Content parts={course.parts}/>  

      <Total total = {total}/>
    </div>
  )


}


export default App