import './ExpenseItem.css'
import CalendarItem from './CalenderItem'
import Card from './Card';
function ExpenseItem(props){
    const title = props.title;
    const price = props.amount;
    return (
        <Card className="expense-item">
            <div>
                <CalendarItem date = {props.date}></CalendarItem>
            </div>
            <div className="expense-item__description">
               <h2>{title}</h2> 
               <div className="expense-item__price">${price}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;