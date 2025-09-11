import {useState} from "react";
import "./Login.css"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";


const Login = () => {
  // const [userName, setUserName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [login, setLogin] = useState({
    userName: "",
     email: "", 
     password: ""
  })
  
  // const loginPassword = () =>{
  //   console.log(userName, email, password)
  // }
  const handleClick = ()=>{
    setLogin({
       userName: "",
     email: "", 
     password: ""
    })
  }
  console.log(login)
  const navigate = useNavigate()
  const handleLogin =() =>{
    navigate("/home")
  }
    const handlePassword =() =>{
    navigate("/span")
  }

  return (
    <div className="input-wrapper2">
     
      <div className="side-bar2">
          <h1>Welcome Back!</h1>
          <button className="btn2">Login</button>
        </div>
      
      <div className="input-holder2">
         <h1>Login Form</h1>
        
        <input
          type="text"
          placeholder="Enter your user name"
          // onChange={(e) => setUserName(e.target.value)}
          onChange={(e) => setLogin({...login,userName:e.target.value})}
          className="input-style"
          
        />

        <input
          type="text"
          placeholder="Enter your email"
          className="input-style"
          // onChange={(e) => setEmail(e.target.value)}
          onChange={(e) => setLogin({...login,email:e.target.value})}
        />

        <div className="input-wrap-login">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="enter your password"
            onChange={(e) => setLogin({...login,password:e.target.value})}
            className="input-style-login"
          />
          {showPassword ? (
            <FaRegEye onClick={() => setShowPassword(!showPassword)} />
          ) : (
            <FaRegEyeSlash onClick={() => setShowPassword(!showPassword)} />
          )}
        </div>
        <button 
        // onClick={loginPassword} 
        onClick={handleLogin}
        
        className="button2">
          Login
        </button>
        <span style={{cursor:"pointer"}}>
            <NavLink to={"/forget-password?"}>Forget Password?</NavLink>
         </span>

        <p>Don't have an account?</p>
        <NavLink to={"/signUp"}>Sign Up</NavLink>
      </div>
    </div>
  );
};

export default Login;
