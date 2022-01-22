import React from 'react'
import "./sidebar.css"
import {Link} from "react-router-dom"
import {LineStyle,Timeline,PlayArrow,List} from "@mui/icons-material"
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarwrapper">
                <div className="sidebarmenu">
                    <h3 className="sidebartitle">Dashboard</h3>
                        <ul className="sidebarlist">
                            <li className="sidebarlistitem active">
                                  <Link to="/">
                                <LineStyle className='sidebaricon'></LineStyle>
                                Home
                                </Link>
                            </li>
                            {/* <li className="sidebarlistitem">
                                 <Link to="/user">
                                     
                                <Timeline className='sidebaricon'></Timeline>
                                Users
                                 </Link>
                            </li> */}
                            <li className="sidebarlistitem">
                               <Link to="/movies">
                               <PlayArrow className='sidebaricon'></PlayArrow>
                                Movies
                               </Link>
                                
                            </li>
                            <li className="sidebarlistitem">
                               <Link to="/list">
                               <List className='sidebaricon'></List>
                                List
                               </Link>
                                
                            </li>
                        </ul>
                    
                </div>
            
            </div>
        </div>
    )
}

export default Sidebar
