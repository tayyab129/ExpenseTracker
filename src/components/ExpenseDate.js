import './ExpenseDate.css';

function ExpenseDate({ date }) {
    const expenseDate = new Date(date); // Convert to Date object
    const month = expenseDate.toLocaleString('en-PK', { month: 'long' });
    const day = expenseDate.toLocaleString('en-PK', { day: '2-digit' });
    const year = expenseDate.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    );
}

export default ExpenseDate;
