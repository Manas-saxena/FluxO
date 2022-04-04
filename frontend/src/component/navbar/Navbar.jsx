import React , {useState,useContext} from 'react'
import "./navbar.scss";
import { Link } from 'react-router-dom';
// import {SearchIcon,Notifications,ArrowDropDownIcon} from '@mui/icons-material' 
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { AuthContext } from '../../authContext/AuthContext';
import logo from "../../useables/manas_logo_transparent.png"
import {logout} from "../../authContext/AuthActions"
import Avatar from "../../useables/Avatar.jpg"
const Navbar = () => {

    const [isScrolled , SetIsScrolled]= useState(false);
    const { dispatch} = useContext(AuthContext);
    window.onscroll = () =>{
        SetIsScrolled(window.pageYOffset === 0 ?false:true)
        return () => (window.onscroll = null);
    }
    return (
        <div>

        <div className='navbar'>
           <div className={isScrolled?"container scrolled": 'container'}>

               <div className="left">
               <img alt="logo" className='logo' src={logo}></img>
               <Link to = "/" className='link'>
               <span>Homepage</span>
               </Link>
               <Link className="link" to="/series">
               <span>Series</span>
               </Link>
               <Link className="link" to="/movies">
               <span>Movies</span>
               </Link>
           </div>
           <div className="right">
            
            <div className='profile'>
                <img src={Avatar} alt="userimage" />
            <ArrowDropDownIcon className='icon'> </ArrowDropDownIcon>
            <div className='options'>
            <span>settings</span>
            <span onClick={() => dispatch(logout())}>Logout</span>
            </div>
            </div>
           </div>
           </div>
           
           <div className='links'>
            <Link to = "/" className='link'>
               <span>Homepage</span>
               </Link>
               <Link className="link" to="/series">
               <span>Series</span>
               </Link>
               <Link className="link" to="/movies">
               <span>Movies</span>
               </Link>
        </div>
        </div>
        
        </div>
    )
}

export default Navbar
