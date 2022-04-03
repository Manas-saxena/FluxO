import React,{} from 'react'
import axios from "axios";
import { useState, useEffect, useMemo } from "react";
import "./home.css"
import Chart from "../../component/charts/Chart"
import WidgetSm from '../../widgetSm/WidgetSm';
import WidgetLg from '../../widgetLg/WidgetLg';
const Home = () => {
     const MONTHS = useMemo(()=> [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],[])
  const [userStats, setUserStats] = useState([]);
  useEffect(() => {
   const getStats = async() =>{
     try {
       const jwt = JSON.parse(localStorage.getItem("user")).accessToken;

        const res = await axios.get("users/stats", {
          headers: {
            token:
              "Bearer "+jwt,
          },
        });
        const list = res.data.sort(function (a,b){
          return a._id-b._id
        })
       list.map(item=>{setUserStats(prev=>[...prev,{name:MONTHS[item._id-1],"New User":item.total}])})
       
       
     } catch (error) {
       console.log(error)
     }
  
   }
   getStats();
  },[MONTHS])

  console.log(userStats)
    return (
        <div className='home'>
{/* <Featuredinfo></Featuredinfo> */}

        <Chart data={userStats} title="User Analytics" grid={true} dataKey="New User" ></Chart>
        <div className='homeWidgets'>
            <WidgetSm></WidgetSm>
        </div>
        </div>
    )
}

export default Home
