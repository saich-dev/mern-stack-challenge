import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TransactionsBarChart = ({ transactions }) => {
  const data = {
    labels: ['0-50', '51-100', '101-150', '151-200', '201+'], // Example ranges
    datasets: [{
      label: 'Number of Items',
      data: [/* data based on transactions */],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    }],
  };

  return (
    <div className="chart-container">
      <h2>Transaction Bar Chart</h2>
      <Bar data={data} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: 'Transaction Price Ranges' } } }} />
    </div>
  );
};

export default TransactionsBarChart;
