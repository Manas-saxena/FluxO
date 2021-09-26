import React , {useState} from 'react'
import "./navbar.scss";
// import {SearchIcon,Notifications,ArrowDropDownIcon} from '@mui/icons-material' 
import SearchIcon from '@mui/icons-material/Search' 
import Notifications from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Navbar = () => {

    const [isScrolled , SetIsScrolled]= useState(false);

    window.onscroll = () =>{
        SetIsScrolled(window.pageYOffset === 0 ?false:true)
        return () => (window.onscroll = null);
    }
    return (
        <div className={isScrolled?"navbar scrolled": 'navbar'}>
           <div className="container">
               <div className="left">
               <img alt="logo" className='logo' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"></img>
               <span>Homepage</span>
               <span>Series</span>
               <span>Movies</span>
               <span>New and Popular</span>
               <span>My List</span>
           </div>
           <div className="right">
            <SearchIcon className='icon'></SearchIcon>
            <span>KID</span>
            <Notifications className='icon'></Notifications>
            
            <div className='profile'>
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="userimage" />
            <ArrowDropDownIcon className='icon'> </ArrowDropDownIcon>
            <div className='options'>
            <span>settings</span>
            <span>Logout</span>
            </div>
            </div>
           </div>
           </div>
           
        </div>
    )
}

export default Navbar
