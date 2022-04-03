import React , {useState,useContext} from 'react'
import "./navbar.scss";
import { Link } from 'react-router-dom';
// import {SearchIcon,Notifications,ArrowDropDownIcon} from '@mui/icons-material' 
import SearchIcon from '@mui/icons-material/Search' 
import Notifications from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { AuthContext } from '../../authContext/AuthContext';
import logo from "../../useables/manas_logo_transparent.png"
import {logout} from "../../authContext/AuthActions"
const Navbar = () => {

    const [isScrolled , SetIsScrolled]= useState(false);
    const { dispatch} = useContext(AuthContext);
    window.onscroll = () =>{
        SetIsScrolled(window.pageYOffset === 0 ?false:true)
        return () => (window.onscroll = null);
    }
    return (
        <div className={isScrolled?"navbar scrolled": 'navbar'}>
           <div className="container">

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
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="userimage" />
            <ArrowDropDownIcon className='icon'> </ArrowDropDownIcon>
            <div className='options'>
            <span>settings</span>
            <span onClick={() => dispatch(logout())}>Logout</span>
            </div>
            </div>
           </div>
           </div>
           
        </div>
    )
}

export default Navbar
