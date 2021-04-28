import './ExpenseItem.css'

function ExpenseItem(props){
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day:'2-digit'});
    const year = props.date.getFullYear();
    const title = props.title;
    const price = props.amount;
    return (
        <div className="expense-item">
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            <div className="expense-item__description">
               <h2>{title}</h2> 
               <div className="expense-item__price">${price}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;