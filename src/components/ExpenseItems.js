import './ExpenseItems.css';
function ExpenseItems() {
  return (
    <div className="expense-item">
      <div>date</div>
      <div className="expense-item__description">
        <h3>name</h3>
        <div className="expense-item__price">money</div>
      </div>
    </div> 
  );
}

export default ExpenseItems;
