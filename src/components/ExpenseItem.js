 import "./ExpenseItem.css";
 
 function ExpenseItem() {
    return  (
      <div className="expense-item">
         <div>March 28 2023</div>
         <div className="expense-item__description">
            <h2>Health Insurance</h2>
            <div className="expense-item__price">$ 180.000</div>
         </div>
      </div>
    );
 }

 export default ExpenseItem; 