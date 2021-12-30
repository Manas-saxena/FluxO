import React from 'react'
import "./home.css"
import Chart from "../../component/charts/Chart"
import Featuredinfo from '../../component/featuredinfo/Featuredinfo'
import {userdata} from '../../dummyData';
import WidgetSm from '../../widgetSm/WidgetSm';
import WidgetLg from '../../widgetLg/WidgetLg';
const Home = () => {
    console.log(userdata);
    return (
        <div className='home'>
<Featuredinfo></Featuredinfo>
        <Chart data={userdata} title="User Analytics" grid={true} dataKey="ActiveUser" ></Chart>
        <div className='homeWidgets'>
            <WidgetSm></WidgetSm>
            <WidgetLg></WidgetLg>
        </div>
        </div>
    )
}

export default Home
