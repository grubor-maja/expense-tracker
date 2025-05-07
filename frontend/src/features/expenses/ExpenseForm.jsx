import { useState } from "react";
import { addExpense } from "../../services/expensesApi";

function ExpenseForm({ onAdd}) {
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newExpense = { amount, category, date };
        try {
            await addExpense(newExpense);
            onAdd(); 
            setAmount(0);
            setCategory('');
            setDate('');
        } catch (error) {
            console.error('Error adding expense:', error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount" />
            <input value={category} onChange={e => setCategory(e.target.value)} placeholder="Category" />
            <input value={date} onChange={e => setDate(e.target.value)} placeholder="Date" type = "date" />

            <button type="submit">Add Expense</button>
        </form>
    );
}

export default ExpenseForm;