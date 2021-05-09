import './ExpenseForm.css';
import React, {useState} from 'react';
const ExpenseForm = () => {
    // intial state can be represented by an empty string
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // get the current value with every keystroke
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    // get triggered when amount is chaned on page
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    return (
        <form>
            <div className="new-expense__controls"> 
                <div className="new-expense__control">
                    <label> Title </label>
                    <input type="text" onChange={titleChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label> Amount </label>
                    <input type="number" onChange={amountChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label> Date</label>
                    <input type="date" onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div>
                <button>Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;