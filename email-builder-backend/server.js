require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const emailRoutes = require('./routes/emailRoutes');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({origin: 'https://emailbuilder-ncqu.onrender.com'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static('public'));

// Routes
app.use('/api', emailRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });


// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
