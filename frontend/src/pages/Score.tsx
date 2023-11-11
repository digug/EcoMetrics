import { useState } from 'react'
import './Score.css'

function App() {
  const [score, setScore] = useState(0)

  return (
    <>
      <div>
        <LinearProgress variant="determinate" value={score} />
      </div>

    </>
  )
}

export default App
