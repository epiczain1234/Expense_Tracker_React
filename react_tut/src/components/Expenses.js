import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from './Card'

function Expenses(props){
    const expenses = props.expenses;
    return (
        <div className='expenses'>
          <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date = {expenses[0].date}> </ExpenseItem>
          <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date = {expenses[1].date}> </ExpenseItem>
          <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date = {expenses[2].date}> </ExpenseItem>
          <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date = {expenses[3].date}> </ExpenseItem>
        </div>
    )

}

export default Expenses;
