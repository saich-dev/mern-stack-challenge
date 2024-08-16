const API_BASE = 'http://localhost:5000/api';

export const fetchTransactions = async (month, search, page, perPage) => {
    const response = await fetch(`${API_BASE}/transactions?month=${month}&search=${search}&page=${page}&perPage=${perPage}`);
    return response.json();
};

export const fetchStats = async (month) => {
    const response = await fetch(`${API_BASE}/stats?month=${month}`);
    return response.json();
};

export const fetchBarChart = async (month) => {
    const response = await fetch(`${API_BASE}/bar-chart?month=${month}`);
    return response.json();
};

export const fetchPieChart = async (month) => {
    const response = await fetch(`${API_BASE}/pie-chart?month=${month}`);
    return response.json();
};

export const fetchCombinedData = async (month) => {
    const response = await fetch(`${API_BASE}/combined?month=${month}`);
    return response.json();
};
