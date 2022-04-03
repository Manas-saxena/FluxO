import React, { useState,useContext }  from "react";
import "./login.scss";
import {login} from "../../../src/authContext/apiCalls"
import {AuthContext} from "../../../src/authContext/AuthContext"
import {Link} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import logo from "../../useables/manas_logo_transparent.png"
export default function Login() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const {dispatch } = useContext(AuthContext);
   const handlesubmit = async (e)=>{
    e.preventDefault();
    login({email,password} , dispatch);
    console.log(dispatch);
   }

  return (
    <div className="login">
      <div className="top">
          <div className="wrapper">  
          <img
          src={logo}
          alt=""
          className="logo"
        />
        </div>
      
      </div>
      <div className="container">
          <form onSubmit={handlesubmit}>
              <h1>
                  Sign In
              </h1>
              <input type="email" placeholder="Email or phone number" onChange={(e)=> setEmail(e.target.value)}/>
              <input type="password" placeholder="Password" on onChange={(e)=>setPassword(e.target.value)} />
              <button type="submit" className="loginButton" >Sign In</button>
              <span>
                  New to Netflix? <Link to="/register" style={{"textDecoration":"none"}}><b>Sign up now.</b></Link>
              </span>
              <small>
                  This page is protected by Google reCAPTCHA to ensure you are 
                  not a bot.<b> Learn more</b>.
              </small>
          </form>
      </div>
       <ToastContainer />
    </div>
  );
}
