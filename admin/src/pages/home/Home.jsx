import React from 'react'
import "./home.css"
import Chart from "../../component/charts/Chart"
import Featuredinfo from '../../component/featuredinfo/Featuredinfo'
const Home = () => {
    return (
        <div className='home'>
<Featuredinfo></Featuredinfo>
        <Chart></Chart>
        </div>
    )
}

export default Home
