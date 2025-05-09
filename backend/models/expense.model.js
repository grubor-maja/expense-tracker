// const db = require('../config/db.config.js');
const dynamoDb = require('../config/dynamodb.config.js');

const Expense = {
    create: (data, callback) => {
        const params = {
            TableName: 'Expenses',
            Item: {
                id: Date.now().toString(),
                amount: data.amount,
                category: data.category,
                date: data.date,
            }
        };

        dynamoDb.put(params, callback);
    },
    getAll: (callback) => {
        const params = {
            TableName: 'Expenses',
        };

        dynamoDb.scan(params, callback);
    },
    getStats: (callback) => {
        const params = {
            TableName: 'Expenses',
        };

        dynamoDb.scan(params, (err, data) => {
            if (err) return callback(err);

            const stats = {};

            data.Items.forEach(item => {
                if(!stats[item.category]) {
                    stats[item.category] = 0;
                }
                stats[item.category] += parseFloat(item.amount);
            });

            const resultArray = Object.keys(stats).map(category => ({
                category,
                total_amount: stats[category]
            }));

            callback(null, resultArray);
        })
    }
};

module.exports = Expense;