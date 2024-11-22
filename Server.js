const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db.js');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use('/api/actions', require('./routes/actionRoutes'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
