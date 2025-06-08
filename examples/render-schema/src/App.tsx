import { useState } from 'react'
import HowToUse from './pages/HowToUse'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HowToUse />
      <hr />
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  )
}

export default App
