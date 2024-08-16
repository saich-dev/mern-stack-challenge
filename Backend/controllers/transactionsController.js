const Transaction = require('../models/Transaction');

exports.getAllTransactions = async (req, res) => {
    try {
        const { month = 'March', page = 1, perPage = 10, search = '' } = req.query;
        const regex = new RegExp(search, 'i');
        const startDate = new Date(`${month} 1, 2024`);
        const endDate = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0);

        const transactions = await Transaction.find({
            dateOfSale: { $gte: startDate, $lte: endDate },
            $or: [
                { title: regex },
                { description: regex },
                { price: regex }
            ]
        }).skip((page - 1) * perPage).limit(Number(perPage));

        res.json(transactions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
