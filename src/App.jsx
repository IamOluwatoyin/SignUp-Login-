import { useState } from 'react'
import './App.css'
import SignUp from './Components/SignUp/SignUp'
import Login from './Components/Login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <SignUp /> */}
        <Login />
       </div>
    </>
  )
}

export default App
