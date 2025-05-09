const Expense = require('../models/expense.model');
const { validationResult } = require('express-validator');

exports.createExpense = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { amount, category, date } = req.body;
    const expenseItem = {
        id: Date.now().toString(),  
        amount,
        category,
        date,
    };

    Expense.create(expenseItem, (err) => {
        if (err) {
            console.error('Error inserting expense:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(201).json(expenseItem);
    });
};


exports.getAllExpenses = (req, res) => {
    Expense.getAll((err, results) => {
        if(err) {
            console.error('Error fetching expenses:', err);
            return res.status(500).json({error: 'Database error'});
        }
        res.json(results.Items);
    });
}

exports.getStats = (req, res) => {
    Expense.getStats((err, results) => {
        if(err) {
            console.error('Error fetching stats:', err);
            return res.status(500).json({error: 'Database error'});
        }
        res.json(results);
    });
}