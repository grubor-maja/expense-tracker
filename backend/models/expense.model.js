const db = require('../config/db.config.js');

const Expense = {
    create: (data, callback) => {
        const sql = 'INSERT INTO expenses (amount, category, date) VALUES (?, ?, ?)';
        db.query(sql, [data.amount, data.category, data.date], callback);
    },
    getAll: (callback) => {
        const sql = 'SELECT * FROM expenses';
        db.query(sql, callback);
    },
    getStats: (callback) => {
        const sql = 'SELECT category, SUM(amount) as total_amount FROM expenses GROUP BY category';
        db.query(sql, callback);
    }
};

module.exports = Expense;