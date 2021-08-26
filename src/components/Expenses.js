import './Expenses.css'
import ExpenseItem from './ExpenseItem'

function Expenses(props) {
  const items = props.items.map(item => <ExpenseItem
    date={item.date}
    title={item.title}
    amount={item.amount} />)

  return (
    <div className="expenses">
      {items}
    </div>
  )
}

export default Expenses