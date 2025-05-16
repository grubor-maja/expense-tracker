import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddExpensePage from './pages/AddExpensePage';
import DashboardPage from './pages/DashboardPage';
import { fetchExpenses, fetchStats } from './services/expensesService';

function App() {
const [expenses, setExpenses] = useState([]);
const [expenseStats, setExpenseStats] = useState([]);

const loadExpensesData = async () => {
  const res1 = await fetchExpenses();
  setExpenses(res1.data);
  const res2 = await fetchStats();
  setExpenseStats(res2.data);
};

  useEffect(() => {
    loadExpensesData();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <DashboardPage expenses={expenses} stats={expenseStats} reload={loadExpensesData} />
        } />
        <Route path="/add" element={<AddExpensePage reload={loadExpensesData} />} />
      </Routes>
    </Router>
  );
}

export default App;
