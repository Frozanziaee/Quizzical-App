import { useState } from 'react'
import './App.css'
import Intro from './components/Intro'
import Question from './components/Question'


function App() {
  const [isStartQuizzical, setStartQuizzical] = useState(false)

  return (
      <main>
        {
          isStartQuizzical
          ? <Question />
          : <Intro onClick={() => setStartQuizzical(true)} />
        }
      </main>

  )
}

export default App
