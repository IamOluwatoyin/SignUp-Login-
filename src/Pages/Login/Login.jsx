import {useState} from "react";
import "./Login.css"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";


const Login = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  const loginPassword = () =>{
    console.log(userName, email, password)
  }
  const navigate = useNavigate()
  const handleLogin =() =>{
    navigate("/home")
  }
    const handlePassword =() =>{
    navigate("/span")
  }

  return (
    <div className="input-wrapper">
      <div className="input-holder2">
        {/* <input
          type="text"
          placeholder="Enter your user name"
          onChange={(e) => setUserName(e.target.value)}
          className="input-style"
        /> */}

        <input
          type="text"
          placeholder="Enter your email"
          className="input-style"
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="input-wrap">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="enter your password"
            onChange={(e) => setPassword(e.target.value)}
            className="input-style"
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
        
        className="button">
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
