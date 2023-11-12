import { useState } from 'react'
import ScorePage from '../src/pages/ScorePage.tsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <ScorePage/>
      </div>
    </>
    
  )
}

export default App
