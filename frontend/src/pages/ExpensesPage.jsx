import { useState, useEffect}   from 'react';
import ExpenseForm from '../features/expenses/ExpenseForm';
import ExpensesList from '../features/expenses/ExpensesList';
import { fetchExpenses, fetchStats } from '../services/expensesApi';
import ExpensesStats from '../features/expenses/ExpensesStats';

function ExpensesPage() {

    const [expenses, setExpenses] = useState([]);
    const [stats, setStats] = useState([]);

    const loadData = async () => {
        try {
            const expensesResponse = await fetchExpenses();
            setExpenses(expensesResponse.data);
            const statsResponse = await fetchStats();
            setStats(statsResponse.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            <h1>Expense Tracker</h1>
            <ExpenseForm onAdd={loadData} />
            <ExpensesList expenses={expenses} />
            <ExpensesStats stats={stats} />
        </div>
    )
}

export default ExpensesPage;