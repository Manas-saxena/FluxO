import React from 'react'
import "./chart.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'JAN',
    ActiveUser: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'FEB',
    ActiveUser: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'MAR',
    ActiveUser: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'APR',
    ActiveUser: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'MAY',
    ActiveUser: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'JUN',
    ActiveUser: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'JUL',
    ActiveUser: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const Chart = () => {
    return (
        <div className="chart">
            <h3 className="charttitle">User Analytics</h3>
            <ResponsiveContainer width='100%' aspect={4 / 1}>
                <LineChart
                data={data}
                >
                   <XAxis dataKey='name'stroke="#5550bd"></XAxis>
                    <Line type='monotone' dataKey="ActiveUser" stroke="#5550bd"></Line>
                     <Tooltip></Tooltip>
                <CartesianGrid strokeDasharray="5 5"></CartesianGrid>
                </LineChart>
               
            </ResponsiveContainer>
        </div>
    )
}

export default Chart
