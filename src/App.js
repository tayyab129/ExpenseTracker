import Expenses from "./components/Expenses.js";
import { FaGoogleWallet } from "react-icons/fa";
import NewExpense from "./components/NewExpense/NewExpense.js";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify'; // Import Toastify components
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get('expense-tracker-backend-production-ebbe.up.railway.app/api/expenses');
        setExpenses(response.data);
      } catch (error) {
        console.error('Error fetching expenses:', error.response ? error.response.data : error.message);
      }
    };

    fetchExpenses();
  }, []);

  const addExpenseHandler = async (expense) => {
    const expenseData = {
      title: expense.title,
      amount: parseFloat(expense.amount),
      date: new Date(expense.date),
    };

    try {
      const response = await axios.post('expense-tracker-backend-production-ebbe.up.railway.app/api/expenses', expenseData);
      setExpenses((prevExpenses) => [response.data, ...prevExpenses]);
      toast.success('Expense saved successfully!'); // Show success notification
    } catch (error) {
      console.error('Error adding expense:', error.response ? error.response.data : error.message);
      toast.error('Failed to save expense. Please try again.'); // Show error notification
    }
  };

  return (
    <div>
      <h2 className="header"><FaGoogleWallet /> Expense Tracker</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
      />
    </div>
  );
}

export default App;
