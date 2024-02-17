import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js"
import { Line } from "react-chartjs-2"
// import faker from "faker"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
)
const ChartLine = () => {

  const data = {
    labels: ['Mon', "Tue", "Wed", "Thur", "Fri"],
    datasets: [{
      labels: "PnL",
      data: [122,121,128],
      borderColor: "black",
    }]
  }

  const options ={
    plugins: {
      legend: true
    }
  }

  return (
    <div><Line
    data={data}
    options={options}
    ></Line></div>
  )
}

export default ChartLine