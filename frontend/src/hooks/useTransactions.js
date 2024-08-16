import { useState } from 'react';

export const useTransactions = () => {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async (month, searchTerm) => {
    const response = await fetch(`/api/transactions?month=${month}&search=${searchTerm}`);
    const data = await response.json();
    setTransactions(data);
  };

  return { transactions, fetchTransactions };
};
