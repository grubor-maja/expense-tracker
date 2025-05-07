function ExpensesList({ expenses }) {

    function formatDate(dateString) {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString('en-GB', options);
    }
    
  return (
    <div>
      <h2>Expenses List</h2>
      <ul>
        {expenses.map((expense) => (
            <li key={expense.id}>
                {formatDate(expense.date)} - {expense.category}: ${expense.amount}
            </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpensesList;