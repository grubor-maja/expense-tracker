const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const expensesRoutes = require('./routes/expenses.routes.js');
app.use('/api/expenses', expensesRoutes);

module.exports = app;