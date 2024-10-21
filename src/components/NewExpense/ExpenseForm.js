import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpenseData }) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [fadeState, setFadeState] = useState('');
    const [error, setError] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        // Validation logic
        if (!enteredTitle || !enteredAmount || !enteredDate) {
            setError('Please fill in all fields.');
            return;
        }

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount, // To Ensure it's a number
            date: new Date(enteredDate),
        };

        onSaveExpenseData(expenseData);
        resetForm();
        setError(''); // Clear error on successful submission
    };

    const resetForm = () => {
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setFadeState('fade-exit-active');
        setTimeout(() => {
            setIsFormVisible(false);
        }, 300); // Match with exit transition duration
    };

    const toggleFormHandler = () => {
        if (isFormVisible) {
            setFadeState('fade-exit');
            setTimeout(() => {
                setFadeState('fade-exit-active');
                setTimeout(() => setIsFormVisible(false), 300); // Wait for fade-out to complete
            }, 0);
        } else {
            setIsFormVisible(true);
            setFadeState('fade-enter');
            setTimeout(() => setFadeState('fade-enter-active'), 0);
        }
    };

    return (
        <div>
            <div className='new-expense__actions' style={{ display: 'flex', justifyContent: 'center' }}>
                {!isFormVisible && (
                    <button onClick={toggleFormHandler}>Add Expense</button>
                )}
            </div>
            {isFormVisible && (
                <div className={`form-wrapper ${fadeState}`}>
                    <form onSubmit={submitHandler}>
                        <div className='new-expense__controls'>
                            <div className='new-expense__control'>
                                <label>Title</label>
                                <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                            </div>
                            <div className='new-expense__control'>
                                <label>Amount</label>
                                <input
                                    type='number'
                                    min='0.01'
                                    step='0.01'
                                    value={enteredAmount}
                                    onChange={amountChangeHandler}
                                />
                            </div>
                            <div className='new-expense__control'>
                                <label>Date</label>
                                <input
                                    type='date'
                                    min='2021-01-01'
                                    max='2024-12-31'
                                    value={enteredDate}
                                    onChange={dateChangeHandler}
                                />
                            </div>
                        </div>
                        <div className='new-expense__actions'>
                            <button type='button' onClick={resetForm}>Cancel</button>
                            <button type='submit'>Add Expense</button>
                        </div>
                        {error && <p className="error-message" style={{ color: '#a83256' }}>{error}</p>}
                    </form>
                </div>
            )}
        </div>
    );
};

export default ExpenseForm;
