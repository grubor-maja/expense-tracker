import { useState, useEffect}   from 'react';
import ExpenseForm from '../features/expenses/ExpenseForm';
import ExpensesList from '../features/expenses/ExpensesList';
import { fetchExpenses, fetchStats } from '../services/expensesService';
import ExpensesStats from '../features/expenses/ExpensesStats';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router';
import '../App.css';
import './DashboardPage.css';
import { FaPlus } from "react-icons/fa";


function ExpensesPage() {

    const [expenses, setExpenses] = useState([]);
    const [stats, setStats] = useState([]);
    const navigate = useNavigate();

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
        <div className="page-wrapper">
            <Sidebar />
                <div className="dashboard-wrapper">
                <div className="tables">
                    <ExpensesList expenses={expenses} />
                    <ExpensesStats stats={stats} />
                </div>
                <button className='button-add-expense'onClick={() => navigate('/add')}><FaPlus size={11} style={{ marginRight: '5px' }}/>Add Expense</button>
            </div>

        </div>
    )
}

export default ExpensesPage;