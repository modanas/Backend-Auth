const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const app = express();
require('dotenv').config();

// Connect to database
connectDB();

// Middleware
app.use(express.json({ extended: false }));

// Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
