import './ExpenseForm.css';
const ExpenseForm = () => {
    // get the current value with every keystroke
    const titleChangeHandler = () => {
        console.log('title change');
    }

    return (
        <form>
            <div className="new-exprense__controls"> 
                <div className="new-exprense__control">
                    <label> Title </label>
                    <input type="text" onChange={titleChangeHandler}></input>
                </div>
                <div className="new-exprense__control">
                    <label> Amount </label>
                    <input type="number"></input>
                </div>
                <div className="new-exprense__control">
                    <label> Amount </label>
                    <input type="date"></input>
                </div>
            </div>
            <div>
                <button>Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;