import React, { useState } from 'react';
import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpensesList';
import ExpnesesChart from './ExpensesChart';


const Expenses = (props) => {
   const [filteredYear, setFilteredYear] = useState('2020');

   const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear)
   }

   const filteredExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;
   })



   return (
      <li>
         <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpnesesChart expenses={filteredExpenses} />
            <ExpenseList items={filteredExpenses} />
         </Card>
      </li>
   )
}

export default Expenses;