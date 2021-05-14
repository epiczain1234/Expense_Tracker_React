import './ExpenseForm.css';
import React, {useState} from 'react';
const ExpenseForm = (props) => {
    // intial state can be represented by an empty string
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const saveExpenseDataHandler = props.onSaveExpenseData;
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData ={
            title: enteredTitle,
            amount: enteredAmount,
            date : new Date(enteredDate)
        };
        saveExpenseDataHandler(expenseData);
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
    };
    // const [userInput, setUserInput] = useState({
    //     enteredTitle : '',
    //     enteredAmount: '',
    //     enteredDate:''
    // });

    // get the current value with every keystroke
    const titleChangeHandler = (event) => {
        // this react below simply schedules an update while the new function  below immedialtley executes the update, which is essential sinnce schedfuling an update can lead 
        // to a stale state being used to create the new state
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })
        setEnteredTitle(event.target.value);
    }
    // get triggered when amount is chaned on page
    const amountChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput, // copies over previous data to the new state, overrides previous entered date value
        //     enteredDate: event.target.value
        // })
        setEnteredDate(event.target.value);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls"> 
                <div className="new-expense__control">
                    <label> Title </label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label> Amount </label>
                    <input type="number" value={enteredAmount} onChange={amountChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label> Date</label>
                    <input type="date" value={enteredDate} onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;