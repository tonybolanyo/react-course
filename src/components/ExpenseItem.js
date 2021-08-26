import "./ExpenseItem.css"

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>28 marzo 2021</div>
      <div className="expense-item__description">
        <h2>Samsung Tablet</h2>
        <div className="expense-item__price">203.25€</div>
      </div>
    </div>
  )
}

export default ExpenseItem