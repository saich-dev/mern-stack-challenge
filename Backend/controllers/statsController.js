const Transaction = require('../models/Transaction');

exports.getStats = async (req, res) => {
    try {
        const { month = 'March' } = req.query;
        const startDate = new Date(`${month} 1, 2024`);
        const endDate = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0);

        const totalSales = await Transaction.aggregate([
            { $match: { dateOfSale: { $gte: startDate, $lte: endDate }, sold: true } },
            { $group: { _id: null, totalAmount: { $sum: '$price' }, totalSold: { $sum: 1 } } }
        ]);

        const totalNotSold = await Transaction.countDocuments({ dateOfSale: { $gte: startDate, $lte: endDate }, sold: false });

        res.json({
            totalSalesAmount: totalSales[0]?.totalAmount || 0,
            totalSoldItems: totalSales[0]?.totalSold || 0,
            totalNotSoldItems: totalNotSold
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

