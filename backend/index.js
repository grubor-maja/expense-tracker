const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

const expenses = [];

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is working');
});

app.post('/api/expenses', (req, res) => {
    const { amount, category, date} = req.body;
    const newExpense = {
        id: expenses.length + 1,
        amount,
        category,
        date
    };
    expenses.push(newExpense);
    res.status(201).json(newExpense);
});

app.get('/api/expenses', (req, res) => {
    res.json(expenses);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});