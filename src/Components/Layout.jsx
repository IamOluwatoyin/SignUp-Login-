import React from 'react'
import { Outlet } from 'react-router-dom'
import Login from '../Pages/Login/Login'

const Layout = () => {
  return (
    <div>
      
      <main>
       < Outlet />
      </main>
      
    </div>
  )
}

export default Layout
