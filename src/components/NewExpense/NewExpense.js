import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = ({ onAddExpense }) => {
    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        // console.log(expenseData);
        onAddExpense(expenseData);
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense;