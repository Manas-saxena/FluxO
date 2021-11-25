import React from "react";
import "./topbar.css";
import { NotificationsNone,Settings,Language } from "@mui/icons-material";
function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarwrapper">
        <div className="topleft">
          <span className="logo">Admin</span>
        </div>
        <div className="topright">
          <div className="topbariconcontainer">
            <NotificationsNone></NotificationsNone>
            <span className="topiconbadge">2</span>
          </div>
          <div className="topbariconcontainer">
            <Language/>
            <span className="topiconbadge">2</span>
          </div>
          <div className="topbariconcontainer">
            <Settings/>
            <span className="topiconbadge">2</span>
          </div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIbfDzNPtnPQF6u02N9c4z9QvRUPlIFGu91A&usqp=CAU" alt="user profile picture" className="topavatar" />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
