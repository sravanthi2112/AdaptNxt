import { Component } from "react"
import { Legend, Line, Tooltip, LineChart, XAxis, YAxis, CartesianGrid, PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import {} from 'recharts'
import './index.css'

const data = [
    {
      "name": "6/20/2024-7/6/2024",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "7/72024-7/23/2024",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "7/21/2024-7/27/2024",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    }
  ]

const piedata = [
    {
        percentage: 55,
        store: "Shopify Store"
    },
    {
        percentage: 45,
        store: "WooCommerce Store"
    }
]

class Dashboard extends Component{
    render(){
        return(
            <div>
                <h3>Dashboard</h3>
                <div className="content_container">
                    
                    <div className="dashboard-sec">
                        <div className="piechart-sec">
                        <h4>Sales vs Orders</h4>
                        <LineChart width={760} height={350} data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Legend verticalAlign="top" height={36}/>
                            <Line name="orders" type="monotone" dataKey="pv" stroke="#eb8231" />
                            <Line name="sales" type="monotone" dataKey="uv" stroke="#61c2a8" />
                        </LineChart>
                        </div>
                        
                        <div className="piechart-sec">
                            <h4>Portion of Sales</h4>
                            <ResponsiveContainer width={300} height={300}>
                                <PieChart>
                                <Pie
                                    cx="50%"
                                    cy="50%"
                                    data={piedata}
                                    startAngle={0}
                                    endAngle={360}
                                    outerRadius="75%"
                                    innerRadius="0%"
                                    dataKey="percentage"
                                >
                                    <Cell name="WooCommerce Store" fill="#ed6c45" />
                                    <Cell name="Shopify store" fill="#49d1cd" />
                                </Pie>
                                <Legend
                                    iconType="circle"
                                    layout="horizontal"
                                    verticalAlign="bottom"
                                    align="center"
                                />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Dashboard