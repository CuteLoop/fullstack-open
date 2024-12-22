import Footer from "./Footer"


const Hello = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}



const App = () => {
  console.log('Hello from App component')
  const now = new Date()
  const a = 10
  const b = 20
  console.log('now:', now, '\n', 'a+b =', a+b)



  return (
    <div>
      <h1>Greetings:)</h1>
      <Hello />
      <Hello />
      <Hello />
      <p>It is {now.toDateString()}</p>
      <p> {a} + {b} = {a+b} </p>
    <Footer />
    </div>
  )
}

export default App