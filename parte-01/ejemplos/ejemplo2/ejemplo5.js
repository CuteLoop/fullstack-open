// Ejemplo de funciones en JavaScript



// Definición de funcnción con flecha
const sum = (p1, p2) => { 
    console.log (p1) 
    console.log (p2) 
    return p1 + p2 
  } 

const result = sum(1, 5)
console.log (result)


// Funcion de una variable no necesitan parentesis en entradas
const square1 = p => {
  console.log(p)
  return p * p
}

// Función de una sola linea
const square2 = p => p * p

const t = [1,2,3]
const tSquared = t.map(p => p * p)

console.log(tSquared)


// declaración de función
function producto(a,b){
  return a*b
}

const average = function(a,b){
  return (a+b)/2
}

const result1 = producto(2,5)
console.log(result1)
const result2 = average(2,5)
console.log(result2)