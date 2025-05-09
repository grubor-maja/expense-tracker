const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'expense-tracker.c8zo8o2mgyzc.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'Test!234',
    database: 'expense_tracker'
});


module.exports = {db};