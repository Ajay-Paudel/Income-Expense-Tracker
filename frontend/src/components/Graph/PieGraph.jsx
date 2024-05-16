import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
const PieGraph = ({data}) => {
    const seriesData = data.map((entry, index) => ({
        id: index,
        value: entry.amount,
        label: entry.name,
      }));
  return (
    <div className="justify-center">
    <PieChart
      series={[{ data: seriesData }]}
      width={400}
      height={200}
    />
    </div>
  )
}

export default PieGraph