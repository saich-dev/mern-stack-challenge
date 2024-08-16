import { useState } from 'react';

export const useStatistics = () => {
  const [statistics, setStatistics] = useState({});

  const fetchStatistics = async (month) => {
    const response = await fetch(`/api/statistics?month=${month}`);
    const data = await response.json();
    setStatistics(data);
  };

  return { statistics, fetchStatistics };
};
