import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  const [date, setDate] = useState('')
  const [expenses, setExpenses] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newExpense = { amount, category, date };
    try {
      await axios.post('http://localhost:5000/api/expenses', newExpense);
      fetchExpenses();
      setAmount(0);
      setCategory('');
      setDate('');
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  const fetchExpenses = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/expenses');
      setExpenses(res.data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div>
      <h1>Expense Tracker</h1>
      <form onSubmit={handleSubmit}>
        <input value={amount} onChange={e => setAmount(e.target.value)} placeholder='Amount' />
        <input value={category} onChange={e => setCategory(e.target.value)} placeholder='Category' />
        <input value={date} onChange={e => setDate(e.target.value)} placeholder='Date' type="date" />
        <button type="submit">Add Expense</button>
      </form>

      <h2>Expenses:</h2>
      <ul>
        {expenses.map(expense => (
          <li key={expense.id}>{expense.date} - {expense.category}: ${expense.amount}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
