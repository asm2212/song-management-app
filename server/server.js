// server.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const songRoutes = require('./routes/songs');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/songs', songRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
