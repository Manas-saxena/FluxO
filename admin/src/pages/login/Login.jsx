import React,{useState,useContext} from 'react'
import {login} from "../../context/authContext/apiCalls"
import {AuthContext} from "../../context/authContext/AuthContext"
import "./login.css"
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const   {isfetching , dispatch} = useContext(AuthContext);
    const onInputChange = (e)=>{
        const name = e.target.name;
        const value =e.target.value;

        if(name == "email")
        {
            setEmail(value);

        }
        else{
            setPassword(value);
        }

    }
   const handleLogin = (e) =>{
    e.preventDefault();
    login({email,password},dispatch);
   }
    return (
        <div className='login'>
            <form action="" className="loginform">
                <input type="text" placeholder='email' name='email' onChange={onInputChange}  value={email}className="loginInput" />
                <input type="password"placeholder='password' name='password' onChange = {onInputChange} value={password} className="loginInput" />
                <button className='loginButton'onClick={handleLogin} disabled={isfetching} >Login</button>
            </form>
        </div>
    )
}

export default Login;
