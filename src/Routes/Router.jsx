import React, { Children } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Login from '../Pages/Login/Login'
import SignUp from '../Pages/SignUp/SignUp'
import Home from '../Pages/Home'
import Layout from '../Components/Layout'
import ForgetPassword from '../Pages/Login/ForgetPassword'

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
       children : [
        {
        index: "login",
        element: <Login />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "home",
        element: <Home />
      },
      {
        path: "signUp",
        element: <SignUp />
      },
      {
        path: "forget-password",
        element: <ForgetPassword />
      }
    ]
    }, 
   
  ]

)