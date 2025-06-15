import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello!!</h1>
      <h2>Started Making My Portfolio!</h2>
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount((count) => count + 1)}
      >
        My Count is {count}
      </button>
    </>
  )
}

export default App
