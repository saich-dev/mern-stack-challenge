const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { PORT, MONGO_URI } = require('./config/db');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/transactions', require('./routes/transactionsRoutes'));
app.use('/api/stats', require('./routes/statsRoutes'));
app.use('/api/combined', require('./routes/combinedRoutes'));

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
