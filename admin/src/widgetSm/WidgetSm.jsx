import React,{useEffect,useState} from 'react'
import"./widgetSm.css"
import {Visibility} from '@mui/icons-material';
import axios from 'axios';
const WidgetSm = () => {
    const [newUsers, setNewUsers] = useState([]);
    useEffect(() => {
        
        console.log("yes");
        
            const getNewUsers =async()=>{
                const jwt = JSON.parse(localStorage.getItem("user")).accessToken;
                const res = await axios.get("/users?new=true",{
                    headers:{
                        token:"Bearer " + jwt 
                    }
                })
                console.log("yes");
                console.log(res.data)
                setNewUsers(res.data);
            }
           getNewUsers();
        
        
    }, [])
    console.log(newUsers)
    return (
        <div className='widgetSm'>
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                {newUsers.map((user)=>(
                    <li className="widgetSmItem">
                    <div className="widgetSmUser">
                    <img src={user.profilePic || "https://png.pngtree.com/png-clipart/20210129/ourmid/pngtree-man-default-avatar-png-image_2813122.jpg"} alt="" className="widgetSmImg" />

                        <span className="widgetSmUsername">{user.username}</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="WidgetSmIcon"/>
                        Display
                    </button>
                </li>
                ))}
                
            </ul>
        </div>
    )
}

export default WidgetSm
