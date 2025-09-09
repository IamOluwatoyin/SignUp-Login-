import React, { useState } from 'react'

const ForgetPassword = () => {
  const[resetPassword, setResetPassword] = useState("")
  return (
    <div>
      <div className="input-wrapper">
      <div className="input-holder2">
      <div className="input-wrap">
          <input
            type= "password"
            placeholder="reset your password"
            onChange={(e) => setResetPassword(e.target.value)}
            className="input-style"
          />
          <button  
        style={{ display:"flex", alignItems:"center", marginTop:"10px",justifyContent:"center", width:"100%", height:"50px",
  cursor: "pointer", borderRadius:"8px"}}>
          Login
        </button>
          </div>
          </div>
          </div>
    </div>
  )
}

export default ForgetPassword

