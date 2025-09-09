import { useState } from 'react'
import './App.css'
import SignUp from './Pages/SignUp/SignUp'
import Login from './Pages/Login/Login'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <SignUp /> */}
        {/* <Login /> */}
        <RouterProvider router={router} />
       </div>
    </>
  )
}

export default App
