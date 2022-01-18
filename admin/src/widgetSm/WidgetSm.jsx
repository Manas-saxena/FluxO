import React,{useEffect,useState} from 'react'
import"./widgetSm.css"
import {Visibility} from '@mui/icons-material';
import axios from 'axios';
const WidgetSm = () => {
    const [newUsers, setNewUsers] = useState([]);
    useEffect(() => {
        
        console.log("yes");
        
            const getNewUsers =async()=>{
                console.log("yes");
                const res = await axios.get("/users?new=true",{
                    headers:{
                        token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTcxMDMxM2EzMGQ3MDk4MDkxZDc4ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjUzNzQ0NSwiZXhwIjoxNjQyOTY5NDQ1fQ.u4g_Iahl3BIJ5x8E92vzYCUQYSiT2SgAuzEHP2HzeXk"
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
                    <img src={user.profilePic || "https://png.pngtree.com/png-clipart/20210129/ourmid/pngtree-man-default-avatar-png-image_2813122.jpg"} alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
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
