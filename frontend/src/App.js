import React, { useState, useEffect } from 'react';
import TransactionsTable from './components/TransactionsTable';
import TransactionsStatistics from './components/TransactionsStatistics';
import TransactionsBarChart from './components/TransactionsBarChart';
import {useTransactions}  from './hooks/useTransactions';
import {useStatistics} from './hooks/useStatistics';

const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const App = () => {
  const [selectedMonth, setSelectedMonth] = useState('Mar');
  const [searchTerm, setSearchTerm] = useState('');

  const { transactions, fetchTransactions } = useTransactions();
const { statistics, fetchStatistics } = useStatistics();


  useEffect(() => {
    fetchTransactions(selectedMonth, searchTerm);
    fetchStatistics(selectedMonth);
  }, [selectedMonth, searchTerm, fetchTransactions, fetchStatistics]); 
  return (
    <div className="app-container">
      <h1>Transactions Dashboard</h1>
      <select
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
      >
        {months.map((month) => (
          <option key={month} value={month}>{month}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Search transactions..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <TransactionsTable transactions={transactions} />
      <TransactionsStatistics statistics={statistics} />
      <TransactionsBarChart transactions={transactions} />
    </div>
  );
};

export default App;
