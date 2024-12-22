// Ejemplo1:  uso de componentes con propiedades

const Hello = (props) => {

    console.log(props)
    return (
      <div>
        <p>
  
          Hello {props.name}, you are {props.age} years old
        </p>
      </div>
    )
  }
  
  const Ejemplo1 = () => {
  
    const name = 'Peter'
    const age = 10
  
    return (
      <div>
        <h1>Greetings</h1>
  
        <Hello name='Maya' age={26 + 10} />
        <Hello name={name} age={age} />
      </div>
    )
  }

export default Ejemplo1