import React from 'react';

const TransactionsStatistics = ({ statistics }) => {
  return (
    <div className="statistics">
      <h2>Statistics</h2>
      <p>Total Sales: ${statistics.totalSales}</p>
      <p>Total Sold Items: {statistics.totalSoldItems}</p>
      <p>Total Not Sold Items: {statistics.totalNotSoldItems}</p>
    </div>
  );
};

export default TransactionsStatistics;
