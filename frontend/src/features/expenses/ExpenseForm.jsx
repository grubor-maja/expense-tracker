import { useState } from "react";
import { addExpense } from "../../services/expensesApi";

function ExpenseForm({ onAdd = () => {} }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isNaN(amount) || Number(amount) <= 0) {
      alert('Amount must be a positive number.');
      return;
    }
    if (!name.trim()) {
      alert('Name is required.');
      return;
    }
    if (!category.trim()) {
      alert('Category is required.');
      return;
    }
    if (!date) {
      alert('Date is required.');
      return;
    }

    const newExpense = { name, amount: Number(amount), category, date };

    try {
      await addExpense(newExpense);
      onAdd();
      setName('');
      setAmount('');
      setCategory('');
      setDate('');
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  return (
    <form className='form-add-expense'onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <input value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount in $" />
      <input value={category} onChange={e => setCategory(e.target.value)} placeholder="Category" />
      <input value={date} onChange={e => setDate(e.target.value)} type="date" />
      <button className='button-add-expense'type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
