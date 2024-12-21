// un ejemplo de error al intentar renderizar un objeto en JSX
// Los objetos no son válidos como elementos hijos de React),
//  es decir, la aplicación intentó renderizar objetos y falló

const Ejemplo2 = () => {
    const friends = [
      { name: 'Peter', age: 4 },
      { name: 'Maya', age: 10 },
    ]
  
    return (
      <div>
        <p>{friends[0]}</p>
        <p>{friends[1]}</p>
      </div>
    )
  }
  
  export default Ejemplo2