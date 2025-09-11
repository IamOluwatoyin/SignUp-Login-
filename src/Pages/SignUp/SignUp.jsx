import { useState } from "react";
import "./SignUP.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
const SignUp = () => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [userName, setUserName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setConfirm] = useState(false);
  
  
    const [signup, setsignUp] = useState (
      {
       firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      confirmPassword: ""
      }
      
    );
  
  const handleClick = () => {
    // console.log(
    //   firstName,
    //   lastName,
    //   userName,
    //   email,
    //   password,
    //   confirmPassword
    // );
   setsignUp({
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      confirmPassword: ""
   })
 
  };
   console.log(signup)
   
  const navigate = useNavigate()
  const handleSignUp =() =>{
    navigate("/home")
  }
  return (
    <div className="input-wrapper">
      <div className="input-side">
        <h1>Welcome! </h1>
        <button className="btn">Sign-Up</button>
      </div>
      <div className="input-holder">
        <h1>SignUp Form</h1>
        <input
          type="text"
          placeholder="Enter your first name"
          value={signup.firstName}
          onChange={(e) => setsignUp({...signup,firstName:e.target.value})}
          className="input-style"
          
        />

        <input
          type="text"
          placeholder="Enter your last name"
          // onChange={(e) => setLastName(e.target.value)}
          onChange={(e) => setsignUp({...signup,lastName:e.target.value})}
          className="input-style"
        />

        <input
          type="text"
          placeholder="Enter your user name"
          onChange={(e) => setsignUp({...signup,userName:e.target.value})}
          className="input-style"
        />

        <input
          type="text"
          placeholder="Enter your email"
          className="input-style"
          // onChange={(e) => setEmail(e.target.value)}
          onChange={(e) => setsignUp({...signup,email:e.target.value})}
        />

        <div className="input-wrap-signup">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="create your password"
            onChange={(e) => setsignUp({...signup,password:e.target.value})}
            className="input-style-signup"
          />
          {showPassword ? (
            <FaRegEye onClick={() => setShowPassword(!showPassword)} />
          ) : (
            <FaRegEyeSlash onClick={() => setShowPassword(!showPassword)} />
          )}
        </div>
        
        <div className="input-wrap-signup">
          <input
            type={showConfirm ? "text" : "password"}
            placeholder="confirm your password"
            // onChange={(e) => setConfirmPassword(e.target.value)}
            onChange={(e) => setsignUp({...signup,confirmPassword:e.target.value})}
            className="input-style-signup"
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
        <span className="acount-signup">
          <NavLink to={"/login"}>I already have an account</NavLink>  
           
          </span>
               
      </div>
    </div>
  );
};

export default SignUp;
