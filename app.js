// app.js
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();
//Body parser
const bodyParser = require('body-parser');


const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: true })); // Allows us to get data in req.body
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Define Routes
app.use('/api/hero', require('./routes/hero'));
app.use('/api/body', require('./routes/body'));


app.get('/', (req, res) => res.send('Portfolio API Running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));