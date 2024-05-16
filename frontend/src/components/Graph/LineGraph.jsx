import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const LineGraph = ({ incomeData, expenseData }) => {
  console.log(incomeData,expenseData);
  // Extracting amounts and categories from income and expense data
  const incomeAmounts = incomeData?.map(item => item.amount);
  const expenseAmounts = expenseData?.map(item => item.amount);
  
  // Assuming xLabels are the categories of income and expense
  const xLabels = incomeData?.map(item => item.category);

  return (
    <LineChart
      width={500}
      height={300}
      series={[
        { data: incomeAmounts, label: 'Income' },
        { data: expenseAmounts, label: 'Expenses' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
  );
};

export default LineGraph;
