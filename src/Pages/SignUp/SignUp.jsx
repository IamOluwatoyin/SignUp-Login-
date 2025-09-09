import { useState } from "react";
import "./SignUP.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setConfirm] = useState(false);
  const handlick = () => {
    console.log(
      firstName,
      lastName,
      userName,
      email,
      password,
      confirmPassword
    );
  };

  const navigate = useNavigate()
  const handleSignUp =() =>{
    navigate("/home")
  }
  return (
    <div className="input-wrapper">
      <div className="input-holder">
        <input
          type="text"
          placeholder="Enter your first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="input-style"
        />

        <input
          type="text"
          placeholder="Enter your last name"
          onChange={(e) => setLastName(e.target.value)}
          className="input-style"
        />

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
            placeholder="create your password"
            onChange={(e) => setPassword(e.target.value)}
            className="input-style"
          />
          {showPassword ? (
            <FaRegEye onClick={() => setShowPassword(!showPassword)} />
          ) : (
            <FaRegEyeSlash onClick={() => setShowPassword(!showPassword)} />
          )}
        </div>
        
        <div className="input-wrap">
          <input
            type={showConfirm ? "text" : "password"}
            placeholder="confirm your password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="input-style"
          />
          {showConfirm ? (
            <FaRegEye onClick={() => setConfirm(!showConfirm)} />
          ) : (
            <FaRegEyeSlash onClick={() => setConfirm(!showConfirm)} />
          )}
        </div>
        <button onClick={handleSignUp} className="button">
          Sign Up
        </button>
        <span>
          I already have an account
           
          </span>
          <NavLink to={"/login"}>Login</NavLink>       
      </div>
    </div>
  );
};

export default SignUp;
