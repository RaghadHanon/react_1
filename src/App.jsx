import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  let [count , setCount] = useState(0);;
  const resetCounter = () => {
    setCount(count +1 );
  }
  return (
    <>
      <button onClick={resetCounter}>Raghad Hanon {count}</button>
    </>
  )
}

export default App
