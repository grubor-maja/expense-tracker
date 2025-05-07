const Expense = require('../models/expense.model');

exports.createExpense = (req, res) => {
    const { amount, category, date } = req.body;
    Expense.create({amount, category, date}, (err, result) => {
        if(err) {
            console.error('Error inserting expense:', err);
            return res.status(500).json({error: 'Database error'});
        }
        res.status(201).json(result);
    });
}

exports.getAllExpenses = (req, res) => {
    Expense.getAll((err, results) => {
        if(err) {
            console.error('Error fetching expenses:', err);
            return res.status(500).json({error: 'Database error'});
        }
        res.json(results);
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