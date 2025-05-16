import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddExpensePage from './pages/AddExpensePage';
import ExpensesPage from './pages/ExpensesPage';
import { fetchExpenses, fetchStats } from './services/expensesApi';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [stats, setStats] = useState([]);

  const loadData = async () => {
    try {
      const expensesResponse = await fetchExpenses();
      setExpenses(expensesResponse.data);
      const statsResponse = await fetchStats();
      setStats(statsResponse.data);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <ExpensesPage expenses={expenses} stats={stats} reload={loadData} />
        } />
        <Route path="/add" element={<AddExpensePage reload={loadData} />} />
      </Routes>
    </Router>
  );
}

export default App;
