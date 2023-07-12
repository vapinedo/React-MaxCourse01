import React from 'react'
import ChartBar from './ChartBar'
import "./Chart.css";

const Chart = (props) => {
  return (
    <div className='chart'>
      {props.dataPoints.map(dataPoint => (
        <ChartBar 
          maxValue={null} 
          key={dataPoint.label}
          value={dataPoint.value} 
          label={dataPoint.label} 
        />
      ))}
    </div>
  )
}

export default Chart