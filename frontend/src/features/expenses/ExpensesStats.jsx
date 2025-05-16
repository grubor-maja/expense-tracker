import './Expenses.css';

function ExpensesStats({ stats }) {
  return (
    <div className="table-card">
      <h2>Statistics</h2>
      <table className="table-wrapper">
        <table className='expenses-table'>
        <thead>
          <tr>
            <th>Category</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {stats.map((stat) => (
            <tr key={stat.category}>
              <td>{stat.category}</td>
              <td>${stat.total_amount}</td>
            </tr>
          ))}
        </tbody>
        </table>
      </table>
    </div>


  );
}

export default ExpensesStats;
