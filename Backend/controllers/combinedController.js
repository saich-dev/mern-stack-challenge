const { getAllTransactions } = require('./transactionsController');
const { getStats } = require('./statsController');


exports.getCombinedData = async (req, res) => {
    try {
        const { month = 'March' } = req.query;
        const transactions = await getAllTransactions({ query: { month } });
        const stats = await getStats({ query: { month } });
        const barChart = await getBarChart({ query: { month } });
        const pieChart = await getPieChart({ query: { month } });

        res.json({
            transactions,
            stats,
            barChart,
            pieChart
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
