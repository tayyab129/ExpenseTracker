import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = ({ items }) => {
    if (items.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
    }

    // Log IDs for debugging
    // items.forEach(expense => console.log(expense.id));

    return (
        <ul className='expenses-list'>
            {items.map((expense) => (
                <ExpenseItem
                    key={expense.id || `${expense.title}-${expense.date}`}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </ul>
    );
};

export default ExpensesList;
