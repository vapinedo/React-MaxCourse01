import React from 'react'
import ChartBar from './ChartBar'
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximun = Math.max(...dataPointValues);
  
  return (
    <div className='chart'>
      {props.dataPoints.map(dataPoint => (
        <ChartBar 
          key={dataPoint.label}
          maxValue={totalMaximun} 
          value={dataPoint.value} 
          label={dataPoint.label} 
        />
      ))}
    </div>
  )
}

export default Chart