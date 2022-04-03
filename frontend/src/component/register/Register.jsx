import axios from "axios";
import React ,{useRef,useState} from "react";
import {useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import "./register.scss";
import logo from "../../useables/manas_logo_transparent.png"
import validator from "validator"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
export default function Register() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setusername] = useState("");
  const [fieldchange , setFieldchange]=useState(false);
  const history = useHistory();

    const onValueChange = (e) =>{
      const key = e.target.name;
      const value = e.target.value;
      if(key === "email")
      {
        setEmail(value);
      }
      else if(key === "password")
      {
        setPassword(value);
      }
      else{
        setusername(value);
      }
    }

    const registered = () =>{
      toast.success("Registered successfully",{
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme:"dark",
    progress: undefined,
})
    }
    const notify = (error)=>{
      // console.error(error.data);
         toast.error(error,{
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme:"dark",
    progress: undefined,
})
    }
    const validate = () =>{
      if(!validator.isEmail(email))
      {
        notify("Enter a proper Email");
        return false;
      }
      else if(password.length <8)
      {
        notify("Password must be of atleast 8 characters")
        return false;
      }
      return true;
    }
    const handleFinish = async(e) =>{
      e.preventDefault();
      const isvalid = validate(); 
      if(isvalid)
      {
        try {
          await axios.post("http://localhost:8000/api/auth/register" , { email, username,password});
         registered();
          setTimeout(() => {
            history.push("/login");
          }, 5000);
        
        } catch (error) {
          console.log(error.response.data)

          
           if(email === "" || username === "" || password=== "")
          {
            notify("Field cannot be left empty");
          }
          else
          {
              if(error.response.data.code ===11000)
            {
            notify("Credentials already Exists");
            }
          }
        }
        
      }
      
      }
    
  return (
    <div className="register">
 
      <div className="top">
          <div className="wrapper">  
          <img
          src={logo}
          alt=""
          className="logo"
        />
<Link  to="/login" className='loginButton' >Sign In</Link>
        </div>
      </div>
      <div className="container">
          <h1>Unlimited movies, Tv shows, and more. </h1>
          <h2>Watch anywhere, Enjoy anytime.</h2>
          <p>
            Ready to watch? Enter your email to create or restart your Account.
        </p>
        {
            !fieldchange ? (
                <div className="input">
            <input type="email" placeholder='email address' name="email" autoComplete="off" onChange={onValueChange} />
            <button className='registerButton' onClick={()=>{setFieldchange(true)}}>Get Started</button>
        </div>
            ):<form className="input" autoComplete="off">
            <input type="password" placeholder='password'name="password" onChange={onValueChange} />
            <input type="text" placeholder='User name' name="username" autoComplete="off" onChange={onValueChange} />
            <button className='registerButton' onClick={handleFinish}>Start</button>
        </form>
        }
        
      </div>
      <ToastContainer/>
    </div>
  );
}
