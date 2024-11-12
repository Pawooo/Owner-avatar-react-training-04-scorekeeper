import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ScoreKeeper from './components/ScoreKeeper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < ScoreKeeper players={4} />
    </>
  )
}

export default App
