const Expense = require('../models/expense.model');
const { validationResult } = require('express-validator');
const { uploadReport } = require('../services/s3.service');


exports.createExpense = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, amount, category, date } = req.body;
    const expenseItem = {
        id: Date.now().toString(),  
        name,
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

exports.uploadTestReport = async (req, res) => {
    try {
        const dummyContent = 'This is a test report content.';
        const fileName = `test-report-${Date.now()}.txt`;

        await uploadReport(dummyContent, fileName, 'text/plain');

        res.status(200).json({ message: 'Report uploaded successfully', fileName });
    } catch (err) {
        console.error('Error uploading report:', err);
        res.status(500).json({ error: 'Failed to upload report' });
    }
};
