import './ExpenseItem.css';
import React, {useState} from 'react';
import CalendarItem from './CalenderItem';
import Card from './Card';
function ExpenseItem(props){
    const price = props.amount;
    const [title, setTitle] = useState(props.title);
    const changeName = () => {
        setTitle('Yeah');
    };
    return (
        <Card className="expense-item">
            <div>
                <CalendarItem date = {props.date}></CalendarItem>
            </div>
            <div className="expense-item__description">
               <h2>{title}</h2> 
               <div className="expense-item__price">${price}</div>
            </div>
            <button onClick={changeName}>Press if my girlfriend is chubby </button>
        </Card>
    )
}

export default ExpenseItem;