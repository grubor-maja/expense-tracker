import './Expenses.css';

function ExpensesList({ expenses }) {
  function formatDate(dateString) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  }

  return (
    <div className="table-card">
      <h2>Expenses List</h2>
      <div className="table-wrapper">
        <table className="expenses-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.name || '-'}</td>
                <td>${expense.amount}</td>
                <td>{expense.category}</td>
                <td>{formatDate(expense.date)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ExpensesList;
