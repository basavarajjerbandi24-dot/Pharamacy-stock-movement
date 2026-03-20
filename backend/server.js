const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// PostgreSQL connection
const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'pharmacy_db',
  password: process.env.DB_PASSWORD || 'password',
  port: process.env.DB_PORT || 5432,
});

// Test database connection
pool.on('connect', () => {
  console.log('Connected to PostgreSQL database');
});

// Routes
app.get('/', (req, res) => {
  res.send('Pharmacy Stock Movement Backend API');
});

// Login endpoint
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  // Simple authentication - replace with real logic
  if (username === 'support@lifetrenz.com' && password === 'password123') {
    res.json({ success: true, message: 'Login successful' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Example route for stock
app.get('/api/stock', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM stock');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});