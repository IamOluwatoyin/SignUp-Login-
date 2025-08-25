import {useState} from "react";
import "./Login.css"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";


const Login = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const loginPassword = () =>{
    console.log(userName, email, password)
  }

  return (
    <div className="input-wrapper">
      <div className="input-holder">
        <input
          type="text"
          placeholder="Enter your user name"
          onChange={(e) => setUserName(e.target.value)}
          className="input-style"
        />

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
        <button onClick={loginPassword} className="button">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
