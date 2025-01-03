
const Hello = (props) => {
  
  console.log(props)
  return (
    <div >
      <p>
        Hello {props.name}, you are {props.age} years old. 
      </p>
    </div>
  )
}


const App = () => {
  const name = 'Aidan'
  const age = '23'

  return (
    <div>
      <Hello name = {name} age = {age}/>
      <Hello name = 'Argo' age = {23 + 5}/>
    </div>
  )
}
export default App