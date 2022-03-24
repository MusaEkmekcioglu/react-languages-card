import './App.css'
import react from './assets/react.svg'
import Card from './Card'
import { categories } from './data.js'

let newObje = categories.map((data) => {
  return {
    ...data,
    checked: false,
  }
})

function App() {
  return (
    <div className="App w-75 p-3 mt-3 mx-auto container shadow mx-5">
      <img src={react} alt="react-img " style={{ height: '150px' }} />

      <Card categories={newObje} />
    </div>
  )
}

export default App
