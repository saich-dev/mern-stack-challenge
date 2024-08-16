const axios = require('axios');
const Transaction = require('../models/Transaction');

const seedData = async () => {
    try {
        const { data } = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
        await Transaction.deleteMany({});
        await Transaction.insertMany(data);
        console.log('Database seeded');
    } catch (error) {
        console.error('Error seeding data:', error.message);
    }
};

seedData();
