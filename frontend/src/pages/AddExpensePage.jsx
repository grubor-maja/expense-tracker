import Sidebar from "../components/Sidebar";
import ExpenseForm from "../features/expenses/ExpenseForm";
import { useNavigate } from "react-router-dom";
import './DashboardPage.css';

function AddExpensePage({ reload }) {
  const navigate = useNavigate();

  const handleAdd = async () => {
    await reload();
    navigate("/");
  };

  return (
    <div className="page-wrapper">
      <Sidebar />
      <div className="add-expense-page">
        <h2>Add New Expense</h2>
        <ExpenseForm onAdd={handleAdd} />
      </div>
    </div>
  );
}

export default AddExpensePage;
