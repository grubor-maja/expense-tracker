const express = require('express');
const router = express.Router();
const expensesController = require('../controllers/expenses.controller.js');

router.post('/', expensesController.createExpense);
router.get('/', expensesController.getAllExpenses);
router.get('/stats', expensesController.getStats);

module.exports = router;