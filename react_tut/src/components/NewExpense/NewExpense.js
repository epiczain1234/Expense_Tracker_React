import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
    const appExpenseDataFunc = props.onAddNewExpense;
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random.toString()
        };
        appExpenseDataFunc(expenseData);
    };
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
        </div>
    )
};

export default NewExpense;