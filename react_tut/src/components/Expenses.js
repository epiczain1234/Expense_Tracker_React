import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from './Card'
import ExpensesFilter from './ExpensesFilter'
import React, {useState} from 'react'

function Expenses(props){
    const expenses = props.expenses;
    const [filterYear, setFilteredYear] = useState('2020'); 
    const forwardDate = (date) => {
      setFilteredYear('date');
    }
    return (
        <div>
          <Card className='expenses'> 
          <ExpensesFilter 
          selectedYear={filterYear} 
          onSelectFilter={setFilteredYear}/>
          {props.expenses.map((expense) =>
           (
           <ExpenseItem 
           key = {expense.id}
           title={expense.title} 
            amount={expense.amount} 
            date={expense.date}
            /> 
            ))}

          </Card>
        </div>
    )

}

export default Expenses;
