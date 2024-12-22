const t = [1, -1, 3]



const m1 = t.map(value => value * 2)
console.log(m1) // se imprime [2, 4, 6]

const t2 = t.concat(5) // crea un nuevo array

console.log(t)  // se imprime [1, 2, 3]
console.log(t2) // se imprime [1, 2, 3, 5]

const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)
// se imprime [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ]

