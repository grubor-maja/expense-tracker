function ExpensesList({ expenses }) {
  return (
    <div>
      <h2>Expenses List</h2>
      <ul>
        {expenses.map((expense) => (
            <li key={expense.id}>
                {expense.date} - {expense.category}: ${expense.amount}
            </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpensesList;