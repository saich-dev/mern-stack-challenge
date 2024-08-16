const axios = require('axios');
const Transaction = require('../models/Transaction');

/**
 * Fetch data from the third-party API and initialize the database.
 */
const fetchAndSeedData = async () => {
    try {
        // Fetch data from the third-party API
        const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
        const data = response.data;

        // Transform data if necessary (e.g., parsing dates)
        const formattedData = data.map(item => ({
            ...item,
            dateOfSale: new Date(item.dateOfSale)  // Ensure dateOfSale is a Date object
        }));

        // Clear existing data in the database
        await Transaction.deleteMany({});

        // Insert new data into the database
        await Transaction.insertMany(formattedData);

        console.log('Database initialized with seed data.');
    } catch (error) {
        console.error('Error fetching and seeding data:', error.message);
    }
};

module.exports = fetchAndSeedData;
