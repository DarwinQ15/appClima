import { useState } from 'react'
import reactLogo from './assets/react.svg'
import WatherInfo from './assets/components/WatherInfo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <WatherInfo />
    </div>
  )
}

export default App
