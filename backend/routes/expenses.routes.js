const express = require('express');
const router = express.Router();
const expensesController = require('../controllers/expenses.controller.js');
const {body} = require('express-validator');

router.post('/',
    [
        body('amount')
            .isFloat({ gt: 0 }).withMessage('Amount must be a positive number'),
        body('category')
            .notEmpty().withMessage('Category is required'),
        body('date')
            .isISO8601().withMessage('Date must be a valid date'),
    ],
    expensesController.createExpense);
router.get('/', expensesController.getAllExpenses);
router.get('/stats', expensesController.getStats);

module.exports = router;