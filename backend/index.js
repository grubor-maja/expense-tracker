const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const PORT = 5000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'localhost',
    database: 'expense_tracker'
});

db.connect((err) => {
    if(err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
})

const expenses = [];

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is working');
});

// app.post('/api/expenses', (req, res) => {
//     const { amount, category, date} = req.body;
//     const newExpense = {
//         id: expenses.length + 1,
//         amount,
//         category,
//         date
//     };
//     expenses.push(newExpense);
//     res.status(201).json(newExpense);
// });

// app.get('/api/expenses', (req, res) => {
//     res.json(expenses);
// });

app.get('/api/expenses', (req, res) => {
    const sql = 'SELECT * FROM expenses';
    db.query(sql, (err, results) => {
        if(err) {
            console.error('Error fetching expenses:', err);
            return res.status(500).json({error: 'Database error'});
        }
        res.json(results);
    })
    
});

app.post('/api/expenses', (req, res) => {
    const {amount, category, date} = req.body;
    const sql = 'INSERT INTO expenses (amount, category, date) VALUES (?, ?, ?)';
    db.query(sql, [amount, category, date], (err, result) => {
        if(err) {
            console.error('Error inserting expense:', err);
            return res.status(500).json({error: 'Database error'});
        }
        const newExpense = {
            id: result.insertId,
            amount,
            category,
            date
        }
        res.status(201).json(newExpense);
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});