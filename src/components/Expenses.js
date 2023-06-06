import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    return (
        <div className="expenses">
            {props.expenses.map(expense => (
                <ExpenseItem
                    key={expense.id} 
                    title={expense.title} 
                    date={expense.date}
                    amount={expense.amount} />
            ))}
        </div>
    );
}

export default Expenses;