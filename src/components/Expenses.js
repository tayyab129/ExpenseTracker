import { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './NewExpense/ExpenseFilter';
import ExpensesChart from './NewExpense/ExpensesChart';

function Expenses({ expenses }) {


    const [filteredYear, setFilteredYear] = useState('2024');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    // Filter expenses based on the selected year
    const filteredExpenses = expenses.filter(expense => {
        const expenseDate = new Date(expense.date); // Convert to Date object
        return expenseDate.getFullYear().toString() === filteredYear;
    });


    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
}

export default Expenses;
