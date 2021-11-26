import React from 'react'
import "./sidebar.css"
import {LineStyle,Timeline,TrendingUp} from "@mui/icons-material"
const Sidebar = () => {
    return (
        <div class="sidebar">
            <div className="sidebarwrapper">
                <div className="sidebarmenu">
                    <h3 className="sidebartitle">Dashboard</h3>
                        <ul className="sidebarlist">
                            <li className="sidebarlistitem active">
                                <LineStyle className='sidebaricon'></LineStyle>
                                Home
                            </li>
                            <li className="sidebarlistitem">
                                <Timeline className='sidebaricon'></Timeline>
                                Analytics
                            </li>
                            <li className="sidebarlistitem">
                                <TrendingUp className='sidebaricon'></TrendingUp>
                                Sales
                            </li>
                        </ul>
                    
                </div>
                <div className="sidebarmenu">
                    <h3 className="sidebartitle">Quick Menu</h3>
                        <ul className="sidebarlist">
                            <li className="sidebarlistitem active">
                                <LineStyle className='sidebaricon'></LineStyle>
                                Home
                            </li>
                            <li className="sidebarlistitem">
                                <Timeline className='sidebaricon'></Timeline>
                                Analytics
                            </li>
                            <li className="sidebarlistitem">
                                <TrendingUp className='sidebaricon'></TrendingUp>
                                Sales
                            </li>
                        </ul>
                    
                </div>
                <div className="sidebarmenu">
                    <h3 className="sidebartitle">Notification</h3>
                        <ul className="sidebarlist">
                            <li className="sidebarlistitem active">
                                <LineStyle className='sidebaricon'></LineStyle>
                                Home
                            </li>
                            <li className="sidebarlistitem">
                                <Timeline className='sidebaricon'></Timeline>
                                Analytics
                            </li>
                            <li className="sidebarlistitem">
                                <TrendingUp className='sidebaricon'></TrendingUp>
                                Sales
                            </li>
                        </ul>
                    
                </div>
            </div>
        </div>
    )
}

export default Sidebar
