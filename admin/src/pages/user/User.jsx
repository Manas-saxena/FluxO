import React from "react";
import "./user.css";
import{Link} from "react-router-dom"
import {PermIdentity,CalendarToday,Publish,LocationSearching,MailOutline,PhoneAndroid} from "@mui/icons-material"
function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newuser">
        <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/10200429/pexels-photo-10200429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
                <span className="userShowUsername">Alex Parker</span>
                <span className="userShowUserTitle">Softare Developer</span>
            </div>
          </div>
          <div className="userShowBottom">
              <span className="userShowTile">
                  Account Detils
              </span>
              <div className="userShowInfo">
                  <PermIdentity className="userShowIcon" ></PermIdentity>
              <span className="userShowInfoTitle">alexparker144</span>
              </div>
              <div className="userShowInfo">
                  <CalendarToday className="userShowIcon" ></CalendarToday>
              <span className="userShowInfoTitle">10.12.1999</span>
              </div>
              <span className="userShowTile">
                  Contact Detils
              </span>
              <div className="userShowInfo">
                  <PhoneAndroid className="userShowIcon" ></PhoneAndroid>
              <span className="userShowInfoTitle">+912565584</span>
              </div>
              <div className="userShowInfo">
                  <MailOutline className="userShowIcon" ></MailOutline>
              <span className="userShowInfoTitle">alexparker144@gmail.com</span>
              </div>
              <div className="userShowInfo">
                  <LocationSearching className="userShowIcon" ></LocationSearching>
              <span className="userShowInfoTitle">New york ,USA</span>
              </div>
              
          </div>
        </div>
        <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form  className="userUpdateForm">
                <div className="userUpdateLeft">
                <div className="userUpdateItem">
                    <label >Username</label>
                    <input type="text" placeholder="alexparker144" className="userUpdateInput" />
                </div>
                <div className="userUpdateItem">
                    <label >Full Name</label>
                    <input type="text" placeholder="Alex Parker" className="userUpdateInput" />
                </div>
                <div className="userUpdateItem">
                    <label >Email</label>
                    <input type="email" placeholder="alexparker144@gmail.com" className="userUpdateInput" />
                </div>
                <div className="userUpdateItem">
                    <label >Phone</label>
                    <input type="text" placeholder="+9128563584" className="userUpdateInput" />
                </div>
                <div className="userUpdateItem">
                    <label >Username</label>
                    <input type="text" placeholder="alexparker144" className="userUpdateInput" />
                </div>
                <div className="userUpdateItem">
                    <label >Address</label>
                    <input type="text" placeholder="New York USA" className="userUpdateInput" />
                </div>
                </div>
                <div className="userUpdateRight">
                <div className="userUpdateUpload">
                    <img src="https://images.pexels.com/photos/10200429/pexels-photo-10200429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="userUpdateImg" />
                    <label htmlFor="file"><Publish className="UserUpdateIcon"></Publish></label>
                    <input type="file" id="file" style={{display:"none"}}/>
                </div>
                <button className="userUpdateButton">Update</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
}

export default User;
