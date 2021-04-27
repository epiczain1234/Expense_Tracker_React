import './ExpenseItem.css'
function ExpenseItem(){
    return (
        <div className="expense-item">
            <div>3/28/2021</div>
            <div className="expense-item__description">
               <h2 className="">Car Insurance</h2> 
               <div className="expense-item__price">$500</div>
            </div>
        </div>
    )
}

export default ExpenseItem;